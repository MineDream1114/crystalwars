import './style.css';
import { Game } from './game/Game';

const mount = document.getElementById('app');

if (!mount) {
  throw new Error('Missing app mount node.');
}

const touchDevice =
  window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0;

const syncViewportHeight = (): void => {
  const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
  const viewportWidth = window.visualViewport?.width ?? window.innerWidth;
  document.documentElement.style.setProperty(
    '--app-height',
    `${Math.round(viewportHeight)}px`
  );
  document.body.classList.toggle('is-portrait', viewportHeight > viewportWidth);
};

document.documentElement.classList.toggle('touch-device', touchDevice);
document.body.classList.toggle('touch-device', touchDevice);
syncViewportHeight();

window.addEventListener('resize', syncViewportHeight, { passive: true });
window.addEventListener('orientationchange', syncViewportHeight, { passive: true });
window.visualViewport?.addEventListener('resize', syncViewportHeight, { passive: true });
window.visualViewport?.addEventListener('scroll', syncViewportHeight, { passive: true });
document.addEventListener('visibilitychange', syncViewportHeight);

let fatalScreenShown = false;

const showFatalScreen = (message: string): void => {
  if (fatalScreenShown) {
    return;
  }
  fatalScreenShown = true;

  mount.innerHTML = `
    <div class="fatal-screen">
      <div class="fatal-screen__card">
        <div class="fatal-screen__eyebrow">Mobile Startup Error</div>
        <h1 class="fatal-screen__title">The game could not start.</h1>
        <p class="fatal-screen__body">
          スマートフォンのブラウザで起動できませんでした。<br />
          ページを再読み込みするか、別のブラウザで開いてください。
        </p>
        <pre class="fatal-screen__details">${message}</pre>
      </div>
    </div>
  `;
};

window.addEventListener('error', (event) => {
  const message = event.error instanceof Error
    ? event.error.message
    : event.message || 'Unknown startup error.';
  showFatalScreen(message);
});

window.addEventListener('unhandledrejection', (event) => {
  const reason = event.reason;
  const message =
    reason instanceof Error
      ? reason.message
      : typeof reason === 'string'
        ? reason
        : 'Unhandled promise rejection.';
  showFatalScreen(message);
});

try {
  new Game(mount);
} catch (error) {
  const message =
    error instanceof Error
      ? error.message
      : 'Unknown startup error.';
  showFatalScreen(message);
}
