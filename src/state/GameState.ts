import {
  DEFAULT_LANGUAGE,
  MOBILE_CONFIG,
  MULTIPLAYER_CONFIG,
  SHOP_ITEMS,
  STARTING_LOADOUT,
  STORAGE_KEYS,
  TIER_SEQUENCE,
  WORLD_CONFIG
} from '../config';
import { Localizer } from '../localization';
import type {
  Currency,
  EquipmentId,
  GamePhase,
  HotbarItemId,
  InteractionPrompt,
  InventoryState,
  Language,
  MultiplayerPlayerSnapshot,
  MultiplayerRoomSnapshot,
  MultiplayerStatus,
  NotificationEntry,
  ShopEntry,
  ToolTier
} from '../types';

type Listener = () => void;

const HOTBAR: HotbarItemId[] = [
  'sword',
  'pickaxe',
  'shovel',
  'bow',
  'blocks',
  'purpleDotter',
  'jumpPad'
];

interface MultiplayerState {
  status: MultiplayerStatus;
  playerName: string;
  serverAddress: string;
  roomId: string;
  publicRoomId: string;
  playerId: string | null;
  seed: number | null;
  players: MultiplayerPlayerSnapshot[];
  errorKey: string | null;
}

interface MobileSettingsState {
  touchSensitivity: number;
  leftHanded: boolean;
  autoSprint: boolean;
  haptics: boolean;
}

export class GameState {
  readonly localizer: Localizer;

  phase: GamePhase = 'title';
  health = 100;
  maxHealth = 100;
  notifications: NotificationEntry[] = [];
  inventory: InventoryState;
  crystalsDestroyed = 0;
  interactionPrompt: InteractionPrompt | null = null;
  showTutorial = true;
  showSettings = false;
  multiplayer: MultiplayerState;
  mobileSettings: MobileSettingsState;
  private destroyedCrystalIds = new Set<string>();
  private notificationId = 0;
  private listeners = new Set<Listener>();

  constructor() {
    const language = DEFAULT_LANGUAGE();
    this.localizer = new Localizer(language);
    this.maxHealth = 100;
    this.health = this.maxHealth;
    this.inventory = this.createStartingInventory();
    this.multiplayer = this.createMultiplayerState();
    this.mobileSettings = this.createMobileSettings();
    this.persistLanguage(language);
  }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  emit(): void {
    for (const listener of this.listeners) {
      listener();
    }
  }

  createStartingInventory(): InventoryState {
    return {
      currentHotbarIndex: 0,
      hotbar: [...HOTBAR],
      hasBow: false,
      arrows: STARTING_LOADOUT.arrows,
      blocks: STARTING_LOADOUT.blocks,
      purpleDotters: STARTING_LOADOUT.purpleDotters,
      jumpPads: STARTING_LOADOUT.jumpPads,
      toolTiers: {
        sword: 'basic',
        pickaxe: 'basic',
        shovel: 'basic'
      },
      currencies: {
        copper: STARTING_LOADOUT.currencies.copper,
        gold: STARTING_LOADOUT.currencies.gold,
        emerald: STARTING_LOADOUT.currencies.emerald,
        diamond: STARTING_LOADOUT.currencies.diamond
      }
    };
  }

  private createMultiplayerState(): MultiplayerState {
    return {
      status: 'offline',
      playerName: this.readStoredValue(
        STORAGE_KEYS.playerName,
        MULTIPLAYER_CONFIG.defaultPlayerName
      ),
      serverAddress: this.readStoredValue(
        STORAGE_KEYS.serverAddress,
        MULTIPLAYER_CONFIG.publicServerAddress
      ),
      roomId: '',
      publicRoomId: MULTIPLAYER_CONFIG.publicServerAddress,
      playerId: null,
      seed: null,
      players: [],
      errorKey: null
    };
  }

  private createMobileSettings(): MobileSettingsState {
    return {
      touchSensitivity: this.readStoredNumber(
        STORAGE_KEYS.touchSensitivity,
        MOBILE_CONFIG.defaultTouchSensitivity,
        MOBILE_CONFIG.minTouchSensitivity,
        MOBILE_CONFIG.maxTouchSensitivity
      ),
      leftHanded: this.readStoredBoolean(STORAGE_KEYS.leftHanded, false),
      autoSprint: this.readStoredBoolean(STORAGE_KEYS.autoSprint, true),
      haptics: this.readStoredBoolean(STORAGE_KEYS.haptics, true)
    };
  }

  private readStoredValue(key: string, fallback: string): string {
    try {
      const value = window.localStorage.getItem(key)?.trim();
      return value ? value : fallback;
    } catch {
      return fallback;
    }
  }

