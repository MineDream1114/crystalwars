import { AUDIO_CONFIG } from '../config';
import type { GamePhase } from '../types';

type SoundCue =
  | 'footstep'
  | 'jump'
  | 'land'
  | 'jumpPad'
  | 'swing'
  | 'mine'
  | 'bow'
  | 'dotter'
  | 'teleport'
  | 'place'
  | 'interact'
  | 'shopOpen'
  | 'buy'
  | 'collect'
  | 'crystalHit'
  | 'crystalBreak'
  | 'hurt'
  | 'win'
  | 'error';

interface AudioSnapshot {
  phase: GamePhase;
  grounded: boolean;
  horizontalSpeed: number;
}

const LOOKAHEAD = 0.32;
const STEPS_PER_BAR = 8;
const CHORDS = [
  [57, 60, 64],
  [53, 57, 60],
  [50, 53, 57],
  [55, 59, 62]
] as const;
const BASS_NOTES = [33, 29, 26, 31] as const;
const MELODY_PATTERN = [0, 1, 2, 1, 2, 1, 0, 1] as const;

function midiToFrequency(midi: number): number {
  return 440 * 2 ** ((midi - 69) / 12);
}

export class AudioManager {
  private context: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private musicGain: GainNode | null = null;
  private sfxGain: GainNode | null = null;
  private noiseBuffer: AudioBuffer | null = null;
  private nextMusicTime = 0;
  private musicStep = 0;
  private footstepTimer = 0;
  private unlockBound = false;
  private resumePromise: Promise<void> | null = null;
  private pendingCues: SoundCue[] = [];
  private activePhase: GamePhase = 'title';

  constructor() {
    this.bindUnlockListeners();
    document.addEventListener('visibilitychange', this.onVisibilityChange);
  }

  activate(): void {
    if (!this.context) {
      this.createContext();
    }

    if (!this.context) {
      return;
    }

    if (this.context.state === 'running') {
      return;
    }

    if (this.resumePromise) {
      return;
    }

    this.resumePromise = this.context
      .resume()
      .then(() => {
        this.primeAudio();
        this.kickMusicScheduler();
        this.flushPendingCues();
      })
      .catch((error) => {
        console.warn('Audio resume failed:', error);
      })
      .finally(() => {
        this.resumePromise = null;
      });
  }

  update(delta: number, snapshot: AudioSnapshot): void {
    this.activePhase = snapshot.phase;

    if (!this.context || !this.musicGain) {
      return;
    }

    if (this.context.state !== 'running') {
      this.activate();
      return;
    }

    this.updateMusicMix(snapshot.phase);
    this.scheduleMusic();

    if (
      snapshot.phase === 'playing' &&
      snapshot.grounded &&
      snapshot.horizontalSpeed > 1.4
    ) {
      this.footstepTimer -= delta;
      if (this.footstepTimer <= 0) {
        this.playCue('footstep');
        const cadence = snapshot.horizontalSpeed > 8 ? 0.22 : 0.31;
        this.footstepTimer = cadence;
      }
    } else {
      this.footstepTimer = 0.05;
    }
  }

  playCue(cue: SoundCue): void {
    if (!this.context || !this.sfxGain) {
      this.activate();
      this.pendingCues.push(cue);
      return;
    }

    if (this.context.state !== 'running') {
      this.pendingCues.push(cue);
      this.activate();
      return;
    }

    this.playCueNow(cue, this.context.currentTime + 0.005);
  }

