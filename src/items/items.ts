/**
 * Crystal Wars - Item Definitions
 */

import { ItemDef } from '../types';

export const ITEM_DEFS: Record<string, ItemDef> = {
  sword: {
    id: 'sword',
    icon: '⚔️',
    nameKey: 'sword',
    stackable: false,
    maxStack: 1,
  },
  pickaxe: {
    id: 'pickaxe',
    icon: '⛏️',
    nameKey: 'pickaxe',
    stackable: false,
    maxStack: 1,
  },
  shovel: {
    id: 'shovel',
    icon: '🪏',
    nameKey: 'shovel',
    stackable: false,
    maxStack: 1,
  },
  bow: {
    id: 'bow',
    icon: '🏹',
    nameKey: 'bow',
    stackable: false,
    maxStack: 1,
  },
  arrows: {
    id: 'arrows',
    icon: '➶',
    nameKey: 'arrows',
    stackable: true,
    maxStack: 64,
  },
  purpleDotter: {
    id: 'purpleDotter',
    icon: '🟣',
    nameKey: 'purpleDotter',
    stackable: true,
    maxStack: 16,
  },
  jumpPad: {
    id: 'jumpPad',
    icon: '🔴',
    nameKey: 'jumpPad',
    stackable: true,
    maxStack: 16,
  },
  block: {
    id: 'block',
    icon: '🧱',
    nameKey: 'block',
    stackable: true,
    maxStack: 64,
  },
};
