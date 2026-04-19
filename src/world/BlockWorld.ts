import * as THREE from 'three';
import {
  BLOCK_DEFINITIONS,
  PLAYER_CONFIG,
  RESOURCE_TIMERS,
  WORLD_CONFIG
} from '../config';
import type {
  BlockData,
  BlockType,
  InteractionPrompt,
  MultiplayerBlockOverride,
  MultiplayerJumpPadState
} from '../types';

interface IslandDescriptor {
  id: 'north' | 'east' | 'south' | 'west' | 'center';
  kind: 'outer' | 'center';
  center: THREE.Vector3;
  sizeX: number;
  sizeZ: number;
}

interface CrystalEntity {
  id: string;
  islandId: string;
  hp: number;
  root: THREE.Group;
  core: THREE.Mesh;
}

interface ResourceNode {
  id: string;
  type: 'generator' | 'machine';
  root: THREE.Group;
  orbs: THREE.Mesh[];
  resources: {
    copper: number;
    gold: number;
    diamond: number;
  };
  timers: {
    copper: number;
    gold: number;
    diamond: number;
  };
}

interface MerchantEntity {
  id: string;
  root: THREE.Group;
}

interface ChestEntity {
  id: string;
  root: THREE.Group;
  opened: boolean;
  loot: {
    emerald: number;
    gold: number;
    arrows: number;
  };
}

interface JumpPadEntity {
  id: string;
  root: THREE.Group;
  baseY: number;
  cooldown: number;
}

export interface BlockRaycastHit {
  key: string;
  block: BlockData;
  point: THREE.Vector3;
  normal: THREE.Vector3;
  distance: number;
}

export interface CrystalRaycastHit {
  id: string;
  distance: number;
}

export interface CrystalTarget {
  id: string;
}

const BLOCK_KEY = (x: number, y: number, z: number): string => `${x},${y},${z}`;
const SURFACE_KEY = (x: number, z: number): string => `${x},${z}`;
const PLAYER_SIZE = new THREE.Vector3(
  PLAYER_CONFIG.radius,
  PLAYER_CONFIG.height * 0.5,
  PLAYER_CONFIG.radius
);

function createRng(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 0xffffffff;
  };
}

function toBlockCoord(value: number): number {
  return Math.floor(value + 0.5);
}

export class BlockWorld {
  private readonly blockGroup = new THREE.Group();
  private readonly propGroup = new THREE.Group();
  private readonly interactableGroup = new THREE.Group();
  private readonly crystalGroup = new THREE.Group();
  private readonly water = new THREE.Mesh();
  private readonly blocks = new Map<string, BlockData>();
  private readonly blockMaterials = new Map<BlockType, THREE.MeshStandardMaterial>();
  private readonly blockMeshes = new Map<BlockType, THREE.InstancedMesh>();
  private readonly surfaceHeights = new Map<string, number>();
  private readonly crystals: CrystalEntity[] = [];
  private readonly generators: ResourceNode[] = [];
  private readonly chests: ChestEntity[] = [];
  private readonly jumpPads: JumpPadEntity[] = [];
  private merchant: MerchantEntity | null = null;
  private machine: ResourceNode | null = null;
  private spawnPoint = new THREE.Vector3(0, 8, 0);
  private blocksDirty = false;
  private readonly sharedBoxGeometry = new THREE.BoxGeometry(1, 1, 1);
  private readonly tempVector = new THREE.Vector3();

  constructor(private readonly scene: THREE.Scene) {
    this.scene.add(this.blockGroup);
    this.scene.add(this.propGroup);
    this.scene.add(this.interactableGroup);
    this.scene.add(this.crystalGroup);

    const waterGeometry = new THREE.PlaneGeometry(220, 220, 1, 1);
    const waterMaterial = new THREE.MeshStandardMaterial({
      color: 0x23355e,
      transparent: true,
      opacity: 0.92,
      roughness: 0.3,
      metalness: 0.08
    });
    this.water.geometry = waterGeometry;
    this.water.material = waterMaterial;
    this.water.rotation.x = -Math.PI / 2;
    this.water.position.y = WORLD_CONFIG.oceanY;
    this.scene.add(this.water);

    for (const [type, definition] of Object.entries(BLOCK_DEFINITIONS) as [
      BlockType,
      (typeof BLOCK_DEFINITIONS)[BlockType]
    ][]) {
      this.blockMaterials.set(
        type,
        new THREE.MeshStandardMaterial({
          color: definition.color,
          flatShading: true,
          roughness: 0.95,
          metalness: type.includes('Ore') ? 0.12 : 0.02
        })
      );
    }
  }