  private playCueNow(cue: SoundCue, now: number): void {
    if (!this.context || !this.sfxGain) {
      return;
    }

    switch (cue) {
      case 'footstep':
        this.playNoiseBurst(now, 0.05, 180, 900, 0.08);
        this.playTone(now, 90, 0.045, 'triangle', 0.03, 72);
        break;
      case 'jump':
        this.playTone(now, 220, 0.14, 'sawtooth', 0.06, 420);
        this.playTone(now + 0.03, 330, 0.1, 'triangle', 0.04, 520);
        this.playNoiseBurst(now, 0.025, 500, 2600, 0.018);
        break;
      case 'land':
        this.playNoiseBurst(now, 0.11, 70, 620, 0.1);
        this.playTone(now, 68, 0.08, 'triangle', 0.055, 48);
        break;
      case 'jumpPad':
        this.playTone(now, 240, 0.12, 'triangle', 0.06, 720);
        this.playTone(now + 0.04, 480, 0.14, 'sine', 0.045, 980);
        break;
      case 'swing':
        this.playNoiseBurst(now, 0.085, 320, 5600, 0.05);
        this.playTone(now, 180, 0.07, 'sawtooth', 0.03, 110);
        break;
      case 'mine':
        this.playTone(now, 280, 0.06, 'square', 0.04, 430);
        this.playTone(now + 0.015, 520, 0.08, 'triangle', 0.03, 260);
        this.playNoiseBurst(now, 0.03, 900, 4200, 0.012);
        break;
      case 'bow':
        this.playNoiseBurst(now, 0.045, 1100, 4200, 0.03);
        this.playTone(now, 280, 0.08, 'triangle', 0.035, 210);
        break;
      case 'dotter':
        this.playTone(now, 420, 0.09, 'sine', 0.05, 760);
        this.playTone(now + 0.04, 760, 0.1, 'triangle', 0.038, 520);
        break;
      case 'teleport':
        this.playTone(now, 280, 0.14, 'sine', 0.06, 980);
        this.playTone(now + 0.03, 560, 0.12, 'triangle', 0.03, 1200);
        this.playNoiseBurst(now + 0.02, 0.07, 500, 6000, 0.025);
        break;
      case 'place':
        this.playNoiseBurst(now, 0.035, 100, 1000, 0.04);
        this.playTone(now, 160, 0.05, 'triangle', 0.025, 120);
        break;
      case 'interact':
        this.playTone(now, 520, 0.07, 'triangle', 0.04, 660);
        break;
      case 'shopOpen':
        this.playTone(now, 392, 0.11, 'triangle', 0.04, 494);
        this.playTone(now + 0.05, 494, 0.1, 'triangle', 0.04, 587);
        break;
      case 'buy':
        this.playTone(now, 494, 0.09, 'triangle', 0.05, 660);
        this.playTone(now + 0.06, 660, 0.09, 'triangle', 0.05, 784);
        break;
      case 'collect':
        this.playTone(now, 660, 0.07, 'sine', 0.05, 900);
        this.playTone(now + 0.03, 900, 0.09, 'triangle', 0.04, 1080);
        break;
      case 'crystalHit':
        this.playTone(now, 760, 0.11, 'triangle', 0.06, 500);
        this.playNoiseBurst(now, 0.04, 1100, 5400, 0.03);
        break;
      case 'crystalBreak':
        this.playTone(now, 480, 0.2, 'sawtooth', 0.08, 220);
        this.playTone(now + 0.02, 880, 0.18, 'triangle', 0.06, 1280);
        this.playTone(now + 0.08, 1180, 0.16, 'sine', 0.04, 1480);
        this.playNoiseBurst(now, 0.15, 400, 7000, 0.06);
        break;
      case 'hurt':
        this.playTone(now, 180, 0.14, 'sawtooth', 0.06, 82);
        this.playNoiseBurst(now, 0.06, 100, 1300, 0.03);
        break;
      case 'win':
        this.playTone(now, 523, 0.2, 'triangle', 0.06, 659);
        this.playTone(now + 0.1, 659, 0.2, 'triangle', 0.06, 784);
        this.playTone(now + 0.22, 784, 0.28, 'triangle', 0.08, 1047);
        break;
      case 'error':
        this.playTone(now, 220, 0.09, 'square', 0.04, 170);
        break;
    }
  }

