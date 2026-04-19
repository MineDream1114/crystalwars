import * as THREE from 'three';
import { TIER_COLORS } from '../config';
import type { GameState } from '../state/GameState';
import type { HotbarItemId, ToolTier } from '../types';

function tierHex(tier?: ToolTier): number {
  return Number(`0x${(TIER_COLORS[tier ?? 'basic'] ?? '#d9d9d9').replace('#', '')}`);
}

export class ViewModel {
  private readonly root = new THREE.Group();
  private activeItem: THREE.Object3D | null = null;
  private signature = '';
  private useImpulse = 0;
  private time = 0;

  constructor(
    private readonly camera: THREE.PerspectiveCamera,
    private readonly state: GameState
  ) {
    this.root.position.set(0.55, -0.55, -1);
    this.root.rotation.set(-0.16, 0.44, -0.1);
    this.camera.add(this.root);
    this.refreshModel();
  }

  refresh(): void {
    this.refreshModel();
  }

  triggerUse(): void {
    this.useImpulse = 1;
  }

  update(delta: number, horizontalSpeed: number, visible: boolean): void {
    this.refreshModel();
    this.time += delta;
    this.root.visible = visible;
    if (!visible) {
      return;
    }

    const bob = Math.sin(this.time * (6 + horizontalSpeed * 0.45)) * Math.min(0.035, horizontalSpeed * 0.004);
    const sway = Math.cos(this.time * 3.8) * 0.012;
    this.useImpulse = Math.max(0, this.useImpulse - delta * 4.4);
    const swing = Math.sin((1 - this.useImpulse) * Math.PI) * this.useImpulse;

    this.root.position.set(0.55 + sway, -0.56 + bob - swing * 0.1, -1 + swing * 0.08);
    this.root.rotation.set(
      -0.16 - bob * 0.8 - swing * 0.48,
      0.44 - sway * 2.8 + swing * 0.26,
      -0.1 - swing * 0.42
    );
  }

  private refreshModel(): void {
    const item = this.state.getCurrentItem();
    const signature = `${item}:${this.getTier(item)}:${this.state.inventory.hasBow}`;
    if (signature === this.signature) {
      return;
    }
    this.signature = signature;

    if (this.activeItem) {
      this.root.remove(this.activeItem);
    }

    this.activeItem = this.createItemMesh(item);
    this.root.add(this.activeItem);
  }

  private getTier(item: HotbarItemId): ToolTier | undefined {
    if (item === 'sword' || item === 'pickaxe' || item === 'shovel') {
      return this.state.inventory.toolTiers[item];
    }
    return undefined;
  }

  private createItemMesh(item: HotbarItemId): THREE.Object3D {
    switch (item) {
      case 'sword':
        return this.createSword(this.state.inventory.toolTiers.sword);
      case 'pickaxe':
        return this.createPickaxe(this.state.inventory.toolTiers.pickaxe);
      case 'shovel':
        return this.createShovel(this.state.inventory.toolTiers.shovel);
      case 'bow':
        return this.createBow();
      case 'purpleDotter':
        return this.createDotter();
      case 'jumpPad':
        return this.createJumpPad();
      case 'blocks':
        return this.createBlock();
    }
  }

