/**
 * Crystal Wars - Procedural Audio Manager
 * Generates ambient BGM and retro SFX using the Web Audio API.
 */

export class SoundManager {
  private static ctx: AudioContext | null = null;
  private static bgmInterval: number | null = null;
  public static isPlayingBGM: 'title' | 'game' | 'win' | null = null;
  
  public static bgmVolume = 0.10;
  public static sfxVolume = 0.5;
  private static isInitialized = false;

  /**
   * Must be called after a user interaction (click/keydown)
   * to satisfy browser autoplay policies.
   */
  public static init(): void {
    if (this.isInitialized) return;
    
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;

    this.ctx = new AudioContextClass();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    
    this.isInitialized = true;
  }

  // ==========================================
  // BGM (Background Music)
  // ==========================================

  public static playBGM(theme: 'title' | 'game' | 'win'): void {
    if (!this.ctx) return;
    if (this.isPlayingBGM === theme) return;
    
    this.stopBGM();
    this.isPlayingBGM = theme;

    // Define relaxing ambient chord progressions (synthesized pad sound)
    const chords = {
      title: [
        [261.63, 329.63, 392.00], // C major
        [220.00, 261.63, 329.63]  // A minor
      ],
      game: [
        [196.00, 246.94, 293.66, 392.00], // G major 9ish
        [164.81, 196.00, 246.94, 329.63], // E minor 7
        [174.61, 220.00, 261.63, 349.23], // F major 7
        [130.81, 164.81, 196.00, 261.63]  // C major
      ],
      win: [
        [261.63, 329.63, 392.00, 523.25], // C major
        [349.23, 440.00, 523.25, 698.46]  // F major
      ]
    }[theme];

    let step = 0;
    const playChord = () => {
      if (!this.ctx) return;
      
      const chord = chords[step % chords.length];
      step++;
      
      chord.forEach((freq, i) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        
        // Use a mix of sine and triangle for a warm pad sound
        osc.type = i % 2 === 0 ? 'sine' : 'triangle';
        
        // Slight arpeggiation (strum effect)
        const startTime = this.ctx!.currentTime + (i * 0.15);
        osc.frequency.setValueAtTime(freq, startTime);
        
        // Attack, Decay, Sustain, Release envelope
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.15 * this.bgmVolume, startTime + 1.5);
        gain.gain.exponentialRampToValueAtTime(0.01, startTime + 5.0);
        
        osc.connect(gain);
        gain.connect(this.ctx!.destination);
        
        osc.start(startTime);
        osc.stop(startTime + 5.0);
      });
    };

    // Play immediately, then loop
    playChord();
    this.bgmInterval = window.setInterval(playChord, 4500); // Trigger every 4.5s
  }

  public static stopBGM(): void {
    if (this.bgmInterval) {
      clearInterval(this.bgmInterval);
      this.bgmInterval = null;
    }
    this.isPlayingBGM = null;
  }

  // ==========================================
  // SFX (Sound Effects)
  // ==========================================

  public static playClick(): void {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.05);
    
    gain.gain.setValueAtTime(0.3 * this.sfxVolume, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.1);
  }

  public static playJump(): void {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(200, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.2);
    
    gain.gain.setValueAtTime(0.3 * this.sfxVolume, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }

  public static playSwing(): void {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    // Simulating a swoosh with a rapid triangle drop
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(150, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.1);
    
    gain.gain.setValueAtTime(0.2 * this.sfxVolume, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
  }

  public static playHit(): void {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    // Thud sound
    osc.type = 'square';
    osc.frequency.setValueAtTime(100, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(20, this.ctx.currentTime + 0.1);
    
    gain.gain.setValueAtTime(0.4 * this.sfxVolume, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.1);
  }

  public static playCollect(): void {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(900, this.ctx.currentTime);
    osc.frequency.setValueAtTime(1200, this.ctx.currentTime + 0.05);
    
    gain.gain.setValueAtTime(0.2 * this.sfxVolume, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.3);
  }

  public static playCrystalDamage(): void {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(300, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(200, this.ctx.currentTime + 0.2);
    
    gain.gain.setValueAtTime(0.4 * this.sfxVolume, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }

  public static playCrystalDestroy(): void {
    if (!this.ctx) return;
    
    // Multi-oscillator explosion
    for(let i = 0; i < 3; i++) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'square';
        osc.frequency.setValueAtTime(100 + i * 50, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(10 + i * 10, this.ctx.currentTime + 1.0);
        
        gain.gain.setValueAtTime(0.5 * this.sfxVolume, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 1.0);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 1.0);
    }
  }

  public static playHurt(): void {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(50, this.ctx.currentTime + 0.3);
    
    gain.gain.setValueAtTime(0.6 * this.sfxVolume, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.3);
  }
}