  private createContext(): void {
    const AudioContextCtor =
      window.AudioContext ||
      (window as Window & { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;

    if (!AudioContextCtor) {
      return;
    }

    this.context = new AudioContextCtor();
    this.masterGain = this.context.createGain();
    this.musicGain = this.context.createGain();
    this.sfxGain = this.context.createGain();
    this.masterGain.gain.value = AUDIO_CONFIG.masterVolume;
    this.musicGain.gain.value = 0;
    this.sfxGain.gain.value = AUDIO_CONFIG.sfxVolume;
    this.musicGain.connect(this.masterGain);
    this.sfxGain.connect(this.masterGain);
    this.masterGain.connect(this.context.destination);
    this.noiseBuffer = this.createNoiseBuffer();
  }

  private bindUnlockListeners(): void {
    if (this.unlockBound) {
      return;
    }
    this.unlockBound = true;

    const unlock = (): void => {
      this.activate();
    };

    window.addEventListener('pointerdown', unlock, { passive: true, capture: true });
    window.addEventListener('pointerup', unlock, { passive: true, capture: true });
    window.addEventListener('touchstart', unlock, { passive: true, capture: true });
    window.addEventListener('touchend', unlock, { passive: true, capture: true });
    window.addEventListener('keydown', unlock, { passive: true, capture: true });
    window.addEventListener('mousedown', unlock, { passive: true, capture: true });
    window.addEventListener('click', unlock, { passive: true, capture: true });
  }

  private createNoiseBuffer(): AudioBuffer | null {
    if (!this.context) {
      return null;
    }

    const duration = this.context.sampleRate * 0.2;
    const buffer = this.context.createBuffer(1, duration, this.context.sampleRate);
    const data = buffer.getChannelData(0);
    for (let index = 0; index < duration; index += 1) {
      data[index] = Math.random() * 2 - 1;
    }
    return buffer;
  }

  private updateMusicMix(phase: GamePhase): void {
    if (!this.context || !this.musicGain) {
      return;
    }

    let target = 0;
    if (phase === 'title') {
      target = AUDIO_CONFIG.musicVolume * 0.95;
    } else if (phase === 'playing') {
      target = AUDIO_CONFIG.musicVolume;
    } else if (phase === 'shop') {
      target = AUDIO_CONFIG.musicVolume * 0.6;
    } else if (phase === 'win') {
      target = AUDIO_CONFIG.musicVolume * 0.35;
    }

    this.musicGain.gain.cancelScheduledValues(this.context.currentTime);
    this.musicGain.gain.setTargetAtTime(target, this.context.currentTime, 0.08);
  }

  private scheduleMusic(): void {
    if (!this.context || !this.musicGain) {
      return;
    }

    const stepDuration = (60 / AUDIO_CONFIG.musicTempo) / 2;
    if (this.nextMusicTime === 0) {
      this.nextMusicTime = this.context.currentTime + 0.06;
    }

    while (this.nextMusicTime < this.context.currentTime + LOOKAHEAD) {
      const chordIndex = Math.floor(this.musicStep / STEPS_PER_BAR) % CHORDS.length;
      const stepInBar = this.musicStep % STEPS_PER_BAR;
      const chord = CHORDS[chordIndex];

      if (stepInBar === 0) {
        this.playPad(
          this.nextMusicTime,
          chord.map(midiToFrequency),
          stepDuration * 3.8
        );
        this.playPad(
          this.nextMusicTime + 0.02,
          chord.map((note) => midiToFrequency(note + 12)),
          stepDuration * 2.8
        );
      }

      const melodyNote =
        chord[MELODY_PATTERN[stepInBar] % chord.length] +
        (stepInBar >= 4 ? 12 : 0);
      this.playMusicTone(
        this.nextMusicTime,
        midiToFrequency(melodyNote),
        stepDuration * 0.92,
        stepInBar === 0 || stepInBar === 4 ? 'sawtooth' : 'triangle',
        stepInBar === 0 || stepInBar === 4 ? 0.05 : 0.038,
        stepInBar % 2 === 0 ? midiToFrequency(melodyNote + 2) : undefined
      );

      if (stepInBar % 2 === 0) {
        this.playMusicTone(
          this.nextMusicTime,
          midiToFrequency(BASS_NOTES[chordIndex]),
          stepDuration * 1.8,
          'sine',
          0.055
        );
      }

      if (stepInBar === 0 || stepInBar === 4) {
        this.playNoiseBurst(
          this.nextMusicTime,
          0.06,
          45,
          160,
          0.05,
          this.musicGain
        );
      } else if (stepInBar % 2 === 0) {
        this.playNoiseBurst(
          this.nextMusicTime,
          0.03,
          700,
          3200,
          0.012,
          this.musicGain
        );
      }

      if (stepInBar === 7) {
        this.playNoiseBurst(
          this.nextMusicTime,
          0.045,
          1800,
          6200,
          0.012,
          this.musicGain
        );
      }

      this.nextMusicTime += stepDuration;
      this.musicStep += 1;
    }
  }

  private playPad(start: number, frequencies: number[], duration: number): void {
    for (const frequency of frequencies) {
      this.playMusicTone(start, frequency, duration, 'sawtooth', 0.02);
    }
  }

  private playMusicTone(
    start: number,
    frequency: number,
    duration: number,
    type: OscillatorType,
    gainAmount: number,
    endFrequency?: number
  ): void {
    this.playTone(
      start,
      frequency,
      duration,
      type,
      gainAmount,
      endFrequency,
      this.musicGain
    );
  }

  private playTone(
    start: number,
    frequency: number,
    duration: number,
    type: OscillatorType,
    gainAmount: number,
    endFrequency?: number,
    destination = this.sfxGain
  ): void {
    if (!this.context || !destination) {
      return;
    }

    const oscillator = this.context.createOscillator();
    const gain = this.context.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, start);
    if (endFrequency !== undefined) {
      oscillator.frequency.exponentialRampToValueAtTime(
        Math.max(1, endFrequency),
        start + duration
      );
    }

    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(gainAmount, start + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    oscillator.connect(gain);
    gain.connect(destination);
    oscillator.start(start);
    oscillator.stop(start + duration + 0.02);
  }

  private playNoiseBurst(
    start: number,
    duration: number,
    highpass: number,
    lowpass: number,
    gainAmount: number,
    destination = this.sfxGain
  ): void {
    if (!this.context || !this.noiseBuffer || !destination) {
      return;
    }

    const source = this.context.createBufferSource();
    source.buffer = this.noiseBuffer;

    const high = this.context.createBiquadFilter();
    high.type = 'highpass';
    high.frequency.setValueAtTime(highpass, start);

    const low = this.context.createBiquadFilter();
    low.type = 'lowpass';
    low.frequency.setValueAtTime(lowpass, start);

    const gain = this.context.createGain();
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(gainAmount, start + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

    source.connect(high);
    high.connect(low);
    low.connect(gain);
    gain.connect(destination);
    source.start(start);
    source.stop(start + duration + 0.02);
  }

  private primeAudio(): void {
    if (!this.context || !this.masterGain) {
      return;
    }

    const buffer = this.context.createBuffer(1, 1, this.context.sampleRate);
    const source = this.context.createBufferSource();
    const gain = this.context.createGain();
    source.buffer = buffer;
    gain.gain.value = 0.00001;
    source.connect(gain);
    gain.connect(this.masterGain);
    source.start();
    source.stop(this.context.currentTime + 0.01);
  }

  private flushPendingCues(): void {
    if (!this.context || this.context.state !== 'running') {
      return;
    }

    const cues = [...this.pendingCues];
    this.pendingCues = [];
    let time = this.context.currentTime + 0.01;
    for (const cue of cues) {
      this.playCueNow(cue, time);
      time += 0.02;
    }
  }

  private kickMusicScheduler(): void {
    if (!this.context || !this.musicGain) {
      return;
    }

    this.nextMusicTime = 0;
    this.updateMusicMix(this.activePhase);
    this.scheduleMusic();
  }

  private onVisibilityChange = (): void => {
    if (document.visibilityState === 'visible') {
      this.activate();
    }
  };
}
