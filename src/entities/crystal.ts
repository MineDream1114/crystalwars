/**
 * Crystal Wars - Crystal Entity
 * Breakable crystal on each outer island. Destroy all 4 to win.
 */

import * as THREE from 'three';
import { CRYSTAL_HP, CRYSTAL_SIZE } from '../config';
import { IslandData } from '../types';
import { showNotification } from '../utils/helpers';
import { t } from '../localization/i18n';

export interface CrystalEntity {
  mesh: THREE.Group;
  island: IslandData;
  hp: number;
  maxHp: number;
  destroyed: boolean;
  position: THREE.Vector3;
}

export class CrystalManager {
  private crystals: CrystalEntity[] = [];
  private scene: THREE.Scene;
  public onAllDestroyed?: () => void;
  private time = 0;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
  }

  /**
   * Create a crystal on an island
   */
  createCrystal(island: IslandData, surfaceY: number): CrystalEntity {
    const group = new THREE.Group();

    // Main crystal body - octahedron
    const crystalGeo = new THREE.OctahedronGeometry(CRYSTAL_SIZE, 0);
    const crystalMat = new THREE.MeshPhongMaterial({
      color: 0xaa44ff,
      emissive: 0x6622aa,
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.85,
      shininess: 100,
    });
    const crystalMesh = new THREE.Mesh(crystalGeo, crystalMat);
    crystalMesh.position.y = CRYSTAL_SIZE + 0.5;
    group.add(crystalMesh);

    // Glow ring
    const ringGeo = new THREE.TorusGeometry(CRYSTAL_SIZE * 1.2, 0.1, 8, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xcc66ff,
      transparent: true,
      opacity: 0.5,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.y = CRYSTAL_SIZE + 0.5;
    ring.rotation.x = Math.PI / 2;
    group.add(ring);

    // Pedestal
    const pedestalGeo = new THREE.CylinderGeometry(1, 1.5, 1, 8);
    const pedestalMat = new THREE.MeshLambertMaterial({ color: 0x444466 });
    const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestal.position.y = 0.5;
    group.add(pedestal);

    // Point light
    const light = new THREE.PointLight(0xaa44ff, 2, 15);
    light.position.y = CRYSTAL_SIZE + 1;
    group.add(light);

    group.position.set(island.centerX, surfaceY, island.centerZ);
    this.scene.add(group);

    const crystal: CrystalEntity = {
      mesh: group,
      island,
      hp: CRYSTAL_HP,
      maxHp: CRYSTAL_HP,
      destroyed: false,
      position: new THREE.Vector3(island.centerX, surfaceY + CRYSTAL_SIZE, island.centerZ),
    };

    this.crystals.push(crystal);
    return crystal;
  }

  /**
   * Deal damage to the nearest crystal within range
   */
  damageNearestCrystal(playerPos: THREE.Vector3, damage: number, range: number = 6): 'destroyed' | 'damaged' | false {
    let nearest: CrystalEntity | null = null;
    let nearestDist = Infinity;

    for (const crystal of this.crystals) {
      if (crystal.destroyed) continue;
      const dist = playerPos.distanceTo(crystal.position);
      if (dist < range && dist < nearestDist) {
        nearest = crystal;
        nearestDist = dist;
      }
    }

    if (!nearest) return false;

    nearest.hp -= damage;
    
    // Visual feedback - flash
    const meshes = nearest.mesh.children;
    for (const child of meshes) {
      if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshPhongMaterial) {
        child.material.emissiveIntensity = 2;
        setTimeout(() => {
          if (child.material instanceof THREE.MeshPhongMaterial) {
            child.material.emissiveIntensity = 0.5;
          }
        }, 100);
      }
    }

    if (nearest.hp <= 0) {
      this.destroyCrystal(nearest);
      return 'destroyed';
    }

    return 'damaged';
  }

  private destroyCrystal(crystal: CrystalEntity): void {
    crystal.destroyed = true;
    crystal.island.crystalDestroyed = true;

    // Destruction effect - scale down and remove
    const group = crystal.mesh;
    const animate = () => {
      group.scale.multiplyScalar(0.9);
      if (group.scale.x > 0.01) {
        requestAnimationFrame(animate);
      } else {
        this.scene.remove(group);
      }
    };
    animate();

    showNotification(t('crystalDestroyed'));

    // Check win condition
    const allDestroyed = this.crystals.every(c => c.destroyed);
    if (allDestroyed && this.onAllDestroyed) {
      setTimeout(() => this.onAllDestroyed!(), 1500);
    }
  }

  /**
   * Animate crystals (rotation, bobbing)
   */
  update(dt: number): void {
    this.time += dt;
    for (const crystal of this.crystals) {
      if (crystal.destroyed) continue;
      
      // Rotate crystal
      const mainCrystal = crystal.mesh.children[0];
      if (mainCrystal) {
        mainCrystal.rotation.y += dt * 0.5;
      }
      
      // Bob the ring
      const ring = crystal.mesh.children[1];
      if (ring) {
        ring.rotation.z += dt * 0.8;
        ring.position.y = CRYSTAL_SIZE + 0.5 + Math.sin(this.time * 2) * 0.3;
      }
    }
  }

  getDestroyedCount(): number {
    return this.crystals.filter(c => c.destroyed).length;
  }

  getCrystals(): CrystalEntity[] {
    return this.crystals;
  }

  dispose(): void {
    for (const crystal of this.crystals) {
      this.scene.remove(crystal.mesh);
    }
    this.crystals = [];
  }
}
