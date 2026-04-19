/**
 * Crystal Wars - HUD Manager
 * Updates health, currency, hotbar, objective displays.
 */

import { Inventory } from '../player/inventory';
import { ITEM_DEFS } from '../items/items';
import { t } from '../localization/i18n';
import { getTierInfo } from '../items/upgrades';
import { MAX_HEALTH } from '../config';

export class HUD {
  private inventory: Inventory;
  private getHealth: () => number;
  private getCrystalCount: () => number;

  constructor(
    inventory: Inventory, 
    getHealth: () => number,
    getCrystalCount: () => number
  ) {
    this.inventory = inventory;
    this.getHealth = getHealth;
    this.getCrystalCount = getCrystalCount;
    this.buildHotbar();
  }

  private buildHotbar(): void {
    const hotbarEl = document.getElementById('hotbar');
    if (!hotbarEl) return;
    hotbarEl.innerHTML = '';

    for (let i = 0; i < this.inventory.hotbar.length; i++) {
      const slot = document.createElement('div');
      slot.className = 'hotbar-slot';
      slot.id = `hotbar-slot-${i}`;
      slot.innerHTML = `
        <span class="slot-number">${i + 1}</span>
        <span class="slot-icon"></span>
        <span class="slot-name"></span>
        <span class="slot-count"></span>
      `;
      
      // Make it clickable for mobile support
      slot.addEventListener('pointerdown', (e) => {
        e.preventDefault(); // Prevent double triggering with touch
        this.inventory.selectSlot(i);
      });
      
      hotbarEl.appendChild(slot);
    }
  }

  update(): void {
    // Health
    const health = this.getHealth();
    const healthFill = document.getElementById('health-fill');
    const healthText = document.getElementById('health-text');
    if (healthFill) {
      healthFill.style.width = `${(health / MAX_HEALTH) * 100}%`;
    }
    if (healthText) {
      healthText.textContent = `${Math.ceil(health)}`;
    }

    // Currency
    const copperEl = document.querySelector('#copper-count .currency-val');
    const goldEl = document.querySelector('#gold-count .currency-val');
    const emeraldEl = document.querySelector('#emerald-count .currency-val');
    const diamondEl = document.querySelector('#diamond-count .currency-val');
    
    if (copperEl) copperEl.textContent = `${this.inventory.currency.copper}`;
    if (goldEl) goldEl.textContent = `${this.inventory.currency.gold}`;
    if (emeraldEl) emeraldEl.textContent = `${this.inventory.currency.emerald}`;
    if (diamondEl) diamondEl.textContent = `${this.inventory.currency.diamond}`;

    // Crystal count
    const crystalCountEl = document.getElementById('crystal-count');
    if (crystalCountEl) {
      crystalCountEl.textContent = `${this.getCrystalCount()} / 8`;
    }

    // Hotbar
    for (let i = 0; i < this.inventory.hotbar.length; i++) {
      const slotData = this.inventory.hotbar[i];
      const slotEl = document.getElementById(`hotbar-slot-${i}`);
      if (!slotEl) continue;

      const isActive = i === this.inventory.selectedSlot;
      slotEl.className = `hotbar-slot${isActive ? ' active' : ''}`;

      const iconEl = slotEl.querySelector('.slot-icon') as HTMLElement;
      const nameEl = slotEl.querySelector('.slot-name') as HTMLElement;
      const countEl = slotEl.querySelector('.slot-count') as HTMLElement;

      if (slotData.itemId) {
        const def = ITEM_DEFS[slotData.itemId];
        if (def) {
          iconEl.textContent = def.icon;
          
          // Show tier if not basic
          const tierName = slotData.tier !== 'basic' ? t(slotData.tier) + ' ' : '';
          nameEl.textContent = tierName + t(def.nameKey);
          
          // Show tier color
          if (slotData.tier !== 'basic') {
            const tierInfo = getTierInfo(slotData.tier);
            nameEl.style.color = tierInfo.displayColor;
          } else {
            nameEl.style.color = '';
          }
          
          if (def.stackable && slotData.count > 0) {
            countEl.textContent = `${slotData.count}`;
          } else if (!def.stackable && slotData.count > 0) {
            countEl.textContent = '';
          } else {
            countEl.textContent = '';
            iconEl.style.opacity = '0.3';
          }
          
          if (slotData.count > 0 || !def.stackable) {
            iconEl.style.opacity = '1';
          } else {
            iconEl.style.opacity = '0.3';
          }
        }
      } else {
        iconEl.textContent = '';
        nameEl.textContent = '';
        countEl.textContent = '';
      }
    }
  }

  show(): void {
    const hud = document.getElementById('hud');
    if (hud) hud.classList.remove('hidden');
  }

  hide(): void {
    const hud = document.getElementById('hud');
    if (hud) hud.classList.add('hidden');
  }
}
