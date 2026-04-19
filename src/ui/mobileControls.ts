/**
 * Crystal Wars - Mobile Touch Controls Manager
 * Handles virtual joystick movement and touch-swipe look.
 */

export class MobileControls {
  private joystickZone: HTMLElement;
  private joystickBase: HTMLElement;
  private joystickStick: HTMLElement;
  
  private joystickTouchId: number | null = null;
  private joystickStartPos = { x: 0, y: 0 };
  
  public moveVector = { x: 0, y: 0 }; // Normalized -1 to 1

  private lookTouchId: number | null = null;
  private lastLookPos = { x: 0, y: 0 };
  
  public lookDelta = { pitch: 0, yaw: 0 }; // Accumulated delta

  public isMobile: boolean;

  constructor() {
    this.isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    this.joystickZone = document.getElementById('joystick-zone')!;
    this.joystickBase = document.getElementById('joystick-base')!;
    this.joystickStick = document.getElementById('joystick-stick')!;

    if (this.isMobile) {
      this.setupTouchEvents();
    }
  }

  private setupTouchEvents(): void {
    // We attach touch events to the whole document for Look, and specific zone for Joystick
    
    // JOYSTICK
    this.joystickZone.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const touch = e.changedTouches[0];
      if (this.joystickTouchId === null) {
        this.joystickTouchId = touch.identifier;
        this.joystickStartPos = { x: touch.clientX, y: touch.clientY };
        
        this.joystickBase.style.display = 'block';
        this.joystickBase.style.left = `${touch.clientX - this.joystickZone.getBoundingClientRect().left}px`;
        this.joystickBase.style.top = `${touch.clientY - this.joystickZone.getBoundingClientRect().top}px`;
        this.joystickStick.style.transform = `translate(-50%, -50%)`;
      }
    }, { passive: false });

    // DOCUMENT MOVEMENT & LOOKING
    document.addEventListener('touchmove', (e) => {
      // Don't prevent default on UI elements
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' || 
        target.tagName === 'SELECT' ||
        target.tagName === 'OPTION' ||
        target.closest('.screen') || 
        target.closest('.hotbar-slot') || 
        target.closest('#hotbar')
      ) {
        return;
      }
      e.preventDefault(); 
      
      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];
        
        // Joystick update
        if (touch.identifier === this.joystickTouchId) {
          const dx = touch.clientX - this.joystickStartPos.x;
          const dy = touch.clientY - this.joystickStartPos.y;
          const maxDist = 40;
          
          const dist = Math.min(Math.sqrt(dx*dx + dy*dy), maxDist);
          const angle = Math.atan2(dy, dx);
          
          const stickX = Math.cos(angle) * dist;
          const stickY = Math.sin(angle) * dist;
          
          this.joystickStick.style.transform = `translate(calc(-50% + ${stickX}px), calc(-50% + ${stickY}px))`;
          
          this.moveVector.x = stickX / maxDist;
          this.moveVector.y = stickY / maxDist; // Positive is backward
        }
        
        // Look update
        else if (touch.identifier === this.lookTouchId) {
          const dx = touch.clientX - this.lastLookPos.x;
          const dy = touch.clientY - this.lastLookPos.y;
          
          this.lookDelta.yaw -= dx * 0.005; // Sensitivity 
          this.lookDelta.pitch -= dy * 0.005;
          
          this.lastLookPos = { x: touch.clientX, y: touch.clientY };
        }
      }
    }, { passive: false });

    // DOCUMENT START TOUCH (For Look)
    document.addEventListener('touchstart', (e) => {
      // Don't capture touches on UI panels, buttons, select dropdowns, or HUD elements
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' || 
        target.tagName === 'SELECT' ||
        target.tagName === 'OPTION' ||
        target.closest('.screen') || 
        target.closest('.hotbar-slot') || 
        target.closest('#hotbar')
      ) {
        return;
      }
      
      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];
        
        // If it's on the right half of screen and not already looking
        if (touch.clientX > window.innerWidth / 2 && this.lookTouchId === null) {
          this.lookTouchId = touch.identifier;
          this.lastLookPos = { x: touch.clientX, y: touch.clientY };
        }
      }
    }, { passive: false });

    // END TOUCH
    const handleEnd = (e: TouchEvent) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];
        
        if (touch.identifier === this.joystickTouchId) {
          this.joystickTouchId = null;
          this.joystickBase.style.display = 'none';
          this.joystickStick.style.transform = `translate(-50%, -50%)`;
          this.moveVector = { x: 0, y: 0 };
        }
        
        if (touch.identifier === this.lookTouchId) {
          this.lookTouchId = null;
        }
      }
    };
    
    document.addEventListener('touchend', handleEnd);
    document.addEventListener('touchcancel', handleEnd);
  }
}
