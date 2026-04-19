/**
 * Crystal Wars - Islands Terrain Generator
 * Generates an Ocean Islands world with 1 center island, 8 outer islands, and connecting bridges.
 */

import * as THREE from 'three';
import { CHUNK_X, CHUNK_Y, SEA_LEVEL } from '../config';
import { Chunk } from './chunk';
import { ChestData } from '../types';
import { simpleNoise2D, SeededRandom } from '../utils/random';

function distanceToLineSegment(px: number, pz: number, ax: number, az: number, bx: number, bz: number): number {
  const l2 = (ax - bx) * (ax - bx) + (az - bz) * (az - bz);
  if (l2 === 0) return Math.sqrt((px - ax) * (px - ax) + (pz - az) * (pz - az));
  let t = ((px - ax) * (bx - ax) + (pz - az) * (bz - az)) / l2;
  t = Math.max(0, Math.min(1, t));
  const projX = ax + t * (bx - ax);
  const projZ = az + t * (bz - az);
  return Math.sqrt((px - projX) * (px - projX) + (pz - projZ) * (pz - projZ));
}

export function generateIslandsChunk(
  chunkX: number, 
  chunkZ: number, 
  seed: number,
  crystalLocations: {x: number, z: number}[]
): { chunk: Chunk, chests: ChestData[] } {
  
  const rng = new SeededRandom(seed * chunkX + chunkZ);
  const chunk = new Chunk(chunkX, chunkZ);
  const chests: ChestData[] = [];
  
  const CENTER_RADIUS = 18;
  const OUTER_RADIUS = 15;
  const BRIDGE_WIDTH = 3; // acts like radius from center line

  for (let lx = 0; lx < CHUNK_X; lx++) {
    for (let lz = 0; lz < CHUNK_X; lz++) {
      const wx = chunkX + lx;
      const wz = chunkZ + lz;

      let isIsland = false;
      let isBridge = false;
      let maxIslandY = 0;
      
      const distCenter = Math.sqrt(wx * wx + wz * wz);
      
      // Central Island
      if (distCenter < CENTER_RADIUS) {
        isIsland = true;
        // Bumpiness based on noise
        const bump = (simpleNoise2D(wx, wz, 0.1) * 0.5 + 0.5) * 4; // 0 to 4 height variation
        // Center island height: basically SEA_LEVEL + 2 to +6
        // Edges should slope down
        const edgeFactor = Math.max(0, 1 - (distCenter / CENTER_RADIUS));
        maxIslandY = SEA_LEVEL + Math.floor(1 + bump * edgeFactor);
      }

      // Outer Islands and Bridges
      for (const loc of crystalLocations) {
        const distToLoc = Math.sqrt((wx - loc.x) * (wx - loc.x) + (wz - loc.z) * (wz - loc.z));
        
        // Outer Island
        if (distToLoc < OUTER_RADIUS) {
          isIsland = true;
          const bump = (simpleNoise2D(wx, wz, 0.15) * 0.5 + 0.5) * 5; 
          const edgeFactor = Math.max(0, 1 - (distToLoc / OUTER_RADIUS));
          const localMax = SEA_LEVEL + Math.floor(1 + bump * edgeFactor);
          maxIslandY = Math.max(maxIslandY, localMax);
        }

        // Bridge logic: only if neither island nor center has it fully covered
        if (!isIsland) {
           const bridgeDist = distanceToLineSegment(wx, wz, 0, 0, loc.x, loc.z);
           if (bridgeDist <= BRIDGE_WIDTH) {
             // Make bridges slightly wiggly using noise
             const wiggle = simpleNoise2D(wx, wz, 0.05) * 2;
             if (bridgeDist + wiggle <= BRIDGE_WIDTH + 1) {
               isBridge = true;
             }
           }
        }
      }

      // 4. Set blocks based on topology
      if (isIsland) {
        // Build the island stack
        // From bottom of sea to maxIslandY
        for (let y = 0; y <= maxIslandY; y++) {
          if (y === maxIslandY) {
            // Surface
            if (y <= SEA_LEVEL) chunk.setBlock(lx, y, lz, 'sand');
            else chunk.setBlock(lx, y, lz, 'grass');
            
            // Trees? 
            if (y > SEA_LEVEL && simpleNoise2D(wx, wz, 0.5) > 0.85 && maxIslandY !== SEA_LEVEL) {
              // Avoid trees near exactly 0,0 where player spawns, or on crystal directly
              if (distCenter > 5) {
                chunk.setBlock(lx, y + 1, lz, 'wood');
                chunk.setBlock(lx, y + 2, lz, 'leaves');
              }
            }
          } else if (y > maxIslandY - 3) {
            chunk.setBlock(lx, y, lz, 'dirt');
          } else {
            chunk.setBlock(lx, y, lz, 'stone');
          }
        }
        
        // 5. Ores (underground inside islands)
        if (maxIslandY > SEA_LEVEL + 1) {
            for (let y = 1; y < maxIslandY - 3; y++) {
               const oreNoise = simpleNoise2D(wx, wz, 0.2) + simpleNoise2D(y, wx, 0.1);
               if (oreNoise > 0.8) {
                  chunk.setBlock(lx, y, lz, 'ore_gold');
               } else if (oreNoise > 0.6) {
                  chunk.setBlock(lx, y, lz, 'ore_iron');
               } else if (oreNoise < -0.85 && y < 5) {
                  chunk.setBlock(lx, y, lz, 'ore_diamond');
               }
            }
            
            // Chests?
            if (simpleNoise2D(wx, wz, 0.3) > 0.95) {
               const chestY = Math.floor(Math.random() * (maxIslandY - 5)) + 2;
               if (chunk.getBlock(lx, chestY, lz) === 'stone') {
                 chunk.setBlock(lx, chestY, lz, 'chest');
                 chests.push({ 
                    x: wx, y: chestY, z: wz, opened: false,
                    loot: [ { item: 'gold', amount: 5 } ] // Simplistic loot for now
                 });
               }
            }
        }
      } else if (isBridge) {
        // Bridge is at exactly SEA_LEVEL + 1 (wooden plank / placed block)
        // Base is stone columns randomly? Let's just make it float on water or use wood.
        chunk.setBlock(lx, SEA_LEVEL + 1, lz, 'wood');
        
        // Sometimes add railings
        if (simpleNoise2D(wx, wz, 0.5) > 0.5) {
           // We do nothing, keep flat plank
        }
      }
      
      // We don't fill water here because ocean plane exists in Game scene globally!
    }
  }

  return { chunk, chests };
}
