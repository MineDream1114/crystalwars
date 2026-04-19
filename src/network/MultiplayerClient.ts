import type {
  BlockType,
  HotbarItemId,
  MultiplayerJumpPadState,
  MultiplayerRoomSnapshot,
  Vec3Like
} from '../types';

interface JoinResponse {
  playerId: string;
  room: MultiplayerRoomSnapshot;
}

interface PresencePayload {
  position: Vec3Like;
  yaw: number;
  health: number;
  currentItem: HotbarItemId;
}

type RoomListener = (room: MultiplayerRoomSnapshot) => void;
type ErrorListener = (errorKey: string) => void;

export class MultiplayerClient {
  private readonly roomListeners = new Set<RoomListener>();
  private readonly errorListeners = new Set<ErrorListener>();
  private eventSource: EventSource | null = null;
  private roomId = '';
  private playerId = '';
  private closingStream = false;
  private sendingPresence = false;
  private queuedPresence: PresencePayload | null = null;

  subscribeRoom(listener: RoomListener): () => void {
    this.roomListeners.add(listener);
    return () => this.roomListeners.delete(listener);
  }

  subscribeError(listener: ErrorListener): () => void {
    this.errorListeners.add(listener);
    return () => this.errorListeners.delete(listener);
  }

  getPlayerId(): string {
    return this.playerId;
  }

  isConnected(): boolean {
    return Boolean(this.roomId && this.playerId);
  }

  async join(roomId: string, name: string): Promise<JoinResponse> {
    await this.leave();
    const response = await this.postJson<JoinResponse>('/api/multiplayer/join', {
      roomId,
      name
    });
    this.roomId = response.room.roomId;
    this.playerId = response.playerId;
    this.openStream();
    window.addEventListener('beforeunload', this.handleBeforeUnload);
    return response;
  }

  async leave(): Promise<void> {
    window.removeEventListener('beforeunload', this.handleBeforeUnload);
    this.closeStream();

    if (!this.roomId || !this.playerId) {
      this.roomId = '';
      this.playerId = '';
      return;
    }

    try {
      await this.postJson('/api/multiplayer/leave', {
        roomId: this.roomId,
        playerId: this.playerId
      });
    } catch {
      // Leaving is best-effort only.
    }

    this.roomId = '';
    this.playerId = '';
  }

  async sendPresence(snapshot: PresencePayload): Promise<void> {
    if (!this.isConnected()) {
      return;
    }

    this.queuedPresence = snapshot;
    if (this.sendingPresence) {
      return;
    }

    this.sendingPresence = true;
    while (this.queuedPresence && this.isConnected()) {
      const nextSnapshot = this.queuedPresence;
      this.queuedPresence = null;
      try {
        await this.postJson('/api/multiplayer/update', {
          roomId: this.roomId,
          playerId: this.playerId,
          snapshot: nextSnapshot
        });
      } catch {
        this.notifyError('multiplayer.errors.connectionLost');
        break;
      }
    }
    this.sendingPresence = false;
  }

  async damageCrystal(
    crystalId: string,
    damage: number
  ): Promise<MultiplayerRoomSnapshot | null> {
    if (!this.isConnected()) {
      return null;
    }

    try {
      const response = await this.postJson<{ room: MultiplayerRoomSnapshot }>(
        '/api/multiplayer/crystal-hit',
        {
          roomId: this.roomId,
          playerId: this.playerId,
          crystalId,
          damage
        }
      );
      this.notifyRoom(response.room);
      return response.room;
    } catch {
      this.notifyError('multiplayer.errors.connectionLost');
      return null;
    }
  }

  async syncBlockRemoval(key: string): Promise<void> {
    await this.sendWorldUpdate({
      action: 'remove-block',
      key
    });
  }

  async syncBlockPlacement(
    x: number,
    y: number,
    z: number,
    type: BlockType
  ): Promise<void> {
    await this.sendWorldUpdate({
      action: 'place-block',
      x,
      y,
      z,
      type
    });
  }

  async syncJumpPadPlacement(
    jumpPad: MultiplayerJumpPadState
  ): Promise<void> {
    await this.sendWorldUpdate({
      action: 'place-jump-pad',
      ...jumpPad
    });
  }

  private async sendWorldUpdate(
    payload:
      | { action: 'remove-block'; key: string }
      | { action: 'place-block'; x: number; y: number; z: number; type: BlockType }
      | ({ action: 'place-jump-pad' } & MultiplayerJumpPadState)
  ): Promise<void> {
    if (!this.isConnected()) {
      return;
    }

    try {
      const response = await this.postJson<{ room: MultiplayerRoomSnapshot }>(
        '/api/multiplayer/world-update',
        {
          roomId: this.roomId,
          playerId: this.playerId,
          ...payload
        }
      );
      this.notifyRoom(response.room);
    } catch {
      this.notifyError('multiplayer.errors.connectionLost');
    }
  }

  private openStream(): void {
    this.closeStream();

    const params = new URLSearchParams({
      roomId: this.roomId,
      playerId: this.playerId
    });
    const eventSource = new EventSource(`/api/multiplayer/events?${params.toString()}`);
    eventSource.addEventListener('room-state', (event) => {
      const message = event as MessageEvent<string>;
      const room = JSON.parse(message.data) as MultiplayerRoomSnapshot;
      this.notifyRoom(room);
    });
    eventSource.onerror = () => {
      if (this.closingStream) {
        return;
      }
      this.notifyError('multiplayer.errors.connectionLost');
    };
    this.eventSource = eventSource;
  }

  private closeStream(): void {
    if (!this.eventSource) {
      return;
    }

    this.closingStream = true;
    this.eventSource.close();
    this.eventSource = null;
    this.closingStream = false;
  }

  private handleBeforeUnload = (): void => {
    if (!this.roomId || !this.playerId) {
      return;
    }

    const payload = JSON.stringify({
      roomId: this.roomId,
      playerId: this.playerId
    });
    navigator.sendBeacon(
      '/api/multiplayer/leave',
      new Blob([payload], { type: 'application/json' })
    );
  };

  private notifyRoom(room: MultiplayerRoomSnapshot): void {
    for (const listener of this.roomListeners) {
      listener(room);
    }
  }

  private notifyError(errorKey: string): void {
    for (const listener of this.errorListeners) {
      listener(errorKey);
    }
  }

  private async postJson<T = void>(
    url: string,
    body: Record<string, unknown>
  ): Promise<T> {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error(`Request failed with ${response.status}`);
    }

    if (response.status === 204) {
      return undefined as T;
    }

    return (await response.json()) as T;
  }
}
