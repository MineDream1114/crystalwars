import { MULTIPLAYER_CONFIG, TIER_COLORS, WORLD_CONFIG } from '../config';
import type { GameState } from '../state/GameState';
import type { EquipmentId, HotbarItemId, Language, ShopEntry, ToolTier } from '../types';
import { renderCurrencyIcon, renderItemIcon } from './iconMarkup';

interface UIActions {
  onStart: () => void;
  onJoinPublic: () => void;
  onJoinServer: () => void;
  onResume: () => void;
  onRestart: () => void;
  onToggleSettings: (open: boolean) => void;
  onBuy: (id: string) => void;
  onCloseShop: () => void;
  onDismissTutorial: () => void;
  onSelectHotbar: (index: number) => void;
  onSetLanguage: (language: Language) => void;
  onSetPlayerName: (name: string) => void;
  onSetServerAddress: (address: string) => void;
  onCopyInvite: () => void;
  onSetTouchSensitivity: (value: number) => void;
  onSetLeftHanded: (enabled: boolean) => void;
  onSetAutoSprint: (enabled: boolean) => void;
  onSetHaptics: (enabled: boolean) => void;
}

export class UIManager {
  private readonly root = document.createElement('div');
  private readonly touchDevice =
    window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0;
  private mobilePromptKey: string | null = null;
  private mobilePromptVisible = false;
  private mobilePromptTimer: number | null = null;

  constructor(
    private readonly state: GameState,
    private readonly actions: UIActions
  ) {
    this.root.id = 'ui-root';
    document.body.appendChild(this.root);
    this.root.addEventListener('click', this.handleClick);
    this.root.addEventListener('change', this.handleChange);
    this.root.addEventListener('input', this.handleInput);
    this.state.subscribe(() => this.render());
    this.render();
  }

