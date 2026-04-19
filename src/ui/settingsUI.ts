/**
 * Crystal Wars - Settings UI
 */

import { setLang, getLang } from '../localization/i18n';
import { MOUSE_SENSITIVITY } from '../config';

export class SettingsUI {
  private onBack: () => void;
  private onSensitivityChange?: (val: number) => void;

  constructor(onBack: () => void, onSensitivityChange?: (val: number) => void) {
    this.onBack = onBack;
    this.onSensitivityChange = onSensitivityChange;
    this.setup();
  }

  private setup(): void {
    // Language select
    const langSelect = document.getElementById('language-select') as HTMLSelectElement;
    if (langSelect) {
      langSelect.value = getLang();
      langSelect.addEventListener('change', () => {
        setLang(langSelect.value as 'en' | 'ja');
      });
    }

    // Sensitivity slider
    const slider = document.getElementById('sensitivity-slider') as HTMLInputElement;
    if (slider) {
      slider.value = String(Math.round(MOUSE_SENSITIVITY * 2500));
      slider.addEventListener('input', () => {
        const val = parseInt(slider.value) / 2500;
        if (this.onSensitivityChange) this.onSensitivityChange(val);
      });
    }

    // Back button
    document.getElementById('btn-settings-back')?.addEventListener('click', () => {
      this.hide();
      this.onBack();
    });
  }

  show(): void {
    const el = document.getElementById('settings-screen');
    if (el) el.classList.add('active');
    // Update language select
    const langSelect = document.getElementById('language-select') as HTMLSelectElement;
    if (langSelect) langSelect.value = getLang();
  }

  hide(): void {
    const el = document.getElementById('settings-screen');
    if (el) el.classList.remove('active');
  }

  isOpen(): boolean {
    return document.getElementById('settings-screen')?.classList.contains('active') ?? false;
  }
}
