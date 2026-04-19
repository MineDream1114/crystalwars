/**
 * Crystal Wars - Shared Type Definitions
 */

import { ToolTier } from './config';

export type CurrencyType = 'copper' | 'gold' | 'emerald' | 'diamond';

export interface Currency {
  copper: number;
  gold: number;
  emerald: number;
  diamond: number;
}

export type ItemId = 
  | 'sword' | 'pickaxe' | 'shovel' | 'bow' 
  | 'arrows' | 'purpleDotter' | 'jumpPad' | 'block';

export interface ItemDef {
  id: ItemId;
  icon: string;
  nameKey: string;      // i18n key
  stackable: boolean;
  maxStack: number;
  tier?: ToolTier;
}

export interface HotbarSlot {
  itemId: ItemId | null;
  count: number;
  tier: ToolTier;
}

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export interface IslandData {
  id: string;
  centerX: number;
  centerZ: number;
  size: number;
  isMiddle: boolean;
  crystalDestroyed: boolean;
}

export interface ChestData {
  x: number;
  y: number;
  z: number;
  opened: boolean;
  loot: { item: string; amount: number }[];
}

export interface ShopItem {
  id: string;
  nameKey: string;
  icon: string;
  descKey: string;
  currency: CurrencyType;
  price: number;
  action: () => void;
}

export type GameScreen = 
  | 'title' | 'settings' | 'tutorial' | 'playing' 
  | 'paused' | 'shop' | 'win';
