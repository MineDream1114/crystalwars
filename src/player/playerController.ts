/**
 * Crystal Wars - First Person Player Controller
 * Handles WASD movement, mouse look, jumping, gravity, collision, sprint.
 */

import * as THREE from 'three';
import {
  PLAYER_HEIGHT, PLAYER_RADIUS, PLAYER_SPEED, PLAYER_SPRINT_SPEED,
  PLAYER_JUMP_FORCE, GRAVITY, MOUSE_SENSITIVITY, MAX_HEALTH,
  FALL_DAMAGE_THRESHOLD, FALL_DAMAGE_PER_BLOCK, ISLAND_SURFACE_Y,
  SEA_LEVEL
} from '../config';
import { World } from '../world/world';
import { clamp } from '../utils/helpers';
import { SoundManager } from '../audio/soundManager';

export class PlayerController {
  public camera: THREE.PerspectiveCamera;
  public position: THREE.Vector3;
  public velocity: THREE.Vector3;
  public health: number = MAX_HEALTH;
  public isGrounded: boolean = false;
  public sensitivity: number = MOUSE_SENSITIVITY;

  private pitch = 0;
  private yaw = 0;
  private keys: Set<string> = new Set();
  private world: World;
  private fallStartY: number = 0;
  private isFalling: boolean = false;

  constructor(camera: THREE.PerspectiveCamera, world: World) {
    this.camera = camera;
    this.world = world;
    this.position = new THREE.Vector3(0, ISLAND_SURFACE_Y + 3, 0);
    this.velocity = new THREE.Vector3(0, 0, 0);

    this.setupInput();
  }

  private setupInput(): void {
    document.addEventListener('keydown', (e) => {
      this.keys.add(e.code);
    });
    document.addEventListener('keyup', (e) => {
      this.keys.delete(e.code);
    });
    document.addEventListener('mousemove', (e) => {
      if (document.pointerLockElement) {
        this.yaw -= e.movementX * this.sensitivity;
        this.pitch -= e.movementY * this.sensitivity;
        this.pitch = clamp(this.pitch, -Math.PI / 2 + 0.01, Math.PI / 2 - 0.01);
      }
    });
  }

  update(_dt: number): void {
    const isSprinting = this.keys.has('ShiftLeft') || this.keys.has('ShiftRight');
    const isSwimming = this.position.y < SEA_LEVEL;
    const baseSpeed = isSprinting ? PLAYER_SPRINT_SPEED : PLAYER_SPEED;
    const speed = isSwimming ? baseSpeed * 0.5 : baseSpeed;

    // Movement direction
    const forward = new THREE.Vector3(
      -Math.sin(this.yaw), 0, -Math.cos(this.yaw)
    );
    const right = new THREE.Vector3(
      Math.cos(this.yaw), 0, -Math.sin(this.yaw)
    );

    const moveDir = new THREE.Vector3(0, 0, 0);
    if (this.keys.has('KeyW')) moveDir.add(forward);
    if (this.keys.has('KeyS')) moveDir.sub(forward);
    if (this.keys.has('KeyA')) moveDir.sub(right);
    if (this.keys.has('KeyD')) moveDir.add(right);

    if (moveDir.length() > 0) {
      moveDir.normalize().multiplyScalar(speed);
    }

    // Apply horizontal movement with collision
    this.moveWithCollision(moveDir.x, 0, 0);
    this.moveWithCollision(0, 0, moveDir.z);

    // Jump
    if (this.keys.has('Space')) {
      if (this.isGrounded) {
        this.velocity.y = PLAYER_JUMP_FORCE;
        this.isGrounded = false;
        SoundManager.playJump();
      } else if (isSwimming) {
        // swim upwards
        this.velocity.y += 0.005;
        this.velocity.y = Math.min(this.velocity.y, PLAYER_JUMP_FORCE * 0.5);
      }
    }

    // Gravity
    if (isSwimming) {
      if (this.velocity.y < -0.05) {
        this.velocity.y -= (this.velocity.y + 0.05) * 0.1; // drag
      } else {
        this.velocity.y -= GRAVITY * 0.2; // buoyancy
      }
      this.velocity.y = Math.max(this.velocity.y, -0.05); // cap fall speed in water
    } else {
      this.velocity.y -= GRAVITY;
      this.velocity.y = Math.max(this.velocity.y, -1); // terminal velocity
    }

    // Vertical collision
    const newY = this.position.y + this.velocity.y;
    
    if (this.velocity.y < 0) {
      // Moving down - check floor
      const feetY = newY;
      if (this.checkCollisionAt(this.position.x, feetY - 0.01, this.position.z)) {
        // Land on surface
        this.position.y = Math.floor(feetY - 0.01) + 1.0;
        
        // Fall damage
        if (this.isFalling) {
          const fallDist = this.fallStartY - this.position.y;
          if (fallDist > FALL_DAMAGE_THRESHOLD && !isSwimming) {
            const dmg = (fallDist - FALL_DAMAGE_THRESHOLD) * FALL_DAMAGE_PER_BLOCK;
            this.health = Math.max(0, this.health - dmg);
            SoundManager.playHurt();
          }
          this.isFalling = false;
        }
        
        this.velocity.y = 0;
        this.isGrounded = true;
      } else {
        this.position.y = newY;
        this.isGrounded = false;
        if (!this.isFalling && !isSwimming) {
          this.isFalling = true;
          this.fallStartY = this.position.y;
        }
      }
    } else {
      // Moving up - check ceiling
      const headY = newY + PLAYER_HEIGHT;
      if (this.checkCollisionAt(this.position.x, headY, this.position.z)) {
        this.velocity.y = 0;
      } else {
        this.position.y = newY;
        this.isGrounded = false;
      }
    }

    // Respawn if fallen into void
    if (this.position.y < -10) {
      this.respawn();
    }

    // Update camera
    this.camera.position.set(
      this.position.x,
      this.position.y + PLAYER_HEIGHT,
      this.position.z
    );

    const euler = new THREE.Euler(this.pitch, this.yaw, 0, 'YXZ');
    this.camera.quaternion.setFromEuler(euler);
  }