  generate(seed = Math.floor(Math.random() * 1_000_000)): void {
    this.clearWorld();

    const islands: IslandDescriptor[] = [
      {
        id: 'center',
        kind: 'center',
        center: new THREE.Vector3(
          WORLD_CONFIG.positions.center.x,
          0,
          WORLD_CONFIG.positions.center.z
        ),
        sizeX: WORLD_CONFIG.centerIslandSize.x,
        sizeZ: WORLD_CONFIG.centerIslandSize.z
      },
      {
        id: 'north',
        kind: 'outer',
        center: new THREE.Vector3(
          WORLD_CONFIG.positions.north.x,
          0,
          WORLD_CONFIG.positions.north.z
        ),
        sizeX: WORLD_CONFIG.outerIslandSize.x,
        sizeZ: WORLD_CONFIG.outerIslandSize.z
      },
      {
        id: 'east',
        kind: 'outer',
        center: new THREE.Vector3(
          WORLD_CONFIG.positions.east.x,
          0,
          WORLD_CONFIG.positions.east.z
        ),
        sizeX: WORLD_CONFIG.outerIslandSize.x,
        sizeZ: WORLD_CONFIG.outerIslandSize.z
      },
      {
        id: 'south',
        kind: 'outer',
        center: new THREE.Vector3(
          WORLD_CONFIG.positions.south.x,
          0,
          WORLD_CONFIG.positions.south.z
        ),
        sizeX: WORLD_CONFIG.outerIslandSize.x,
        sizeZ: WORLD_CONFIG.outerIslandSize.z
      },
      {
        id: 'west',
        kind: 'outer',
        center: new THREE.Vector3(
          WORLD_CONFIG.positions.west.x,
          0,
          WORLD_CONFIG.positions.west.z
        ),
        sizeX: WORLD_CONFIG.outerIslandSize.x,
        sizeZ: WORLD_CONFIG.outerIslandSize.z
      }
    ];

    islands.forEach((island, index) => {
      this.generateIsland(island, seed + index * 131);
    });

    this.generateBridge('north');
    this.generateBridge('east');
    this.generateBridge('south');
    this.generateBridge('west');

    this.placeMerchant();
    this.placeMachine();
    this.placeOuterIslandObjects();
    this.placeTrees();
    this.placeChests(seed + 991);

    this.rebuildBlockMeshes();
    this.spawnPoint = new THREE.Vector3(
      0,
      this.getSurfaceHeight(0, 1) + PLAYER_CONFIG.eyeHeight + 1.1,
      1
    );
  }

  update(delta: number, gameplayActive: boolean): void {
    if (this.blocksDirty) {
      this.rebuildBlockMeshes();
      this.blocksDirty = false;
    }

    const time = performance.now() * 0.001;
    for (const crystal of this.crystals) {
      crystal.root.rotation.y += delta * 0.8;
      const scale = 1 + Math.sin(time * 3 + crystal.root.position.x) * 0.04;
      crystal.core.scale.setScalar(scale);
    }

    for (const node of [...this.generators, ...(this.machine ? [this.machine] : [])]) {
      node.root.rotation.y += delta * 0.4;
      if (gameplayActive) {
        this.tickNode(node, delta);
      }
      this.updateNodeVisuals(node, time);
    }

    for (const pad of this.jumpPads) {
      pad.cooldown = Math.max(0, pad.cooldown - delta);
      pad.root.position.y = pad.baseY + Math.sin(time * 5 + pad.root.position.x) * 0.05;
    }
  }

  getSpawnPoint(): THREE.Vector3 {
    return this.spawnPoint.clone();
  }

  intersectsAabb(min: THREE.Vector3, max: THREE.Vector3): boolean {
    const minX = toBlockCoord(min.x);
    const maxX = toBlockCoord(max.x);
    const minY = toBlockCoord(min.y);
    const maxY = toBlockCoord(max.y);
    const minZ = toBlockCoord(min.z);
    const maxZ = toBlockCoord(max.z);

    for (let x = minX; x <= maxX; x += 1) {
      for (let y = minY; y <= maxY; y += 1) {
        for (let z = minZ; z <= maxZ; z += 1) {
          const block = this.blocks.get(BLOCK_KEY(x, y, z));
          if (block && BLOCK_DEFINITIONS[block.type].solid) {
            return true;
          }
        }
      }
    }
    return false;
  }

  pointInsideSolid(position: THREE.Vector3): boolean {
    const x = toBlockCoord(position.x);
    const y = toBlockCoord(position.y);
    const z = toBlockCoord(position.z);
    return this.blocks.has(BLOCK_KEY(x, y, z));
  }

  canPlaceAt(x: number, y: number, z: number): boolean {
    if (this.blocks.has(BLOCK_KEY(x, y, z))) {
      return false;
    }

    const blockCenter = new THREE.Vector3(x, y, z);
    const min = blockCenter.clone().sub(PLAYER_SIZE);
    const max = blockCenter.clone().add(PLAYER_SIZE);
    return !this.intersectsAabb(min, max);
  }

  placeBlock(x: number, y: number, z: number, type: BlockType): boolean {
    const key = BLOCK_KEY(x, y, z);
    if (this.blocks.has(key)) {
      return false;
    }
    this.blocks.set(key, {
      type,
      x,
      y,
      z,
      hp: BLOCK_DEFINITIONS[type].hp
    });
    this.blocksDirty = true;
    return true;
  }

