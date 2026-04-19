/**
 * Crystal Wars - Main Game Manager
 * Orchestrates all game systems: world, player, entities, UI.
 */

import * as THREE from 'three';
import { ISLAND_SURFACE_Y, PICKUP_RANGE, ATTACK_RANGE, SEA_LEVEL } from './config';
import { GameScreen, CurrencyType } from './types';
import { World } from './world/world';
import { PlayerController } from './player/playerController';
import { Inventory } from './player/inventory';
import { Combat } from './player/combat';
import { CrystalManager } from './entities/crystal';
import { ResourceNpc } from './entities/resourceNpc';
import { MiddleMachine } from './entities/middleMachine';
import { Merchant } from './entities/merchant';
import { HUD } from './ui/hud';
import { ShopUI } from './ui/shopUI';
import { TitleScreen } from './ui/titleScreen';
import { SettingsUI } from './ui/settingsUI';
import { WinScreen } from './ui/winScreen';
import { Tutorial } from './ui/tutorial';
import { initI18n, applyTranslations } from './localization/i18n';
import { showNotification, showInteractPrompt, dist2D } from './utils/helpers';
import { findChestAt, openChest } from './world/chest';
import { t } from './localization/i18n';
import { SoundManager } from './audio/soundManager';

export class Game {
  // Three.js
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;

  // Game systems
  private world!: World;
  private player!: PlayerController;
  private inventory!: Inventory;
  private combat!: Combat;
  private crystalManager!: CrystalManager;
  private resourceNpcs: ResourceNpc[] = [];
  private middleMachine!: MiddleMachine;
  private merchant!: Merchant;
  private oceanMesh?: THREE.Mesh;

  // UI
  private hud!: HUD;
  private shopUI!: ShopUI;
  private titleScreen!: TitleScreen;
  private settingsUI!: SettingsUI;
  private winScreen!: WinScreen;
  private tutorial!: Tutorial;

  // State
  private currentScreen: GameScreen = 'title';
  private lastTime = 0;
  private isRunning = false;
  private settingsReturnTo: GameScreen = 'title';