  private readStoredBoolean(key: string, fallback: boolean): boolean {
    try {
      const value = window.localStorage.getItem(key);
      if (value === 'true') {
        return true;
      }
      if (value === 'false') {
        return false;
      }
    } catch {
      return fallback;
    }
    return fallback;
  }

  private readStoredNumber(
    key: string,
    fallback: number,
    min: number,
    max: number
  ): number {
    try {
      const raw = window.localStorage.getItem(key);
      const value = raw === null ? Number.NaN : Number(raw);
      if (Number.isFinite(value)) {
        return Math.max(min, Math.min(max, value));
      }
    } catch {
      return fallback;
    }
    return fallback;
  }

  resetRun(preserveMultiplayer = false): void {
    this.phase = 'title';
    this.health = this.maxHealth;
    this.crystalsDestroyed = 0;
    this.destroyedCrystalIds.clear();
    this.interactionPrompt = null;
    this.notifications = [];
    this.notificationId = 0;
    this.showTutorial = true;
    this.showSettings = false;
    this.inventory = this.createStartingInventory();
    if (!preserveMultiplayer) {
      this.multiplayer.status = 'offline';
      this.multiplayer.roomId = '';
      this.multiplayer.playerId = null;
      this.multiplayer.seed = null;
      this.multiplayer.players = [];
      this.multiplayer.errorKey = null;
    }
    this.emit();
  }

  startPlaying(): void {
    this.phase = 'playing';
    this.showSettings = false;
    this.emit();
  }

  setPhase(phase: GamePhase): void {
    this.phase = phase;
    this.emit();
  }

  setSettingsOpen(isOpen: boolean): void {
    this.showSettings = isOpen;
    this.emit();
  }

  isOnlineMatch(): boolean {
    return this.multiplayer.status === 'online';
  }

  getPlayerName(): string {
    return this.multiplayer.playerName;
  }

  setPlayerName(name: string): void {
    const sanitized = name
      .trim()
      .slice(0, MULTIPLAYER_CONFIG.maxPlayerNameLength) || MULTIPLAYER_CONFIG.defaultPlayerName;
    this.multiplayer.playerName = sanitized;
    try {
      window.localStorage.setItem(STORAGE_KEYS.playerName, sanitized);
    } catch {}
  }

  getServerAddress(): string {
    return this.multiplayer.serverAddress;
  }

  setServerAddress(address: string): void {
    const sanitized = address
      .trim()
      .slice(0, MULTIPLAYER_CONFIG.maxServerAddressLength) || MULTIPLAYER_CONFIG.publicServerAddress;
    this.multiplayer.serverAddress = sanitized;
    try {
      window.localStorage.setItem(STORAGE_KEYS.serverAddress, sanitized);
    } catch {}
  }

  setMultiplayerConnecting(): void {
    this.multiplayer.status = 'connecting';
    this.multiplayer.errorKey = null;
    this.multiplayer.players = [];
    this.emit();
  }

  setMultiplayerSession(playerId: string, snapshot: MultiplayerRoomSnapshot): void {
    this.multiplayer.status = 'online';
    this.multiplayer.playerId = playerId;
    this.multiplayer.roomId = snapshot.roomId;
    this.multiplayer.publicRoomId = snapshot.publicRoomId;
    this.multiplayer.seed = snapshot.seed;
    this.multiplayer.players = snapshot.players;
    this.multiplayer.errorKey = null;
    this.emit();
  }

  leaveMultiplayerSession(): void {
    this.multiplayer.status = 'offline';
    this.multiplayer.roomId = '';
    this.multiplayer.playerId = null;
    this.multiplayer.seed = null;
    this.multiplayer.players = [];
    this.multiplayer.errorKey = null;
    this.emit();
  }

  setMultiplayerError(errorKey: string): void {
    this.multiplayer.status = 'offline';
    this.multiplayer.roomId = '';
    this.multiplayer.playerId = null;
    this.multiplayer.seed = null;
    this.multiplayer.players = [];
    this.multiplayer.errorKey = errorKey;
    this.emit();
  }

  clearMultiplayerError(): void {
    if (!this.multiplayer.errorKey) {
      return;
    }
    this.multiplayer.errorKey = null;
    this.emit();
  }

  setMultiplayerPlayers(players: MultiplayerPlayerSnapshot[]): void {
    this.multiplayer.players = players;
    this.emit();
  }

  getPlayerCount(): number {
    return this.multiplayer.players.length;
  }

  getTouchSensitivity(): number {
    return this.mobileSettings.touchSensitivity;
  }

