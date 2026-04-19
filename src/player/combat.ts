/**
 * Crystal Wars - Combat & Tool Usage
 * Handles attacks, mining, item usage (bow, purple dotter, jump pad).
 */

import * as THREE from 'three';
import {
  SWORD_BASE_DAMAGE, ATTACK_RANGE, ATTACK_COOLDOWN,
  MINING_TIME_BASE, TIER_MULTIPLIERS, BOW_DAMAGE,
  ARROW_SPEED, PLAYER_JUMP_FORCE
} from '../config';
import { ToolTier } from '../config';
import { getBlockType } from '../world/blockTypes';
import { World } from '../world/world';
import { PlayerController } from './playerController';
import { Inventory } from './inventory';
import { ItemId, CurrencyType } from '../types';
import { showNotification } from '../utils/helpers';
import { t } from '../localization/i18n';
import { SoundManager } from '../audio/soundManager';

export interface Projectile {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  type: 'arrow' | 'purpleDotter';
  ttl: number; // time to live in seconds
}

export class Combat {
  private world: World;
  private player: PlayerController;
  private inventory: Inventory;
  private scene: THREE.Scene;
  private attackCooldown: number = 0;
  private miningTarget: { x: number; y: number; z: number } | null = null;
  private miningProgress: number = 0;
  private miningTime: number = 0;
  public projectiles: Projectile[] = [];
  public isAttacking = false;
  
  // Callback for crystal damage
  public onCrystalHit?: (damage: number) => void;
  // Callback for jump pad check
  public onJumpPadCheck?: (x: number, y: number, z: number) => boolean;

  constructor(world: World, player: PlayerController, inventory: Inventory, scene: THREE.Scene) {
    this.world = world;
    this.player = player;
    this.inventory = inventory;
    this.scene = scene;
  }

  update(dt: number): void {
    // Cooldown
    if (this.attackCooldown > 0) {
      this.attackCooldown -= dt;
    }

    // Update mining progress
    if (this.isAttacking && this.miningTarget) {
      this.miningProgress += dt;
      if (this.miningProgress >= this.miningTime) {
        this.breakBlock(this.miningTarget.x, this.miningTarget.y, this.miningTarget.z);
        this.miningTarget = null;
        this.miningProgress = 0;
      }
      this.updateMiningUI();
    } else {
      this.hideMiningUI();
    }

    // Update projectiles
    this.updateProjectiles(dt);
  }

  /**
   * Called on left-click
   */
  onLeftClick(): void {
    const currentItem = this.inventory.getCurrentItem();
    if (!currentItem) return;

    switch (currentItem) {
      case 'sword':
        this.attackMelee();
        break;
      case 'pickaxe':
      case 'shovel':
        this.startMining(currentItem);
        break;
      case 'bow':
        this.shootArrow();
        break;
      case 'purpleDotter':
        this.throwPurpleDotter();
        break;
      case 'jumpPad':
        this.placeJumpPad();
        break;
      case 'block':
        this.placeBlock();
        break;
    }
  }

  onLeftClickRelease(): void {
    this.isAttacking = false;
    this.miningTarget = null;
    this.miningProgress = 0;
    this.hideMiningUI();
  }

  private attackMelee(): void {
    if (this.attackCooldown > 0) return;
    this.attackCooldown = ATTACK_COOLDOWN;
    SoundManager.playSwing();

    const tier = this.inventory.swordTier;
    const damage = SWORD_BASE_DAMAGE * TIER_MULTIPLIERS[tier].damage;

    // Raycast to find what we're hitting
    const raycaster = new THREE.Raycaster();
    raycaster.set(this.player.getEyePosition(), this.player.getLookDirection());
    raycaster.far = ATTACK_RANGE;

    // Check crystal hit via callback
    if (this.onCrystalHit) {
      this.onCrystalHit(damage);
    }

    // We can also mine blocks with sword (slow)
    const targetBlock = this.getTargetBlock();
    if (targetBlock) {
      this.startMiningAt(targetBlock.x, targetBlock.y, targetBlock.z, 'sword', tier);
    }
  }

  private startMining(tool: ItemId): void {
    if (this.attackCooldown > 0) return;

    const targetBlock = this.getTargetBlock();
    if (!targetBlock) return;

    const tier = tool === 'pickaxe' ? this.inventory.pickaxeTier : this.inventory.shovelTier;
    this.startMiningAt(targetBlock.x, targetBlock.y, targetBlock.z, tool, tier);
  }

