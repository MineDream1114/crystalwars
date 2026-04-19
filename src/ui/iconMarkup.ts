import { TIER_COLORS } from '../config';
import type { Currency, HotbarItemId, ToolTier } from '../types';

type IconItemId = HotbarItemId | 'arrows';

const MUTE = '#5a5e82';

function wrap(body: string, viewBox = '0 0 64 64'): string {
  return `<svg class="ui-icon-svg" viewBox="${viewBox}" aria-hidden="true" focusable="false">${body}</svg>`;
}

function resolveTierColor(tier: ToolTier | undefined, locked = false): string {
  if (locked) {
    return MUTE;
  }
  return TIER_COLORS[tier ?? 'basic'];
}

export function renderItemIcon(
  item: IconItemId,
  options: { tier?: ToolTier; locked?: boolean } = {}
): string {
  const accent = resolveTierColor(options.tier, options.locked);
  const steel = options.locked ? '#4b5070' : '#d6dbff';
  const wood = options.locked ? '#41384f' : '#6d4727';

  switch (item) {
    case 'sword':
      return wrap(`
        <g transform="rotate(42 32 32)">
          <path d="M28 9h8v24h-8z" fill="${accent}" />
          <path d="M28 9h8l-4-7z" fill="#ffffff" />
          <rect x="22" y="33" width="20" height="5" rx="2.5" fill="#5f4be8" />
          <rect x="29" y="38" width="6" height="15" rx="3" fill="${wood}" />
          <circle cx="32" cy="56" r="4" fill="#f3b24c" />
        </g>
      `);
    case 'pickaxe':
      return wrap(`
        <g transform="rotate(-20 32 32)">
          <rect x="29" y="13" width="6" height="38" rx="3" fill="${wood}" />
          <path d="M13 21c9-10 30-10 39 0l-5 6c-7-5-20-5-29 0z" fill="${accent}" />
          <rect x="28" y="48" width="8" height="8" rx="3" fill="#f2b853" />
        </g>
      `);
    case 'shovel':
      return wrap(`
        <g transform="rotate(-18 32 32)">
          <rect x="29" y="10" width="6" height="32" rx="3" fill="${wood}" />
          <path d="M22 37h20v7c0 8-6 14-10 14s-10-6-10-14z" fill="${accent}" />
          <rect x="27" y="8" width="10" height="6" rx="3" fill="#f0b24c" />
        </g>
      `);
    case 'bow':
      return wrap(`
        <path d="M17 12c10 10 16 24 16 38" fill="none" stroke="${accent}" stroke-width="5" stroke-linecap="round" />
        <path d="M47 12c-10 10-16 24-16 38" fill="none" stroke="${accent}" stroke-width="5" stroke-linecap="round" />
        <path d="M17 12l30 38" fill="none" stroke="${steel}" stroke-width="2.6" stroke-linecap="round" />
        <path d="M32 18l0 24" fill="none" stroke="${steel}" stroke-width="2" stroke-linecap="round" />
        <path d="M32 14l4 7h-8z" fill="#f5bc5f" />
      `);
    case 'arrows':
      return wrap(`
        <g transform="rotate(-18 32 32)">
          <path d="M18 45l20-24" stroke="${steel}" stroke-width="3" stroke-linecap="round" />
          <path d="M17 45l5-1-2-4z" fill="#f5bc5f" />
          <path d="M38 21l6 3" stroke="${accent}" stroke-width="2" stroke-linecap="round" />
          <path d="M24 50l20-24" stroke="${steel}" stroke-width="3" stroke-linecap="round" opacity="0.8" />
          <path d="M23 50l5-1-2-4z" fill="#f5bc5f" opacity="0.9" />
          <path d="M44 26l6 3" stroke="${accent}" stroke-width="2" stroke-linecap="round" opacity="0.8" />
        </g>
      `);
    case 'blocks':
      return wrap(`
        <polygon points="32,8 51,18 32,28 13,18" fill="#8a6b4d" />
        <polygon points="13,18 32,28 32,49 13,39" fill="#65482f" />
        <polygon points="51,18 32,28 32,49 51,39" fill="#a7815c" />
      `);
    case 'purpleDotter':
      return wrap(`
        <circle cx="32" cy="32" r="17" fill="#8235ff" />
        <circle cx="32" cy="32" r="11" fill="#c970ff" opacity="0.82" />
        <path d="M32 11l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="#fff2ff" opacity="0.94" />
      `);
    case 'jumpPad':
      return wrap(`
        <rect x="11" y="38" width="42" height="11" rx="5" fill="#42507a" />
        <rect x="16" y="33" width="32" height="7" rx="3.5" fill="#8554ff" />
        <path d="M32 13l7 11h-5v8h-4v-8h-5z" fill="#ffcf64" />
      `);
  }
}

export function renderCurrencyIcon(currency: Currency): string {
  switch (currency) {
    case 'copper':
      return wrap(`
        <circle cx="32" cy="32" r="16" fill="#bd7440" />
        <circle cx="32" cy="32" r="8" fill="#e9b27f" opacity="0.72" />
      `);
    case 'gold':
      return wrap(`
        <circle cx="32" cy="32" r="16" fill="#f0c33c" />
        <circle cx="32" cy="32" r="8" fill="#fff0a8" opacity="0.8" />
      `);
    case 'emerald':
      return wrap(`
        <path d="M32 11l13 9v14l-13 19-13-19V20z" fill="#33d18a" />
        <path d="M32 18l7 5v8l-7 9-7-9v-8z" fill="#abffcf" opacity="0.7" />
      `);
    case 'diamond':
      return wrap(`
        <path d="M18 24l8-10h12l8 10-14 24z" fill="#78e7ff" />
        <path d="M26 14l6 10 6-10" fill="none" stroke="#e7feff" stroke-width="2.4" stroke-linejoin="round" />
      `);
  }
}
