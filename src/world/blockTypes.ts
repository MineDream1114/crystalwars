/**
 * Crystal Wars - Block Type Definitions
 * Each block type has a color and hardness.
 */

export interface BlockType {
  id: string;
  color: number;
  hardness: number;
  isSoft: boolean;   // shovel bonus
  isHard: boolean;   // pickaxe bonus
  drop?: string;     // what currency / resource it drops
  dropAmount?: number;
}

export const BLOCK_TYPES: Record<string, BlockType> = {
  air: {
    id: 'air', color: 0x000000, hardness: 0,
    isSoft: false, isHard: false,
  },
  grass: {
    id: 'grass', color: 0x4a8c3f, hardness: 0.6,
    isSoft: true, isHard: false,
  },
  dirt: {
    id: 'dirt', color: 0x8b6914, hardness: 0.5,
    isSoft: true, isHard: false,
  },
  stone: {
    id: 'stone', color: 0x808080, hardness: 1.5,
    isSoft: false, isHard: true,
  },
  sand: {
    id: 'sand', color: 0xdec472, hardness: 0.3,
    isSoft: true, isHard: false,
  },
  ore_copper: {
    id: 'ore_copper', color: 0xcd7f32, hardness: 2.0,
    isSoft: false, isHard: true,
    drop: 'copper', dropAmount: 2,
  },
  ore_gold: {
    id: 'ore_gold', color: 0xdaa520, hardness: 2.5,
    isSoft: false, isHard: true,
    drop: 'gold', dropAmount: 1,
  },
  ore_emerald: {
    id: 'ore_emerald', color: 0x50c878, hardness: 3.0,
    isSoft: false, isHard: true,
    drop: 'emerald', dropAmount: 1,
  },
  ore_diamond: {
    id: 'ore_diamond', color: 0x44ddff, hardness: 3.5,
    isSoft: false, isHard: true,
    drop: 'diamond', dropAmount: 1,
  },
  wood: {
    id: 'wood', color: 0x6b4226, hardness: 0.8,
    isSoft: false, isHard: false,
  },
  leaves: {
    id: 'leaves', color: 0x228b22, hardness: 0.2,
    isSoft: true, isHard: false,
  },
  chest: {
    id: 'chest', color: 0xdeb887, hardness: 1.0,
    isSoft: false, isHard: false,
  },
  placed_block: {
    id: 'placed_block', color: 0x9966cc, hardness: 0.5,
    isSoft: false, isHard: false,
  },
  jump_pad: {
    id: 'jump_pad', color: 0xff4444, hardness: 0.3,
    isSoft: false, isHard: false,
  },
  water: {
    id: 'water', color: 0x1a6fc4, hardness: 999,
    isSoft: false, isHard: false,
  },
  bedrock: {
    id: 'bedrock', color: 0x333333, hardness: 999,
    isSoft: false, isHard: true,
  },
};

export function getBlockType(id: string): BlockType {
  return BLOCK_TYPES[id] ?? BLOCK_TYPES.air;
}
