import { createHash, randomUUID } from 'node:crypto';

const PUBLIC_ROOM_ID = '1111';
const CRYSTAL_COUNT = 4;
const CRYSTAL_HP = 48;
const PLAYER_TIMEOUT_MS = 20000;
const PING_INTERVAL_MS = 15000;

const rooms = new Map();
let pruneTimerStarted = false;

function sanitizeRoomId(value) {
  const normalized = String(value ?? '')
    .trim()
    .replace(/[^a-zA-Z0-9_-]/g, '')
    .slice(0, 24);
  return normalized || PUBLIC_ROOM_ID;
}

function sanitizePlayerName(value) {
  const normalized = String(value ?? '')
    .trim()
    .replace(/\s+/g, ' ')
    .slice(0, 18);
  return normalized || 'Player';
}

function parseBlockKey(key) {
  const [x, y, z] = String(key)
    .split(',')
    .map((entry) => Number.parseInt(entry, 10));
  return {
    x: Number.isFinite(x) ? x : 0,
    y: Number.isFinite(y) ? y : 0,
    z: Number.isFinite(z) ? z : 0
  };
}

function createSeed(roomId) {
  return Number.parseInt(
    createHash('sha1').update(roomId).digest('hex').slice(0, 8),
    16
  );
}

function ensureRoom(roomId) {
  const normalizedId = sanitizeRoomId(roomId);
  let room = rooms.get(normalizedId);
  if (room) {
    room.lastTouched = Date.now();
    return room;
  }

  const crystalHp = new Map();
  for (let index = 1; index <= CRYSTAL_COUNT; index += 1) {
    crystalHp.set(`crystal-${index}`, CRYSTAL_HP);
  }

  room = {
    roomId: normalizedId,
    publicRoomId: PUBLIC_ROOM_ID,
    seed: createSeed(normalizedId),
    players: new Map(),
    streams: new Map(),
    destroyedCrystals: new Set(),
    crystalHp,
    blockOverrides: new Map(),
    jumpPads: new Map(),
    lastTouched: Date.now()
  };
  rooms.set(normalizedId, room);
  return room;
}

function serializeRoom(room) {
  return {
    roomId: room.roomId,
    publicRoomId: room.publicRoomId,
    seed: room.seed,
    players: [...room.players.values()].sort((a, b) => a.name.localeCompare(b.name)),
    destroyedCrystals: [...room.destroyedCrystals],
    crystalHp: Object.fromEntries(room.crystalHp),
    blockOverrides: [...room.blockOverrides.values()],
    jumpPads: [...room.jumpPads.values()]
  };
}

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(payload));
}

function sendNoContent(res) {
  res.statusCode = 204;
  res.end();
}

function sendSse(res, event, payload) {
  res.write(`event: ${event}\n`);
  res.write(`data: ${JSON.stringify(payload)}\n\n`);
}

function broadcastRoom(room) {
  const payload = serializeRoom(room);
  for (const stream of room.streams.values()) {
    sendSse(stream.response, 'room-state', payload);
  }
}

async function readJsonBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }

  if (chunks.length === 0) {
    return {};
  }

  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

function removePlayer(room, playerId) {
  if (!room.players.has(playerId)) {
    return false;
  }

  room.players.delete(playerId);
  for (const [streamId, stream] of room.streams) {
    if (stream.playerId === playerId) {
      clearInterval(stream.pingTimer);
      room.streams.delete(streamId);
    }
  }

  if (room.players.size === 0 && room.streams.size === 0) {
    rooms.delete(room.roomId);
  }
  return true;
}

function startPruneTimer() {
  if (pruneTimerStarted) {
    return;
  }
  pruneTimerStarted = true;

  setInterval(() => {
    const now = Date.now();
    for (const room of rooms.values()) {
      let changed = false;
      for (const [playerId, player] of room.players) {
        if (now - player.updatedAt > PLAYER_TIMEOUT_MS) {
          removePlayer(room, playerId);
          changed = true;
        }
      }

      if (room.players.size === 0 && room.streams.size === 0) {
        rooms.delete(room.roomId);
      } else if (changed) {
        broadcastRoom(room);
      }
    }
  }, 5000).unref?.();
}

