/**
 * Crystal Wars - Shop UI
 * Renders the merchant shop panel and handles purchases.
 */

import { Merchant, ShopEntry } from '../entities/merchant';
import { Inventory } from '../player/inventory';
import { t } from '../localization/i18n';
import { formatPrice } from '../economy/economy';

export class ShopUI {
  private merchant: Merchant;
  private inventory: Inventory;

  constructor(merchant: Merchant, inventory: Inventory) {
    this.merchant = merchant;
    this.inventory = inventory;
  }

  open(): void {
    this.render();
    const screen = document.getElementById('shop-screen');
    if (screen) screen.classList.add('active');
  }

  close(): void {
    const screen = document.getElementById('shop-screen');
    if (screen) screen.classList.remove('active');
  }

  isOpen(): boolean {
    const screen = document.getElementById('shop-screen');
    return screen?.classList.contains('active') ?? false;
  }

  private render(): void {
    const grid = document.getElementById('shop-items');
    if (!grid) return;
    grid.innerHTML = '';

    const items = this.merchant.getShopItems();
    
    for (const item of items) {
      const div = document.createElement('div');
      div.className = 'shop-item';
      
      const canAfford = this.inventory.hasCurrency(item.currency, item.price);
      if (!canAfford) div.classList.add('cannot-afford');

      div.innerHTML = `
        <div class="item-icon">${item.icon}</div>
        <div class="item-name">${t(item.nameKey)} ${this.getToolName(item.id)}</div>
        <div class="item-price">${formatPrice(item.currency, item.price)}</div>
        <div class="item-desc">${t(item.descKey)}</div>
      `;

      div.addEventListener('click', () => {
        this.merchant.buyItem(item, this.inventory);
        this.render(); // Re-render to update affordability
      });

      grid.appendChild(div);
    }

    // Update title
    const title = document.querySelector('.shop-panel h2');
    if (title) title.textContent = t('merchantShop');

    // Close button
    const closeBtn = document.getElementById('btn-shop-close');
    if (closeBtn) {
      closeBtn.textContent = t('close');
      closeBtn.onclick = () => this.close();
    }
  }

  private getToolName(id: string): string {
    if (id.includes('Sword')) return `(${t('sword')})`;
    if (id.includes('Pickaxe')) return `(${t('pickaxe')})`;
    if (id.includes('Shovel')) return `(${t('shovel')})`;
    return '';
  }
}