  private moveWithCollision(dx: number, _dy: number, dz: number): void {
    const r = PLAYER_RADIUS;

    if (dx !== 0) {
      const newX = this.position.x + dx;
      let blockedX = false;
      for (let h = 0.01; h < PLAYER_HEIGHT; h += 0.5) {
        const checkY = this.position.y + h;
        if (this.world.isSolid(newX + r, checkY, this.position.z + r) ||
            this.world.isSolid(newX + r, checkY, this.position.z - r) ||
            this.world.isSolid(newX - r, checkY, this.position.z + r) ||
            this.world.isSolid(newX - r, checkY, this.position.z - r)) {
          blockedX = true;
          break;
        }
      }
      if (!blockedX) this.position.x = newX;
    }

    if (dz !== 0) {
      const newZ = this.position.z + dz;
      let blockedZ = false;
      for (let h = 0.01; h < PLAYER_HEIGHT; h += 0.5) {
        const checkY = this.position.y + h;
        if (this.world.isSolid(this.position.x + r, checkY, newZ + r) ||
            this.world.isSolid(this.position.x + r, checkY, newZ - r) ||
            this.world.isSolid(this.position.x - r, checkY, newZ + r) ||
            this.world.isSolid(this.position.x - r, checkY, newZ - r)) {
          blockedZ = true;
          break;
        }
      }
      if (!blockedZ) this.position.z = newZ;
    }
  }

  private checkCollisionAt(x: number, y: number, z: number): boolean {
    const r = PLAYER_RADIUS;
    return (
      this.world.isSolid(x + r, y, z + r) ||
      this.world.isSolid(x + r, y, z - r) ||
      this.world.isSolid(x - r, y, z + r) ||
      this.world.isSolid(x - r, y, z - r)
    );
  }

  respawn(): void {
    this.position.set(0, ISLAND_SURFACE_Y + 3, 0);
    this.velocity.set(0, 0, 0);
    this.health = Math.min(this.health, MAX_HEALTH);
    this.isFalling = false;
  }

  /**
   * Launch player upward (for jump pad)
   */
  launch(force: number): void {
    this.velocity.y = force;
    this.isGrounded = false;
  }

  /**
   * Teleport player to a position
   */
  teleport(x: number, y: number, z: number): void {
    this.position.set(x, y, z);
    this.velocity.set(0, 0, 0);
    this.isFalling = false;
  }

  /**
   * Get the direction the player is looking
   */
  getLookDirection(): THREE.Vector3 {
    const dir = new THREE.Vector3(0, 0, -1);
    dir.applyEuler(new THREE.Euler(this.pitch, this.yaw, 0, 'YXZ'));
    return dir;
  }

  /**
   * Get the position of the player's eyes (camera)
   */
  getEyePosition(): THREE.Vector3 {
    return new THREE.Vector3(
      this.position.x,
      this.position.y + PLAYER_HEIGHT,
      this.position.z
    );
  }

  isKeyDown(code: string): boolean {
    return this.keys.has(code);
  }
}