function registerHandlers(middlewares) {
  startPruneTimer();

  middlewares.use(async (req, res, next) => {
    const requestUrl = new URL(req.url ?? '/', 'http://localhost');
    if (!requestUrl.pathname.startsWith('/api/multiplayer')) {
      next();
      return;
    }

    if (req.method === 'OPTIONS') {
      sendNoContent(res);
      return;
    }

    if (req.method === 'GET' && requestUrl.pathname === '/api/multiplayer/events') {
      const roomId = sanitizeRoomId(requestUrl.searchParams.get('roomId'));
      const playerId = String(requestUrl.searchParams.get('playerId') ?? '');
      const room = rooms.get(roomId);
      if (!room || !room.players.has(playerId)) {
        sendJson(res, 404, { error: 'room-not-found' });
        return;
      }

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache, no-transform');
      res.setHeader('Connection', 'keep-alive');
      res.setHeader('X-Accel-Buffering', 'no');
      res.flushHeaders?.();

      const streamId = randomUUID();
      const pingTimer = setInterval(() => {
        res.write('event: ping\ndata: {}\n\n');
      }, PING_INTERVAL_MS);
      room.streams.set(streamId, {
        playerId,
        response: res,
        pingTimer
      });
      sendSse(res, 'room-state', serializeRoom(room));

      req.on('close', () => {
        clearInterval(pingTimer);
        room.streams.delete(streamId);
        if (room.players.size === 0 && room.streams.size === 0) {
          rooms.delete(room.roomId);
        }
      });
      return;
    }

    if (req.method !== 'POST') {
      sendJson(res, 405, { error: 'method-not-allowed' });
      return;
    }

    let body;
    try {
      body = await readJsonBody(req);
    } catch {
      sendJson(res, 400, { error: 'invalid-json' });
      return;
    }

    if (requestUrl.pathname === '/api/multiplayer/join') {
      const room = ensureRoom(body.roomId);
      const playerId = randomUUID();
      const player = {
        id: playerId,
        name: sanitizePlayerName(body.name),
        position: { x: 0, y: 8, z: 0 },
        yaw: 0,
        health: 100,
        currentItem: 'sword',
        updatedAt: Date.now()
      };
      room.players.set(playerId, player);
      const payload = {
        playerId,
        room: serializeRoom(room)
      };
      sendJson(res, 200, payload);
      broadcastRoom(room);
      return;
    }

    const roomId = sanitizeRoomId(body.roomId);
    const playerId = String(body.playerId ?? '');
    const room = rooms.get(roomId);
    if (!room || !room.players.has(playerId)) {
      sendJson(res, 404, { error: 'player-not-found' });
      return;
    }

    room.lastTouched = Date.now();

    if (requestUrl.pathname === '/api/multiplayer/leave') {
      removePlayer(room, playerId);
      sendNoContent(res);
      if (rooms.has(room.roomId)) {
        broadcastRoom(room);
      }
      return;
    }

    if (requestUrl.pathname === '/api/multiplayer/update') {
      const player = room.players.get(playerId);
      const snapshot = body.snapshot ?? {};
      player.position = {
        x: Number(snapshot.position?.x ?? player.position.x),
        y: Number(snapshot.position?.y ?? player.position.y),
        z: Number(snapshot.position?.z ?? player.position.z)
      };
      player.yaw = Number(snapshot.yaw ?? player.yaw);
      player.health = Number(snapshot.health ?? player.health);
      player.currentItem = String(snapshot.currentItem ?? player.currentItem);
      player.updatedAt = Date.now();
      broadcastRoom(room);
      sendNoContent(res);
      return;
    }

    if (requestUrl.pathname === '/api/multiplayer/crystal-hit') {
      const crystalId = String(body.crystalId ?? '');
      const damage = Math.max(0, Number(body.damage ?? 0));
      const currentHp = room.crystalHp.get(crystalId);
      if (currentHp !== undefined && currentHp > 0) {
        const nextHp = Math.max(0, currentHp - damage);
        room.crystalHp.set(crystalId, nextHp);
        if (nextHp === 0) {
          room.destroyedCrystals.add(crystalId);
        }
      }
      const payload = { room: serializeRoom(room) };
      sendJson(res, 200, payload);
      broadcastRoom(room);
      return;
    }

    if (requestUrl.pathname === '/api/multiplayer/world-update') {
      if (body.action === 'remove-block') {
        const key = String(body.key ?? '');
        const { x, y, z } = parseBlockKey(key);
        room.blockOverrides.set(key, {
          key,
          x,
          y,
          z,
          type: null
        });
      } else if (body.action === 'place-block') {
        const x = Number(body.x ?? 0);
        const y = Number(body.y ?? 0);
        const z = Number(body.z ?? 0);
        const key = `${x},${y},${z}`;
        room.blockOverrides.set(key, {
          key,
          x,
          y,
          z,
          type: String(body.type ?? 'bridge')
        });
      } else if (body.action === 'place-jump-pad') {
        const x = Number(body.x ?? 0);
        const y = Number(body.y ?? 0);
        const z = Number(body.z ?? 0);
        room.jumpPads.set(`${x},${y},${z}`, { x, y, z });
      }

      const payload = { room: serializeRoom(room) };
      sendJson(res, 200, payload);
      broadcastRoom(room);
      return;
    }

    sendJson(res, 404, { error: 'not-found' });
  });
}

export function multiplayerRelayPlugin() {
  return {
    name: 'multiplayer-relay',
    configureServer(server) {
      registerHandlers(server.middlewares);
    },
    configurePreviewServer(server) {
      registerHandlers(server.middlewares);
    }
  };
}
