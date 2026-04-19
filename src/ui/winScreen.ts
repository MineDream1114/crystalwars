/**
 * Crystal Wars - Win Screen
 */

export class WinScreen {
  private onRestart: () => void;

  constructor(onRestart: () => void) {
    this.onRestart = onRestart;
    document.getElementById('btn-restart')?.addEventListener('click', () => {
      this.hide();
      this.onRestart();
    });
  }

  show(): void {
    const el = document.getElementById('win-screen');
    if (el) el.classList.add('active');
  }

  hide(): void {
    const el = document.getElementById('win-screen');
    if (el) el.classList.remove('active');
  }
}
