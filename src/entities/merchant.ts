/**
 * Crystal Wars - Merchant NPC
 * Shop NPC on the middle island. Sells items and upgrades.
 */

import * as THREE from 'three';
import { PRICES } from '../config';
import { CurrencyType } from '../types';
import { Inventory } from '../player/inventory';
import { t } from '../localization/i18n';
import { showNotification } from '../utils/helpers';

export interface ShopEntry {
  id: string;
  nameKey: string;
  icon: string;
  descKey: string;
  currency: CurrencyType;
  price: number;
  onBuy: (inv: Inventory) => boolean;
}

export class Merchant {
  public position: THREE.Vector3;
  private scene: THREE.Scene;
  private npcMesh: THREE.Group;
  private time = 0;

  constructor(scene: THREE.Scene, surfaceY: number) {
    this.scene = scene;
    this.position = new THREE.Vector3(4, surfaceY, 3);

    this.npcMesh = new THREE.Group();

    // Body (merchant wears blue)
    const bodyGeo = new THREE.CylinderGeometry(0.35, 0.45, 1.4, 8);
    const bodyMat = new THREE.MeshLambertMaterial({ color: 0x3355cc });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 0.9;
    this.npcMesh.add(body);

    // Head
    const headGeo = new THREE.SphereGeometry(0.32, 8, 8);
    const headMat = new THREE.MeshLambertMaterial({ color: 0xffcc88 });
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.y = 1.85;
    this.npcMesh.add(head);

    // Hat
    const hatGeo = new THREE.ConeGeometry(0.4, 0.5, 8);
    const hatMat = new THREE.MeshLambertMaterial({ color: 0xaa2222 });
    const hat = new THREE.Mesh(hatGeo, hatMat);
    hat.position.y = 2.3;
    this.npcMesh.add(hat);

    // Floating gem indicator
    const gemGeo = new THREE.OctahedronGeometry(0.2, 0);
    const gemMat = new THREE.MeshPhongMaterial({
      color: 0xffd700,
      emissive: 0xffa500,
      emissiveIntensity: 0.5,
    });
    const gem = new THREE.Mesh(gemGeo, gemMat);
    gem.position.y = 2.8;
    this.npcMesh.add(gem);

    this.npcMesh.position.copy(this.position);
    scene.add(this.npcMesh);
  }

  update(dt: number): void {
    this.time += dt;
    // Animate floating gem
    const gem = this.npcMesh.children[3];
    if (gem) {
      gem.rotation.y += dt * 2;
      gem.position.y = 2.8 + Math.sin(this.time * 2.5) * 0.15;
    }
  }