  render(): void {
    const t = this.state.localizer.t.bind(this.state.localizer);
    const shopCards = this.state
      .getShopItems()
      .map((entry) => this.renderShopCard(entry))
      .join('');

    const hotbar = this.state.inventory.hotbar
      .map((item, index) => this.renderHotbarSlot(item, index))
      .join('');

    const visibleNotifications = this.touchDevice
      ? this.state.notifications.slice(-2)
      : this.state.notifications;
    const notifications = visibleNotifications
      .slice()
      .reverse()
      .map(
        (entry) =>
          `<div class="notification">${t(entry.key, entry.values)}</div>`
      )
      .join('');

    this.syncMobilePrompt();
    const objectiveCount = `${this.state.crystalsDestroyed}/${WORLD_CONFIG.crystalsPerGame}`;
    const promptKey = this.getInteractionPromptKey();
    const prompt =
      promptKey && (!this.touchDevice || this.mobilePromptVisible)
        ? `<div class="interaction-pill interaction-pill--${
            this.touchDevice ? 'mobile' : 'desktop'
          }">${t(promptKey)}</div>`
        : '';
    const currentItemName = this.getItemName(this.state.getCurrentItem());
    const bottomResourceRibbon = this.touchDevice
      ? `
        <div class="resource-ribbon">
          ${this.renderResourcePill('copper', 'mini')}
          ${this.renderResourcePill('gold', 'mini')}
          ${this.renderResourcePill('emerald', 'mini')}
          ${this.renderResourcePill('diamond', 'mini')}
        </div>
      `
      : '';
    const tutorialRows = this.touchDevice
      ? [
          this.renderTutorialRow(t('mobile.movePad'), t('tutorial.move')),
          this.renderTutorialRow(t('mobile.swipeLook'), t('tutorial.look')),
          this.renderTutorialRow(t('mobile.actionButton'), t('tutorial.use')),
          this.renderTutorialRow(t('buttons.jump'), t('tutorial.jump')),
          this.renderTutorialRow(t('buttons.interact'), t('tutorial.interact')),
          this.renderTutorialRow(t('mobile.hotbarTap'), t('tutorial.switch')),
          this.renderTutorialRow(t('buttons.sprint'), t('tutorial.sprint')),
          this.renderTutorialRow(t('buttons.pause'), t('tutorial.pause'))
        ].join('')
      : [
          this.renderTutorialRow('W A S D', t('tutorial.move')),
          this.renderTutorialRow('Space', t('tutorial.jump')),
          this.renderTutorialRow('Shift', t('tutorial.sprint')),
          this.renderTutorialRow('Mouse', t('tutorial.look')),
          this.renderTutorialRow('Left Click', t('tutorial.use')),
          this.renderTutorialRow('1-7 / Scroll', t('tutorial.switch')),
          this.renderTutorialRow('E', t('tutorial.interact')),
          this.renderTutorialRow('Esc', t('tutorial.pause'))
        ].join('');
    const roster = this.state.multiplayer.players
      .map(
        (player) => `
          <div class="roster-entry ${
            player.id === this.state.multiplayer.playerId ? 'roster-entry--self' : ''
          }">
            <span class="roster-entry__name">${player.name}</span>
            <span class="roster-entry__item">${t(`items.${player.currentItem}`)}</span>
          </div>
        `
      )
      .join('');
    const multiplayerError = this.state.multiplayer.errorKey
      ? `<div class="lobby-card__error">${t(this.state.multiplayer.errorKey, {
          address: MULTIPLAYER_CONFIG.publicServerAddress
        })}</div>`
      : '';
    const onlineHud = this.state.multiplayer.status === 'online'
      ? `
        <div class="server-card">
          <div class="server-card__eyebrow">${t('multiplayer.onlineNow')}</div>
          <div class="server-card__address">${this.state.multiplayer.roomId}</div>
          <div class="server-card__count">${t('multiplayer.playersOnline', {
            count: this.state.getPlayerCount()
          })}</div>
          <div class="server-card__list">${roster}</div>
          <button class="button button--ghost button--small" data-action="copy-invite">
            ${t('buttons.copyInvite')}
          </button>
        </div>
      `
      : '';

    this.root.innerHTML = `
      <div class="crosshair ${this.state.phase === 'playing' ? '' : 'hidden'}"></div>

      <div class="hud ${this.state.phase === 'title' ? 'hidden' : ''}">
        <div class="hud__top ${this.touchDevice ? 'hud__top--touch' : ''}">
          ${onlineHud}
          <div class="objective-pill">
            <span class="objective-pill__label">${t('hud.objective')}</span>
            <strong>${t('hud.objectiveShort')}</strong>
            <span class="objective-pill__count">${objectiveCount}</span>
          </div>
          <div class="resource-stack resource-stack--top">
            ${this.renderResourcePill('copper')}
            ${this.renderResourcePill('gold')}
            ${this.renderResourcePill('emerald')}
            ${this.renderResourcePill('diamond')}
          </div>
        </div>

        <div class="notifications ${this.touchDevice ? 'notifications--touch' : ''}">${notifications}</div>

        <div class="tutorial-card ${
          this.state.showTutorial && this.state.phase === 'playing' ? '' : 'hidden'
        }">
          <div class="tutorial-card__title">${t('tutorial.title')}</div>
          <div class="tutorial-card__rows">
            ${tutorialRows}
          </div>
          <div class="tutorial-card__divider"></div>
          <div class="tutorial-card__goals">
            <div>${t('tutorial.goalPrimary')}</div>
            <div>${t('tutorial.goalResources')}</div>
            <div>${t('tutorial.goalShop')}</div>
            <div>${t('tutorial.goalChests')}</div>
            ${
              this.touchDevice
                ? `<div>${t('mobile.holdActionTip')}</div><div>${t('mobile.fullscreenTip')}</div>`
                : ''
            }
          </div>
          <button class="button button--primary button--wide" data-action="dismiss-tutorial">
            ${t('tutorial.cta')}
          </button>
        </div>

        <div class="hud__bottom">
          ${prompt}
          <div class="hud__status-row">
            <div class="health-pill">
              <span>${t('hud.health')}</span>
              <strong>${this.state.health}</strong>
            </div>
            ${bottomResourceRibbon}
            <div class="current-item-pill">
              <span>${t('hud.currentItem')}</span>
              <strong>${currentItemName}</strong>
            </div>
          </div>
          <div class="hotbar-shell">
            <div class="hotbar">${hotbar}</div>
          </div>
        </div>
      </div>

      <div class="screen ${this.state.phase === 'title' ? '' : 'hidden'}">
        <div class="hero-screen">
          <div class="hero-badge">FIRST-PERSON ISLAND ACTION</div>
          <h1 class="hero-title">${t('gameTitle')}</h1>
          <p class="hero-subtitle">${t('titleSubtitle')}</p>
          <div class="panel__actions panel__actions--stack hero-screen__actions">
            <button class="button button--primary" data-action="start">${t('buttons.playOffline')}</button>
            <button class="button button--ghost" data-action="open-settings">${t('buttons.settings')}</button>
          </div>
          <div class="lobby-card">
            <div class="panel__eyebrow">${t('multiplayer.title')}</div>
            <h2>${t('multiplayer.subtitle')}</h2>
            <p class="lobby-card__hint">${t('multiplayer.publicHint', {
              address: MULTIPLAYER_CONFIG.publicServerAddress
            })}</p>
            <label class="field">
              <span>${t('multiplayer.playerName')}</span>
              <input
                data-setting="player-name"
                type="text"
                maxlength="${MULTIPLAYER_CONFIG.maxPlayerNameLength}"
                value="${this.escapeAttribute(this.state.getPlayerName())}"
              />
            </label>
            <label class="field">
              <span>${t('multiplayer.serverAddress')}</span>
              <input
                data-setting="server-address"
                type="text"
                maxlength="${MULTIPLAYER_CONFIG.maxServerAddressLength}"
                value="${this.escapeAttribute(this.state.getServerAddress())}"
              />
            </label>
            <div class="panel__actions">
              <button
                class="button button--primary"
                data-action="join-public"
                ${this.state.multiplayer.status === 'connecting' ? 'disabled' : ''}
              >
                ${t('buttons.joinPublic')}
              </button>
              <button
                class="button button--ghost"
                data-action="join-server"
                ${this.state.multiplayer.status === 'connecting' ? 'disabled' : ''}
              >
                ${
                  this.state.multiplayer.status === 'connecting'
                    ? t('multiplayer.connecting')
                    : t('buttons.joinServer')
                }
              </button>
            </div>
            ${multiplayerError}
            <div class="lobby-card__roster">
              <div class="lobby-card__roster-title">${t('multiplayer.friendsReady')}</div>
              <div class="server-card__list">
                ${
                  roster ||
                  `<div class="roster-entry roster-entry--empty">${t('multiplayer.noFriendsYet')}</div>`
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="screen ${
        this.state.phase === 'paused' && !this.state.showSettings ? '' : 'hidden'
      }">
        <div class="panel panel--dark">
          <div class="panel__eyebrow">${t('hud.paused')}</div>
          <h2>${t('gameTitle')}</h2>
          <p>${t('titleSubtitle')}</p>
          <div class="panel__actions panel__actions--stack">
            <button class="button button--primary" data-action="resume">${t('buttons.resume')}</button>
            <button class="button button--ghost" data-action="open-settings">${t('buttons.settings')}</button>
          </div>
        </div>
      </div>

      <div class="screen ${this.state.phase === 'shop' ? '' : 'hidden'}">
        <div class="panel panel--shop panel--dark">
          <div class="panel__header">
            <div>
              <div class="panel__eyebrow">${t('shop.title')}</div>
              <h2>${t('gameTitle')}</h2>
              <p>${t('shop.subtitle')}</p>
            </div>
            <button class="button button--ghost button--small" data-action="close-shop">${t('buttons.close')}</button>
          </div>
          <div class="shop-grid">${shopCards}</div>
        </div>
      </div>

      <div class="screen ${this.state.showSettings ? '' : 'hidden'}">
        <div class="panel panel--dark panel--settings">
          <div class="panel__header">
            <div>
              <div class="panel__eyebrow">${t('settings.title')}</div>
              <h2>${t('gameTitle')}</h2>
            </div>
            <button class="button button--ghost button--small" data-action="close-settings">${t('buttons.close')}</button>
          </div>
          <label class="field">
            <span>${t('settings.language')}</span>
            <select data-setting="language" value="${this.state.getLanguage()}">
              <option value="en" ${this.state.getLanguage() === 'en' ? 'selected' : ''}>${t('settings.english')}</option>
              <option value="ja" ${this.state.getLanguage() === 'ja' ? 'selected' : ''}>${t('settings.japanese')}</option>
            </select>
          </label>
          ${
            this.touchDevice
              ? `
                <div class="settings-group">
                  <div class="settings-group__title">${t('settings.mobileTitle')}</div>
                  <label class="field">
                    <span>${t('settings.touchSensitivity')}</span>
                    <input
                      data-setting="touch-sensitivity"
                      type="range"
                      min="0.5"
                      max="1.8"
                      step="0.05"
                      value="${this.state.getTouchSensitivity()}"
                    />
                    <div class="field__hint">${this.state.getTouchSensitivity().toFixed(2)}x</div>
                  </label>
                  <label class="toggle-field">
                    <span>${t('settings.leftHanded')}</span>
                    <input
                      data-setting="left-handed"
                      type="checkbox"
                      ${this.state.isLeftHanded() ? 'checked' : ''}
                    />
                  </label>
                  <label class="toggle-field">
                    <span>${t('settings.autoSprint')}</span>
                    <input
                      data-setting="auto-sprint"
                      type="checkbox"
                      ${this.state.isAutoSprintEnabled() ? 'checked' : ''}
                    />
                  </label>
                  <label class="toggle-field">
                    <span>${t('settings.haptics')}</span>
                    <input
                      data-setting="haptics"
                      type="checkbox"
                      ${this.state.isHapticsEnabled() ? 'checked' : ''}
                    />
                  </label>
                </div>
              `
              : ''
          }
        </div>
      </div>

      <div class="screen ${this.state.phase === 'win' ? '' : 'hidden'}">
        <div class="panel panel--dark">
          <div class="panel__eyebrow">${t('win.title')}</div>
          <h2>${t('gameTitle')}</h2>
          <p>${t('win.body')}</p>
          <div class="panel__actions panel__actions--stack">
            <button class="button button--primary" data-action="restart">${t('buttons.restart')}</button>
          </div>
        </div>
      </div>
    `;
  }