  private startMiningAt(x: number, y: number, z: number, tool: ItemId, tier: ToolTier): void {
    const blockId = this.world.getBlock(x, y, z);
    if (blockId === 'air' || blockId === 'bedrock') return;

    const bt = getBlockType(blockId);
    let speedMult = TIER_MULTIPLIERS[tier].speed;

    // Tool bonus
    if (tool === 'pickaxe' && bt.isHard) speedMult *= 1.5;
    if (tool === 'shovel' && bt.isSoft) speedMult *= 1.5;
    if (tool === 'sword') speedMult *= 0.3; // sword is slow at mining

    this.miningTime = (MINING_TIME_BASE * bt.hardness) / speedMult;
    this.miningTarget = { x, y, z };
    this.miningProgress = 0;
    this.isAttacking = true;
  }

  private breakBlock(x: number, y: number, z: number): void {
    const blockId = this.world.getBlock(x, y, z);
    if (blockId === 'air' || blockId === 'bedrock') return;

    const bt = getBlockType(blockId);

    // Give resources
    if (bt.drop && bt.dropAmount) {
      this.inventory.addCurrency(bt.drop as CurrencyType, bt.dropAmount);
      showNotification(`+${bt.dropAmount} ${bt.drop}`);
    }

    // Remove block
    this.world.setBlock(x, y, z, 'air');
    this.world.rebuildDirtyMeshes();
    SoundManager.playHit();
  }

  private shootArrow(): void {
    if (this.attackCooldown > 0) return;
    if (!this.inventory.removeItem('arrows', 1)) return;
    this.attackCooldown = ATTACK_COOLDOWN;
    SoundManager.playSwing();

    const dir = this.player.getLookDirection();
    const pos = this.player.getEyePosition();

    const geometry = new THREE.ConeGeometry(0.1, 0.5, 4);
    geometry.rotateX(Math.PI / 2);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(pos).add(dir.clone().multiplyScalar(1));

    // Orient arrow
    mesh.lookAt(pos.clone().add(dir.clone().multiplyScalar(10)));

    this.scene.add(mesh);
    this.projectiles.push({
      mesh,
      velocity: dir.clone().multiplyScalar(ARROW_SPEED),
      type: 'arrow',
      ttl: 5,
    });
  }

  private throwPurpleDotter(): void {
    if (this.attackCooldown > 0) return;
    if (!this.inventory.removeItem('purpleDotter', 1)) return;
    this.attackCooldown = ATTACK_COOLDOWN * 2;
    SoundManager.playSwing();

    const dir = this.player.getLookDirection();
    const pos = this.player.getEyePosition();

    const geometry = new THREE.SphereGeometry(0.2, 8, 8);
    const material = new THREE.MeshBasicMaterial({ color: 0x9933ff });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(pos).add(dir.clone().multiplyScalar(1));

    this.scene.add(mesh);
    this.projectiles.push({
      mesh,
      velocity: dir.clone().multiplyScalar(0.5).add(new THREE.Vector3(0, 0.15, 0)),
      type: 'purpleDotter',
      ttl: 10,
    });
  }

  private placeJumpPad(): void {
    const target = this.getAdjacentBlock();
    if (!target) return;
    if (!this.inventory.removeItem('jumpPad', 1)) return;

    this.world.setBlock(target.x, target.y, target.z, 'jump_pad');
    this.world.rebuildDirtyMeshes();
    SoundManager.playHit();
    showNotification(t('jumpPadPlaced'));
  }

  private placeBlock(): void {
    const target = this.getAdjacentBlock();
    if (!target) return;
    if (!this.inventory.removeItem('block', 1)) return;

    // Don't place where player is standing
    const px = Math.floor(this.player.position.x);
    const pz = Math.floor(this.player.position.z);
    const py = Math.floor(this.player.position.y);
    if (target.x === px && target.z === pz && 
        (target.y === py || target.y === py + 1)) return;

    this.world.setBlock(target.x, target.y, target.z, 'placed_block');
    this.world.rebuildDirtyMeshes();
    SoundManager.playHit();
  }

