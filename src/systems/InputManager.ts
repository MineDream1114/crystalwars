export class InputManager {
  private pressed = new Set<string>();
  private interactRequested = false;
  private jumpRequested = false;
  private pauseRequested = false;
  private tutorialDismissed = false;
  private virtualMove = { x: 0, y: 0 };
  private virtualJumpPressed = false;
  private virtualSprintPressed = false;
  private lookDelta = { x: 0, y: 0 };
  private readonly touchDevice =
    window.matchMedia('(pointer: coarse)').matches ||
    navigator.maxTouchPoints > 0;

  constructor() {
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
  }

  dispose(): void {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
  }

  isPressed(code: string): boolean {
    return this.pressed.has(code);
  }

  isTouchDevice(): boolean {
    return this.touchDevice;
  }

  getMoveForward(): number {
    const keyboard =
      (this.pressed.has('KeyW') ? 1 : 0) - (this.pressed.has('KeyS') ? 1 : 0);
    return Math.max(-1, Math.min(1, keyboard - this.virtualMove.y));
  }

  getMoveRight(): number {
    const keyboard =
      (this.pressed.has('KeyD') ? 1 : 0) - (this.pressed.has('KeyA') ? 1 : 0);
    return Math.max(-1, Math.min(1, keyboard + this.virtualMove.x));
  }

  isJumpPressed(): boolean {
    return this.pressed.has('Space') || this.virtualJumpPressed;
  }

  isSprintPressed(): boolean {
    return (
      this.pressed.has('ShiftLeft') ||
      this.pressed.has('ShiftRight') ||
      this.virtualSprintPressed
    );
  }

  consumeJumpRequest(): boolean {
    if (!this.jumpRequested) {
      return false;
    }
    this.jumpRequested = false;
    return true;
  }

  setVirtualMovement(x: number, y: number): void {
    this.virtualMove.x = Math.max(-1, Math.min(1, x));
    this.virtualMove.y = Math.max(-1, Math.min(1, y));
    if (Math.abs(x) > 0.01 || Math.abs(y) > 0.01) {
      this.tutorialDismissed = true;
    }
  }

  setVirtualJumpPressed(pressed: boolean): void {
    if (pressed && !this.virtualJumpPressed) {
      this.jumpRequested = true;
    }
    this.virtualJumpPressed = pressed;
    if (pressed) {
      this.tutorialDismissed = true;
    }
  }

  setVirtualSprintPressed(pressed: boolean): void {
    this.virtualSprintPressed = pressed;
    if (pressed) {
      this.tutorialDismissed = true;
    }
  }

  addLookDelta(deltaX: number, deltaY: number): void {
    this.lookDelta.x += deltaX;
    this.lookDelta.y += deltaY;
    if (deltaX !== 0 || deltaY !== 0) {
      this.tutorialDismissed = true;
    }
  }

  consumeLookDelta(): { x: number; y: number } {
    const delta = { ...this.lookDelta };
    this.lookDelta.x = 0;
    this.lookDelta.y = 0;
    return delta;
  }

  requestInteract(): void {
    this.interactRequested = true;
    this.tutorialDismissed = true;
  }

  consumeInteract(): boolean {
    if (!this.interactRequested) {
      return false;
    }
    this.interactRequested = false;
    return true;
  }

  consumePause(): boolean {
    if (!this.pauseRequested) {
      return false;
    }
    this.pauseRequested = false;
    return true;
  }

  consumeTutorialDismissed(): boolean {
    if (!this.tutorialDismissed) {
      return false;
    }
    this.tutorialDismissed = false;
    return true;
  }

  private onKeyDown = (event: KeyboardEvent): void => {
    if (event.code === 'Space') {
      event.preventDefault();
      this.jumpRequested = true;
    }
    this.pressed.add(event.code);
    if (event.code === 'KeyE') {
      this.interactRequested = true;
    }
    if (event.code === 'Escape') {
      this.pauseRequested = true;
    }
    if (
      event.code === 'KeyW' ||
      event.code === 'KeyA' ||
      event.code === 'KeyS' ||
      event.code === 'KeyD' ||
      event.code === 'Space'
    ) {
      this.tutorialDismissed = true;
    }
  };

  private onKeyUp = (event: KeyboardEvent): void => {
    if (event.code === 'Space') {
      event.preventDefault();
    }
    this.pressed.delete(event.code);
  };
}
