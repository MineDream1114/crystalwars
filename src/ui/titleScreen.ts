/**
 * Crystal Wars - Title Screen
 */

export class TitleScreen {
  private onStart: () => void;
  private onSettings: () => void;

  constructor(onStart: () => void, onSettings: () => void) {
    this.onStart = onStart;
    this.onSettings = onSettings;
    this.setup();
  }

  private setup(): void {
    document.getElementById('btn-start')?.addEventListener('click', () => {
      this.hide();
      this.onStart();
    });
    document.getElementById('btn-settings')?.addEventListener('click', () => {
      this.hide();
      this.onSettings();
    });
  }

  show(): void {
    const el = document.getElementById('title-screen');
    if (el) el.classList.add('active');
  }

  hide(): void {
    const el = document.getElementById('title-screen');
    if (el) el.classList.remove('active');
  }
}
