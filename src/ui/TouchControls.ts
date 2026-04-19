import { MOBILE_CONFIG } from '../config';
import type { GameState } from '../state/GameState';
import type { InputManager } from '../systems/InputManager';

interface TouchControlActions {
  onUse: () => void;
  onInteract: () => void;
  onPause: () => void;
  onToggleFullscreen: () => void;
}

export class TouchControls {
  private readonly root = document.createElement('div');
  private readonly joystick = document.createElement('div');
  private readonly joystickKnob = document.createElement('div');
  private readonly lookZone = document.createElement('div');
  private readonly actionCluster = document.createElement('div');
  private readonly utilityCluster = document.createElement('div');
  private readonly orientationCard = document.createElement('div');
  private readonly jumpButton = document.createElement('button');
  private readonly interactButton = document.createElement('button');
  private readonly useButton = document.createElement('button');
  private readonly sprintButton = document.createElement('button');
  private readonly pauseButton = document.createElement('button');
  private readonly fullscreenButton = document.createElement('button');

  private joystickPointerId: number | null = null;
  private lookPointerId: number | null = null;
  private usePointerId: number | null = null;
  private joystickCenter = { x: 0, y: 0 };
  private joystickVector = { x: 0, y: 0 };
  private lookLast = { x: 0, y: 0 };
  private lookTravel = 0;
  private lookStartTime = 0;
  private manualSprint = false;
  private useRepeatTimeout: number | null = null;
  private useRepeatInterval: number | null = null;
  private orientationHintDismissed = false;
  private orientationHintTimer: number | null = null;
  private readonly joystickRadius = 56;

  constructor(
    private readonly state: GameState,
    private readonly input: InputManager,
    private readonly actions: TouchControlActions
  ) {
    this.root.className = 'touch-controls hidden';
    this.lookZone.className = 'touch-look-zone';
    this.joystick.className = 'touch-joystick';
    this.joystickKnob.className = 'touch-joystick__knob';
    this.actionCluster.className = 'touch-action-cluster';
    this.utilityCluster.className = 'touch-utility-cluster';
    this.orientationCard.className = 'touch-orientation-card hidden';
    this.jumpButton.className = 'touch-button touch-button--jump';
    this.interactButton.className = 'touch-button touch-button--interact';
    this.useButton.className = 'touch-button touch-button--use';
    this.sprintButton.className = 'touch-button touch-button--sprint';
    this.pauseButton.className = 'touch-chip touch-chip--pause';
    this.fullscreenButton.className = 'touch-chip touch-chip--fullscreen';

    for (const button of [
      this.jumpButton,
      this.interactButton,
      this.useButton,
      this.sprintButton,
      this.pauseButton,
      this.fullscreenButton
    ]) {
      button.type = 'button';
    }

    this.joystick.appendChild(this.joystickKnob);
    this.actionCluster.append(
      this.useButton,
      this.jumpButton,
      this.interactButton,
      this.sprintButton
    );
    this.utilityCluster.append(this.pauseButton, this.fullscreenButton);
    this.root.append(
      this.lookZone,
      this.joystick,
      this.actionCluster,
      this.utilityCluster,
      this.orientationCard
    );
    document.body.appendChild(this.root);

    this.lookZone.addEventListener('pointerdown', this.onLookStart);
    this.lookZone.addEventListener('pointermove', this.onLookMove);
    this.lookZone.addEventListener('pointerup', this.onLookEnd);
    this.lookZone.addEventListener('pointercancel', this.onLookEnd);

    this.joystick.addEventListener('pointerdown', this.onJoystickStart);
    this.joystick.addEventListener('pointermove', this.onJoystickMove);
    this.joystick.addEventListener('pointerup', this.onJoystickEnd);
    this.joystick.addEventListener('pointercancel', this.onJoystickEnd);

    this.useButton.addEventListener('pointerdown', this.onUseStart);
    this.useButton.addEventListener('pointerup', this.onUseEnd);
    this.useButton.addEventListener('pointercancel', this.onUseEnd);
    this.useButton.addEventListener('pointerleave', this.onUseEnd);

    this.jumpButton.addEventListener('pointerdown', this.onJumpStart);
    this.jumpButton.addEventListener('pointerup', this.onJumpEnd);
    this.jumpButton.addEventListener('pointercancel', this.onJumpEnd);
    this.jumpButton.addEventListener('pointerleave', this.onJumpEnd);

    this.interactButton.addEventListener('pointerdown', this.onInteractStart);
    this.sprintButton.addEventListener('pointerdown', this.onSprintToggle);
    this.pauseButton.addEventListener('pointerdown', this.onPausePress);
    this.fullscreenButton.addEventListener('pointerdown', this.onFullscreenPress);

    this.state.subscribe(() => this.render());
    window.addEventListener('resize', this.onViewportChange, { passive: true });
    document.addEventListener('fullscreenchange', this.onViewportChange);
    this.orientationCard.addEventListener('pointerdown', this.onOrientationHintDismiss);
    this.render();
  }

