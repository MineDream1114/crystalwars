import * as THREE from 'three';
import {
  BOW_CONFIG,
  DOTTER_CONFIG,
  JUMP_PAD_CONFIG,
  MOBILE_CONFIG,
  MULTIPLAYER_CONFIG,
  PLAYER_CONFIG,
  SHOP_ITEMS,
  TOOL_STATS,
  WORLD_CONFIG
} from '../config';
import { MultiplayerClient } from '../network/MultiplayerClient';
import { PlayerController } from '../player/PlayerController';
import { ViewModel } from './ViewModel';
import { GameState } from '../state/GameState';
import { AudioManager } from '../systems/AudioManager';
import { InputManager } from '../systems/InputManager';
import type {
  EquipmentId,
  HotbarItemId,
  MultiplayerRoomSnapshot
} from '../types';
import { TouchControls } from '../ui/TouchControls';
import { UIManager } from '../ui/UIManager';
import { BlockWorld } from '../world/BlockWorld';
import { RemotePlayerManager } from './RemotePlayerManager';

interface Projectile {
  type: 'arrow' | 'dotter';
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  gravityScale: number;
  ttl: number;
}

type LockableScreenOrientation = ScreenOrientation & {
  lock?: (orientation: string) => Promise<void>;
};

export class Game {
  private readonly scene = new THREE.Scene();
  private readonly renderer = new THREE.WebGLRenderer({ antialias: true });
  private readonly camera = new THREE.PerspectiveCamera(75, 1, 0.1, 300);
  private readonly world = new BlockWorld(this.scene);
  private readonly state = new GameState();
  private readonly input = new InputManager();
  private readonly audio = new AudioManager();
  private readonly multiplayer = new MultiplayerClient();
  private readonly player: PlayerController;
  private readonly ui: UIManager;
  private readonly touchControls: TouchControls;
  private readonly viewModel: ViewModel;
  private readonly remotePlayers: RemotePlayerManager;
  private readonly clock = new THREE.Clock();
  private readonly raycaster = new THREE.Raycaster();
  private readonly projectiles: Projectile[] = [];
  private readonly cooldowns = new Map<HotbarItemId, number>();
  private ignoreNextUnlockPause = false;
  private presenceTimer = 0;
  private crystalHpState: Record<string, number> = {};

  constructor(private readonly mount: HTMLElement) {
    this.renderer.setPixelRatio(this.getTargetPixelRatio());
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = false;
    this.renderer.domElement.className = 'game-canvas';
    this.mount.appendChild(this.renderer.domElement);

    this.scene.background = new THREE.Color(0x96cceb);
    this.scene.fog = new THREE.Fog(0x96cceb, 38, 128);

    const ambient = new THREE.HemisphereLight(0xf1e4ff, 0x20304c, 1.2);
    const sun = new THREE.DirectionalLight(0xffe8b3, 1.55);
    sun.position.set(12, 26, 18);
    this.scene.add(ambient, sun);

    this.player = new PlayerController(
      this.camera,
      this.renderer.domElement,
      this.world
    );
    this.scene.add(this.player.controls.getObject());
    this.viewModel = new ViewModel(this.camera, this.state);
    this.remotePlayers = new RemotePlayerManager(this.scene);

    this.ui = new UIManager(this.state, {
      onStart: () => {
        this.audio.activate();
        void this.startOfflineGame();
      },
      onJoinPublic: () => {
        this.audio.activate();
        void this.joinPublicServer();
      },
      onJoinServer: () => {
        this.audio.activate();
        void this.joinServer(this.state.getServerAddress());
      },
      onResume: () => {
        this.audio.activate();
        this.resumeGame();
      },
      onRestart: () => {
        this.audio.activate();
        void this.restartCurrentMode();
      },
      onToggleSettings: (open) => this.toggleSettings(open),
      onBuy: (id) => this.buyItem(id),
      onCloseShop: () => this.closeShop(),
      onDismissTutorial: () => this.state.hideTutorial(),
      onSelectHotbar: (index) => this.state.setHotbarIndex(index),
      onSetLanguage: (language) => this.state.setLanguage(language),
      onSetPlayerName: (name) => this.state.setPlayerName(name),
      onSetServerAddress: (address) => this.state.setServerAddress(address),
      onCopyInvite: () => void this.copyInviteAddress(),
      onSetTouchSensitivity: (value) => this.state.setTouchSensitivity(value),
      onSetLeftHanded: (enabled) => this.state.setLeftHanded(enabled),
      onSetAutoSprint: (enabled) => this.state.setAutoSprintEnabled(enabled),
      onSetHaptics: (enabled) => this.state.setHapticsEnabled(enabled)
    });
    this.touchControls = new TouchControls(this.state, this.input, {
      onUse: () => {
        if (this.state.phase === 'playing') {
          this.useCurrentItem();
        }
      },
      onInteract: () => {
        if (this.state.phase === 'playing') {
          this.handleInteraction();
        }
      },
      onPause: () => this.handleTouchPause(),
      onToggleFullscreen: () => void this.toggleFullscreen()
    });

    this.bindEvents();
    this.multiplayer.subscribeRoom((room) => this.applyMultiplayerRoomState(room));
    this.multiplayer.subscribeError((errorKey) => {
      this.state.setMultiplayerError(errorKey);
      this.remotePlayers.clear();
      this.state.setPhase('title');
      if (this.player.isLocked()) {
        this.ignoreNextUnlockPause = true;
        this.player.unlock();
      }
    });
    this.world.generate();
    this.player.setPosition(this.world.getSpawnPoint());
    this.animate();
  }

