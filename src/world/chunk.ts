/**
 * Crystal Wars - Chunk
 * A chunk is 9x9x18 blocks. Manages block data and mesh generation.
 */

import * as THREE from 'three';
import { CHUNK_X, CHUNK_Y, CHUNK_Z } from '../config';
import { getBlockType } from './blockTypes';

export class Chunk {
  public blocks: string[][][]; // [x][y][z] = blockId
  public mesh: THREE.Mesh | null = null;
  public worldX: number; // world offset
  public worldZ: number;
  public dirty = true;

  constructor(worldX: number, worldZ: number) {
    this.worldX = worldX;
    this.worldZ = worldZ;
    this.blocks = [];
    for (let x = 0; x < CHUNK_X; x++) {
      this.blocks[x] = [];
      for (let y = 0; y < CHUNK_Y; y++) {
        this.blocks[x][y] = [];
        for (let z = 0; z < CHUNK_Z; z++) {
          this.blocks[x][y][z] = 'air';
        }
      }
    }
  }

  getBlock(x: number, y: number, z: number): string {
    if (x < 0 || x >= CHUNK_X || y < 0 || y >= CHUNK_Y || z < 0 || z >= CHUNK_Z) {
      return 'air';
    }
    return this.blocks[x][y][z];
  }

  setBlock(x: number, y: number, z: number, blockId: string): void {
    if (x < 0 || x >= CHUNK_X || y < 0 || y >= CHUNK_Y || z < 0 || z >= CHUNK_Z) return;
    this.blocks[x][y][z] = blockId;
    this.dirty = true;
  }

  /**
   * Build mesh using merged geometry approach.
   * Only renders exposed faces for performance.
   */
  buildMesh(scene: THREE.Scene, getNeighborBlock?: (wx: number, wy: number, wz: number) => string): void {
    if (this.mesh) {
      scene.remove(this.mesh);
      this.mesh.geometry.dispose();
      if (Array.isArray(this.mesh.material)) {
        this.mesh.material.forEach(m => m.dispose());
      } else {
        (this.mesh.material as THREE.Material).dispose();
      }
    }

    const positions: number[] = [];
    const normals: number[] = [];
    const colors: number[] = [];
    const indices: number[] = [];
    let vertexCount = 0;

    const color = new THREE.Color();

    const faces = [
      { dir: [1, 0, 0],  normal: [1, 0, 0],  verts: [[1,0,0],[1,1,0],[1,1,1],[1,0,1]] },  // +X
      { dir: [-1, 0, 0], normal: [-1, 0, 0], verts: [[0,0,1],[0,1,1],[0,1,0],[0,0,0]] },  // -X
      { dir: [0, 1, 0],  normal: [0, 1, 0],  verts: [[0,1,0],[0,1,1],[1,1,1],[1,1,0]] },  // +Y (top)
      { dir: [0, -1, 0], normal: [0, -1, 0], verts: [[0,0,1],[0,0,0],[1,0,0],[1,0,1]] },  // -Y (bottom)
      { dir: [0, 0, 1],  normal: [0, 0, 1],  verts: [[0,0,1],[1,0,1],[1,1,1],[0,1,1]] },  // +Z
      { dir: [0, 0, -1], normal: [0, 0, -1], verts: [[1,0,0],[0,0,0],[0,1,0],[1,1,0]] },  // -Z
    ];

    for (let x = 0; x < CHUNK_X; x++) {
      for (let y = 0; y < CHUNK_Y; y++) {
        for (let z = 0; z < CHUNK_Z; z++) {
          const blockId = this.blocks[x][y][z];
          if (blockId === 'air') continue;

          const bt = getBlockType(blockId);
          color.setHex(bt.color);

          for (const face of faces) {
            const nx = x + face.dir[0];
            const ny = y + face.dir[1];
            const nz = z + face.dir[2];

            let neighborBlock: string;
            if (nx >= 0 && nx < CHUNK_X && ny >= 0 && ny < CHUNK_Y && nz >= 0 && nz < CHUNK_Z) {
              neighborBlock = this.blocks[nx][ny][nz];
            } else if (getNeighborBlock) {
              neighborBlock = getNeighborBlock(
                this.worldX + nx,
                ny,
                this.worldZ + nz
              );
            } else {
              neighborBlock = 'air';
            }

            if (neighborBlock !== 'air') continue;

            // Slight color variation for top faces
            const brightness = face.normal[1] > 0 ? 1.1 : 
                             face.normal[1] < 0 ? 0.7 : 
                             (face.normal[0] !== 0 ? 0.85 : 0.9);

            for (const vert of face.verts) {
              positions.push(
                this.worldX + x + vert[0],
                y + vert[1],
                this.worldZ + z + vert[2]
              );
              normals.push(face.normal[0], face.normal[1], face.normal[2]);
              colors.push(
                color.r * brightness,
                color.g * brightness,
                color.b * brightness
              );
            }

            indices.push(
              vertexCount, vertexCount + 1, vertexCount + 2,
              vertexCount, vertexCount + 2, vertexCount + 3
            );
            vertexCount += 4;
          }
        }
      }
    }

    if (positions.length === 0) {
      this.dirty = false;
      return;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setIndex(indices);

    const material = new THREE.MeshLambertMaterial({ vertexColors: true });
    this.mesh = new THREE.Mesh(geometry, material);
    scene.add(this.mesh);

    this.dirty = false;
  }
}
