import type {
  BlockDefinition,
  BlockType,
  EquipmentId,
  Language,
  ShopEntry,
  ToolStats,
  ToolTier
} from './types';

export const STORAGE_KEYS = {
  language: 'island-crystal-breaker-language',
  languageDefaultVersion: 'island-crystal-breaker-language-default-version',
  playerName: 'island-crystal-breaker-player-name',
  serverAddress: 'island-crystal-breaker-server-address',
  touchSensitivity: 'island-crystal-breaker-touch-sensitivity',
  leftHanded: 'island-crystal-breaker-left-handed',
  autoSprint: 'island-crystal-breaker-auto-sprint',
  haptics: 'island-crystal-breaker-haptics'
} as const;

const LANGUAGE_DEFAULT_VERSION = '2026-04-18-force-english-default';

export const WORLD_CONFIG = {
  chunk: {
    width: 9,
    depth: 9,
    height: 18
  },
  outerIslandChunks: {
    x: 2,
    z: 2
  },
  outerIslandSize: {
    x: 18,
    z: 18
  },
  centerIslandSize: {
    x: 12,
    z: 12
  },
  surfaceY: 4,
  oceanY: 0,
  positions: {
    center: { x: 0, z: 0 },
    north: { x: 0, z: -30 },
    east: { x: 30, z: 0 },
    south: { x: 0, z: 30 },
    west: { x: -30, z: 0 }
  },
  bridgeWidth: 2,
  chestDepthMin: 5,
  chestDepthMax: 8,
  crystalsPerGame: 4,
  crystalHp: 48
} as const;

export const PLAYER_CONFIG = {
  walkSpeed: 7,
  sprintSpeed: 10.5,
  jumpVelocity: 11.5,
  gravity: 28,
  eyeHeight: 1.62,
  height: 1.8,
  radius: 0.36,
  interactionRange: 4,
  attackRange: 4.6,
  useRange: 5.2,
  maxHealth: 100
} as const;

export const TOOL_STATS: Record<
  EquipmentId,
  Record<ToolTier, ToolStats>
> = {
  sword: {
    basic: { damage: 8, blockDamage: 1.2, cooldown: 0.32, range: 3.2 },
    iron: { damage: 12, blockDamage: 1.6, cooldown: 0.28, range: 3.4 },
    diamond: { damage: 17, blockDamage: 2.2, cooldown: 0.24, range: 3.6 },
    rainbow: { damage: 23, blockDamage: 3, cooldown: 0.2, range: 3.8 }
  },
  pickaxe: {
    basic: { damage: 4, blockDamage: 2.4, cooldown: 0.35, range: 3.4 },
    iron: { damage: 6, blockDamage: 3.8, cooldown: 0.3, range: 3.4 },
    diamond: { damage: 8, blockDamage: 5.4, cooldown: 0.24, range: 3.5 },
    rainbow: { damage: 11, blockDamage: 7.4, cooldown: 0.18, range: 3.6 }
  },
  shovel: {
    basic: { damage: 3, blockDamage: 2.2, cooldown: 0.34, range: 3.2 },
    iron: { damage: 5, blockDamage: 3.6, cooldown: 0.3, range: 3.3 },
    diamond: { damage: 7, blockDamage: 5.1, cooldown: 0.23, range: 3.4 },
    rainbow: { damage: 10, blockDamage: 7, cooldown: 0.18, range: 3.5 }
  }
};

export const BOW_CONFIG = {
  damage: 11,
  speed: 22,
  cooldown: 0.45,
  gravityScale: 0.35
} as const;

export const DOTTER_CONFIG = {
  speed: 18,
  cooldown: 0.55,
  gravityScale: 0.7
} as const;

export const JUMP_PAD_CONFIG = {
  launchVelocity: 17
} as const;

export const RESOURCE_TIMERS = {
  islandCopper: 2,
  islandGold: 60,
  middleGold: 7,
  middleDiamond: 15
} as const;

export const MULTIPLAYER_CONFIG = {
  publicServerAddress: '1111',
  defaultPlayerName: 'Player',
  maxPlayerNameLength: 18,
  maxServerAddressLength: 24,
  presenceInterval: 0.12
} as const;

export const MOBILE_CONFIG = {
  maxPixelRatio: 1.35,
  joystickDeadzone: 0.18,
  autoSprintThreshold: 0.82,
  holdRepeatDelayMs: 240,
  holdRepeatIntervalMs: 120,
  defaultTouchSensitivity: 1,
  minTouchSensitivity: 0.5,
  maxTouchSensitivity: 1.8
} as const;

export const AUDIO_CONFIG = {
  masterVolume: 1,
  musicVolume: 0.32,
  sfxVolume: 0.9,
  musicTempo: 92
} as const;

export const STARTING_LOADOUT = {
  arrows: 0,
  blocks: 10,
  purpleDotters: 1,
  jumpPads: 1,
  currencies: {
    copper: 0,
    gold: 0,
    emerald: 0,
    diamond: 0
  }
} as const;

export const BLOCK_DEFINITIONS: Record<BlockType, BlockDefinition> = {
  grass: { color: 0x4fa64f, category: 'soft', hp: 4, solid: true },
  dirt: { color: 0x7e5133, category: 'soft', hp: 5, solid: true },
  sand: { color: 0xd9c67c, category: 'soft', hp: 4, solid: true },
  stone: { color: 0x8690a0, category: 'hard', hp: 8, solid: true },
  bridge: { color: 0x8f6b45, category: 'utility', hp: 6, solid: true },
  copperOre: { color: 0xba6b3e, category: 'ore', hp: 7, solid: true },
  goldOre: { color: 0xd7b549, category: 'ore', hp: 9, solid: true },
  emeraldOre: { color: 0x34c27a, category: 'ore', hp: 10, solid: true },
  diamondOre: { color: 0x76e7ff, category: 'ore', hp: 11, solid: true }
};