  private bindEvents(): void {
    window.addEventListener('resize', this.onResize);
    window.addEventListener('keydown', this.onKeyDown);
    document.addEventListener('visibilitychange', this.onVisibilityChange);
    window.addEventListener(
      'wheel',
      this.onWheel,
      { passive: false }
    );
    if (!this.input.isTouchDevice()) {
      window.addEventListener('mousedown', this.onMouseDown);
    }

    this.player.controls.addEventListener('unlock', () => {
      if (this.ignoreNextUnlockPause) {
        this.ignoreNextUnlockPause = false;
        return;
      }
      if (this.state.phase === 'playing') {
        this.state.setPhase('paused');
      }
    });
  }

  private async startOfflineGame(): Promise<void> {
    this.audio.activate();
    await this.multiplayer.leave();
    this.state.leaveMultiplayerSession();
    this.state.resetRun();
    this.prepareWorldForMatch();
    this.state.startPlaying();
    this.lockPlayerIfNeeded();
    void this.enterTouchFullscreen();
  }

  private async restartCurrentMode(): Promise<void> {
    if (this.state.isOnlineMatch()) {
      await this.joinServer(this.state.multiplayer.roomId || this.state.getServerAddress());
      return;
    }
    await this.startOfflineGame();
  }

  private async joinPublicServer(): Promise<void> {
    this.state.setServerAddress(MULTIPLAYER_CONFIG.publicServerAddress);
    await this.joinServer(MULTIPLAYER_CONFIG.publicServerAddress);
  }

  private async joinServer(address: string): Promise<void> {
    const roomAddress = address.trim() || MULTIPLAYER_CONFIG.publicServerAddress;
    this.state.setServerAddress(roomAddress);
    this.state.setMultiplayerConnecting();
    this.audio.activate();
    this.remotePlayers.clear();

    try {
      const { playerId, room } = await this.multiplayer.join(
        roomAddress,
        this.state.getPlayerName()
      );
      this.state.resetRun(true);
      this.prepareWorldForMatch(room.seed);
      this.state.setMultiplayerSession(playerId, room);
      this.state.startPlaying();
      this.state.pushNotification('notifications.joinedServer', {
        address: room.roomId
      });
      this.applyMultiplayerRoomState(room, true);
      this.lockPlayerIfNeeded();
      void this.enterTouchFullscreen();
    } catch {
      this.state.setMultiplayerError('multiplayer.errors.connection');
    }
  }

  private prepareWorldForMatch(seed?: number): void {
    this.disposeProjectiles();
    this.cooldowns.clear();
    this.presenceTimer = 0;
    this.crystalHpState = {};
    this.remotePlayers.clear();
    this.world.generate(seed);
    this.player.setPosition(this.world.getSpawnPoint());
    this.viewModel.refresh();
  }

  private lockPlayerIfNeeded(): void {
    if (!this.input.isTouchDevice()) {
      this.player.lock();
    }
  }

