/**
 * Crystal Wars - Inventory & Hotbar Manager
 */

import { HotbarSlot, ItemId, CurrencyType, Currency } from '../types';
import { ToolTier } from '../config';

export class Inventory {
  public hotbar: HotbarSlot[] = [];
  public selectedSlot: number = 0;
  public currency: Currency = { copper: 0, gold: 0, emerald: 0, diamond: 0 };

  // Track highest tier owned per tool type
  public swordTier: ToolTier = 'basic';
  public pickaxeTier: ToolTier = 'basic';
  public shovelTier: ToolTier = 'basic';
  public hasBow: boolean = false;

  constructor() {
    this.initHotbar();
  }

  private initHotbar(): void {
    this.hotbar = [
      { itemId: 'sword',    count: 1,  tier: 'basic' },
      { itemId: 'pickaxe',  count: 1,  tier: 'basic' },
      { itemId: 'shovel',   count: 1,  tier: 'basic' },
      { itemId: 'bow',      count: 0,  tier: 'basic' },
      { itemId: 'arrows',   count: 0,  tier: 'basic' },
      { itemId: 'purpleDotter', count: 0, tier: 'basic' },
      { itemId: 'jumpPad',  count: 0,  tier: 'basic' },
      { itemId: 'block',    count: 0,  tier: 'basic' },
    ];
  }

  getCurrentSlot(): HotbarSlot {
    return this.hotbar[this.selectedSlot];
  }

  getCurrentItem(): ItemId | null {
    const slot = this.getCurrentSlot();
    if (!slot.itemId) return null;
    // Check if the item requires count > 0 (consumables)
    if (this.isConsumable(slot.itemId) && slot.count <= 0) return null;
    return slot.itemId;
  }

  isConsumable(id: ItemId): boolean {
    return id === 'arrows' || id === 'purpleDotter' || id === 'jumpPad' || id === 'block';
  }

  selectSlot(index: number): void {
    if (index >= 0 && index < this.hotbar.length) {
      this.selectedSlot = index;
    }
  }

  scrollSlot(delta: number): void {
    this.selectedSlot = ((this.selectedSlot + delta) % this.hotbar.length + this.hotbar.length) % this.hotbar.length;
  }

  addItem(itemId: ItemId, count: number = 1): void {
    const slot = this.hotbar.find(s => s.itemId === itemId);
    if (slot) {
      slot.count += count;
    }
  }

  removeItem(itemId: ItemId, count: number = 1): boolean {
    const slot = this.hotbar.find(s => s.itemId === itemId);
    if (slot && slot.count >= count) {
      slot.count -= count;
      return true;
    }
    return false;
  }

  getItemCount(itemId: ItemId): number {
    const slot = this.hotbar.find(s => s.itemId === itemId);
    return slot ? slot.count : 0;
  }

  addCurrency(type: CurrencyType, amount: number): void {
    this.currency[type] += amount;
  }

  hasCurrency(type: CurrencyType, amount: number): boolean {
    return this.currency[type] >= amount;
  }

  spendCurrency(type: CurrencyType, amount: number): boolean {
    if (this.currency[type] >= amount) {
      this.currency[type] -= amount;
      return true;
    }
    return false;
  }

  upgradeTool(tool: 'sword' | 'pickaxe' | 'shovel', tier: ToolTier): void {
    switch (tool) {
      case 'sword':
        this.swordTier = tier;
        break;
      case 'pickaxe':
        this.pickaxeTier = tier;
        break;
      case 'shovel':
        this.shovelTier = tier;
        break;
    }
    // Update hotbar slot tier
    const slot = this.hotbar.find(s => s.itemId === tool);
    if (slot) {
      slot.tier = tier;
    }
  }

  enableBow(): void {
    this.hasBow = true;
    const slot = this.hotbar.find(s => s.itemId === 'bow');
    if (slot) {
      slot.count = 1;
    }
  }

  reset(): void {
    this.currency = { copper: 0, gold: 0, emerald: 0, diamond: 0 };
    this.swordTier = 'basic';
    this.pickaxeTier = 'basic';
    this.shovelTier = 'basic';
    this.hasBow = false;
    this.selectedSlot = 0;
    this.initHotbar();
  }
}
