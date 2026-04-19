/**
 * Crystal Wars - Chest System
 * Manages chest data and loot distribution.
 */

import { ChestData, CurrencyType } from '../types';

/** All chests in the world */
let allChests: ChestData[] = [];

export function registerChests(chests: ChestData[]): void {
  allChests = allChests.concat(chests);
}

export function getAllChests(): ChestData[] {
  return allChests;
}

export function findChestAt(x: number, y: number, z: number): ChestData | undefined {
  return allChests.find(c => 
    Math.floor(c.x) === Math.floor(x) && 
    Math.floor(c.y) === Math.floor(y) && 
    Math.floor(c.z) === Math.floor(z)
  );
}

export function openChest(chest: ChestData): { item: CurrencyType; amount: number }[] {
  if (chest.opened) return [];
  chest.opened = true;
  return chest.loot.map(l => ({
    item: l.item as CurrencyType,
    amount: l.amount,
  }));
}

export function resetChests(): void {
  allChests = [];
}
