/**
 * Crystal Wars - World Manager
 * Manages dynamically loaded terrain chunks and blocks.
 */

import * as THREE from 'three';
import { CHUNK_Y, CHUNK_X } from '../config';
import { ChestData } from '../types';
import { Chunk } from './chunk';
import { generateTerrainChunk } from './terrain';
import { generateIslandsChunk } from './islandsTerrain';
import { registerChests, resetChests } from './chest';

export type StageType = 'mainland' | 'islands';

const RENDER_DISTANCE = 6; // Chunks

export class World {
  public chunks: Map<string, Chunk> = new Map();
  public chests: ChestData[] = [];
  public crystalLocations: {x: number, z: number}[] = [];

  private scene: THREE.Scene;
  private seed: number;
  private lastChunkX: number = -999;
  private lastChunkZ: number = -999;
  
  public stageType: StageType = 'mainland';

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.seed = Math.floor(Math.random() * 999999);
  }

  /**
   * General initialization for the new world
   */
  generate(): void {
    resetChests();
    this.chunks.clear();
    this.chests = [];
    this.crystalLocations = [];

    // Pre-calculate 8 distant locations for crystals
    for (let i = 0; i < 8; i++) {
      const dist = 80 + Math.random() * 40; // 80 to 120 blocks away
      const angle = (i / 8) * Math.PI * 2;
      this.crystalLocations.push({
        x: Math.floor(Math.cos(angle) * dist),
        z: Math.floor(Math.sin(angle) * dist)
      });
    }
  }

  /**
   * Dynamically load and unload chunks around the player
   */
  updateChunks(playerX: number, playerZ: number): void {
    const pChunkX = Math.floor(playerX / CHUNK_X) * CHUNK_X;
    const pChunkZ = Math.floor(playerZ / CHUNK_X) * CHUNK_X;

    // Only update if player moved to a new chunk
    if (this.lastChunkX === pChunkX && this.lastChunkZ === pChunkZ) {
      return;
    }
    this.lastChunkX = pChunkX;
    this.lastChunkZ = pChunkZ;

    const visibleKeys = new Set<string>();
    let chestsAdded: ChestData[] = [];

    // Load chunks in radius
    for (let cx = -RENDER_DISTANCE; cx <= RENDER_DISTANCE; cx++) {
      for (let cz = -RENDER_DISTANCE; cz <= RENDER_DISTANCE; cz++) {
        // Simple circular render distance check
        if (cx * cx + cz * cz > RENDER_DISTANCE * RENDER_DISTANCE) continue;

        const chunkX = pChunkX + cx * CHUNK_X;
        const chunkZ = pChunkZ + cz * CHUNK_X;
        const key = `${chunkX},${chunkZ}`;
        visibleKeys.add(key);

        if (!this.chunks.has(key)) {
          let result;
          if (this.stageType === 'mainland') {
            result = generateTerrainChunk(chunkX, chunkZ, this.seed);
          } else {
            result = generateIslandsChunk(chunkX, chunkZ, this.seed, this.crystalLocations);
          }
          
          this.chunks.set(key, result.chunk);
          if (result.chests.length > 0) {
            chestsAdded = chestsAdded.concat(result.chests);
          }
        }
      }
    }

    if (chestsAdded.length > 0) {
      registerChests(chestsAdded);
      this.chests = this.chests.concat(chestsAdded);
    }

    // Unload chunks out of range
    for (const [key, chunk] of this.chunks.entries()) {
      if (!visibleKeys.has(key)) {
        if (chunk.mesh) {
          this.scene.remove(chunk.mesh);
          chunk.mesh.geometry.dispose();
          if (Array.isArray(chunk.mesh.material)) {
            chunk.mesh.material.forEach(m => m.dispose());
          } else {
            (chunk.mesh.material as THREE.Material).dispose();
          }
        }
        this.chunks.delete(key);
      }
    }

    // Mesh building for dirty chunks
    this.rebuildAllMeshes(); // Only the visible/loaded ones
  }

  getBlock(wx: number, wy: number, wz: number): string {
    if (wy < 0 || wy >= CHUNK_Y) return 'air';
    
    // Chunk size is 9 (using CHUNK_X since it's 9x9)
    const chunkX = Math.floor(wx / 9) * 9;
    const chunkZ = Math.floor(wz / 9) * 9;
    const key = `${chunkX},${chunkZ}`;
    const chunk = this.chunks.get(key);
    if (!chunk) return 'air';

    const lx = ((wx % 9) + 9) % 9;
    const lz = ((wz % 9) + 9) % 9;
    return chunk.getBlock(Math.floor(lx), Math.floor(wy), Math.floor(lz));
  }

  setBlock(wx: number, wy: number, wz: number, blockId: string): void {
    if (wy < 0 || wy >= CHUNK_Y) return;
    
    const chunkX = Math.floor(wx / 9) * 9;
    const chunkZ = Math.floor(wz / 9) * 9;
    const key = `${chunkX},${chunkZ}`;
    let chunk = this.chunks.get(key);
    
    if (!chunk) {
      // Create new chunk if we try to place a block far away
      let result;
      if (this.stageType === 'mainland') {
        result = generateTerrainChunk(chunkX, chunkZ, this.seed);
      } else {
        result = generateIslandsChunk(chunkX, chunkZ, this.seed, this.crystalLocations);
      }
      
      chunk = result.chunk;
      this.chunks.set(key, chunk);
      if (result.chests.length > 0) {
        registerChests(result.chests);
        this.chests = this.chests.concat(result.chests);
      }
    }

    const lx = ((wx % 9) + 9) % 9;
    const lz = ((wz % 9) + 9) % 9;
    chunk.setBlock(Math.floor(lx), Math.floor(wy), Math.floor(lz), blockId);
  }

  rebuildDirtyMeshes(): void {
    for (const chunk of this.chunks.values()) {
      if (chunk.dirty) {
        chunk.buildMesh(this.scene, (wx, wy, wz) => this.getBlock(wx, wy, wz));
      }
    }
  }

  rebuildAllMeshes(): void {
    for (const chunk of this.chunks.values()) {
      chunk.dirty = true;
    }
    this.rebuildDirtyMeshes();
  }

  isSolid(wx: number, wy: number, wz: number): boolean {
    const block = this.getBlock(Math.floor(wx), Math.floor(wy), Math.floor(wz));
    return block !== 'air' && block !== 'water'; // Note: if we ever add water blocks
  }

  getSurfaceY(wx: number, wz: number): number {
    for (let y = CHUNK_Y - 1; y >= 0; y--) {
      if (this.isSolid(wx, y, wz)) {
        return y + 1;
      }
    }
    return 0;
  }

  dispose(): void {
    for (const chunk of this.chunks.values()) {
      if (chunk.mesh) {
        this.scene.remove(chunk.mesh);
        chunk.mesh.geometry.dispose();
        if (Array.isArray(chunk.mesh.material)) {
          chunk.mesh.material.forEach(m => m.dispose());
        } else {
          (chunk.mesh.material as THREE.Material).dispose();
        }
      }
    }
    this.chunks.clear();
  }
}