  private renderResourcePill(
    currency: 'copper' | 'gold' | 'emerald' | 'diamond',
    variant: 'default' | 'mini' = 'default'
  ): string {
    const amount = this.state.inventory.currencies[currency];
    return `
      <div class="resource-pill resource-pill--${currency} resource-pill--${variant}">
        <span class="resource-pill__icon">${renderCurrencyIcon(currency)}</span>
        <span class="resource-pill__amount">${amount}</span>
      </div>
    `;
  }

  private renderTutorialRow(label: string, description: string): string {
    return `
      <div class="tutorial-card__row">
        <span class="tutorial-card__key">${label}</span>
        <span class="tutorial-card__text">${description}</span>
      </div>
    `;
  }

  private renderHotbarSlot(item: HotbarItemId, index: number): string {
    const selected = index === this.state.inventory.currentHotbarIndex;
    const tier = this.getTier(item);
    const itemName = this.getItemName(item);
    const count = this.getItemCount(item);
    const countMarkup = count ? `<span class="hotbar-slot__count">${count}</span>` : '';

    return `
      <button class="hotbar-slot ${selected ? 'hotbar-slot--active' : ''}" data-hotbar-index="${index}">
        <span class="hotbar-slot__index">${index + 1}</span>
        <span class="hotbar-slot__icon">${renderItemIcon(item, {
          tier,
          locked: item === 'bow' && !this.state.inventory.hasBow
        })}</span>
        <span class="hotbar-slot__label" style="color:${tier ? TIER_COLORS[tier] : '#d8dbff'}">${itemName}</span>
        ${countMarkup}
      </button>
    `;
  }