  private render(): void {
    const isPlaying = this.state.phase === 'playing';
    const touchDevice = this.input.isTouchDevice();
    const isPortrait = window.innerHeight > window.innerWidth;
    const showOrientationHint =
      isPlaying && touchDevice && isPortrait && !this.orientationHintDismissed;
    this.root.classList.toggle('hidden', !isPlaying || !touchDevice);
    this.root.classList.toggle('touch-controls--left-handed', this.state.isLeftHanded());
    document.body.classList.toggle(
      'touch-left-handed',
      touchDevice && this.state.isLeftHanded()
    );
    this.orientationCard.classList.toggle('hidden', !showOrientationHint);

    const t = this.state.localizer.t.bind(this.state.localizer);
    this.useButton.textContent = t('buttons.use');
    this.jumpButton.textContent = t('buttons.jump');
    this.interactButton.textContent = t('buttons.interact');
    this.sprintButton.textContent = t('buttons.sprint');
    this.pauseButton.textContent = t('buttons.pause');
    this.fullscreenButton.textContent = document.fullscreenElement
      ? t('buttons.exitFullscreen')
      : t('buttons.fullscreen');
    this.orientationCard.innerHTML = `
      <div class="touch-orientation-card__header">
        <div class="touch-orientation-card__title">${t('mobile.rotateTitle')}</div>
        <button type="button" class="touch-orientation-card__close" data-close-orientation>
          ${t('buttons.close')}
        </button>
      </div>
      <div class="touch-orientation-card__body">${t('mobile.rotateBody')}</div>
    `;

    this.syncOrientationHint(showOrientationHint);
    this.updateSprintState();
  }

  private syncOrientationHint(showOrientationHint: boolean): void {
    if (!showOrientationHint) {
      if (this.orientationHintTimer !== null) {
        window.clearTimeout(this.orientationHintTimer);
        this.orientationHintTimer = null;
      }
      return;
    }

    if (this.orientationHintTimer !== null) {
      return;
    }

    this.orientationHintTimer = window.setTimeout(() => {
      this.orientationHintTimer = null;
      this.orientationHintDismissed = true;
      this.render();
    }, 2600);
  }

  private onViewportChange = (): void => {
    this.render();
  };

  private onOrientationHintDismiss = (event: PointerEvent): void => {
    event.preventDefault();
    this.orientationHintDismissed = true;
    if (this.orientationHintTimer !== null) {
      window.clearTimeout(this.orientationHintTimer);
      this.orientationHintTimer = null;
    }
    this.render();
  };

