/**
 * Crystal Wars - Terrain Generator
 * Generates vast continuous procedural terrain, ores, and chests.
 */

import { ISLAND_SURFACE_Y, CHUNK_Y, CHEST_CHANCE, CHEST_MIN_DEPTH, SEA_LEVEL } from '../config';
import { ChestData } from '../types';
import { SeededRandom, simpleNoise2D } from '../utils/random';
import { Chunk } from './chunk';

export interface ChunkGenResult {
  chunk: Chunk;
  chests: ChestData[];
}

/**
 * Generate a single chunk of continuous terrain
 */
export function generateTerrainChunk(chunkWorldX: number, chunkWorldZ: number, seed: number): ChunkGenResult {
  // Use coordinates in the hash so each chunk is deterministic
  const rng = new SeededRandom(seed + hashString(`${chunkWorldX},${chunkWorldZ}`));
  const chunk = new Chunk(chunkWorldX, chunkWorldZ);
  const chests: ChestData[] = [];

  for (let lx = 0; lx < 9; lx++) {
    for (let lz = 0; lz < 9; lz++) {
      const worldX = chunkWorldX + lx;
      const worldZ = chunkWorldZ + lz;

      // Continents and hills: 2D Simplex Noise combination
      const macroNoise = simpleNoise2D(worldX, worldZ, 0.01) * 8;   // mountains/valleys
      const microNoise = simpleNoise2D(worldX, worldZ, 0.08) * 1.5; // bumps
      
      // Add distance-based falloff to create a massive central continent, or keep it truly infinite.
      // E.g., if we want infinite, just use noise.
      const surfaceHeight = Math.floor(
        ISLAND_SURFACE_Y + macroNoise + microNoise
      );

      for (let y = 0; y < CHUNK_Y && y <= surfaceHeight; y++) {
        let blockType: string;

        if (y === 0) {
          blockType = 'bedrock';
        } else if (y === surfaceHeight) {
          if (y <= SEA_LEVEL + 1) {
            blockType = 'sand';
          } else {
            blockType = 'grass';
          }
        } else if (y >= surfaceHeight - 2) {
          if (y <= SEA_LEVEL) {
            blockType = 'sand';
          } else {
            blockType = 'dirt';
          }
        } else {
          // Underground: stone + ores
          blockType = 'stone';
          const oreRoll = rng.next();
          if (oreRoll < 0.02) {
            blockType = 'ore_diamond';
          } else if (oreRoll < 0.05) {
            blockType = 'ore_emerald';
          } else if (oreRoll < 0.10) {
            blockType = 'ore_gold';
          } else if (oreRoll < 0.18) {
            blockType = 'ore_copper';
          }

          // Chest generation
          if (y <= surfaceHeight - CHEST_MIN_DEPTH && rng.next() < CHEST_CHANCE) {
            blockType = 'chest';
            chests.push({
              x: worldX,
              y: y,
              z: worldZ,
              opened: false,
              loot: generateChestLoot(rng),
            });
          }
        }

        chunk.setBlock(lx, y, lz, blockType);
      }

      // Trees on grass blocks
      if (surfaceHeight > SEA_LEVEL + 1 && surfaceHeight < CHUNK_Y - 5 && rng.next() < 0.02) {
        const treeHeight = rng.nextInt(3, 5);
        for (let ty = 1; ty <= treeHeight; ty++) {
          const treeY = surfaceHeight + ty;
          if (treeY < CHUNK_Y) {
            chunk.setBlock(lx, treeY, lz, 'wood');
          }
        }
        const leafY = surfaceHeight + treeHeight;
        for (let ldx = -1; ldx <= 1; ldx++) {
          for (let ldz = -1; ldz <= 1; ldz++) {
            const leafLx = lx + ldx;
            const leafLz = lz + ldz;
            if (leafLx >= 0 && leafLx < 9 && leafLz >= 0 && leafLz < 9) {
              if (leafY < CHUNK_Y) {
                chunk.setBlock(leafLx, leafY, leafLz, 'leaves');
              }
              if (leafY + 1 < CHUNK_Y && ldx === 0 && ldz === 0) {
                chunk.setBlock(leafLx, leafY + 1, leafLz, 'leaves');
              }
            }
          }
        }
      }
    }
  }

  return { chunk, chests };
}

function generateChestLoot(rng: SeededRandom): { item: string; amount: number }[] {
  const loot: { item: string; amount: number }[] = [];
  const numItems = rng.nextInt(1, 3);
  
  const lootTable = [
    { item: 'copper',  min: 3, max: 10, weight: 40 },
    { item: 'gold',    min: 1, max: 5,  weight: 30 },
    { item: 'emerald', min: 1, max: 3,  weight: 20 },
    { item: 'diamond', min: 1, max: 2,  weight: 10 },
  ];

  for (let i = 0; i < numItems; i++) {
    const entry = rng.weighted(lootTable);
    loot.push({
      item: entry.item,
      amount: rng.nextInt(entry.min, entry.max),
    });
  }

  return loot;
}

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}
