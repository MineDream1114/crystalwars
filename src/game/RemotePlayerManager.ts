import * as THREE from 'three';
import { PLAYER_CONFIG } from '../config';
import type { MultiplayerPlayerSnapshot } from '../types';

interface RemoteActor {
  group: THREE.Group;
  label: THREE.Sprite;
  targetPosition: THREE.Vector3;
  targetYaw: number;
}

export class RemotePlayerManager {
  private readonly actors = new Map<string, RemoteActor>();

  constructor(private readonly scene: THREE.Scene) {}

  syncPlayers(players: MultiplayerPlayerSnapshot[], selfId: string): void {
    const activeIds = new Set<string>();

    for (const player of players) {
      if (player.id === selfId) {
        continue;
      }

      activeIds.add(player.id);
      const actor = this.actors.get(player.id) ?? this.createActor(player.id, player.name);
      actor.targetPosition.set(
        player.position.x,
        player.position.y - PLAYER_CONFIG.eyeHeight,
        player.position.z
      );
      actor.targetYaw = player.yaw;
    }

    for (const [id] of this.actors) {
      if (!activeIds.has(id)) {
        this.removeActor(id);
      }
    }
  }

  update(delta: number): void {
    const lerpFactor = 1 - Math.exp(-10 * delta);
    for (const actor of this.actors.values()) {
      actor.group.position.lerp(actor.targetPosition, lerpFactor);
      actor.group.rotation.y += (actor.targetYaw - actor.group.rotation.y) * lerpFactor;
    }
  }

  clear(): void {
    for (const [id] of this.actors) {
      this.removeActor(id);
    }
  }

  private createActor(id: string, name: string): RemoteActor {
    const group = new THREE.Group();

    const body = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.32, 0.82, 5, 10),
      new THREE.MeshStandardMaterial({
        color: 0x7b67ff,
        emissive: 0x24105b,
        emissiveIntensity: 0.22,
        roughness: 0.7,
        metalness: 0.1
      })
    );
    body.position.y = PLAYER_CONFIG.height * 0.52;

    const visor = new THREE.Mesh(
      new THREE.BoxGeometry(0.26, 0.12, 0.05),
      new THREE.MeshStandardMaterial({
        color: 0x8af0ff,
        emissive: 0x2470a1,
        emissiveIntensity: 0.45
      })
    );
    visor.position.set(0, PLAYER_CONFIG.height * 0.84, 0.3);

    const arrow = new THREE.Mesh(
      new THREE.ConeGeometry(0.12, 0.26, 4),
      new THREE.MeshStandardMaterial({
        color: 0xffb646,
        emissive: 0x864000,
        emissiveIntensity: 0.18
      })
    );
    arrow.position.set(0, PLAYER_CONFIG.height * 0.5, 0.46);
    arrow.rotation.x = Math.PI / 2;

    const label = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: this.createNameTexture(name),
        transparent: true,
        depthWrite: false
      })
    );
    label.position.set(0, PLAYER_CONFIG.height + 0.9, 0);
    label.scale.set(2.2, 0.55, 1);

    group.add(body, visor, arrow, label);
    this.scene.add(group);

    const actor: RemoteActor = {
      group,
      label,
      targetPosition: group.position.clone(),
      targetYaw: 0
    };
    this.actors.set(id, actor);
    return actor;
  }

  private removeActor(id: string): void {
    const actor = this.actors.get(id);
    if (!actor) {
      return;
    }

    this.scene.remove(actor.group);
    actor.group.traverse((object) => {
      const mesh = object as THREE.Mesh;
      if (mesh.geometry) {
        mesh.geometry.dispose();
      }
      const material = mesh.material;
      if (Array.isArray(material)) {
        material.forEach((entry) => entry.dispose());
      } else if (material) {
        material.dispose();
      }
    });
    actor.label.material.dispose();
    this.actors.delete(id);
  }

  private createNameTexture(name: string): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const context = canvas.getContext('2d');
    if (!context) {
      throw new Error('Unable to create remote player label context.');
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'rgba(12, 15, 26, 0.88)';
    context.strokeStyle = 'rgba(146, 115, 255, 0.9)';
    context.lineWidth = 4;
    this.roundRect(context, 6, 6, 244, 52, 18);
    context.fill();
    context.stroke();
    context.font = '700 26px Rajdhani, sans-serif';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillStyle = '#f4f6ff';
    context.fillText(name, 128, 33);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }

  private roundRect(
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number
  ): void {
    context.beginPath();
    context.moveTo(x + radius, y);
    context.lineTo(x + width - radius, y);
    context.quadraticCurveTo(x + width, y, x + width, y + radius);
    context.lineTo(x + width, y + height - radius);
    context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    context.lineTo(x + radius, y + height);
    context.quadraticCurveTo(x, y + height, x, y + height - radius);
    context.lineTo(x, y + radius);
    context.quadraticCurveTo(x, y, x + radius, y);
    context.closePath();
  }
}