export const SHOP_ITEMS: ShopEntry[] = [
  {
    id: 'blocks',
    itemKey: 'items.blocks',
    descriptionKey: 'shopDescriptions.blocks',
    price: { currency: 'copper', amount: 1 },
    action: { type: 'consumable', item: 'blocks', amount: 1 }
  },
  {
    id: 'purpleDotter',
    itemKey: 'items.purpleDotter',
    descriptionKey: 'shopDescriptions.purpleDotter',
    price: { currency: 'gold', amount: 5 },
    action: { type: 'consumable', item: 'purpleDotters', amount: 2 }
  },
  {
    id: 'bow',
    itemKey: 'items.bow',
    descriptionKey: 'shopDescriptions.bow',
    price: { currency: 'gold', amount: 4 },
    action: { type: 'unlock', item: 'bow' }
  },
  {
    id: 'arrows',
    itemKey: 'items.arrows',
    descriptionKey: 'shopDescriptions.arrows',
    price: { currency: 'copper', amount: 3 },
    action: { type: 'consumable', item: 'arrows', amount: 8 }
  },
  {
    id: 'jumpPad',
    itemKey: 'items.jumpPad',
    descriptionKey: 'shopDescriptions.jumpPad',
    price: { currency: 'gold', amount: 5 },
    action: { type: 'consumable', item: 'jumpPads', amount: 1 }
  },
  {
    id: 'swordIron',
    itemKey: 'items.swordIron',
    descriptionKey: 'shopDescriptions.swordUpgrade',
    price: { currency: 'gold', amount: 5 },
    action: { type: 'upgrade', item: 'sword', tier: 'iron' }
  },
  {
    id: 'pickaxeIron',
    itemKey: 'items.pickaxeIron',
    descriptionKey: 'shopDescriptions.pickaxeUpgrade',
    price: { currency: 'gold', amount: 5 },
    action: { type: 'upgrade', item: 'pickaxe', tier: 'iron' }
  },
  {
    id: 'shovelIron',
    itemKey: 'items.shovelIron',
    descriptionKey: 'shopDescriptions.shovelUpgrade',
    price: { currency: 'gold', amount: 5 },
    action: { type: 'upgrade', item: 'shovel', tier: 'iron' }
  },
  {
    id: 'swordDiamond',
    itemKey: 'items.swordDiamond',
    descriptionKey: 'shopDescriptions.swordUpgrade',
    price: { currency: 'emerald', amount: 12 },
    action: { type: 'upgrade', item: 'sword', tier: 'diamond' }
  },
  {
    id: 'pickaxeDiamond',
    itemKey: 'items.pickaxeDiamond',
    descriptionKey: 'shopDescriptions.pickaxeUpgrade',
    price: { currency: 'emerald', amount: 12 },
    action: { type: 'upgrade', item: 'pickaxe', tier: 'diamond' }
  },
  {
    id: 'shovelDiamond',
    itemKey: 'items.shovelDiamond',
    descriptionKey: 'shopDescriptions.shovelUpgrade',
    price: { currency: 'emerald', amount: 12 },
    action: { type: 'upgrade', item: 'shovel', tier: 'diamond' }
  },
  {
    id: 'swordRainbow',
    itemKey: 'items.swordRainbow',
    descriptionKey: 'shopDescriptions.swordUpgrade',
    price: { currency: 'emerald', amount: 20 },
    action: { type: 'upgrade', item: 'sword', tier: 'rainbow' }
  },
  {
    id: 'pickaxeRainbow',
    itemKey: 'items.pickaxeRainbow',
    descriptionKey: 'shopDescriptions.pickaxeUpgrade',
    price: { currency: 'emerald', amount: 20 },
    action: { type: 'upgrade', item: 'pickaxe', tier: 'rainbow' }
  },
  {
    id: 'shovelRainbow',
    itemKey: 'items.shovelRainbow',
    descriptionKey: 'shopDescriptions.shovelUpgrade',
    price: { currency: 'emerald', amount: 20 },
    action: { type: 'upgrade', item: 'shovel', tier: 'rainbow' }
  }
];

export const TIER_SEQUENCE: ToolTier[] = [
  'basic',
  'iron',
  'diamond',
  'rainbow'
];

export const TIER_COLORS: Record<ToolTier, string> = {
  basic: '#d9d9d9',
  iron: '#b8c6d8',
  diamond: '#67d6f7',
  rainbow: '#ff77d7'
};

export const DEFAULT_LANGUAGE = (): Language => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEYS.language);
    const version = window.localStorage.getItem(
      STORAGE_KEYS.languageDefaultVersion
    );

    if (version !== LANGUAGE_DEFAULT_VERSION) {
      window.localStorage.setItem(STORAGE_KEYS.language, 'en');
      window.localStorage.setItem(
        STORAGE_KEYS.languageDefaultVersion,
        LANGUAGE_DEFAULT_VERSION
      );
      return 'en';
    }

    if (stored === 'en' || stored === 'ja') {
      return stored;
    }
  } catch {
    return 'en';
  }

  return 'en';
};
