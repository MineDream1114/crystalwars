/**
 * Crystal Wars - Economy System
 */

import { CurrencyType } from '../types';

export const CURRENCY_NAMES: Record<CurrencyType, string> = {
  copper: 'copper',
  gold: 'gold',
  emerald: 'emerald',
  diamond: 'diamond',
};

export const CURRENCY_COLORS: Record<CurrencyType, string> = {
  copper: '#cd7f32',
  gold: '#ffd700',
  emerald: '#50c878',
  diamond: '#b9f2ff',
};

export const CURRENCY_ICONS: Record<CurrencyType, string> = {
  copper: '🟤',
  gold: '🟡',
  emerald: '🟢',
  diamond: '💎',
};

export function formatPrice(currency: CurrencyType, amount: number): string {
  return `${amount} ${CURRENCY_ICONS[currency]}`;
}