  setTouchSensitivity(value: number): void {
    const clamped = Math.max(
      MOBILE_CONFIG.minTouchSensitivity,
      Math.min(MOBILE_CONFIG.maxTouchSensitivity, value)
    );
    this.mobileSettings.touchSensitivity = Number(clamped.toFixed(2));
    try {
      window.localStorage.setItem(
        STORAGE_KEYS.touchSensitivity,
        String(this.mobileSettings.touchSensitivity)
      );
    } catch {}
    this.emit();
  }

  isLeftHanded(): boolean {
    return this.mobileSettings.leftHanded;
  }

  setLeftHanded(enabled: boolean): void {
    this.mobileSettings.leftHanded = enabled;
    try {
      window.localStorage.setItem(STORAGE_KEYS.leftHanded, String(enabled));
    } catch {}
    this.emit();
  }

  isAutoSprintEnabled(): boolean {
    return this.mobileSettings.autoSprint;
  }

  setAutoSprintEnabled(enabled: boolean): void {
    this.mobileSettings.autoSprint = enabled;
    try {
      window.localStorage.setItem(STORAGE_KEYS.autoSprint, String(enabled));
    } catch {}
    this.emit();
  }

  isHapticsEnabled(): boolean {
    return this.mobileSettings.haptics;
  }

  setHapticsEnabled(enabled: boolean): void {
    this.mobileSettings.haptics = enabled;
    try {
      window.localStorage.setItem(STORAGE_KEYS.haptics, String(enabled));
    } catch {}
    this.emit();
  }

  getDestroyedCrystalIds(): string[] {
    return [...this.destroyedCrystalIds];
  }

  setLanguage(language: Language): void {
    this.localizer.setLanguage(language);
    this.persistLanguage(language);
    this.notifications = [];
    this.pushNotification('notifications.switchedLanguage');
    this.emit();
  }

  persistLanguage(language: Language): void {
    try {
      window.localStorage.setItem(STORAGE_KEYS.language, language);
    } catch {
      // Ignore browsers that block storage access.
    }
  }

  getLanguage(): Language {
    return this.localizer.getLanguage();
  }

  getCurrentItem(): HotbarItemId {
    return this.inventory.hotbar[this.inventory.currentHotbarIndex];
  }

  cycleHotbar(direction: 1 | -1): void {
    const length = this.inventory.hotbar.length;
    this.inventory.currentHotbarIndex =
      (this.inventory.currentHotbarIndex + direction + length) % length;
    this.emit();
  }

  setHotbarIndex(index: number): void {
    if (index < 0 || index >= this.inventory.hotbar.length) {
      return;
    }

    this.inventory.currentHotbarIndex = index;
    this.emit();
  }

  getToolTier(item: EquipmentId): ToolTier {
    return this.inventory.toolTiers[item];
  }

  addCurrency(currency: Currency, amount: number): void {
    this.inventory.currencies[currency] += amount;
    this.emit();
  }

  canAfford(entry: ShopEntry): boolean {
    return this.inventory.currencies[entry.price.currency] >= entry.price.amount;
  }

  spend(currency: Currency, amount: number): boolean {
    if (this.inventory.currencies[currency] < amount) {
      return false;
    }

    this.inventory.currencies[currency] -= amount;
    this.emit();
    return true;
  }

  tryPurchase(entry: ShopEntry): { success: boolean; reason?: string } {
    if (!this.canAfford(entry)) {
      this.pushNotification('notifications.notEnough', {
        currency: this.localizer.t(`hud.${entry.price.currency}`)
      });
      return { success: false, reason: 'not-enough' };
    }

    if (
      entry.action.type === 'unlock' &&
      entry.action.item === 'bow' &&
      this.inventory.hasBow
    ) {
      this.pushNotification('notifications.alreadyOwned', {
        item: this.localizer.t(entry.itemKey)
      });
      return { success: false, reason: 'already-owned' };
    }

    if (
      entry.action.type === 'upgrade' &&
      !this.canUpgrade(entry.action.item, entry.action.tier)
    ) {
      return { success: false, reason: 'wrong-tier' };
    }

    this.inventory.currencies[entry.price.currency] -= entry.price.amount;

    if (entry.action.type === 'consumable') {
      if (entry.action.item === 'blocks') {
        this.inventory.blocks += entry.action.amount;
      } else if (entry.action.item === 'arrows') {
        this.inventory.arrows += entry.action.amount;
      } else if (entry.action.item === 'purpleDotters') {
        this.inventory.purpleDotters += entry.action.amount;
      } else if (entry.action.item === 'jumpPads') {
        this.inventory.jumpPads += entry.action.amount;
      }
    } else if (entry.action.type === 'unlock') {
      this.inventory.hasBow = true;
      this.inventory.arrows += 12;
    } else {
      this.inventory.toolTiers[entry.action.item] = entry.action.tier;
      this.pushNotification('notifications.upgraded', {
        item: this.localizer.t(`items.${entry.action.item}`),
        tier: this.localizer.t(`tiers.${entry.action.tier}`)
      });
    }

    this.pushNotification('notifications.bought', {
      item: this.localizer.t(entry.itemKey)
    });
    this.emit();
    return { success: true };
  }