  placeJumpPad(x: number, y: number, z: number): boolean {
    if (this.jumpPads.some((pad) => pad.root.position.distanceToSquared(
      new THREE.Vector3(x, y, z)
    ) < 0.1)) {
      return false;
    }

    const root = new THREE.Group();
    const padBase = new THREE.Mesh(
      new THREE.CylinderGeometry(0.65, 0.8, 0.2, 18),
      new THREE.MeshStandardMaterial({
        color: 0xff8c42,
        metalness: 0.18,
        roughness: 0.45
      })
    );
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.45, 0.08, 8, 16),
      new THREE.MeshStandardMaterial({
        color: 0xfff2b3,
        emissive: 0xffa33f,
        emissiveIntensity: 0.35
      })
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.18;
    root.add(padBase, ring);
    root.position.set(x, y, z);
    this.interactableGroup.add(root);
    this.jumpPads.push({
      id: `jump-pad-${this.jumpPads.length + 1}`,
      root,
      baseY: y,
      cooldown: 0
    });
    return true;
  }

  checkJumpPad(position: THREE.Vector3): boolean {
    for (const pad of this.jumpPads) {
      const horizontalDistance = Math.hypot(
        position.x - pad.root.position.x,
        position.z - pad.root.position.z
      );
      const feetY = position.y - PLAYER_CONFIG.eyeHeight;
      const onPad =
        horizontalDistance < 0.85 &&
        feetY >= pad.root.position.y - 0.2 &&
        feetY <= pad.root.position.y + 1.1;
      if (onPad && pad.cooldown <= 0) {
        pad.cooldown = 0.55;
        return true;
      }
    }
    return false;
  }

  raycastBlock(
    raycaster: THREE.Raycaster,
    maxDistance: number
  ): BlockRaycastHit | null {
    const meshes = [...this.blockMeshes.values()];
    const intersections = raycaster
      .intersectObjects(meshes, false)
      .filter((hit) => hit.distance <= maxDistance);

    const firstHit = intersections[0];
    if (!firstHit || firstHit.instanceId === undefined) {
      return null;
    }

    const keys = firstHit.object.userData.instanceKeys as string[] | undefined;
    if (!keys) {
      return null;
    }

    const key = keys[firstHit.instanceId];
    const block = this.blocks.get(key);
    if (!block) {
      return null;
    }

    return {
      key,
      block,
      point: firstHit.point.clone(),
      normal: firstHit.face?.normal.clone() ?? new THREE.Vector3(0, 1, 0),
      distance: firstHit.distance
    };
  }

  raycastCrystal(
    raycaster: THREE.Raycaster,
    maxDistance: number
  ): CrystalRaycastHit | null {
    const intersections = raycaster
      .intersectObjects(
        this.crystals.map((crystal) => crystal.core),
        false
      )
      .filter((hit) => hit.distance <= maxDistance);

    const firstHit = intersections[0];
    if (!firstHit) {
      return null;
    }

    const id = (firstHit.object.userData.crystalId as string | undefined) ?? '';
    if (!id) {
      return null;
    }

    return {
      id,
      distance: firstHit.distance
    };
  }

  getCrystalNear(position: THREE.Vector3, radius: number): CrystalTarget | null {
    let closest: CrystalEntity | null = null;
    let closestDistance = Infinity;
    for (const crystal of this.crystals) {
      const distance = crystal.root.position.distanceTo(position);
      if (distance <= radius && distance < closestDistance) {
        closest = crystal;
        closestDistance = distance;
      }
    }
    return closest ? { id: closest.id } : null;
  }

  damageCrystal(
    id: string,
    amount: number
  ): { destroyed: boolean; hp: number } | null {
    const crystal = this.crystals.find((entry) => entry.id === id);
    if (!crystal) {
      return null;
    }

    crystal.hp = Math.max(0, crystal.hp - amount);
    if (crystal.hp === 0) {
      this.removeCrystalEntity(crystal);
      return { destroyed: true, hp: 0 };
    }

    return { destroyed: false, hp: crystal.hp };
  }

  syncCrystalState(id: string, hp: number): boolean {
    const crystal = this.crystals.find((entry) => entry.id === id);
    if (!crystal) {
      return false;
    }

    crystal.hp = Math.max(0, hp);
    if (crystal.hp === 0) {
      this.removeCrystalEntity(crystal);
    }
    return true;
  }

  applyCrystalSnapshot(
    crystalHp: Record<string, number>,
    destroyedCrystals: string[]
  ): void {
    const destroyedSet = new Set(destroyedCrystals);
    for (let index = 1; index <= WORLD_CONFIG.crystalsPerGame; index += 1) {
      const id = `crystal-${index}`;
      const hp = destroyedSet.has(id)
        ? 0
        : crystalHp[id] ?? WORLD_CONFIG.crystalHp;
      this.syncCrystalState(id, hp);
    }
  }

  damageBlock(
    key: string,
    amount: number
  ): { destroyed: boolean; block: BlockData | null } {
    const block = this.blocks.get(key);
    if (!block) {
      return { destroyed: false, block: null };
    }

    block.hp -= amount;
    if (block.hp > 0) {
      return { destroyed: false, block };
    }

    this.blocks.delete(key);
    this.blocksDirty = true;
    return { destroyed: true, block };
  }

  removeBlockByKey(key: string): boolean {
    if (!this.blocks.has(key)) {
      return false;
    }
    this.blocks.delete(key);
    this.blocksDirty = true;
    return true;
  }

  applyBlockOverride(override: MultiplayerBlockOverride): boolean {
    if (override.type === null) {
      return this.removeBlockByKey(override.key);
    }

    const existing = this.blocks.get(override.key);
    if (existing && existing.type === override.type) {
      return false;
    }

    this.blocks.set(override.key, {
      type: override.type,
      x: override.x,
      y: override.y,
      z: override.z,
      hp: BLOCK_DEFINITIONS[override.type].hp
    });
    this.blocksDirty = true;
    return true;
  }

  applyMultiplayerWorldState(
    blockOverrides: MultiplayerBlockOverride[],
    jumpPads: MultiplayerJumpPadState[]
  ): void {
    for (const override of blockOverrides) {
      this.applyBlockOverride(override);
    }

    for (const jumpPad of jumpPads) {
      this.placeJumpPad(jumpPad.x, jumpPad.y, jumpPad.z);
    }
  }

  getInteractionPrompt(position: THREE.Vector3): InteractionPrompt | null {
    const candidates: InteractionPrompt[] = [];

    if (this.merchant) {
      const distance = this.merchant.root.position.distanceTo(position);
      if (distance <= PLAYER_CONFIG.interactionRange) {
        candidates.push({
          type: 'merchant',
          id: this.merchant.id,
          key: 'hud.shopPrompt',
          distance
        });
      }
    }

    for (const generator of this.generators) {
      const distance = generator.root.position.distanceTo(position);
      if (distance <= PLAYER_CONFIG.interactionRange) {
        candidates.push({
          type: 'generator',
          id: generator.id,
          key: 'hud.generatorPrompt',
          distance
        });
      }
    }

    if (this.machine) {
      const distance = this.machine.root.position.distanceTo(position);
      if (distance <= PLAYER_CONFIG.interactionRange) {
        candidates.push({
          type: 'machine',
          id: this.machine.id,
          key: 'hud.machinePrompt',
          distance
        });
      }
    }

    for (const chest of this.chests) {
      if (chest.opened) {
        continue;
      }
      const distance = chest.root.position.distanceTo(position);
      if (distance <= PLAYER_CONFIG.interactionRange) {
        candidates.push({
          type: 'chest',
          id: chest.id,
          key: 'hud.chestPrompt',
          distance
        });
      }
    }

    candidates.sort((a, b) => a.distance - b.distance);
    return candidates[0] ?? null;
  }

  collectGenerator(id: string): { copper: number; gold: number } | null {
    const node = this.generators.find((entry) => entry.id === id);
    if (!node) {
      return null;
    }
    const result = {
      copper: node.resources.copper,
      gold: node.resources.gold
    };
    node.resources.copper = 0;
    node.resources.gold = 0;
    return result;
  }

  collectMachine(id: string): { gold: number; diamond: number } | null {
    if (!this.machine || this.machine.id !== id) {
      return null;
    }
    const result = {
      gold: this.machine.resources.gold,
      diamond: this.machine.resources.diamond
    };
    this.machine.resources.gold = 0;
    this.machine.resources.diamond = 0;
    return result;
  }

  openChest(
    id: string
  ): { emerald: number; gold: number; arrows: number } | null {
    const chest = this.chests.find((entry) => entry.id === id && !entry.opened);
    if (!chest) {
      return null;
    }
    chest.opened = true;
    chest.root.visible = false;
    return { ...chest.loot };
  }

  findSafeTeleport(position: THREE.Vector3): THREE.Vector3 {
    const candidate = position.clone();
    for (let step = 0; step < 6; step += 1) {
      const eye = candidate.clone().add(new THREE.Vector3(0, PLAYER_CONFIG.eyeHeight, 0));
      const min = eye.clone().add(
        new THREE.Vector3(
          -PLAYER_CONFIG.radius,
          -PLAYER_CONFIG.eyeHeight,
          -PLAYER_CONFIG.radius
        )
      );
      const max = eye.clone().add(
        new THREE.Vector3(
          PLAYER_CONFIG.radius,
          PLAYER_CONFIG.height - PLAYER_CONFIG.eyeHeight,
          PLAYER_CONFIG.radius
        )
      );
      if (!this.intersectsAabb(min, max)) {
        return eye;
      }
      candidate.y += 1;
    }
    return position.clone().add(new THREE.Vector3(0, PLAYER_CONFIG.eyeHeight + 1, 0));
  }

  private clearWorld(): void {
    this.blocks.clear();
    this.surfaceHeights.clear();
    this.crystals.splice(0, this.crystals.length);
    this.generators.splice(0, this.generators.length);
    this.chests.splice(0, this.chests.length);
    this.jumpPads.splice(0, this.jumpPads.length);
    this.merchant = null;
    this.machine = null;
    this.blocksDirty = false;

    this.blockMeshes.forEach((mesh) => {
      this.blockGroup.remove(mesh);
    });
    this.blockMeshes.clear();

    this.propGroup.clear();
    this.interactableGroup.clear();
    this.crystalGroup.clear();
  }

  private removeCrystalEntity(crystal: CrystalEntity): void {
    this.crystalGroup.remove(crystal.root);
    const index = this.crystals.indexOf(crystal);
    if (index >= 0) {
      this.crystals.splice(index, 1);
    }
  }

  private generateIsland(island: IslandDescriptor, seed: number): void {
    const rng = createRng(seed);
    const halfX = island.sizeX / 2;
    const halfZ = island.sizeZ / 2;

    for (
      let x = Math.floor(island.center.x - halfX);
      x < Math.ceil(island.center.x + halfX);
      x += 1
    ) {
      for (
        let z = Math.floor(island.center.z - halfZ);
        z < Math.ceil(island.center.z + halfZ);
        z += 1
      ) {
        const normalizedX = Math.abs((x + 0.5 - island.center.x) / halfX);
        const normalizedZ = Math.abs((z + 0.5 - island.center.z) / halfZ);
        const edge = Math.max(normalizedX, normalizedZ);
        const radial = Math.hypot(normalizedX, normalizedZ) * 0.8;
        const falloff = 1 - Math.max(edge, radial);
        if (falloff <= 0) {
          continue;
        }

        const noise =
          Math.sin((x + seed * 0.01) * 0.65) * 0.35 +
          Math.cos((z - seed * 0.02) * 0.55) * 0.3 +
          rng() * 0.5;
        if (falloff < 0.12 && rng() < 0.42) {
          continue;
        }

        const heightBonus = island.kind === 'center' ? 1 : 0;
        const surface =
          WORLD_CONFIG.surfaceY +
          heightBonus +
          Math.max(0, Math.floor(falloff * 4 + noise));
        const depth = 10 + Math.floor(rng() * 3) + (island.kind === 'center' ? 1 : 0);
        const bottom = surface - depth;
        this.setSurfaceHeight(x, z, surface);

        for (let y = bottom; y <= surface; y += 1) {
          const depthFromSurface = surface - y;
          let type: BlockType;
          if (depthFromSurface === 0) {
            type = falloff < 0.25 ? 'sand' : 'grass';
          } else if (depthFromSurface <= 2) {
            type = falloff < 0.3 ? 'sand' : 'dirt';
          } else {
            type = this.pickUndergroundBlock(island.kind, depthFromSurface, rng);
          }
          this.setBlockData(x, y, z, type);
        }
      }
    }
  }

  private pickUndergroundBlock(
    islandKind: 'outer' | 'center',
    depthFromSurface: number,
    rng: () => number
  ): BlockType {
    if (depthFromSurface > 3 && rng() < 0.055) {
      return 'copperOre';
    }
    if (depthFromSurface > 5 && rng() < 0.03) {
      return 'goldOre';
    }
    if (depthFromSurface > 6 && rng() < 0.022) {
      return 'emeraldOre';
    }
    if (islandKind === 'center' && depthFromSurface > 7 && rng() < 0.028) {
      return 'diamondOre';
    }
    return 'stone';
  }

  private generateBridge(direction: 'north' | 'east' | 'south' | 'west'): void {
    const bridgeY = WORLD_CONFIG.surfaceY + 1;
    const halfCenter = WORLD_CONFIG.centerIslandSize.x / 2;
    const halfOuter = WORLD_CONFIG.outerIslandSize.x / 2;

    if (direction === 'north' || direction === 'south') {
      const xStart = -Math.floor(WORLD_CONFIG.bridgeWidth / 2);
      const xEnd = xStart + WORLD_CONFIG.bridgeWidth - 1;
      const islandCenter = WORLD_CONFIG.positions[direction];
      const startZ =
        direction === 'north'
          ? Math.floor(-halfCenter) - 1
          : Math.ceil(halfCenter) + 1;
      const endZ =
        direction === 'north'
          ? Math.ceil(islandCenter.z + halfOuter) - 1
          : Math.floor(islandCenter.z - halfOuter) + 1;
      const [from, to] = startZ < endZ ? [startZ, endZ] : [endZ, startZ];
      for (let z = from; z <= to; z += 1) {
        for (let x = xStart; x <= xEnd; x += 1) {
          this.setBlockData(x, bridgeY, z, 'bridge');
        }
      }
      return;
    }

    const zStart = -Math.floor(WORLD_CONFIG.bridgeWidth / 2);
    const zEnd = zStart + WORLD_CONFIG.bridgeWidth - 1;
    const islandCenter = WORLD_CONFIG.positions[direction];
    const startX =
      direction === 'west'
        ? Math.floor(-halfCenter) - 1
        : Math.ceil(halfCenter) + 1;
    const endX =
      direction === 'west'
        ? Math.ceil(islandCenter.x + halfOuter) - 1
        : Math.floor(islandCenter.x - halfOuter) + 1;
    const [from, to] = startX < endX ? [startX, endX] : [endX, startX];
    for (let x = from; x <= to; x += 1) {
      for (let z = zStart; z <= zEnd; z += 1) {
        this.setBlockData(x, bridgeY, z, 'bridge');
      }
    }
  }

  private placeMerchant(): void {
    const root = new THREE.Group();
    const body = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.45, 1.1, 4, 12),
      new THREE.MeshStandardMaterial({
        color: 0xffd6a3,
        flatShading: true,
        roughness: 0.68
      })
    );
    const hat = new THREE.Mesh(
      new THREE.ConeGeometry(0.55, 0.7, 10),
      new THREE.MeshStandardMaterial({
        color: 0x1a5f66,
        flatShading: true,
        roughness: 0.7
      })
    );
    hat.position.y = 1.3;
    root.add(body, hat);
    root.position.set(2, this.getSurfaceHeight(2, 2) + 1, 2);
    this.interactableGroup.add(root);
    this.merchant = { id: 'merchant', root };
  }

  private placeMachine(): void {
    const root = new THREE.Group();
    const base = new THREE.Mesh(
      new THREE.CylinderGeometry(0.9, 1.2, 1.1, 14),
      new THREE.MeshStandardMaterial({
        color: 0x35424d,
        flatShading: true,
        metalness: 0.35,
        roughness: 0.5
      })
    );
    const core = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.6, 0),
      new THREE.MeshStandardMaterial({
        color: 0x59e8ff,
        flatShading: true,
        emissive: 0x207fa2,
        emissiveIntensity: 0.6
      })
    );
    core.position.y = 1.1;
    root.add(base, core);
    root.position.set(-2.4, this.getSurfaceHeight(-2, -2) + 0.5, -2.6);

    const orbs = [0, 1, 2].map(() => {
      const orb = new THREE.Mesh(
        new THREE.SphereGeometry(0.18, 12, 12),
        new THREE.MeshStandardMaterial({
          color: 0xd7b549,
          flatShading: true,
          emissive: 0x8e6f14,
          emissiveIntensity: 0.45
        })
      );
      root.add(orb);
      return orb;
    });

    this.interactableGroup.add(root);
    this.machine = {
      id: 'machine',
      type: 'machine',
      root,
      orbs,
      resources: {
        copper: 0,
        gold: 1,
        diamond: 1
      },
      timers: {
        copper: 0,
        gold: 0,
        diamond: 0
      }
    };
  }

  private placeOuterIslandObjects(): void {
    const placements = [
      {
        islandId: 'north',
        generator: new THREE.Vector3(0, 0, -25),
        crystal: new THREE.Vector3(0, 0, -34)
      },
      {
        islandId: 'east',
        generator: new THREE.Vector3(25, 0, 0),
        crystal: new THREE.Vector3(34, 0, 0)
      },
      {
        islandId: 'south',
        generator: new THREE.Vector3(0, 0, 25),
        crystal: new THREE.Vector3(0, 0, 34)
      },
      {
        islandId: 'west',
        generator: new THREE.Vector3(-25, 0, 0),
        crystal: new THREE.Vector3(-34, 0, 0)
      }
    ];

    placements.forEach((placement, index) => {
      const generatorRoot = new THREE.Group();
      const nodeBody = new THREE.Mesh(
        new THREE.CylinderGeometry(0.55, 0.75, 1.1, 12),
        new THREE.MeshStandardMaterial({
          color: 0x6b4d2d,
          flatShading: true,
          roughness: 0.7
        })
      );
      const banner = new THREE.Mesh(
        new THREE.BoxGeometry(0.25, 0.9, 0.25),
        new THREE.MeshStandardMaterial({
          color: 0xefb15d,
          flatShading: true,
          emissive: 0x6f4612,
          emissiveIntensity: 0.25
        })
      );
      banner.position.y = 1;
      generatorRoot.add(nodeBody, banner);
      generatorRoot.position.copy(placement.generator);
      generatorRoot.position.y =
        this.getSurfaceHeight(placement.generator.x, placement.generator.z) + 0.5;

      const orbs = [0, 1, 2].map(() => {
        const orb = new THREE.Mesh(
          new THREE.SphereGeometry(0.16, 10, 10),
          new THREE.MeshStandardMaterial({
            color: 0xba6b3e,
            flatShading: true,
            emissive: 0x61331a,
            emissiveIntensity: 0.4
          })
        );
        generatorRoot.add(orb);
        return orb;
      });

      this.interactableGroup.add(generatorRoot);
      this.generators.push({
        id: `generator-${placement.islandId}`,
        type: 'generator',
        root: generatorRoot,
        orbs,
        resources: {
          copper: 2,
          gold: 0,
          diamond: 0
        },
        timers: {
          copper: 0,
          gold: 0,
          diamond: 0
        }
      });

      const crystalRoot = new THREE.Group();
      const pedestal = new THREE.Mesh(
        new THREE.CylinderGeometry(0.9, 1.15, 1.4, 12),
        new THREE.MeshStandardMaterial({
          color: 0x4a4f7f,
          flatShading: true,
          roughness: 0.55
        })
      );
      const crystalCore = new THREE.Mesh(
        new THREE.OctahedronGeometry(1.1, 0),
        new THREE.MeshStandardMaterial({
          color: 0xa545ff,
          flatShading: true,
          emissive: 0x582080,
          emissiveIntensity: 0.8,
          metalness: 0.1,
          roughness: 0.2
        })
      );
      crystalCore.position.y = 1.8;
      crystalCore.userData.crystalId = `crystal-${index + 1}`;
      crystalRoot.add(pedestal, crystalCore);
      crystalRoot.position.copy(placement.crystal);
      crystalRoot.position.y =
        this.getSurfaceHeight(placement.crystal.x, placement.crystal.z) + 0.7;
      this.crystalGroup.add(crystalRoot);
      this.crystals.push({
        id: `crystal-${index + 1}`,
        islandId: placement.islandId,
        hp: WORLD_CONFIG.crystalHp,
        root: crystalRoot,
        core: crystalCore
      });
    });
  }

  private placeTrees(): void {
    const treePositions = [
      [-4, -4, 1],
      [4, -3, 1.1],
      [5, 4, 0.95],
      [-3, 5, 0.9],
      [0, -34, 1],
      [5, -32, 0.95],
      [34, 0, 1],
      [32, 5, 1.1],
      [0, 34, 0.92],
      [-5, 32, 1.05],
      [-34, 0, 0.94],
      [-32, -5, 1.08]
    ] as const;

    for (const [x, z, scale] of treePositions) {
      const surface = this.getSurfaceHeight(x, z);
      if (surface <= WORLD_CONFIG.oceanY) {
        continue;
      }
      this.propGroup.add(this.createTree(x, surface + 0.5, z, scale));
    }
  }

  private createTree(
    x: number,
    y: number,
    z: number,
    scale: number
  ): THREE.Group {
    const root = new THREE.Group();
    const trunkHeight = 2.2 * scale;
    const trunk = new THREE.Mesh(
      new THREE.BoxGeometry(0.55 * scale, trunkHeight, 0.55 * scale),
      new THREE.MeshStandardMaterial({
        color: 0x5c371f,
        flatShading: true,
        roughness: 0.9
      })
    );
    trunk.position.y = trunkHeight * 0.5;

    const leafMaterial = new THREE.MeshStandardMaterial({
      color: 0x244d26,
      flatShading: true,
      roughness: 0.88
    });
    const leafA = new THREE.Mesh(
      new THREE.BoxGeometry(1.9 * scale, 0.56 * scale, 1.2 * scale),
      leafMaterial
    );
    leafA.position.set(0, trunkHeight + 0.35 * scale, 0);
    const leafB = new THREE.Mesh(
      new THREE.BoxGeometry(1.1 * scale, 0.48 * scale, 1.9 * scale),
      leafMaterial
    );
    leafB.position.set(0.12 * scale, trunkHeight + 0.6 * scale, -0.05 * scale);
    const leafC = new THREE.Mesh(
      new THREE.BoxGeometry(0.8 * scale, 0.42 * scale, 0.8 * scale),
      leafMaterial
    );
    leafC.position.set(-0.14 * scale, trunkHeight + 0.98 * scale, 0.12 * scale);

    root.add(trunk, leafA, leafB, leafC);
    root.position.set(x, y, z);
    root.rotation.y = (x * 0.13 + z * 0.09) % Math.PI;
    return root;
  }

  private placeChests(seed: number): void {
    const rng = createRng(seed);
    const plans: Array<{ center: THREE.Vector3; sizeX: number; sizeZ: number; count: number }> = [
      {
        center: new THREE.Vector3(0, 0, 0),
        sizeX: WORLD_CONFIG.centerIslandSize.x,
        sizeZ: WORLD_CONFIG.centerIslandSize.z,
        count: 1
      },
      {
        center: new THREE.Vector3(WORLD_CONFIG.positions.north.x, 0, WORLD_CONFIG.positions.north.z),
        sizeX: WORLD_CONFIG.outerIslandSize.x,
        sizeZ: WORLD_CONFIG.outerIslandSize.z,
        count: 2
      },
      {
        center: new THREE.Vector3(WORLD_CONFIG.positions.east.x, 0, WORLD_CONFIG.positions.east.z),
        sizeX: WORLD_CONFIG.outerIslandSize.x,
        sizeZ: WORLD_CONFIG.outerIslandSize.z,
        count: 2
      },
      {
        center: new THREE.Vector3(WORLD_CONFIG.positions.south.x, 0, WORLD_CONFIG.positions.south.z),
        sizeX: WORLD_CONFIG.outerIslandSize.x,
        sizeZ: WORLD_CONFIG.outerIslandSize.z,
        count: 2
      },
      {
        center: new THREE.Vector3(WORLD_CONFIG.positions.west.x, 0, WORLD_CONFIG.positions.west.z),
        sizeX: WORLD_CONFIG.outerIslandSize.x,
        sizeZ: WORLD_CONFIG.outerIslandSize.z,
        count: 2
      }
    ];

    for (const plan of plans) {
      let placed = 0;
      let attempts = 0;
      while (placed < plan.count && attempts < 80) {
        attempts += 1;
        const x =
          Math.round(plan.center.x + (rng() - 0.5) * (plan.sizeX * 0.65));
        const z =
          Math.round(plan.center.z + (rng() - 0.5) * (plan.sizeZ * 0.65));
        const surface = this.getSurfaceHeight(x, z);
        if (surface <= 0) {
          continue;
        }
        const depth =
          WORLD_CONFIG.chestDepthMin +
          Math.floor(
            rng() * (WORLD_CONFIG.chestDepthMax - WORLD_CONFIG.chestDepthMin + 1)
          );
        const y = surface - depth;
        const key = BLOCK_KEY(x, y, z);
        if (!this.blocks.has(key)) {
          continue;
        }

        this.blocks.delete(key);
        this.blocks.delete(BLOCK_KEY(x, y + 1, z));
        this.blocksDirty = true;

        const chestRoot = new THREE.Group();
        const base = new THREE.Mesh(
          new THREE.BoxGeometry(0.9, 0.6, 0.7),
          new THREE.MeshStandardMaterial({
            color: 0x8f5a2c,
            roughness: 0.8
          })
        );
        const lid = new THREE.Mesh(
          new THREE.BoxGeometry(0.95, 0.25, 0.75),
          new THREE.MeshStandardMaterial({
            color: 0xc88c54,
            roughness: 0.72
          })
        );
        lid.position.y = 0.38;
        chestRoot.add(base, lid);
        chestRoot.position.set(x, y, z);
        this.interactableGroup.add(chestRoot);
        this.chests.push({
          id: `chest-${this.chests.length + 1}`,
          root: chestRoot,
          opened: false,
          loot: {
            emerald: 4 + Math.floor(rng() * 4),
            gold: 1 + Math.floor(rng() * 3),
            arrows: 4 + Math.floor(rng() * 7)
          }
        });
        placed += 1;
      }
    }
  }

  private tickNode(node: ResourceNode, delta: number): void {
    if (node.type === 'generator') {
      node.timers.copper += delta;
      node.timers.gold += delta;
      while (node.timers.copper >= RESOURCE_TIMERS.islandCopper) {
        node.resources.copper += 1;
        node.timers.copper -= RESOURCE_TIMERS.islandCopper;
      }
      while (node.timers.gold >= RESOURCE_TIMERS.islandGold) {
        node.resources.gold += 1;
        node.timers.gold -= RESOURCE_TIMERS.islandGold;
      }
      return;
    }

    node.timers.gold += delta;
    node.timers.diamond += delta;
    while (node.timers.gold >= RESOURCE_TIMERS.middleGold) {
      node.resources.gold += 1;
      node.timers.gold -= RESOURCE_TIMERS.middleGold;
    }
    while (node.timers.diamond >= RESOURCE_TIMERS.middleDiamond) {
      node.resources.diamond += 1;
      node.timers.diamond -= RESOURCE_TIMERS.middleDiamond;
    }
  }

  private updateNodeVisuals(node: ResourceNode, time: number): void {
    const activeCount =
      node.type === 'generator'
        ? Math.min(3, node.resources.copper + node.resources.gold)
        : Math.min(3, node.resources.gold + node.resources.diamond);

    node.orbs.forEach((orb, index) => {
      orb.visible = index < activeCount;
      orb.position.set(
        Math.cos(time * 1.8 + index * 2.1) * 0.65,
        1.15 + Math.sin(time * 2.4 + index * 1.7) * 0.16,
        Math.sin(time * 1.8 + index * 2.1) * 0.65
      );
      const material = orb.material as THREE.MeshStandardMaterial;
      if (node.type === 'machine' && index === 2 && node.resources.diamond > 0) {
        material.color.setHex(0x76e7ff);
        material.emissive.setHex(0x1d6f8c);
      } else if (node.type === 'machine') {
        material.color.setHex(0xd7b549);
        material.emissive.setHex(0x8e6f14);
      } else if (index === 2 && node.resources.gold > 0) {
        material.color.setHex(0xd7b549);
        material.emissive.setHex(0x8e6f14);
      } else {
        material.color.setHex(0xba6b3e);
        material.emissive.setHex(0x61331a);
      }
    });
  }

  private setBlockData(x: number, y: number, z: number, type: BlockType): void {
    const key = BLOCK_KEY(x, y, z);
    this.blocks.set(key, {
      type,
      x,
      y,
      z,
      hp: BLOCK_DEFINITIONS[type].hp
    });
  }

  private setSurfaceHeight(x: number, z: number, y: number): void {
    this.surfaceHeights.set(SURFACE_KEY(x, z), y);
  }

  private getSurfaceHeight(x: number, z: number): number {
    return this.surfaceHeights.get(SURFACE_KEY(x, z)) ?? WORLD_CONFIG.oceanY;
  }

  private rebuildBlockMeshes(): void {
    this.blockMeshes.forEach((mesh) => {
      this.blockGroup.remove(mesh);
    });
    this.blockMeshes.clear();

    const grouped = new Map<BlockType, BlockData[]>();
    for (const block of this.blocks.values()) {
      if (!grouped.has(block.type)) {
        grouped.set(block.type, []);
      }
      grouped.get(block.type)!.push(block);
    }

    for (const [type, entries] of grouped.entries()) {
      const material = this.blockMaterials.get(type);
      if (!material || entries.length === 0) {
        continue;
      }
      const mesh = new THREE.InstancedMesh(
        this.sharedBoxGeometry,
        material,
        entries.length
      );
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      const keys: string[] = [];
      entries.forEach((block, index) => {
        this.tempVector.set(block.x, block.y, block.z);
        const matrix = new THREE.Matrix4().setPosition(this.tempVector);
        mesh.setMatrixAt(index, matrix);
        keys.push(BLOCK_KEY(block.x, block.y, block.z));
      });
      mesh.userData.instanceKeys = keys;
      mesh.castShadow = false;
      mesh.receiveShadow = true;
      this.blockMeshes.set(type, mesh);
      this.blockGroup.add(mesh);
    }
  }
}