  private updateProjectiles(dt: number): void {
    const toRemove: number[] = [];

    for (let i = 0; i < this.projectiles.length; i++) {
      const proj = this.projectiles[i];
      proj.ttl -= dt;

      if (proj.ttl <= 0) {
        toRemove.push(i);
        continue;
      }

      // Apply gravity to projectiles
      proj.velocity.y -= 0.005;

      // Move
      proj.mesh.position.add(proj.velocity);

      // Check collision with world
      const px = Math.floor(proj.mesh.position.x);
      const py = Math.floor(proj.mesh.position.y);
      const pz = Math.floor(proj.mesh.position.z);

      if (this.world.isSolid(px, py, pz)) {
        if (proj.type === 'purpleDotter') {
          // Teleport player
          const landY = this.world.getSurfaceY(px, pz);
          this.player.teleport(px + 0.5, landY + 0.1, pz + 0.5);
          showNotification(t('teleported'));
        } else if (proj.type === 'arrow') {
          // Deal damage to crystal if nearby
          if (this.onCrystalHit) {
            this.onCrystalHit(BOW_DAMAGE);
          }
        }
        toRemove.push(i);
        continue;
      }

      // Arrow crystal hit via callback is handled in game.ts
    }

    // Remove expired/hit projectiles
    for (let i = toRemove.length - 1; i >= 0; i--) {
      const idx = toRemove[i];
      this.scene.remove(this.projectiles[idx].mesh);
      this.projectiles[idx].mesh.geometry.dispose();
      (this.projectiles[idx].mesh.material as THREE.Material).dispose();
      this.projectiles.splice(idx, 1);
    }
  }

  /**
   * Raycast to find the block the player is looking at
   */
  getTargetBlock(): { x: number; y: number; z: number } | null {
    const origin = this.player.getEyePosition();
    const dir = this.player.getLookDirection();
    
    // Step along ray
    for (let d = 0; d < ATTACK_RANGE; d += 0.2) {
      const x = Math.floor(origin.x + dir.x * d);
      const y = Math.floor(origin.y + dir.y * d);
      const z = Math.floor(origin.z + dir.z * d);
      
      if (this.world.isSolid(x, y, z)) {
        return { x, y, z };
      }
    }
    return null;
  }

  /**
   * Get the air block adjacent to where player is looking (for placement)
   */
  getAdjacentBlock(): { x: number; y: number; z: number } | null {
    const origin = this.player.getEyePosition();
    const dir = this.player.getLookDirection();
    
    let prevX = -999, prevY = -999, prevZ = -999;
    
    for (let d = 0; d < ATTACK_RANGE; d += 0.2) {
      const x = Math.floor(origin.x + dir.x * d);
      const y = Math.floor(origin.y + dir.y * d);
      const z = Math.floor(origin.z + dir.z * d);
      
      if (x === prevX && y === prevY && z === prevZ) continue;
      
      if (this.world.isSolid(x, y, z)) {
        if (prevX !== -999) {
          return { x: prevX, y: prevY, z: prevZ };
        }
        return null;
      }
      
      prevX = x; prevY = y; prevZ = z;
    }
    return null;
  }

  /**
   * Check if player is standing on a jump pad
   */
  checkJumpPad(): void {
    const feetX = Math.floor(this.player.position.x);
    const feetY = Math.floor(this.player.position.y) - 1;
    const feetZ = Math.floor(this.player.position.z);
    
    const block = this.world.getBlock(feetX, feetY, feetZ);
    if (block === 'jump_pad') {
      this.player.launch(PLAYER_JUMP_FORCE * 4);
      showNotification(t('jumpPadLaunch'));
    }
  }

  private updateMiningUI(): void {
    let bar = document.getElementById('mining-progress');
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'mining-progress';
      bar.innerHTML = '<div id="mining-progress-fill"></div>';
      document.getElementById('hud')?.appendChild(bar);
    }
    bar.style.display = 'block';
    const fill = document.getElementById('mining-progress-fill');
    if (fill && this.miningTime > 0) {
      fill.style.width = `${(this.miningProgress / this.miningTime) * 100}%`;
    }
  }

  private hideMiningUI(): void {
    const bar = document.getElementById('mining-progress');
    if (bar) bar.style.display = 'none';
  }

  dispose(): void {
    for (const proj of this.projectiles) {
      this.scene.remove(proj.mesh);
      proj.mesh.geometry.dispose();
      (proj.mesh.material as THREE.Material).dispose();
    }
    this.projectiles = [];
  }
}