  private onJoystickStart = (event: PointerEvent): void => {
    event.preventDefault();
    this.joystickPointerId = event.pointerId;
    this.joystick.setPointerCapture(event.pointerId);
    const rect = this.joystick.getBoundingClientRect();
    this.joystickCenter = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };
    this.updateJoystick(event.clientX, event.clientY);
    this.vibrate(8);
  };

  private onJoystickMove = (event: PointerEvent): void => {
    if (event.pointerId !== this.joystickPointerId) {
      return;
    }
    this.updateJoystick(event.clientX, event.clientY);
  };

  private onJoystickEnd = (event: PointerEvent): void => {
    if (event.pointerId !== this.joystickPointerId) {
      return;
    }
    this.joystick.releasePointerCapture(event.pointerId);
    this.joystickPointerId = null;
    this.joystickVector = { x: 0, y: 0 };
    this.input.setVirtualMovement(0, 0);
    this.input.setVirtualSprintPressed(this.manualSprint);
    this.joystickKnob.style.transform = 'translate(-50%, -50%)';
    this.updateSprintState();
  };

  private updateJoystick(clientX: number, clientY: number): void {
    const dx = clientX - this.joystickCenter.x;
    const dy = clientY - this.joystickCenter.y;
    const distance = Math.min(Math.hypot(dx, dy), this.joystickRadius);
    const angle = Math.atan2(dy, dx);
    const offsetX = Math.cos(angle) * distance;
    const offsetY = Math.sin(angle) * distance;
    const rawX = offsetX / this.joystickRadius;
    const rawY = offsetY / this.joystickRadius;
    const normalizedX = this.applyDeadzone(rawX);
    const normalizedY = this.applyDeadzone(rawY);

    this.joystickVector = { x: normalizedX, y: normalizedY };
    this.input.setVirtualMovement(normalizedX, normalizedY);
    this.joystickKnob.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`;
    this.updateSprintState();
  }

  private applyDeadzone(value: number): number {
    const abs = Math.abs(value);
    if (abs <= MOBILE_CONFIG.joystickDeadzone) {
      return 0;
    }
    const normalized =
      (abs - MOBILE_CONFIG.joystickDeadzone) /
      (1 - MOBILE_CONFIG.joystickDeadzone);
    return Math.sign(value) * Math.max(0, Math.min(1, normalized));
  }

  private updateSprintState(): void {
    const forward = -this.joystickVector.y;
    const magnitude = Math.hypot(this.joystickVector.x, this.joystickVector.y);
    const autoSprint =
      this.state.isAutoSprintEnabled() &&
      forward >= MOBILE_CONFIG.autoSprintThreshold &&
      magnitude >= MOBILE_CONFIG.autoSprintThreshold;
    const sprinting = this.manualSprint || autoSprint;
    this.input.setVirtualSprintPressed(sprinting);
    this.sprintButton.classList.toggle('touch-button--active', sprinting);
  }

  private onLookStart = (event: PointerEvent): void => {
    if (this.lookPointerId !== null) {
      return;
    }

    this.lookPointerId = event.pointerId;
    this.lookTravel = 0;
    this.lookStartTime = performance.now();
    this.lookLast = { x: event.clientX, y: event.clientY };
    this.lookZone.setPointerCapture(event.pointerId);
  };

  private onLookMove = (event: PointerEvent): void => {
    if (event.pointerId !== this.lookPointerId) {
      return;
    }

    const deltaX = event.clientX - this.lookLast.x;
    const deltaY = event.clientY - this.lookLast.y;
    this.lookLast = { x: event.clientX, y: event.clientY };
    this.lookTravel += Math.hypot(deltaX, deltaY);
    const sensitivity = this.state.getTouchSensitivity();
    this.input.addLookDelta(deltaX * sensitivity, deltaY * sensitivity);
  };

  private onLookEnd = (event: PointerEvent): void => {
    if (event.pointerId !== this.lookPointerId) {
      return;
    }

    this.lookZone.releasePointerCapture(event.pointerId);
    const duration = performance.now() - this.lookStartTime;
    if (this.lookTravel < 10 && duration < 220) {
      this.triggerUse();
    }

    this.lookPointerId = null;
    this.lookTravel = 0;
  };

  private onUseStart = (event: PointerEvent): void => {
    event.preventDefault();
    this.usePointerId = event.pointerId;
    this.useButton.setPointerCapture(event.pointerId);
    this.triggerUse();
    this.clearUseRepeater();
    this.useRepeatTimeout = window.setTimeout(() => {
      this.useRepeatInterval = window.setInterval(() => {
        this.actions.onUse();
      }, MOBILE_CONFIG.holdRepeatIntervalMs);
    }, MOBILE_CONFIG.holdRepeatDelayMs);
  };

  private onUseEnd = (event: PointerEvent): void => {
    if (this.usePointerId !== event.pointerId) {
      return;
    }

    if (this.useButton.hasPointerCapture(event.pointerId)) {
      this.useButton.releasePointerCapture(event.pointerId);
    }
    this.usePointerId = null;
    this.clearUseRepeater();
  };

  private clearUseRepeater(): void {
    if (this.useRepeatTimeout !== null) {
      window.clearTimeout(this.useRepeatTimeout);
      this.useRepeatTimeout = null;
    }
    if (this.useRepeatInterval !== null) {
      window.clearInterval(this.useRepeatInterval);
      this.useRepeatInterval = null;
    }
  }

  private triggerUse(): void {
    this.actions.onUse();
    this.vibrate(12);
  }

  private onJumpStart = (event: PointerEvent): void => {
    event.preventDefault();
    this.jumpButton.setPointerCapture(event.pointerId);
    this.input.setVirtualJumpPressed(true);
    this.vibrate(10);
  };

  private onJumpEnd = (event: PointerEvent): void => {
    if (this.jumpButton.hasPointerCapture(event.pointerId)) {
      this.jumpButton.releasePointerCapture(event.pointerId);
    }
    this.input.setVirtualJumpPressed(false);
  };

  private onInteractStart = (event: PointerEvent): void => {
    event.preventDefault();
    this.actions.onInteract();
    this.vibrate([8, 24, 8]);
  };

  private onSprintToggle = (event: PointerEvent): void => {
    event.preventDefault();
    this.manualSprint = !this.manualSprint;
    this.updateSprintState();
    this.vibrate(this.manualSprint ? [8, 18, 12] : 8);
  };

  private onPausePress = (event: PointerEvent): void => {
    event.preventDefault();
    this.actions.onPause();
    this.vibrate(16);
  };

  private onFullscreenPress = (event: PointerEvent): void => {
    event.preventDefault();
    this.actions.onToggleFullscreen();
    this.vibrate(10);
  };

  private vibrate(pattern: number | number[]): void {
    if (!this.state.isHapticsEnabled()) {
      return;
    }
    if ('vibrate' in navigator) {
      navigator.vibrate(pattern);
    }
  }
}