  constructor() {
    // Init i18n
    initI18n();

    // Three.js setup
    const canvas = document.getElementById('game-canvas') as HTMLCanvasElement;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x87ceeb); // sky blue

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0x87ceeb, 60, 120);

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 200);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0x6688cc, 0.6);
    this.scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffeedd, 1.0);
    sunLight.position.set(50, 80, 30);
    sunLight.castShadow = false;
    this.scene.add(sunLight);

    const hemisphereLight = new THREE.HemisphereLight(0x88bbff, 0x445533, 0.4);
    this.scene.add(hemisphereLight);

    // Window resize
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Setup UI
    this.setupUI();

    // Apply translations
    applyTranslations();
  }

  private setupUI(): void {
    // Title screen
    this.titleScreen = new TitleScreen(
      () => this.startGame(),
      () => {
        this.settingsReturnTo = 'title';
        this.showScreen('settings');
      }
    );

    // Settings
    this.settingsUI = new SettingsUI(
      () => this.showScreen(this.settingsReturnTo),
      (val) => {
        if (this.player) this.player.sensitivity = val;
      }
    );

    // Win screen
    this.winScreen = new WinScreen(() => {
      this.restart();
    });

    // Tutorial
    this.tutorial = new Tutorial(() => {
      this.showScreen('playing');
      this.requestPointerLock();
    });

    // Pause
    document.getElementById('btn-resume')?.addEventListener('click', () => {
      this.showScreen('playing');
      this.requestPointerLock();
    });
    document.getElementById('btn-pause-settings')?.addEventListener('click', () => {
      this.settingsReturnTo = 'paused';
      this.showScreen('settings');
    });

    // Shop close
    document.getElementById('btn-shop-close')?.addEventListener('click', () => {
      this.showScreen('playing');
      this.requestPointerLock();
    });
  }

  private startGame(): void {
    // Initialize game systems
    this.initGameWorld();
    
    // Show tutorial
    this.showScreen('tutorial');
  }

  private initGameWorld(): void {
    // Cleanup previous
    if (this.world) this.world.dispose();
    if (this.crystalManager) this.crystalManager.dispose();
    for (const npc of this.resourceNpcs) npc.dispose();
    if (this.middleMachine) this.middleMachine.dispose();
    if (this.merchant) this.merchant.dispose();
    if (this.combat) this.combat.dispose();
    if (this.oceanMesh) {
      this.scene.remove(this.oceanMesh);
      this.oceanMesh.geometry.dispose();
      (this.oceanMesh.material as THREE.Material).dispose();
      this.oceanMesh = undefined;
    }

    this.resourceNpcs = [];

    // World
    this.world = new World(this.scene);
    this.world.generate();

    // Ocean plane
    const oceanGeo = new THREE.PlaneGeometry(2000, 2000);
    const oceanMat = new THREE.MeshLambertMaterial({
      color: 0x1a6fc4,
      transparent: true,
      opacity: 0.85
    });
    this.oceanMesh = new THREE.Mesh(oceanGeo, oceanMat);
    this.oceanMesh.rotation.x = -Math.PI / 2;
    this.oceanMesh.position.y = SEA_LEVEL;
    this.scene.add(this.oceanMesh);

    // Player
    this.inventory = new Inventory();
    this.player = new PlayerController(this.camera, this.world);

    // Initial chunk load around 0,0
    this.world.updateChunks(0, 0);

    // Spawn player
    const spawnY = this.world.getSurfaceY(0, 0);
    this.player.position.set(0, spawnY + 1, 0);

    // Combat
    this.combat = new Combat(this.world, this.player, this.inventory, this.scene);
    
    // Crystals
    this.crystalManager = new CrystalManager(this.scene);
    for (let i = 0; i < 8; i++) {
        const loc = this.world.crystalLocations[i];
        // We ensure chunks at crystal exist to get surface Y
        this.world.updateChunks(loc.x, loc.z);
        const surfaceY = this.world.getSurfaceY(loc.x, loc.z);
        
        // create dummy island-like data for compat
        const dummyIsland = {
          id: `crystal_${i}`,
          centerX: loc.x,
          centerZ: loc.z,
          size: 18,
          isMiddle: false,
          crystalDestroyed: false
        };
        this.crystalManager.createCrystal(dummyIsland, surfaceY);
        
        // Add a giant beacon pillar block above it so it can be seen from afar
        for(let py = surfaceY + 4; py < surfaceY + 20; py++) {
           this.world.setBlock(loc.x, py, loc.z + 2, 'diamond');
        }
    }
    this.crystalManager.onAllDestroyed = () => {
      this.showScreen('win');
    };

    // Crystal hit from combat
    this.combat.onCrystalHit = (damage: number) => {
      const hit = this.crystalManager.damageNearestCrystal(
        this.player.getEyePosition(), damage, ATTACK_RANGE + 2
      );
      if (hit) {
         if (hit === 'destroyed') SoundManager.playCrystalDestroy();
         else SoundManager.playCrystalDamage();
      }
    };

    // Resource NPCs near crystals
    for (let i = 0; i < 8; i++) {
      const loc = this.world.crystalLocations[i];
      const npcX = loc.x + 5;
      const npcZ = loc.z + 5;
      const surfaceY = this.world.getSurfaceY(npcX, npcZ);
      const dummyIsland = { id: `npc_${i}`, centerX: npcX, centerZ: npcZ, size: 18, isMiddle: false, crystalDestroyed: false };
      const npc = new ResourceNpc(this.scene, dummyIsland, surfaceY);
      this.resourceNpcs.push(npc);
    }

    // Middle island machine
    const machineSurfaceY = this.world.getSurfaceY(-5, -5);
    this.middleMachine = new MiddleMachine(this.scene, machineSurfaceY);

    // Merchant on middle island
    const merchantSurfaceY = this.world.getSurfaceY(4, 3);
    this.merchant = new Merchant(this.scene, merchantSurfaceY);
    this.shopUI = new ShopUI(this.merchant, this.inventory);

    // HUD
    this.hud = new HUD(
      this.inventory,
      () => this.player.health,
      () => this.crystalManager.getDestroyedCount()
    );

    // Input handlers
    this.setupGameInput();

    // Start game loop
    if (!this.isRunning) {
      this.isRunning = true;
      this.lastTime = performance.now();
      this.gameLoop();
    }
  }

  private setupGameInput(): void {
    // Pointer lock
    const canvas = this.renderer.domElement;
    canvas.addEventListener('click', () => {
      SoundManager.init(); // Initialize audio context on first canvas click
      if (this.currentScreen === 'playing' && !document.pointerLockElement) {
        this.requestPointerLock();
      }
    });

    // Mouse events
    document.addEventListener('mousedown', (e) => {
      SoundManager.init(); // Fallback
      if (this.currentScreen !== 'playing') return;
      if (e.button === 0) { // Left click
        this.combat.onLeftClick();
      }
    });

    document.addEventListener('mouseup', (e) => {
      if (e.button === 0) {
        this.combat.onLeftClickRelease();
      }
    });

    // Mouse wheel for hotbar
    document.addEventListener('wheel', (e) => {
      if (this.currentScreen !== 'playing') return;
      this.inventory.scrollSlot(e.deltaY > 0 ? 1 : -1);
    });

    // Keyboard
    document.addEventListener('keydown', (e) => {
      // Number keys for hotbar
      if (this.currentScreen === 'playing') {
        const num = parseInt(e.key);
        if (num >= 1 && num <= 8) {
          this.inventory.selectSlot(num - 1);
        }
      }

      // E = Interact
      if (e.code === 'KeyE' && this.currentScreen === 'playing') {
        this.handleInteract();
      }

      // Escape
      if (e.code === 'Escape') {
        if (this.currentScreen === 'playing') {
          document.exitPointerLock();
          this.showScreen('paused');
        } else if (this.currentScreen === 'paused') {
          this.showScreen('playing');
          this.requestPointerLock();
        } else if (this.currentScreen === 'shop') {
          this.shopUI.close();
          this.showScreen('playing');
          this.requestPointerLock();
        } else if (this.currentScreen === 'settings') {
          this.showScreen(this.settingsReturnTo);
        }
      }
    });

    // Pointer lock change
    document.addEventListener('pointerlockchange', () => {
      if (!document.pointerLockElement && this.currentScreen === 'playing') {
        this.showScreen('paused');
      }
    });
  }

  private handleInteract(): void {
    const px = this.player.position.x;
    const pz = this.player.position.z;
    const py = this.player.position.y;

    // Check merchant interaction
    const merchantDist = dist2D(px, pz, this.merchant.position.x, this.merchant.position.z);
    if (merchantDist < PICKUP_RANGE) {
      document.exitPointerLock();
      this.shopUI.open();
      this.currentScreen = 'shop';
      return;
    }

    // Check chest interaction
    const targetBlock = this.combat.getTargetBlock();
    if (targetBlock) {
      const blockId = this.world.getBlock(targetBlock.x, targetBlock.y, targetBlock.z);
      if (blockId === 'chest') {
        const chest = findChestAt(targetBlock.x, targetBlock.y, targetBlock.z);
        if (chest && !chest.opened) {
          const loot = openChest(chest);
          let lootMsg = t('chestOpened') + ' ';
          for (const l of loot) {
            this.inventory.addCurrency(l.item as CurrencyType, l.amount);
            lootMsg += `+${l.amount} ${l.item} `;
          }
          SoundManager.playCollect();
          showNotification(lootMsg);
          // Remove chest block
          this.world.setBlock(targetBlock.x, targetBlock.y, targetBlock.z, 'air');
          this.world.rebuildDirtyMeshes();
        }
      }
    }
  }

  private showScreen(screen: GameScreen): void {
    // Hide all screens
    const screens = ['title-screen', 'settings-screen', 'tutorial-overlay', 'pause-screen', 'shop-screen', 'win-screen'];
    for (const id of screens) {
      document.getElementById(id)?.classList.remove('active');
    }

    this.currentScreen = screen;

    switch (screen) {
      case 'title':
        this.titleScreen.show();
        this.hud.hide();
        SoundManager.playBGM('title');
        break;
      case 'settings':
        this.settingsUI.show();
        SoundManager.playClick();
        break;
      case 'tutorial':
        this.tutorial.show();
        SoundManager.playClick();
        break;
      case 'playing':
        this.hud.show();
        SoundManager.playBGM('game');
        break;
      case 'paused':
        document.getElementById('pause-screen')?.classList.add('active');
        break;
      case 'shop':
        this.shopUI.open();
        SoundManager.playClick();
        break;
      case 'win':
        this.winScreen.show();
        this.hud.hide();
        document.exitPointerLock();
        SoundManager.playBGM('win');
        break;
    }

    applyTranslations();
  }

  private requestPointerLock(): void {
    this.renderer.domElement.requestPointerLock();
  }

  private gameLoop(): void {
    requestAnimationFrame(() => this.gameLoop());

    const now = performance.now();
    const dt = Math.min((now - this.lastTime) / 1000, 0.1); // cap dt
    this.lastTime = now;

    if (this.currentScreen === 'playing') {
      this.update(dt);
    }

    // Always update entity animations and render
    if (this.crystalManager) this.crystalManager.update(dt);
    if (this.merchant) this.merchant.update(dt);

    this.renderer.render(this.scene, this.camera);
  }

  private update(dt: number): void {
    // Dynamic chunk loading
    this.world.updateChunks(this.player.position.x, this.player.position.z);

    // Player
    this.player.update(dt);

    // Combat
    this.combat.update(dt);
    this.combat.checkJumpPad();

    // Resource NPCs
    const px = this.player.position.x;
    const pz = this.player.position.z;

    for (const npc of this.resourceNpcs) {
      const collected = npc.update(dt, px, pz);
      for (const c of collected) {
        this.inventory.addCurrency(c.type, c.amount);
        SoundManager.playCollect();
      }
    }

    // Middle machine
    if (this.middleMachine) {
      const collected = this.middleMachine.update(dt, px, pz);
      for (const c of collected) {
        this.inventory.addCurrency(c.type, c.amount);
        SoundManager.playCollect();
      }
    }

    // Check interact prompt
    const merchantDist = dist2D(px, pz, this.merchant.position.x, this.merchant.position.z);
    const targetBlock = this.combat.getTargetBlock();
    const lookingAtChest = targetBlock && this.world.getBlock(targetBlock.x, targetBlock.y, targetBlock.z) === 'chest';
    
    showInteractPrompt(merchantDist < PICKUP_RANGE || !!lookingAtChest);

    // Rebuild dirty chunks
    this.world.rebuildDirtyMeshes();

    // HUD
    this.hud.update();
  }

  private restart(): void {
    this.initGameWorld();
    this.showScreen('playing');
    this.requestPointerLock();
  }
}
