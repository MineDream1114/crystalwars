/**
 * Crystal Wars - Helper Utilities
 */

/** Show a notification message */
export function showNotification(text: string, durationMs: number = 2000): void {
  const el = document.getElementById('notification');
  if (!el) return;
  el.textContent = text;
  el.classList.remove('hidden');
  setTimeout(() => {
    el.classList.add('hidden');
  }, durationMs);
}

/** Show/hide interact prompt */
export function showInteractPrompt(show: boolean): void {
  const el = document.getElementById('interact-prompt');
  if (!el) return;
  if (show) {
    el.classList.remove('hidden');
  } else {
    el.classList.add('hidden');
  }
}

/** Clamp a number between min and max */
export function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}

/** Lerp between two values */
export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/** Distance 2D */
export function dist2D(x1: number, z1: number, x2: number, z2: number): number {
  const dx = x1 - x2;
  const dz = z1 - z2;
  return Math.sqrt(dx * dx + dz * dz);
}

/** Distance 3D */
export function dist3D(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number {
  const dx = x1 - x2;
  const dy = y1 - y2;
  const dz = z1 - z2;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
