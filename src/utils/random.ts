/**
 * Crystal Wars - Random Utilities
 * Simple seeded random for reproducible world generation.
 */

export class SeededRandom {
  private seed: number;

  constructor(seed: number = 12345) {
    this.seed = seed;
  }

  /** Returns a value in [0, 1) */
  next(): number {
    this.seed = (this.seed * 16807 + 0) % 2147483647;
    return (this.seed - 1) / 2147483646;
  }

  /** Returns integer in [min, max] inclusive */
  nextInt(min: number, max: number): number {
    return Math.floor(this.next() * (max - min + 1)) + min;
  }

  /** Returns float in [min, max) */
  nextFloat(min: number, max: number): number {
    return this.next() * (max - min) + min;
  }

  /** Choose from weighted options */
  weighted<T extends { weight: number }>(options: T[]): T {
    const total = options.reduce((sum, o) => sum + o.weight, 0);
    let r = this.next() * total;
    for (const opt of options) {
      r -= opt.weight;
      if (r <= 0) return opt;
    }
    return options[options.length - 1];
  }
}

/** Simple noise-like function for terrain height */
export function simpleNoise2D(x: number, z: number, scale: number = 0.1): number {
  const nx = x * scale;
  const nz = z * scale;
  return (
    Math.sin(nx * 1.7 + nz * 0.9) * 0.3 +
    Math.sin(nx * 0.5 + nz * 2.1) * 0.3 +
    Math.cos(nx * 1.1 - nz * 1.3) * 0.2 +
    Math.sin(nx * 3.1 + nz * 0.7) * 0.1 +
    Math.cos(nx * 0.3 + nz * 3.3) * 0.1
  );
}