  canUpgrade(item: EquipmentId, targetTier: ToolTier): boolean {
    const currentIndex = TIER_SEQUENCE.indexOf(this.inventory.toolTiers[item]);
    const targetIndex = TIER_SEQUENCE.indexOf(targetTier);
    return targetIndex === currentIndex + 1;
  }

  getShopItems(): ShopEntry[] {
    return SHOP_ITEMS.filter((entry) => {
      if (entry.action.type !== 'upgrade') {
        if (entry.action.type === 'unlock') {
          return !this.inventory.hasBow;
        }
        return true;
      }

      const currentIndex = TIER_SEQUENCE.indexOf(
        this.inventory.toolTiers[entry.action.item]
      );
      const targetIndex = TIER_SEQUENCE.indexOf(entry.action.tier);
      return targetIndex === currentIndex + 1;
    });
  }

  useArrow(): boolean {
    if (this.inventory.arrows <= 0) {
      this.pushNotification('notifications.noArrows');
      return false;
    }

    this.inventory.arrows -= 1;
    this.emit();
    return true;
  }

  useBlock(): boolean {
    if (this.inventory.blocks <= 0) {
      this.pushNotification('notifications.noBlocks');
      return false;
    }

    this.inventory.blocks -= 1;
    this.emit();
    return true;
  }

  refundBlock(): void {
    this.inventory.blocks += 1;
    this.emit();
  }

  useDotter(): boolean {
    if (this.inventory.purpleDotters <= 0) {
      this.pushNotification('notifications.noDotters');
      return false;
    }

    this.inventory.purpleDotters -= 1;
    this.emit();
    return true;
  }

  useJumpPad(): boolean {
    if (this.inventory.jumpPads <= 0) {
      this.pushNotification('notifications.noJumpPads');
      return false;
    }

    this.inventory.jumpPads -= 1;
    this.emit();
    return true;
  }

  refundJumpPad(): void {
    this.inventory.jumpPads += 1;
    this.emit();
  }

  addBlocks(amount: number): void {
    this.inventory.blocks += amount;
    this.emit();
  }

  addArrows(amount: number): void {
    this.inventory.arrows += amount;
    this.emit();
  }

  damagePlayer(amount: number): void {
    this.health = Math.max(0, this.health - amount);
    if (this.health <= 0) {
      this.health = this.maxHealth;
    }
    this.emit();
  }

  collectCrystal(id: string, notify = true): boolean {
    if (this.destroyedCrystalIds.has(id)) {
      return false;
    }

    this.destroyedCrystalIds.add(id);
    this.crystalsDestroyed = this.destroyedCrystalIds.size;
    if (notify) {
      this.pushNotification('notifications.crystalDestroyed', {
        count: this.crystalsDestroyed
      });
    }

    if (this.crystalsDestroyed >= WORLD_CONFIG.crystalsPerGame) {
      this.phase = 'win';
    }

    this.emit();
    return true;
  }

  syncDestroyedCrystals(ids: string[]): void {
    this.destroyedCrystalIds = new Set(ids);
    this.crystalsDestroyed = this.destroyedCrystalIds.size;
    if (this.crystalsDestroyed >= WORLD_CONFIG.crystalsPerGame) {
      this.phase = 'win';
    }
    this.emit();
  }

  getRemainingCrystals(): number {
    return WORLD_CONFIG.crystalsPerGame - this.crystalsDestroyed;
  }

  setInteractionPrompt(prompt: InteractionPrompt | null): void {
    const changed =
      this.interactionPrompt?.id !== prompt?.id ||
      this.interactionPrompt?.key !== prompt?.key;
    this.interactionPrompt = prompt;
    if (changed) {
      this.emit();
    }
  }

  hideTutorial(): void {
    this.showTutorial = false;
    this.emit();
  }

  pushNotification(
    key: string,
    values?: Record<string, number | string>
  ): void {
    const entry: NotificationEntry = {
      id: this.notificationId++,
      key,
      values,
      createdAt: performance.now()
    };
    this.notifications = [...this.notifications.slice(-4), entry];
    this.emit();
  }
}
