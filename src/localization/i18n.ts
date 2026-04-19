/**
 * Crystal Wars - Internationalization System
 * Handles language switching and text translation.
 */

import { en } from './en';
import { ja } from './ja';

type Language = 'en' | 'ja';

const translations: Record<Language, Record<string, string>> = { en, ja };

let currentLang: Language = 'en';

/**
 * Initialize i18n, loading saved language preference
 */
export function initI18n(): void {
  const saved = localStorage.getItem('crystal-wars-lang') as Language | null;
  if (saved && translations[saved]) {
    currentLang = saved;
  }
  applyTranslations();
}

/**
 * Get current language
 */
export function getLang(): Language {
  return currentLang;
}

/**
 * Set language and update all UI
 */
export function setLang(lang: Language): void {
  currentLang = lang;
  localStorage.setItem('crystal-wars-lang', lang);
  applyTranslations();
}

/**
 * Get a translated string by key
 */
export function t(key: string): string {
  return translations[currentLang][key] ?? translations['en'][key] ?? key;
}

/**
 * Apply translations to all elements with data-i18n attribute
 */
export function applyTranslations(): void {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      el.textContent = t(key);
    }
  });
  
  // Update tutorial content (innerHTML)
  const tutorialEl = document.getElementById('tutorial-content');
  if (tutorialEl) {
    tutorialEl.innerHTML = t('tutorialContent');
  }
}
