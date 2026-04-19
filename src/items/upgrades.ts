/**
 * Crystal Wars - Upgrade Tiers
 */

import { TIER_MULTIPLIERS, ToolTier } from '../config';

export interface TierInfo {
  name: ToolTier;
  damage: number;
  speed: number;
  color: number;
  displayColor: string;
}

export function getTierInfo(tier: ToolTier): TierInfo {
  const m = TIER_MULTIPLIERS[tier];
  const displayColors: Record<ToolTier, string> = {
    basic: '#888',
    iron: '#ccc',
    diamond: '#44ddff',
    rainbow: '#ff44ff',
  };
  return {
    name: tier,
    damage: m.damage,
    speed: m.speed,
    color: m.color,
    displayColor: displayColors[tier],
  };
}

export function getNextTier(current: ToolTier): ToolTier | null {
  const order: ToolTier[] = ['basic', 'iron', 'diamond', 'rainbow'];
  const idx = order.indexOf(current);
  if (idx < order.length - 1) return order[idx + 1];
  return null;
}
