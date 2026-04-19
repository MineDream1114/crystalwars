import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import { PLAYER_CONFIG } from '../config';
import type { InputManager } from '../systems/InputManager';
import type { BlockWorld } from '../world/BlockWorld';

const LOOK_EULER = new THREE.Euler(0, 0, 0, 'YXZ');
const HALF_PI = Math.PI / 2;
const COYOTE_TIME = 0.14;
const JUMP_BUFFER_TIME = 0.18;

export class PlayerController {
  readonly camera: THREE.PerspectiveCamera;
  readonly controls: PointerLockControls;

  private velocity = new THREE.Vector3();
  private movement = new THREE.Vector3();
  private onGround = false;
  private coyoteTimer = 0;
  private jumpBufferTimer = 0;
  private jumpedThisFrame = false;
  private landedThisFrame = false;

  constructor(
    camera: THREE.PerspectiveCamera,
    domElement: HTMLElement,
    private readonly world: BlockWorld
  ) {
    this.camera = camera;
    this.controls = new PointerLockControls(camera, domElement);
  }

  setPosition(position: THREE.Vector3): void {
    this.controls.getObject().position.copy(position);
    this.velocity.set(0, 0, 0);
    this.onGround = false;
    this.coyoteTimer = 0;
    this.jumpBufferTimer = 0;
  }

  getPosition(): THREE.Vector3 {
    return this.controls.getObject().position;
  }

  getDirection(): THREE.Vector3 {
    return this.camera.getWorldDirection(new THREE.Vector3()).normalize();
  }

  lock(): void {
    this.controls.lock();
  }

  unlock(): void {
    this.controls.unlock();
  }

  isLocked(): boolean {
    return this.controls.isLocked;
  }

  getHorizontalVelocity(): THREE.Vector3 {
    return new THREE.Vector3(this.velocity.x, 0, this.velocity.z);
  }

  getVerticalVelocity(): number {
    return this.velocity.y;
  }

  isGrounded(): boolean {
    return this.onGround;
  }

  consumeJumpedThisFrame(): boolean {
    const jumped = this.jumpedThisFrame;
    this.jumpedThisFrame = false;
    return jumped;
  }

  consumeLandedThisFrame(): boolean {
    const landed = this.landedThisFrame;
    this.landedThisFrame = false;
    return landed;
  }

  addVerticalVelocity(amount: number): void {
    this.velocity.y = Math.max(this.velocity.y, amount);
    this.onGround = false;
  }

  update(delta: number, input: InputManager): void {
    this.jumpedThisFrame = false;
    this.landedThisFrame = false;
    const object = this.controls.getObject();
    const lookDelta = input.consumeLookDelta();
    if (lookDelta.x !== 0 || lookDelta.y !== 0) {
      this.applyLookDelta(lookDelta.x, lookDelta.y);
    }

    if (input.consumeJumpRequest()) {
      this.jumpBufferTimer = JUMP_BUFFER_TIME;
    } else {
      this.jumpBufferTimer = Math.max(0, this.jumpBufferTimer - delta);
    }

    if (this.onGround) {
      this.coyoteTimer = COYOTE_TIME;
    } else {
      this.coyoteTimer = Math.max(0, this.coyoteTimer - delta);
    }

    const moveForward = input.getMoveForward();
    const moveRight = input.getMoveRight();

    const forward = this.getDirection();
    forward.y = 0;
    if (forward.lengthSq() === 0) {
      forward.set(0, 0, -1);
    } else {
      forward.normalize();
    }

    const right = new THREE.Vector3()
      .crossVectors(forward, new THREE.Vector3(0, 1, 0))
      .normalize();

    this.movement.set(0, 0, 0);
    this.movement.addScaledVector(forward, moveForward);
    this.movement.addScaledVector(right, moveRight);
    if (this.movement.lengthSq() > 0) {
      this.movement.normalize();
    }

    const targetSpeed = input.isSprintPressed()
      ? PLAYER_CONFIG.sprintSpeed
      : PLAYER_CONFIG.walkSpeed;

    const damping = Math.exp(-10 * delta);
    this.velocity.x *= damping;
    this.velocity.z *= damping;
    this.velocity.x += this.movement.x * targetSpeed * (1 - damping);
    this.velocity.z += this.movement.z * targetSpeed * (1 - damping);

    if (this.jumpBufferTimer > 0 && (this.onGround || this.coyoteTimer > 0)) {
      this.velocity.y = PLAYER_CONFIG.jumpVelocity;
      this.onGround = false;
      this.coyoteTimer = 0;
      this.jumpBufferTimer = 0;
      this.jumpedThisFrame = true;
    }

    this.velocity.y -= PLAYER_CONFIG.gravity * delta;

    this.moveAxis(object, 'x', this.velocity.x * delta);
    this.moveAxis(object, 'z', this.velocity.z * delta);

    const movingDown = this.velocity.y <= 0;
    const hitVerticalCollision = this.moveAxis(object, 'y', this.velocity.y * delta);
    if (hitVerticalCollision && movingDown) {
      this.landedThisFrame = !this.onGround;
      this.onGround = true;
      this.velocity.y = 0;
    } else {
      this.onGround = false;
    }

    if (object.position.y < -20) {
      object.position.copy(this.world.getSpawnPoint());
      this.velocity.set(0, 0, 0);
    }
  }

  private moveAxis(
    object: THREE.Object3D,
    axis: 'x' | 'y' | 'z',
    amount: number
  ): boolean {
    if (amount === 0) {
      return false;
    }

    const stepCount = Math.max(1, Math.ceil(Math.abs(amount) / 0.12));
    const stepAmount = amount / stepCount;

    for (let step = 0; step < stepCount; step += 1) {
      object.position[axis] += stepAmount;
      if (this.collides(object.position)) {
        object.position[axis] -= stepAmount;
        this.velocity[axis] = 0;
        return true;
      }
    }

    return false;
  }

  private applyLookDelta(deltaX: number, deltaY: number): void {
    LOOK_EULER.setFromQuaternion(this.camera.quaternion);
    LOOK_EULER.y -= deltaX * 0.002 * this.controls.pointerSpeed;
    LOOK_EULER.x -= deltaY * 0.002 * this.controls.pointerSpeed;
    LOOK_EULER.x = Math.max(
      HALF_PI - this.controls.maxPolarAngle,
      Math.min(HALF_PI - this.controls.minPolarAngle, LOOK_EULER.x)
    );
    this.camera.quaternion.setFromEuler(LOOK_EULER);
  }

  private collides(position: THREE.Vector3): boolean {
    const min = new THREE.Vector3(
      position.x - PLAYER_CONFIG.radius,
      position.y - PLAYER_CONFIG.eyeHeight,
      position.z - PLAYER_CONFIG.radius
    );
    const max = new THREE.Vector3(
      position.x + PLAYER_CONFIG.radius,
      position.y - PLAYER_CONFIG.eyeHeight + PLAYER_CONFIG.height,
      position.z + PLAYER_CONFIG.radius
    );
    return this.world.intersectsAabb(min, max);
  }
}
