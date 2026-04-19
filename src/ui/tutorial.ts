/**
 * Crystal Wars - Tutorial Overlay
 */

import { t, applyTranslations } from '../localization/i18n';

export class Tutorial {
  private onClose: () => void;

  constructor(onClose: () => void) {
    this.onClose = onClose;
    document.getElementById('btn-tutorial-close')?.addEventListener('click', () => {
      this.hide();
      this.onClose();
    });
  }

  show(): void {
    // Update content with current language
    const content = document.getElementById('tutorial-content');
    if (content) {
      content.innerHTML = t('tutorialContent');
    }
    applyTranslations();
    const el = document.getElementById('tutorial-overlay');
    if (el) el.classList.add('active');
  }

  hide(): void {
    const el = document.getElementById('tutorial-overlay');
    if (el) el.classList.remove('active');
  }
}