  private renderShopCard(entry: ShopEntry): string {
    const t = this.state.localizer.t.bind(this.state.localizer);
    const affordable = this.state.canAfford(entry);
    const icon = this.getShopEntryIcon(entry);
    return `
      <div class="shop-card ${affordable ? '' : 'shop-card--locked'}">
        <div class="shop-card__icon">${icon}</div>
        <div class="shop-card__title">${t(entry.itemKey)}</div>
        <div class="shop-card__desc">${t(entry.descriptionKey)}</div>
        <div class="shop-card__footer">
          <div class="shop-card__price">
            ${renderCurrencyIcon(entry.price.currency)}
            <span>${entry.price.amount}</span>
          </div>
          <button class="button button--primary button--small" data-buy="${entry.id}">
            ${t('buttons.buy')}
          </button>
        </div>
      </div>
    `;
  }

  private getShopEntryIcon(entry: ShopEntry): string {
    if (entry.action.type === 'unlock') {
      return renderItemIcon(entry.action.item);
    }

    if (entry.action.type === 'upgrade') {
      return renderItemIcon(entry.action.item, { tier: entry.action.tier });
    }

    const mappedItem =
      entry.action.item === 'purpleDotters'
        ? 'purpleDotter'
        : entry.action.item === 'jumpPads'
          ? 'jumpPad'
          : entry.action.item;
    return renderItemIcon(mappedItem);
  }

