/**
 * Crystal Wars - Game Configuration
 * All balance values, sizes, timers, and prices in one editable location.
 */

// ── World ────────────────────────────────────────────────
export const CHUNK_X = 9;
export const CHUNK_Z = 9;
export const CHUNK_Y = 18; // depth downward

export const ISLAND_CHUNKS = 2; // 2x2 chunks per outer island
export const ISLAND_SIZE = CHUNK_X * ISLAND_CHUNKS; // 18 blocks
export const ISLAND_SURFACE_Y = 12; // surface level within chunk
export const SEA_LEVEL = 8;         // y-level of the ocean water
export const ISLAND_SPACING = 60; // distance between center and outer islands

export const MIDDLE_ISLAND_SIZE = 14; // slightly smaller

// ── Player ───────────────────────────────────────────────
export const PLAYER_HEIGHT = 1.7;
export const PLAYER_RADIUS = 0.3;
export const PLAYER_SPEED = 0.08;
export const PLAYER_SPRINT_SPEED = 0.14;
export const PLAYER_JUMP_FORCE = 0.15;
export const GRAVITY = 0.007;
export const MAX_HEALTH = 100;
export const FALL_DAMAGE_THRESHOLD = 15; // blocks
export const FALL_DAMAGE_PER_BLOCK = 5;
export const MOUSE_SENSITIVITY = 0.002;

// ── Crystal ──────────────────────────────────────────────
export const CRYSTAL_HP = 100;
export const CRYSTAL_SIZE = 2;

// ── Tools / Combat ──────────────────────────────────────
export const TOOL_TIERS = ['basic', 'iron', 'diamond', 'rainbow'] as const;
export type ToolTier = typeof TOOL_TIERS[number];

export const TIER_MULTIPLIERS: Record<ToolTier, { damage: number; speed: number; color: number }> = {
  basic:   { damage: 1,   speed: 1,   color: 0x888888 },
  iron:    { damage: 1.8, speed: 1.5, color: 0xcccccc },
  diamond: { damage: 3,   speed: 2.5, color: 0x44ddff },
  rainbow: { damage: 5,   speed: 4,   color: 0xff44ff },
};

export const SWORD_BASE_DAMAGE = 10;
export const PICKAXE_BASE_SPEED = 1;
export const SHOVEL_BASE_SPEED = 1.5; // faster on soft blocks
export const BOW_DAMAGE = 15;
export const ARROW_SPEED = 0.8;
export const ATTACK_RANGE = 4;
export const ATTACK_COOLDOWN = 0.4; // seconds
export const MINING_TIME_BASE = 1.5; // seconds for basic block

// ── Economy ─────────────────────────────────────────────
export const PRICES = {
  // 1 copper = 1 block
  block: { currency: 'copper' as const, amount: 1 },

  // 5 gold items
  purpleDotter: { currency: 'gold' as const, amount: 5 },
  ironSword:    { currency: 'gold' as const, amount: 5 },
  ironPickaxe:  { currency: 'gold' as const, amount: 5 },
  ironShovel:   { currency: 'gold' as const, amount: 5 },
  jumpPad:      { currency: 'gold' as const, amount: 5 },
  bow:          { currency: 'gold' as const, amount: 8 },
  arrows:       { currency: 'gold' as const, amount: 2 }, // per 10 arrows

  // 12 emerald items
  diamondSword:   { currency: 'emerald' as const, amount: 12 },
  diamondPickaxe: { currency: 'emerald' as const, amount: 12 },
  diamondShovel:  { currency: 'emerald' as const, amount: 12 },

  // 20 emerald items
  rainbowSword:   { currency: 'emerald' as const, amount: 20 },
  rainbowPickaxe: { currency: 'emerald' as const, amount: 20 },
  rainbowShovel:  { currency: 'emerald' as const, amount: 20 },
};

// ── Resource Generators ─────────────────────────────────
export const ISLAND_NPC_COPPER_INTERVAL = 2;   // seconds
export const ISLAND_NPC_GOLD_INTERVAL = 60;    // seconds
export const MIDDLE_MACHINE_GOLD_INTERVAL = 7;  // seconds
export const MIDDLE_MACHINE_DIAMOND_INTERVAL = 15; // seconds

// ── Resource pickup range ───────────────────────────────
export const PICKUP_RANGE = 4;

// ── Chest generation ────────────────────────────────────
export const CHEST_MIN_DEPTH = 5; // blocks below surface
export const CHEST_CHANCE = 0.03; // per eligible block position
export const CHEST_LOOT_TABLE = [
  { item: 'copper', min: 3, max: 10, weight: 40 },
  { item: 'gold', min: 1, max: 5, weight: 30 },
  { item: 'emerald', min: 1, max: 3, weight: 20 },
  { item: 'diamond', min: 1, max: 2, weight: 10 },
];

// ── Block hardness ──────────────────────────────────────
export const BLOCK_HARDNESS: Record<string, number> = {
  grass: 0.6,
  dirt: 0.5,
  stone: 1.5,
  ore_copper: 2.0,
  ore_gold: 2.5,
  ore_emerald: 3.0,
  ore_diamond: 3.5,
  sand: 0.3,
  wood: 0.8,
  chest: 1.0,
};

// Soft blocks (shovel bonus)
export const SOFT_BLOCKS = new Set(['grass', 'dirt', 'sand']);
// Hard blocks (pickaxe bonus)
export const HARD_BLOCKS = new Set(['stone', 'ore_copper', 'ore_gold', 'ore_emerald', 'ore_diamond']);