  private getTargetPixelRatio(): number {
    const maxRatio = this.input.isTouchDevice() ? MOBILE_CONFIG.maxPixelRatio : 2;
    return Math.min(window.devicePixelRatio, maxRatio);
  }

  private async enterTouchFullscreen(): Promise<void> {
    if (!this.input.isTouchDevice()) {
      return;
    }
    if (document.fullscreenElement || !document.fullscreenEnabled) {
      return;
    }
    try {
      await document.documentElement.requestFullscreen();
      await this.lockLandscapeOrientation();
    } catch {
      // Ignore browsers that block fullscreen or orientation lock.
    }
  }

  private async toggleFullscreen(): Promise<void> {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
        return;
      }
      if (document.fullscreenEnabled) {
        await document.documentElement.requestFullscreen();
        await this.lockLandscapeOrientation();
      }
    } catch {
      // Ignore fullscreen API failures on unsupported browsers.
    }
  }

  private async lockLandscapeOrientation(): Promise<void> {
    const orientation = screen.orientation as LockableScreenOrientation | undefined;
    if (!orientation?.lock) {
      return;
    }
    try {
      await orientation.lock('landscape');
    } catch {
      // Ignore unsupported or user-blocked orientation locks.
    }
  }

  private handleTouchPause(): void {
    if (this.state.phase === 'shop') {
      this.closeShop();
      return;
    }

    if (this.state.showSettings) {
      this.toggleSettings(false);
      return;
    }

    if (this.state.phase === 'playing') {
      this.state.setPhase('paused');
      return;
    }

    if (this.state.phase === 'paused') {
      this.resumeGame();
    }
  }

  private async copyInviteAddress(): Promise<void> {
    const address = this.state.multiplayer.roomId || this.state.getServerAddress();
    if (!address) {
      return;
    }

    try {
      await navigator.clipboard.writeText(address);
      this.state.pushNotification('notifications.copiedInvite', { address });
    } catch {
      this.state.pushNotification('notifications.copiedInvite', { address });
    }
  }

  private applyMultiplayerRoomState(
    room: MultiplayerRoomSnapshot,
    initialSync = false
  ): void {
    const previousPhase = this.state.phase;
    const previousDestroyed = new Set(this.state.getDestroyedCrystalIds());
    const previousCrystalHp = { ...this.crystalHpState };

    this.state.setMultiplayerPlayers(room.players);
    this.world.applyCrystalSnapshot(room.crystalHp, room.destroyedCrystals);
    this.world.applyMultiplayerWorldState(room.blockOverrides, room.jumpPads);
    this.remotePlayers.syncPlayers(room.players, this.multiplayer.getPlayerId());
    this.crystalHpState = { ...room.crystalHp };

    if (initialSync) {
      this.state.syncDestroyedCrystals(room.destroyedCrystals);
    } else {
      const newlyDestroyed = room.destroyedCrystals.filter(
        (id) => !previousDestroyed.has(id)
      );
      for (const crystalId of newlyDestroyed) {
        this.audio.playCue('crystalBreak');
        this.state.addCurrency('emerald', 3);
        this.state.collectCrystal(crystalId);
      }

      if (newlyDestroyed.length === 0) {
        const tookDamage = Object.entries(room.crystalHp).some(
          ([crystalId, hp]) =>
            previousCrystalHp[crystalId] !== undefined &&
            hp < previousCrystalHp[crystalId]
        );
        if (tookDamage) {
          this.audio.playCue('crystalHit');
        }
      }
    }

    if (this.state.phase === 'win' && previousPhase !== 'win') {
      this.audio.playCue('win');
      if (this.player.isLocked()) {
        this.ignoreNextUnlockPause = true;
        this.player.unlock();
      }
    }
  }

  private syncMultiplayerPresence(delta: number): void {
    if (!this.state.isOnlineMatch()) {
      return;
    }

    this.presenceTimer -= delta;
    if (this.presenceTimer > 0) {
      return;
    }

    this.presenceTimer = MULTIPLAYER_CONFIG.presenceInterval;
    const direction = this.player.getDirection();
    void this.multiplayer.sendPresence({
      position: {
        x: this.player.getPosition().x,
        y: this.player.getPosition().y,
        z: this.player.getPosition().z
      },
      yaw: Math.atan2(direction.x, direction.z),
      health: this.state.health,
      currentItem: this.state.getCurrentItem()
    });
  }

  private resumeGame(): void {
    this.audio.activate();
    this.state.setPhase('playing');
    this.lockPlayerIfNeeded();
    void this.enterTouchFullscreen();
  }

  private toggleSettings(open: boolean): void {
    if (open && this.state.phase === 'playing' && this.player.isLocked()) {
      this.ignoreNextUnlockPause = true;
      this.player.unlock();
      this.state.setPhase('paused');
    }
    this.state.setSettingsOpen(open);
  }

  private openShop(): void {
    this.audio.activate();
    this.audio.playCue('shopOpen');
    this.state.setPhase('shop');
    if (this.player.isLocked()) {
      this.ignoreNextUnlockPause = true;
      this.player.unlock();
    }
  }

  private closeShop(): void {
    this.state.setPhase('playing');
    if (!this.input.isTouchDevice()) {
      this.player.lock();
    }
  }

  private buyItem(id: string): void {
    this.audio.activate();
    const entry = SHOP_ITEMS.find((item) => item.id === id);
    if (!entry) {
      return;
    }
    const result = this.state.tryPurchase(entry);
    this.audio.playCue(result.success ? 'buy' : 'error');
  }

  private animate = (): void => {
    const delta = Math.min(this.clock.getDelta(), 0.05);
    const gameplayActive = this.state.phase === 'playing';

    if (gameplayActive) {
      this.player.update(delta, this.input);
      if (this.player.consumeJumpedThisFrame()) {
        this.audio.playCue('jump');
      }
      if (this.player.consumeLandedThisFrame()) {
        this.audio.playCue('land');
      }
      if (this.input.consumeInteract()) {
        this.handleInteraction();
      }
      if (this.input.consumeTutorialDismissed() && this.state.showTutorial) {
        this.state.hideTutorial();
      }
      if (this.world.checkJumpPad(this.player.getPosition())) {
        this.audio.playCue('jumpPad');
        this.player.addVerticalVelocity(JUMP_PAD_CONFIG.launchVelocity);
      }
      this.state.setInteractionPrompt(
        this.world.getInteractionPrompt(this.player.getPosition())
      );

      if (this.player.getPosition().y < WORLD_CONFIG.oceanY + 1.2) {
        this.audio.playCue('hurt');
        this.state.damagePlayer(14);
        this.player.setPosition(this.world.getSpawnPoint());
      }

      this.syncMultiplayerPresence(delta);
    }

    this.world.update(delta, gameplayActive);
    this.remotePlayers.update(delta);
    this.audio.update(delta, {
      phase: this.state.phase,
      grounded: this.player.isGrounded(),
      horizontalSpeed: this.player.getHorizontalVelocity().length()
    });
    this.viewModel.update(
      delta,
      this.player.getHorizontalVelocity().length(),
      gameplayActive
    );
    this.updateProjectiles(delta);
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate);
  };

  private updateProjectiles(delta: number): void {
    for (let index = this.projectiles.length - 1; index >= 0; index -= 1) {
      const projectile = this.projectiles[index];
      projectile.ttl -= delta;
      projectile.velocity.y -= PLAYER_CONFIG.gravity * projectile.gravityScale * delta;
      projectile.mesh.position.addScaledVector(projectile.velocity, delta);

      if (projectile.type === 'arrow') {
        const direction = projectile.velocity.clone().normalize();
        projectile.mesh.quaternion.setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          direction
        );
      }

      const crystal =
        projectile.type === 'arrow'
          ? this.world.getCrystalNear(projectile.mesh.position, 1.2)
          : null;
      if (crystal) {
        this.applyCrystalDamage(crystal.id, BOW_CONFIG.damage);
        this.removeProjectile(index);
        continue;
      }

      if (
        projectile.ttl <= 0 ||
        this.world.pointInsideSolid(projectile.mesh.position) ||
        projectile.mesh.position.y < -8
      ) {
        if (projectile.type === 'dotter') {
          this.audio.playCue('teleport');
          const safePosition = this.world.findSafeTeleport(projectile.mesh.position);
          this.player.setPosition(safePosition);
        }
        this.removeProjectile(index);
      }
    }
  }

  private removeProjectile(index: number): void {
    const [projectile] = this.projectiles.splice(index, 1);
    if (projectile) {
      this.scene.remove(projectile.mesh);
      projectile.mesh.geometry.dispose();
      (projectile.mesh.material as THREE.Material).dispose();
    }
  }

  private disposeProjectiles(): void {
    for (let index = this.projectiles.length - 1; index >= 0; index -= 1) {
      this.removeProjectile(index);
    }
  }

  private handleInteraction(): void {
    this.audio.activate();
    const prompt = this.world.getInteractionPrompt(this.player.getPosition());
    if (!prompt) {
      return;
    }

    if (prompt.type === 'merchant') {
      this.openShop();
      return;
    }

    if (prompt.type === 'generator') {
      const resources = this.world.collectGenerator(prompt.id);
      if (!resources) {
        return;
      }
      if (resources.copper <= 0 && resources.gold <= 0) {
        return;
      }
      this.audio.playCue('collect');
      this.state.addCurrency('copper', resources.copper);
      this.state.addCurrency('gold', resources.gold);
      this.state.pushNotification('notifications.collectedGenerator', resources);
      return;
    }

    if (prompt.type === 'machine') {
      const resources = this.world.collectMachine(prompt.id);
      if (!resources) {
        return;
      }
      if (resources.gold <= 0 && resources.diamond <= 0) {
        return;
      }
      this.audio.playCue('collect');
      this.state.addCurrency('gold', resources.gold);
      this.state.addCurrency('diamond', resources.diamond);
      this.state.pushNotification('notifications.collectedMachine', resources);
      return;
    }

    if (prompt.type === 'chest') {
      const loot = this.world.openChest(prompt.id);
      if (!loot) {
        return;
      }
      this.audio.playCue('interact');
      this.audio.playCue('collect');
      this.state.addCurrency('emerald', loot.emerald);
      this.state.addCurrency('gold', loot.gold);
      this.state.addArrows(loot.arrows);
      this.state.pushNotification('notifications.chestOpened', loot);
    }
  }

  private onMouseDown = (event: MouseEvent): void => {
    if (event.button !== 0) {
      return;
    }
    if (this.state.phase !== 'playing' || !this.player.isLocked()) {
      return;
    }
    this.audio.activate();
    event.preventDefault();
    this.useCurrentItem();
  };

  private onWheel = (event: WheelEvent): void => {
    if (this.state.phase !== 'playing') {
      return;
    }
    event.preventDefault();
    this.state.cycleHotbar(event.deltaY > 0 ? 1 : -1);
  };

  private onResize = (): void => {
    this.renderer.setPixelRatio(this.getTargetPixelRatio());
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  };

  private onVisibilityChange = (): void => {
    if (document.visibilityState !== 'hidden') {
      return;
    }

    if (this.state.phase !== 'playing') {
      return;
    }

    if (this.player.isLocked()) {
      this.ignoreNextUnlockPause = true;
      this.player.unlock();
    }
    this.state.setPhase('paused');
  };

  private onKeyDown = (event: KeyboardEvent): void => {
    if (/^Digit[1-7]$/.test(event.code) && this.state.phase === 'playing') {
      this.state.setHotbarIndex(Number(event.code.replace('Digit', '')) - 1);
      return;
    }

    if (event.code === 'Escape') {
      if (this.state.phase === 'shop') {
        this.closeShop();
      } else if (this.state.showSettings) {
        this.toggleSettings(false);
      } else if (this.state.phase === 'paused') {
        this.resumeGame();
      }
    }
  };

  private useCurrentItem(): void {
    this.viewModel.triggerUse();
    const item = this.state.getCurrentItem();
    const now = performance.now() * 0.001;
    const cooldown = this.cooldowns.get(item) ?? 0;
    if (cooldown > now) {
      return;
    }

    if (item === 'sword' || item === 'pickaxe' || item === 'shovel') {
      const tier = this.state.getToolTier(item as EquipmentId);
      const stats = TOOL_STATS[item as EquipmentId][tier];
      this.cooldowns.set(item, now + stats.cooldown);
      this.audio.playCue('swing');
      this.handleMeleeTool(item as EquipmentId, stats.damage, stats.blockDamage, stats.range);
      return;
    }

    if (item === 'bow') {
      if (!this.state.inventory.hasBow || !this.state.useArrow()) {
        this.audio.playCue('error');
        return;
      }
      this.cooldowns.set(item, now + BOW_CONFIG.cooldown);
      this.audio.playCue('bow');
      this.spawnProjectile('arrow', BOW_CONFIG.speed, BOW_CONFIG.gravityScale, 2.6);
      return;
    }

    if (item === 'blocks') {
      this.placeBlock();
      return;
    }

    if (item === 'purpleDotter') {
      if (!this.state.useDotter()) {
        this.audio.playCue('error');
        return;
      }
      this.cooldowns.set(item, now + DOTTER_CONFIG.cooldown);
      this.audio.playCue('dotter');
      this.spawnProjectile('dotter', DOTTER_CONFIG.speed, DOTTER_CONFIG.gravityScale, 3.2);
      return;
    }

    if (item === 'jumpPad') {
      this.placeJumpPad();
    }
  }

  private handleMeleeTool(
    item: EquipmentId,
    crystalDamage: number,
    blockDamage: number,
    range: number
  ): void {
    this.raycaster.setFromCamera(new THREE.Vector2(0, 0), this.camera);
    const crystalHit = this.world.raycastCrystal(this.raycaster, range);
    const blockHit = this.world.raycastBlock(this.raycaster, range);

    if (
      crystalHit &&
      (!blockHit || crystalHit.distance <= blockHit.distance)
    ) {
      this.applyCrystalDamage(crystalHit.id, crystalDamage);
      return;
    }

    if (!blockHit) {
      return;
    }

    const multiplier = this.getBlockDamageMultiplier(item, blockHit.block.type);
    const result = this.world.damageBlock(
      blockHit.key,
      blockDamage * multiplier
    );

    if (!result.destroyed || !result.block) {
      return;
    }

    this.audio.playCue('mine');
    if (this.state.isOnlineMatch()) {
      void this.multiplayer.syncBlockRemoval(blockHit.key);
    }
    this.rewardBrokenBlock(result.block.type);
  }

  private getBlockDamageMultiplier(
    item: EquipmentId,
    blockType: string
  ): number {
    if (item === 'pickaxe' && (blockType === 'stone' || blockType.includes('Ore'))) {
      return 1.5;
    }
    if (
      item === 'shovel' &&
      (blockType === 'grass' || blockType === 'dirt' || blockType === 'sand')
    ) {
      return 1.6;
    }
    if (item === 'sword' && blockType === 'bridge') {
      return 1.15;
    }
    return 0.65;
  }

  private rewardBrokenBlock(blockType: string): void {
    if (blockType === 'copperOre') {
      this.state.addCurrency('copper', 1);
      this.state.pushNotification('notifications.minedResource', {
        resource: this.state.localizer.t('resources.copper')
      });
      return;
    }
    if (blockType === 'goldOre') {
      this.state.addCurrency('gold', 1);
      this.state.pushNotification('notifications.minedResource', {
        resource: this.state.localizer.t('resources.gold')
      });
      return;
    }
    if (blockType === 'emeraldOre') {
      this.state.addCurrency('emerald', 2);
      this.state.pushNotification('notifications.minedResource', {
        resource: this.state.localizer.t('resources.emerald')
      });
      return;
    }
    if (blockType === 'diamondOre') {
      this.state.addCurrency('diamond', 1);
      this.state.pushNotification('notifications.minedResource', {
        resource: this.state.localizer.t('resources.diamond')
      });
      return;
    }
    this.state.addBlocks(1);
  }

  private applyCrystalDamage(id: string, amount: number): void {
    if (this.state.isOnlineMatch()) {
      void this.multiplayer.damageCrystal(id, amount);
      return;
    }

    const result = this.world.damageCrystal(id, amount);
    if (!result) {
      return;
    }
    if (result.destroyed) {
      this.audio.playCue('crystalBreak');
      this.state.addCurrency('emerald', 3);
      this.state.collectCrystal(id);
      if (this.state.phase === 'win' && this.player.isLocked()) {
        this.audio.playCue('win');
        this.ignoreNextUnlockPause = true;
        this.player.unlock();
      }
      return;
    }
    this.audio.playCue('crystalHit');
    this.state.pushNotification('notifications.crystalHit', {
      hp: result.hp
    });
  }

  private spawnProjectile(
    type: 'arrow' | 'dotter',
    speed: number,
    gravityScale: number,
    ttl: number
  ): void {
    const direction = this.player.getDirection();
    const origin = this.player
      .getPosition()
      .clone()
      .add(direction.clone().multiplyScalar(0.9))
      .add(new THREE.Vector3(0, -0.2, 0));

    const mesh =
      type === 'arrow'
        ? new THREE.Mesh(
            new THREE.CylinderGeometry(0.04, 0.04, 0.9, 6),
            new THREE.MeshStandardMaterial({
              color: 0xd8b47b,
              metalness: 0.1,
              roughness: 0.65
            })
          )
        : new THREE.Mesh(
            new THREE.SphereGeometry(0.18, 12, 12),
            new THREE.MeshStandardMaterial({
              color: 0xb14cff,
              emissive: 0x541986,
              emissiveIntensity: 0.6
            })
          );

    mesh.position.copy(origin);
    this.scene.add(mesh);
    this.projectiles.push({
      type,
      mesh,
      velocity: direction.multiplyScalar(speed).add(new THREE.Vector3(0, 1.2, 0)),
      gravityScale,
      ttl
    });
  }

  private placeBlock(): void {
    this.raycaster.setFromCamera(new THREE.Vector2(0, 0), this.camera);
    const hit = this.world.raycastBlock(this.raycaster, PLAYER_CONFIG.useRange);
    if (!hit) {
      return;
    }

    const x = hit.block.x + Math.round(hit.normal.x);
    const y = hit.block.y + Math.round(hit.normal.y);
    const z = hit.block.z + Math.round(hit.normal.z);
    if (this.wouldOverlapPlayer(x, y, z)) {
      return;
    }
    if (!this.state.useBlock()) {
      this.audio.playCue('error');
      return;
    }
    if (!this.world.placeBlock(x, y, z, 'bridge')) {
      this.state.refundBlock();
      this.audio.playCue('error');
      return;
    }
    this.audio.playCue('place');
    if (this.state.isOnlineMatch()) {
      void this.multiplayer.syncBlockPlacement(x, y, z, 'bridge');
    }
  }

  private placeJumpPad(): void {
    this.raycaster.setFromCamera(new THREE.Vector2(0, 0), this.camera);
    const hit = this.world.raycastBlock(this.raycaster, PLAYER_CONFIG.useRange);
    if (!hit || Math.round(hit.normal.y) !== 1) {
      return;
    }

    const x = hit.block.x;
    const y = hit.block.y + 1;
    const z = hit.block.z;
    if (this.wouldOverlapPlayer(x, y, z)) {
      return;
    }
    if (!this.state.useJumpPad()) {
      this.audio.playCue('error');
      return;
    }
    const placed = this.world.placeJumpPad(x, y + 0.15, z);
    if (!placed) {
      this.state.refundJumpPad();
      this.audio.playCue('error');
      return;
    }
    this.audio.playCue('place');
    if (this.state.isOnlineMatch()) {
      void this.multiplayer.syncJumpPadPlacement({ x, y: y + 0.15, z });
    }
  }

  private wouldOverlapPlayer(x: number, y: number, z: number): boolean {
    const eye = this.player.getPosition();
    const playerMin = new THREE.Vector3(
      eye.x - PLAYER_CONFIG.radius,
      eye.y - PLAYER_CONFIG.eyeHeight,
      eye.z - PLAYER_CONFIG.radius
    );
    const playerMax = new THREE.Vector3(
      eye.x + PLAYER_CONFIG.radius,
      eye.y - PLAYER_CONFIG.eyeHeight + PLAYER_CONFIG.height,
      eye.z + PLAYER_CONFIG.radius
    );
    const blockMin = new THREE.Vector3(x - 0.5, y - 0.5, z - 0.5);
    const blockMax = new THREE.Vector3(x + 0.5, y + 0.5, z + 0.5);

    return !(
      blockMax.x < playerMin.x ||
      blockMin.x > playerMax.x ||
      blockMax.y < playerMin.y ||
      blockMin.y > playerMax.y ||
      blockMax.z < playerMin.z ||
      blockMin.z > playerMax.z
    );
  }
}