  /**
   * Get all shop items
   */
  getShopItems(): ShopEntry[] {
    return [
      {
        id: 'block',
        nameKey: 'block',
        icon: '🧱',
        descKey: 'descBlock',
        currency: PRICES.block.currency,
        price: PRICES.block.amount,
        onBuy: (inv) => {
          inv.addItem('block', 5);
          return true;
        },
      },
      {
        id: 'purpleDotter',
        nameKey: 'purpleDotter',
        icon: '🟣',
        descKey: 'descPurpleDotter',
        currency: PRICES.purpleDotter.currency,
        price: PRICES.purpleDotter.amount,
        onBuy: (inv) => {
          inv.addItem('purpleDotter', 3);
          return true;
        },
      },
      {
        id: 'bow',
        nameKey: 'bow',
        icon: '🏹',
        descKey: 'descBow',
        currency: PRICES.bow.currency,
        price: PRICES.bow.amount,
        onBuy: (inv) => {
          inv.enableBow();
          return true;
        },
      },
      {
        id: 'arrows',
        nameKey: 'arrows',
        icon: '🏹',
        descKey: 'descArrows',
        currency: PRICES.arrows.currency,
        price: PRICES.arrows.amount,
        onBuy: (inv) => {
          inv.addItem('arrows', 10);
          return true;
        },
      },
      {
        id: 'jumpPad',
        nameKey: 'jumpPad',
        icon: '🔴',
        descKey: 'descJumpPad',
        currency: PRICES.jumpPad.currency,
        price: PRICES.jumpPad.amount,
        onBuy: (inv) => {
          inv.addItem('jumpPad', 1);
          return true;
        },
      },
      {
        id: 'ironSword',
        nameKey: 'iron',
        icon: '⚔️',
        descKey: 'descIronSword',
        currency: PRICES.ironSword.currency,
        price: PRICES.ironSword.amount,
        onBuy: (inv) => {
          inv.upgradeTool('sword', 'iron');
          return true;
        },
      },
      {
        id: 'ironPickaxe',
        nameKey: 'iron',
        icon: '⛏️',
        descKey: 'descIronPickaxe',
        currency: PRICES.ironPickaxe.currency,
        price: PRICES.ironPickaxe.amount,
        onBuy: (inv) => {
          inv.upgradeTool('pickaxe', 'iron');
          return true;
        },
      },
      {
        id: 'ironShovel',
        nameKey: 'iron',
        icon: '🪏',
        descKey: 'descIronShovel',
        currency: PRICES.ironShovel.currency,
        price: PRICES.ironShovel.amount,
        onBuy: (inv) => {
          inv.upgradeTool('shovel', 'iron');
          return true;
        },
      },
      {
        id: 'diamondSword',
        nameKey: 'diamond',
        icon: '⚔️',
        descKey: 'descDiamondSword',
        currency: PRICES.diamondSword.currency,
        price: PRICES.diamondSword.amount,
        onBuy: (inv) => {
          inv.upgradeTool('sword', 'diamond');
          return true;
        },
      },
      {
        id: 'diamondPickaxe',
        nameKey: 'diamond',
        icon: '⛏️',
        descKey: 'descDiamondPickaxe',
        currency: PRICES.diamondPickaxe.currency,
        price: PRICES.diamondPickaxe.amount,
        onBuy: (inv) => {
          inv.upgradeTool('pickaxe', 'diamond');
          return true;
        },
      },
      {
        id: 'diamondShovel',
        nameKey: 'diamond',
        icon: '🪏',
        descKey: 'descDiamondShovel',
        currency: PRICES.diamondShovel.currency,
        price: PRICES.diamondShovel.amount,
        onBuy: (inv) => {
          inv.upgradeTool('shovel', 'diamond');
          return true;
        },
      },
      {
        id: 'rainbowSword',
        nameKey: 'rainbow',
        icon: '⚔️',
        descKey: 'descRainbowSword',
        currency: PRICES.rainbowSword.currency,
        price: PRICES.rainbowSword.amount,
        onBuy: (inv) => {
          inv.upgradeTool('sword', 'rainbow');
          return true;
        },
      },
      {
        id: 'rainbowPickaxe',
        nameKey: 'rainbow',
        icon: '⛏️',
        descKey: 'descRainbowPickaxe',
        currency: PRICES.rainbowPickaxe.currency,
        price: PRICES.rainbowPickaxe.amount,
        onBuy: (inv) => {
          inv.upgradeTool('pickaxe', 'rainbow');
          return true;
        },
      },
      {
        id: 'rainbowShovel',
        nameKey: 'rainbow',
        icon: '🪏',
        descKey: 'descRainbowShovel',
        currency: PRICES.rainbowShovel.currency,
        price: PRICES.rainbowShovel.amount,
        onBuy: (inv) => {
          inv.upgradeTool('shovel', 'rainbow');
          return true;
        },
      },
    ];
  }

  /**
   * Try to buy an item
   */
  buyItem(entry: ShopEntry, inventory: Inventory): boolean {
    if (!inventory.hasCurrency(entry.currency, entry.price)) {
      showNotification(t('cannotAfford'));
      return false;
    }
    
    inventory.spendCurrency(entry.currency, entry.price);
    entry.onBuy(inventory);
    showNotification(t('itemPurchased'));
    return true;
  }

  dispose(): void {
    this.scene.remove(this.npcMesh);
  }
}
