/**
 * Crystal Wars - Resource NPC
 * Generates copper and gold on a timer on each outer island.
 */

import * as THREE from 'three';
import { 
  ISLAND_NPC_COPPER_INTERVAL, ISLAND_NPC_GOLD_INTERVAL, PICKUP_RANGE 
} from '../config';
import { IslandData, CurrencyType } from '../types';
import { dist2D } from '../utils/helpers';

interface ResourceDrop {
  type: CurrencyType;
  amount: number;
  mesh: THREE.Mesh;
  bobOffset: number;
}

export class ResourceNpc {
  public position: THREE.Vector3;
  public island: IslandData;
  private scene: THREE.Scene;
  private npcMesh: THREE.Group;
  private copperTimer = 0;
  private goldTimer = 0;
  private drops: ResourceDrop[] = [];
  private time = 0;

  constructor(scene: THREE.Scene, island: IslandData, surfaceY: number) {
    this.scene = scene;
    this.island = island;
    
    // Place NPC offset from island center
    const offsetX = island.centerX + 5;
    const offsetZ = island.centerZ + 5;
    this.position = new THREE.Vector3(offsetX, surfaceY, offsetZ);

    // Create NPC visual
    this.npcMesh = new THREE.Group();

    // Body
    const bodyGeo = new THREE.CylinderGeometry(0.3, 0.4, 1.2, 8);
    const bodyMat = new THREE.MeshLambertMaterial({ color: 0x22aa44 });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 0.8;
    this.npcMesh.add(body);

    // Head
    const headGeo = new THREE.SphereGeometry(0.3, 8, 8);
    const headMat = new THREE.MeshLambertMaterial({ color: 0xffcc88 });
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.y = 1.7;
    this.npcMesh.add(head);

    // Floating label (simple disc)
    const labelGeo = new THREE.PlaneGeometry(1.5, 0.4);
    const labelMat = new THREE.MeshBasicMaterial({ 
      color: 0x22aa44, 
      transparent: true, 
      opacity: 0.7,
      side: THREE.DoubleSide
    });
    const label = new THREE.Mesh(labelGeo, labelMat);
    label.position.y = 2.3;
    this.npcMesh.add(label);

    this.npcMesh.position.copy(this.position);
    scene.add(this.npcMesh);
  }

  update(dt: number, playerX: number, playerZ: number): { type: CurrencyType; amount: number }[] {
    this.time += dt;
    const collected: { type: CurrencyType; amount: number }[] = [];

    // Generate resources
    this.copperTimer += dt;
    this.goldTimer += dt;

    if (this.copperTimer >= ISLAND_NPC_COPPER_INTERVAL) {
      this.copperTimer -= ISLAND_NPC_COPPER_INTERVAL;
      this.spawnDrop('copper', 1);
    }

    if (this.goldTimer >= ISLAND_NPC_GOLD_INTERVAL) {
      this.goldTimer -= ISLAND_NPC_GOLD_INTERVAL;
      this.spawnDrop('gold', 1);
    }

    // Animate NPC
    this.npcMesh.children[0].rotation.y = Math.sin(this.time) * 0.1;

    // Check pickup
    const toRemove: number[] = [];
    for (let i = 0; i < this.drops.length; i++) {
      const drop = this.drops[i];
      
      // Bob animation
      drop.mesh.position.y = this.position.y + 0.5 + Math.sin(this.time * 3 + drop.bobOffset) * 0.2;
      drop.mesh.rotation.y += dt * 2;

      // Check if player is near
      const dist = dist2D(playerX, playerZ, drop.mesh.position.x, drop.mesh.position.z);
      if (dist < PICKUP_RANGE) {
        collected.push({ type: drop.type, amount: drop.amount });
        this.scene.remove(drop.mesh);
        drop.mesh.geometry.dispose();
        (drop.mesh.material as THREE.Material).dispose();
        toRemove.push(i);
      }
    }

    // Remove collected drops
    for (let i = toRemove.length - 1; i >= 0; i--) {
      this.drops.splice(toRemove[i], 1);
    }

    return collected;
  }

  private spawnDrop(type: CurrencyType, amount: number): void {
    const colors: Record<CurrencyType, number> = {
      copper: 0xcd7f32,
      gold: 0xffd700,
      emerald: 0x50c878,
      diamond: 0xb9f2ff,
    };

    const geo = new THREE.BoxGeometry(0.3, 0.3, 0.3);
    const mat = new THREE.MeshLambertMaterial({ 
      color: colors[type],
      emissive: colors[type],
      emissiveIntensity: 0.3,
    });
    const mesh = new THREE.Mesh(geo, mat);
    
    // Random offset around NPC
    mesh.position.set(
      this.position.x + (Math.random() - 0.5) * 2,
      this.position.y + 0.5,
      this.position.z + (Math.random() - 0.5) * 2
    );

    this.scene.add(mesh);
    this.drops.push({
      type,
      amount,
      mesh,
      bobOffset: Math.random() * Math.PI * 2,
    });

    // Limit max drops on ground
    if (this.drops.length > 20) {
      const old = this.drops.shift()!;
      this.scene.remove(old.mesh);
      old.mesh.geometry.dispose();
      (old.mesh.material as THREE.Material).dispose();
    }
  }

  dispose(): void {
    this.scene.remove(this.npcMesh);
    for (const drop of this.drops) {
      this.scene.remove(drop.mesh);
      drop.mesh.geometry.dispose();
      (drop.mesh.material as THREE.Material).dispose();
    }
    this.drops = [];
  }
}