  private getTier(item: HotbarItemId): ToolTier | undefined {
    if (item === 'sword' || item === 'pickaxe' || item === 'shovel') {
      return this.state.inventory.toolTiers[item as EquipmentId];
    }
    return undefined;
  }

  private getItemName(item: HotbarItemId): string {
    const t = this.state.localizer.t.bind(this.state.localizer);
    if (item === 'bow' && !this.state.inventory.hasBow) {
      return t('inventory.bowLocked');
    }

    if (item === 'sword' || item === 'pickaxe' || item === 'shovel') {
      const tier = this.state.inventory.toolTiers[item];
      return `${t(`tiers.${tier}`)} ${t(`items.${item}`)}`;
    }
    return t(`items.${item}`);
  }

  private getItemCount(item: HotbarItemId): string {
    if (item === 'blocks') {
      return `${this.state.inventory.blocks}`;
    }
    if (item === 'purpleDotter') {
      return `${this.state.inventory.purpleDotters}`;
    }
    if (item === 'jumpPad') {
      return `${this.state.inventory.jumpPads}`;
    }
    if (item === 'bow') {
      return `${this.state.inventory.arrows}`;
    }
    return '';
  }

  private escapeAttribute(value: string): string {
    return value
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  private getInteractionPromptKey(): string | null {
    const key = this.state.interactionPrompt?.key ?? null;
    if (!key) {
      return null;
    }

    if (!this.touchDevice) {
      return key;
    }

    const mobilePromptMap: Record<string, string> = {
      'hud.shopPrompt': 'mobile.shopPrompt',
      'hud.chestPrompt': 'mobile.chestPrompt',
      'hud.generatorPrompt': 'mobile.generatorPrompt',
      'hud.machinePrompt': 'mobile.machinePrompt'
    };

    return mobilePromptMap[key] ?? key;
  }

  private syncMobilePrompt(): void {
    if (!this.touchDevice || this.state.phase !== 'playing') {
      this.mobilePromptKey = null;
      this.mobilePromptVisible = false;
      if (this.mobilePromptTimer !== null) {
        window.clearTimeout(this.mobilePromptTimer);
        this.mobilePromptTimer = null;
      }
      return;
    }

    const promptKey = this.getInteractionPromptKey();
    if (!promptKey) {
      this.mobilePromptKey = null;
      this.mobilePromptVisible = false;
      if (this.mobilePromptTimer !== null) {
        window.clearTimeout(this.mobilePromptTimer);
        this.mobilePromptTimer = null;
      }
      return;
    }

    if (promptKey === this.mobilePromptKey) {
      return;
    }

    this.mobilePromptKey = promptKey;
    this.mobilePromptVisible = true;
    if (this.mobilePromptTimer !== null) {
      window.clearTimeout(this.mobilePromptTimer);
    }
    this.mobilePromptTimer = window.setTimeout(() => {
      this.mobilePromptTimer = null;
      this.mobilePromptVisible = false;
      this.render();
    }, 2400);
  }

  private handleClick = (event: Event): void => {
    const target = event.target as HTMLElement | null;
    if (!target) {
      return;
    }

    const button = target.closest<HTMLElement>('[data-action]');
    if (button) {
      const action = button.dataset.action;
      if (action === 'start') {
        this.actions.onStart();
      } else if (action === 'join-public') {
        this.actions.onJoinPublic();
      } else if (action === 'join-server') {
        this.actions.onJoinServer();
      } else if (action === 'resume') {
        this.actions.onResume();
      } else if (action === 'restart') {
        this.actions.onRestart();
      } else if (action === 'open-settings') {
        this.actions.onToggleSettings(true);
      } else if (action === 'close-settings') {
        this.actions.onToggleSettings(false);
      } else if (action === 'close-shop') {
        this.actions.onCloseShop();
      } else if (action === 'dismiss-tutorial') {
        this.actions.onDismissTutorial();
      } else if (action === 'copy-invite') {
        this.actions.onCopyInvite();
      }
      return;
    }

    const buyButton = target.closest<HTMLElement>('[data-buy]');
    if (buyButton?.dataset.buy) {
      this.actions.onBuy(buyButton.dataset.buy);
      return;
    }

    const hotbarSlot = target.closest<HTMLElement>('[data-hotbar-index]');
    if (hotbarSlot?.dataset.hotbarIndex) {
      this.actions.onSelectHotbar(Number(hotbarSlot.dataset.hotbarIndex));
    }
  };

  private handleChange = (event: Event): void => {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    if (!target || !target.dataset.setting) {
      return;
    }

    if (target.dataset.setting === 'language') {
      const language = target.value === 'ja' ? 'ja' : 'en';
      this.actions.onSetLanguage(language);
      return;
    }

    if (target.dataset.setting === 'left-handed') {
      this.actions.onSetLeftHanded(
        (target as HTMLInputElement).checked
      );
      return;
    }

    if (target.dataset.setting === 'auto-sprint') {
      this.actions.onSetAutoSprint(
        (target as HTMLInputElement).checked
      );
      return;
    }

    if (target.dataset.setting === 'haptics') {
      this.actions.onSetHaptics(
        (target as HTMLInputElement).checked
      );
    }
  };

  private handleInput = (event: Event): void => {
    const target = event.target as HTMLInputElement | null;
    if (!target || !target.dataset.setting) {
      return;
    }

    if (target.dataset.setting === 'player-name') {
      this.actions.onSetPlayerName(target.value);
      return;
    }

    if (target.dataset.setting === 'server-address') {
      this.actions.onSetServerAddress(target.value);
      return;
    }

    if (target.dataset.setting === 'touch-sensitivity') {
      this.actions.onSetTouchSensitivity(Number(target.value));
    }
  };
}
