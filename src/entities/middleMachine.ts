/**
 * Crystal Wars - Middle Island Machine
 * Drops gold and diamonds on timers. High-value resource generator.
 */

import * as THREE from 'three';
import { 
  MIDDLE_MACHINE_GOLD_INTERVAL, MIDDLE_MACHINE_DIAMOND_INTERVAL, PICKUP_RANGE 
} from '../config';
import { CurrencyType } from '../types';
import { dist2D } from '../utils/helpers';

interface MachineDrop {
  type: CurrencyType;
  amount: number;
  mesh: THREE.Mesh;
  bobOffset: number;
}

export class MiddleMachine {
  public position: THREE.Vector3;
  private scene: THREE.Scene;
  private machineMesh: THREE.Group;
  private goldTimer = 0;
  private diamondTimer = 0;
  private drops: MachineDrop[] = [];
  private time = 0;

  constructor(scene: THREE.Scene, surfaceY: number) {
    this.scene = scene;
    this.position = new THREE.Vector3(-5, surfaceY, -5);

    // Build machine visual
    this.machineMesh = new THREE.Group();

    // Base
    const baseGeo = new THREE.BoxGeometry(2, 1, 2);
    const baseMat = new THREE.MeshLambertMaterial({ color: 0x555577 });
    const base = new THREE.Mesh(baseGeo, baseMat);
    base.position.y = 0.5;
    this.machineMesh.add(base);

    // Core (rotating)
    const coreGeo = new THREE.DodecahedronGeometry(0.6, 0);
    const coreMat = new THREE.MeshPhongMaterial({
      color: 0xffd700,
      emissive: 0xffaa00,
      emissiveIntensity: 0.5,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    core.position.y = 1.8;
    this.machineMesh.add(core);

    // Pillars
    for (let i = 0; i < 4; i++) {
      const pillarGeo = new THREE.CylinderGeometry(0.1, 0.1, 1.5, 6);
      const pillarMat = new THREE.MeshLambertMaterial({ color: 0x888899 });
      const pillar = new THREE.Mesh(pillarGeo, pillarMat);
      const angle = (i / 4) * Math.PI * 2;
      pillar.position.set(Math.cos(angle) * 0.8, 1.25, Math.sin(angle) * 0.8);
      this.machineMesh.add(pillar);
    }

    // Light
    const light = new THREE.PointLight(0xffd700, 2, 12);
    light.position.y = 2.5;
    this.machineMesh.add(light);

    this.machineMesh.position.copy(this.position);
    scene.add(this.machineMesh);
  }

  update(dt: number, playerX: number, playerZ: number): { type: CurrencyType; amount: number }[] {
    this.time += dt;
    const collected: { type: CurrencyType; amount: number }[] = [];

    // Generate resources
    this.goldTimer += dt;
    this.diamondTimer += dt;

    if (this.goldTimer >= MIDDLE_MACHINE_GOLD_INTERVAL) {
      this.goldTimer -= MIDDLE_MACHINE_GOLD_INTERVAL;
      this.spawnDrop('gold', 1);
    }

    if (this.diamondTimer >= MIDDLE_MACHINE_DIAMOND_INTERVAL) {
      this.diamondTimer -= MIDDLE_MACHINE_DIAMOND_INTERVAL;
      this.spawnDrop('diamond', 1);
    }

    // Animate core rotation
    const core = this.machineMesh.children[1];
    if (core) {
      core.rotation.y += dt * 1.5;
      core.rotation.x += dt * 0.7;
      core.position.y = 1.8 + Math.sin(this.time * 2) * 0.15;
    }

    // Check pickup
    const toRemove: number[] = [];
    for (let i = 0; i < this.drops.length; i++) {
      const drop = this.drops[i];
      
      // Bob animation
      drop.mesh.position.y = this.position.y + 0.5 + Math.sin(this.time * 3 + drop.bobOffset) * 0.2;
      drop.mesh.rotation.y += dt * 2;

      const dist = dist2D(playerX, playerZ, drop.mesh.position.x, drop.mesh.position.z);
      if (dist < PICKUP_RANGE) {
        collected.push({ type: drop.type, amount: drop.amount });
        this.scene.remove(drop.mesh);
        drop.mesh.geometry.dispose();
        (drop.mesh.material as THREE.Material).dispose();
        toRemove.push(i);
      }
    }

    for (let i = toRemove.length - 1; i >= 0; i--) {
      this.drops.splice(toRemove[i], 1);
    }

    return collected;
  }

  private spawnDrop(type: CurrencyType, amount: number): void {
    const colors: Record<string, number> = {
      gold: 0xffd700,
      diamond: 0xb9f2ff,
    };

    const geo = type === 'diamond' 
      ? new THREE.OctahedronGeometry(0.25, 0) 
      : new THREE.BoxGeometry(0.3, 0.3, 0.3);
    const mat = new THREE.MeshLambertMaterial({
      color: colors[type] || 0xffffff,
      emissive: colors[type] || 0xffffff,
      emissiveIntensity: 0.4,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(
      this.position.x + (Math.random() - 0.5) * 3,
      this.position.y + 0.5,
      this.position.z + (Math.random() - 0.5) * 3
    );

    this.scene.add(mesh);
    this.drops.push({
      type,
      amount,
      mesh,
      bobOffset: Math.random() * Math.PI * 2,
    });

    if (this.drops.length > 30) {
      const old = this.drops.shift()!;
      this.scene.remove(old.mesh);
      old.mesh.geometry.dispose();
      (old.mesh.material as THREE.Material).dispose();
    }
  }

  dispose(): void {
    this.scene.remove(this.machineMesh);
    for (const drop of this.drops) {
      this.scene.remove(drop.mesh);
      drop.mesh.geometry.dispose();
      (drop.mesh.material as THREE.Material).dispose();
    }
    this.drops = [];
  }
}