  private createSword(tier: ToolTier): THREE.Object3D {
    const group = new THREE.Group();
    const blade = new THREE.Mesh(
      new THREE.BoxGeometry(0.14, 1.22, 0.08),
      new THREE.MeshStandardMaterial({
        color: tierHex(tier),
        emissive: tierHex(tier),
        emissiveIntensity: tier === 'rainbow' ? 0.22 : 0.08,
        metalness: 0.58,
        roughness: 0.2
      })
    );
    const tip = new THREE.Mesh(
      new THREE.ConeGeometry(0.1, 0.28, 4),
      new THREE.MeshStandardMaterial({
        color: tierHex(tier),
        metalness: 0.6,
        roughness: 0.2
      })
    );
    tip.position.y = 0.74;
    tip.rotation.z = Math.PI / 4;
    const guard = new THREE.Mesh(
      new THREE.BoxGeometry(0.38, 0.08, 0.12),
      new THREE.MeshStandardMaterial({
        color: 0x7f69ff,
        emissive: 0x2d1a80,
        emissiveIntensity: 0.25,
        metalness: 0.5,
        roughness: 0.32
      })
    );
    guard.position.y = 0.04;
    const handle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.055, 0.065, 0.42, 8),
      new THREE.MeshStandardMaterial({
        color: 0x4d2f20,
        roughness: 0.82
      })
    );
    handle.position.y = -0.25;
    const pommel = new THREE.Mesh(
      new THREE.SphereGeometry(0.09, 10, 10),
      new THREE.MeshStandardMaterial({
        color: 0xffc859,
        emissive: 0x7a4412,
        emissiveIntensity: 0.28,
        metalness: 0.35,
        roughness: 0.28
      })
    );
    pommel.position.y = -0.47;
    group.add(blade, tip, guard, handle, pommel);
    group.position.set(0.18, -0.08, 0.08);
    group.rotation.set(-0.26, -0.12, 0.55);
    return group;
  }

  private createPickaxe(tier: ToolTier): THREE.Object3D {
    const group = new THREE.Group();
    const handle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.06, 1.16, 8),
      new THREE.MeshStandardMaterial({
        color: 0x6b4327,
        roughness: 0.85
      })
    );
    const head = new THREE.Mesh(
      new THREE.BoxGeometry(0.62, 0.12, 0.16),
      new THREE.MeshStandardMaterial({
        color: tierHex(tier),
        emissive: tierHex(tier),
        emissiveIntensity: tier === 'rainbow' ? 0.2 : 0.06,
        metalness: 0.55,
        roughness: 0.25
      })
    );
    head.position.y = 0.34;
    const spikeLeft = new THREE.Mesh(
      new THREE.ConeGeometry(0.08, 0.26, 4),
      new THREE.MeshStandardMaterial({
        color: tierHex(tier),
        metalness: 0.55,
        roughness: 0.24
      })
    );
    spikeLeft.position.set(-0.36, 0.34, 0);
    spikeLeft.rotation.z = Math.PI / 2;
    const spikeRight = spikeLeft.clone();
    spikeRight.position.x = 0.36;
    spikeRight.rotation.z = -Math.PI / 2;
    group.add(handle, head, spikeLeft, spikeRight);
    group.position.set(0.1, -0.12, 0.14);
    group.rotation.set(0.2, 0.14, 0.74);
    return group;
  }

  private createShovel(tier: ToolTier): THREE.Object3D {
    const group = new THREE.Group();
    const handle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.055, 1.02, 8),
      new THREE.MeshStandardMaterial({
        color: 0x6f4529,
        roughness: 0.84
      })
    );
    const spade = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.11, 0.3, 5),
      new THREE.MeshStandardMaterial({
        color: tierHex(tier),
        emissive: tierHex(tier),
        emissiveIntensity: tier === 'rainbow' ? 0.18 : 0.05,
        metalness: 0.45,
        roughness: 0.25
      })
    );
    spade.position.y = 0.44;
    spade.rotation.x = Math.PI / 2;
    const grip = new THREE.Mesh(
      new THREE.TorusGeometry(0.1, 0.025, 6, 14),
      new THREE.MeshStandardMaterial({
        color: 0xffc25b,
        metalness: 0.3,
        roughness: 0.28
      })
    );
    grip.position.y = -0.46;
    group.add(handle, spade, grip);
    group.position.set(0.18, -0.14, 0.06);
    group.rotation.set(-0.22, 0.18, 0.62);
    return group;
  }

  private createBow(): THREE.Object3D {
    const group = new THREE.Group();
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, -0.45, 0),
      new THREE.Vector3(0.22, 0, 0.02),
      new THREE.Vector3(0, 0.45, 0)
    ]);
    const bow = new THREE.Mesh(
      new THREE.TubeGeometry(curve, 18, 0.04, 8, false),
      new THREE.MeshStandardMaterial({
        color: 0x8d58ff,
        emissive: 0x361265,
        emissiveIntensity: 0.22,
        roughness: 0.3,
        metalness: 0.18
      })
    );
    const string = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, -0.45, 0),
        new THREE.Vector3(-0.06, 0, 0),
        new THREE.Vector3(0, 0.45, 0)
      ]),
      new THREE.LineBasicMaterial({ color: 0xe7e3ff })
    );
    const arrow = new THREE.Mesh(
      new THREE.CylinderGeometry(0.014, 0.014, 0.72, 6),
      new THREE.MeshStandardMaterial({
        color: 0xf4bb63,
        roughness: 0.45
      })
    );
    arrow.rotation.z = Math.PI / 2;
    arrow.position.set(-0.1, 0, 0);
    group.add(bow, string, arrow);
    group.position.set(0.12, -0.18, 0.16);
    group.rotation.set(-0.04, 0.22, 0.45);
    return group;
  }

  private createDotter(): THREE.Object3D {
    const group = new THREE.Group();
    const orb = new THREE.Mesh(
      new THREE.SphereGeometry(0.18, 14, 14),
      new THREE.MeshStandardMaterial({
        color: 0xb34cff,
        emissive: 0x6a22bf,
        emissiveIntensity: 0.8,
        roughness: 0.22,
        metalness: 0.08
      })
    );
    const halo = new THREE.Mesh(
      new THREE.TorusGeometry(0.24, 0.02, 6, 20),
      new THREE.MeshStandardMaterial({
        color: 0xeec5ff,
        emissive: 0x9850f8,
        emissiveIntensity: 0.6,
        roughness: 0.2
      })
    );
    halo.rotation.x = Math.PI / 2;
    group.add(orb, halo);
    group.position.set(0.22, -0.28, 0.12);
    group.rotation.set(-0.1, 0.28, 0.2);
    return group;
  }

  private createJumpPad(): THREE.Object3D {
    const group = new THREE.Group();
    const base = new THREE.Mesh(
      new THREE.CylinderGeometry(0.28, 0.34, 0.1, 16),
      new THREE.MeshStandardMaterial({
        color: 0x39456d,
        roughness: 0.45,
        metalness: 0.32
      })
    );
    const top = new THREE.Mesh(
      new THREE.CylinderGeometry(0.22, 0.24, 0.06, 16),
      new THREE.MeshStandardMaterial({
        color: 0x8554ff,
        emissive: 0x351a70,
        emissiveIntensity: 0.45,
        roughness: 0.25
      })
    );
    top.position.y = 0.07;
    const arrow = new THREE.Mesh(
      new THREE.ConeGeometry(0.08, 0.22, 4),
      new THREE.MeshStandardMaterial({
        color: 0xffcf64,
        emissive: 0x7a4d12,
        emissiveIntensity: 0.24
      })
    );
    arrow.position.y = 0.24;
    group.add(base, top, arrow);
    group.position.set(0.26, -0.32, 0.08);
    group.rotation.set(0.12, 0.26, 0.12);
    return group;
  }

  private createBlock(): THREE.Object3D {
    const block = new THREE.Mesh(
      new THREE.BoxGeometry(0.34, 0.34, 0.34),
      new THREE.MeshStandardMaterial({
        color: 0x8c6847,
        roughness: 0.78
      })
    );
    block.position.set(0.28, -0.26, 0.06);
    block.rotation.set(0.24, 0.54, -0.08);
    return block;
  }
}
