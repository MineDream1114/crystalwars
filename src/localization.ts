import { STORAGE_KEYS } from './config';
import type { Language } from './types';

const translations = {
  en: {
    gameTitle: 'CRYSTAL WARS',
    titleSubtitle: 'Destroy the crystals. Conquer the islands.',
    buttons: {
      start: 'Start Game',
      playOffline: 'Play Offline',
      joinPublic: 'Join Public 1111',
      joinServer: 'Join By Address',
      copyInvite: 'Copy Invite',
      use: 'Action',
      sprint: 'Sprint',
      pause: 'Pause',
      fullscreen: 'Fullscreen',
      exitFullscreen: 'Exit Fullscreen',
      settings: 'Settings',
      resume: 'Resume',
      close: 'Close',
      restart: 'Play Again',
      jump: 'Jump',
      interact: 'Interact',
      buy: 'Buy',
      back: 'Back'
    },
    settings: {
      title: 'Settings',
      language: 'Language',
      mobileTitle: 'Mobile Controls',
      touchSensitivity: 'Touch Look Sensitivity',
      leftHanded: 'Left-Handed Layout',
      autoSprint: 'Auto Sprint',
      haptics: 'Haptic Feedback',
      english: 'English',
      japanese: 'Japanese'
    },
    mobile: {
      movePad: 'Move Pad',
      swipeLook: 'Swipe Right Side',
      actionButton: 'Action Button',
      hotbarTap: 'Tap Hotbar',
      shopPrompt: 'Tap Interact to open the merchant shop',
      chestPrompt: 'Tap Interact to open the chest',
      generatorPrompt: 'Tap Interact to collect island resources',
      machinePrompt: 'Tap Interact to collect machine drops',
      rotateTitle: 'Landscape Recommended',
      rotateBody: 'Rotate your phone sideways for the clearest controls and widest view.',
      holdActionTip: 'Hold the Action button to keep mining or attacking.',
      fullscreenTip: 'Use Fullscreen for a cleaner mobile HUD.'
    },
    multiplayer: {
      title: 'Online Lobby',
      subtitle: 'Jump into the public server or enter a private server address for friends.',
      publicHint: 'Public online server address: {address}',
      playerName: 'Player Name',
      serverAddress: 'Server Address',
      connecting: 'Connecting...',
      friendsReady: 'Players In This Server',
      noFriendsYet: 'No friends in the room yet. Share the address to invite them.',
      onlineNow: 'Online Server',
      playersOnline: '{count} players connected',
      errors: {
        connection: 'Could not join the online server. Check the address and try again.',
        connectionLost: 'The online connection was lost. Rejoin the server to keep playing.'
      }
    },
    hud: {
      health: 'Health',
      currentItem: 'Current Item',
      copper: 'Copper',
      gold: 'Gold',
      emerald: 'Emerald',
      diamond: 'Diamond',
      objective: 'Objective',
      objectiveShort: 'Destroy all 4 crystals!',
      crystalsRemaining: 'Destroy every outer-island crystal ({count} left)',
      winObjective: 'All crystals destroyed. You won.',
      interaction: 'Interact',
      shopPrompt: 'Press E to open the merchant shop',
      chestPrompt: 'Press E to open the chest',
      generatorPrompt: 'Press E to collect generator resources',
      machinePrompt: 'Press E to collect machine drops',
      paused: 'Paused'
    },
    tutorial: {
      title: 'How to Play',
      cta: "LET'S GO!",
      move: 'Move around',
      jump: 'Jump',
      sprint: 'Sprint',
      look: 'Look around',
      use: 'Attack / Mine / Use item',
      switch: 'Switch hotbar item',
      interact: 'Interact with NPCs and chests',
      pause: 'Pause',
      goalPrimary: 'Goal: travel to each outer island and destroy its crystal.',
      goalResources: 'Collect copper, gold, emeralds, and diamonds to power up.',
      goalShop: 'Visit the merchant on the middle island to buy gear and upgrades.',
      goalChests: 'Mine underground to find chests and rare loot.',
      body:
        'WASD to move, mouse or touch-drag to look, Space to jump, Shift to sprint, left click or tap the right side to use your current item, E or the Interact button to interact, mouse wheel or 1-7 or tap the hotbar to switch items, Esc to pause. On touch screens, use the virtual joystick to move and the Jump button to leap. Mine ore, open underground chests, collect island resources, buy upgrades from the merchant, then destroy all 4 outer-island crystals.'
    },
    inventory: {
      bowLocked: 'Bow not purchased',
      hotbar: 'Hotbar',
      upgrades: 'Upgrades'
    },
    shop: {
      title: 'Merchant',
      subtitle: 'Spend resources on mobility, ranged weapons, and upgrades.'
    },
    win: {
      title: 'Victory',
      body:
        'Every outer-island crystal is gone. The archipelago is safe for now.'
    },
    items: {
      sword: 'Sword',
      pickaxe: 'Pickaxe',
      shovel: 'Shovel',
      bow: 'Bow',
      arrows: 'Arrows',
      blocks: 'Blocks',
      purpleDotter: 'Purple Dotter',
      jumpPad: 'Jump Pad',
      swordIron: 'Iron Sword',
      swordDiamond: 'Diamond Sword',
      swordRainbow: 'Rainbow Sword',
      pickaxeIron: 'Iron Pickaxe',
      pickaxeDiamond: 'Diamond Pickaxe',
      pickaxeRainbow: 'Rainbow Pickaxe',
      shovelIron: 'Iron Shovel',
      shovelDiamond: 'Diamond Shovel',
      shovelRainbow: 'Rainbow Shovel'
    },
    shopDescriptions: {
      blocks: '1 copper = 1 building block.',
      purpleDotter: 'Throw to teleport where it lands.',
      bow: 'Unlock a ranged bow.',
      arrows: 'Bundle of 8 arrows.',
      jumpPad: 'Place a launch pad on top of a block.',
      swordUpgrade: 'Upgrade your sword tier.',
      pickaxeUpgrade: 'Upgrade your pickaxe tier.',
      shovelUpgrade: 'Upgrade your shovel tier.'
    },
    tiers: {
      basic: 'Basic',
      iron: 'Iron',
      diamond: 'Diamond',
      rainbow: 'Rainbow'
    },
    notifications: {
      collectedGenerator: 'Collected {copper} copper and {gold} gold.',
      collectedMachine: 'Collected {gold} gold and {diamond} diamond.',
      chestOpened: 'Chest opened: {emerald} emeralds, {gold} gold, {arrows} arrows.',
      joinedServer: 'Joined server {address}.',
      copiedInvite: 'Invite copied. Tell your friend to join server {address}.',
      bought: 'Purchased {item}.',
      notEnough: 'Not enough {currency}.',
      alreadyOwned: '{item} is already unlocked.',
      upgraded: '{item} upgraded to {tier}.',
      crystalHit: 'Crystal damaged: {hp} HP left.',
      crystalDestroyed: 'Crystal destroyed ({count}/4).',
      noArrows: 'No arrows left.',
      noBlocks: 'No blocks left.',
      noDotters: 'No purple dotters left.',
      noJumpPads: 'No jump pads left.',
      minedResource: 'Mined {resource}.',
      switchedLanguage: 'Language switched to English.',
      machineReady: 'The center machine is worth checking.',
      generatorReady: 'An island generator has resources waiting.'
    },
    resources: {
      copper: 'copper',
      gold: 'gold',
      emerald: 'emerald',
      diamond: 'diamond',
      stone: 'stone'
    },
    misc: {
      healthValue: '{current}/{max}',
      currentItemValue: '{item}',
      merchantName: 'Merchant',
      generatorName: 'Generator',
      machineName: 'Central Machine',
      chestName: 'Chest'
    }
  },
  ja: {
    gameTitle: 'クリスタルウォーズ',
    titleSubtitle: 'クリスタルを破壊し、島々を制圧せよ。',
    buttons: {
      start: 'ゲーム開始',
      playOffline: 'オフラインで遊ぶ',
      joinPublic: '公開 1111 に入る',
      joinServer: 'アドレスで参加',
      copyInvite: '招待をコピー',
      use: 'アクション',
      sprint: 'ダッシュ',
      pause: '一時停止',
      fullscreen: '全画面',
      exitFullscreen: '全画面終了',
      settings: '設定',
      resume: '再開',
      close: '閉じる',
      restart: 'もう一度遊ぶ',
      jump: 'ジャンプ',
      interact: 'インタラクト',
      buy: '購入',
      back: '戻る'
    },
    settings: {
      title: '設定',
      language: '言語',
      mobileTitle: 'スマホ操作',
      touchSensitivity: '視点感度',
      leftHanded: '左利きレイアウト',
      autoSprint: '自動ダッシュ',
      haptics: '触覚フィードバック',
      english: '英語',
      japanese: '日本語'
    },
    mobile: {
      movePad: '移動パッド',
      swipeLook: '右側スワイプ',
      actionButton: 'アクションボタン',
      hotbarTap: 'ホットバータップ',
      shopPrompt: 'インタラクトで商人ショップを開く',
      chestPrompt: 'インタラクトでチェストを開く',
      generatorPrompt: 'インタラクトで資源を回収する',
      machinePrompt: 'インタラクトで中央マシンの資源を回収する',
      rotateTitle: '横向き推奨',
      rotateBody: '見やすさと操作性のため、スマートフォンを横向きにすると遊びやすくなります。',
      holdActionTip: 'アクションボタン長押しで採掘や攻撃を続けられます。',
      fullscreenTip: '全画面にするとスマホでより遊びやすくなります。'
    },
    multiplayer: {
      title: 'オンラインロビー',
      subtitle: '公開サーバーに入るか、フレンド用のサーバーアドレスを入力して参加します。',
      publicHint: '公開オンラインサーバーのアドレス: {address}',
      playerName: 'プレイヤー名',
      serverAddress: 'サーバーアドレス',
      connecting: '接続中...',
      friendsReady: 'このサーバーのプレイヤー',
      noFriendsYet: 'まだ誰もいません。アドレスを共有してフレンドを招待しましょう。',
      onlineNow: 'オンラインサーバー',
      playersOnline: '{count} 人が接続中',
      errors: {
        connection: 'オンラインサーバーへ参加できませんでした。アドレスを確認して再試行してください。',
        connectionLost: 'オンライン接続が切れました。続けるには再参加してください。'
      }
    },
    hud: {
      health: '体力',
      currentItem: '現在のアイテム',
      copper: '銅',
      gold: '金',
      emerald: 'エメラルド',
      diamond: 'ダイヤ',
      objective: '目標',
      objectiveShort: '4つのクリスタルをすべて破壊せよ！',
      crystalsRemaining: '外周の島のクリスタルをすべて破壊する（残り {count} 個）',
      winObjective: 'すべてのクリスタルを破壊しました。勝利です。',
      interaction: 'インタラクト',
      shopPrompt: 'Eキーで商人ショップを開く',
      chestPrompt: 'Eキーでチェストを開く',
      generatorPrompt: 'Eキーで資源ジェネレーターを回収する',
      machinePrompt: 'Eキーで中央マシンの資源を回収する',
      paused: '一時停止中'
    },
    tutorial: {
      title: '遊び方',
      cta: '出撃する',
      move: '移動',
      jump: 'ジャンプ',
      sprint: 'ダッシュ',
      look: '視点操作',
      use: '攻撃 / 採掘 / アイテム使用',
      switch: 'ホットバー切り替え',
      interact: 'NPCやチェストと会話・調査',
      pause: '一時停止',
      goalPrimary: '目標: 外周の各島へ向かい、クリスタルを破壊する。',
      goalResources: '銅・金・エメラルド・ダイヤを集めて強化する。',
      goalShop: '中央島の商人から装備とアップグレードを購入する。',
      goalChests: '地下を掘り進めてチェストやレア資源を見つける。',
      body:
        'WASDで移動、マウスまたはタッチドラッグで視点操作、Spaceでジャンプ、Shiftでダッシュ、左クリックまたは右側タップで現在のアイテムを使用、Eまたはインタラクトボタンで調べる、マウスホイールまたは1〜7またはホットバータップでアイテム切り替え、Escで一時停止。タッチ端末では仮想ジョイスティックで移動し、ジャンプボタンで跳びます。鉱石を掘り、地下チェストを見つけ、島の資源を回収し、商人から装備を強化して、4つの外周島クリスタルをすべて破壊しましょう。'
    },
    inventory: {
      bowLocked: '弓は未購入',
      hotbar: 'ホットバー',
      upgrades: '強化'
    },
    shop: {
      title: '商人',
      subtitle: '移動系・遠距離武器・各種強化を購入できます。'
    },
    win: {
      title: '勝利',
      body:
        '外周の島にあったクリスタルはすべて破壊されました。群島はひとまず安全です。'
    },
    items: {
      sword: '剣',
      pickaxe: 'ツルハシ',
      shovel: 'シャベル',
      bow: '弓',
      arrows: '矢',
      blocks: 'ブロック',
      purpleDotter: 'パープルドッター',
      jumpPad: 'ジャンプパッド',
      swordIron: '鉄の剣',
      swordDiamond: 'ダイヤの剣',
      swordRainbow: 'レインボーの剣',
      pickaxeIron: '鉄のツルハシ',
      pickaxeDiamond: 'ダイヤのツルハシ',
      pickaxeRainbow: 'レインボーのツルハシ',
      shovelIron: '鉄のシャベル',
      shovelDiamond: 'ダイヤのシャベル',
      shovelRainbow: 'レインボーのシャベル'
    },
    shopDescriptions: {
      blocks: '銅1個で建築ブロック1個。',
      purpleDotter: '投げた着地点へテレポートします。',
      bow: '遠距離攻撃用の弓を解放します。',
      arrows: '矢8本のセット。',
      jumpPad: 'ブロックの上に設置する発射台。',
      swordUpgrade: '剣のティアを強化します。',
      pickaxeUpgrade: 'ツルハシのティアを強化します。',
      shovelUpgrade: 'シャベルのティアを強化します。'
    },
    tiers: {
      basic: '基本',
      iron: '鉄',
      diamond: 'ダイヤ',
      rainbow: 'レインボー'
    },
    notifications: {
      collectedGenerator: 'ジェネレーターから銅 {copper} 個、金 {gold} 個を回収しました。',
      collectedMachine: '中央マシンから金 {gold} 個、ダイヤ {diamond} 個を回収しました。',
      chestOpened: 'チェストを開けました: エメラルド {emerald} 個、金 {gold} 個、矢 {arrows} 本。',
      joinedServer: 'サーバー {address} に参加しました。',
      copiedInvite: '招待をコピーしました。フレンドにサーバー {address} へ入ってもらってください。',
      bought: '{item} を購入しました。',
      notEnough: '{currency} が足りません。',
      alreadyOwned: '{item} はすでに解放済みです。',
      upgraded: '{item} を {tier} に強化しました。',
      crystalHit: 'クリスタルにダメージ: 残りHP {hp}',
      crystalDestroyed: 'クリスタルを破壊しました（{count}/4）。',
      noArrows: '矢がありません。',
      noBlocks: 'ブロックがありません。',
      noDotters: 'パープルドッターがありません。',
      noJumpPads: 'ジャンプパッドがありません。',
      minedResource: '{resource} を採掘しました。',
      switchedLanguage: '言語を日本語に切り替えました。',
      machineReady: '中央マシンに資源がたまっています。',
      generatorReady: 'どこかの島ジェネレーターに資源があります。'
    },
    resources: {
      copper: '銅',
      gold: '金',
      emerald: 'エメラルド',
      diamond: 'ダイヤ',
      stone: '石'
    },
    misc: {
      healthValue: '{current}/{max}',
      currentItemValue: '{item}',
      merchantName: '商人',
      generatorName: 'ジェネレーター',
      machineName: '中央マシン',
      chestName: 'チェスト'
    }
  }
} as const;

export class Localizer {
  private language: Language;

  constructor(language: Language) {
    this.language = language;
  }

  setLanguage(language: Language): void {
    this.language = language;
    try {
      window.localStorage.setItem(STORAGE_KEYS.language, language);
    } catch {
      // Ignore browsers that block storage access.
    }
  }

  getLanguage(): Language {
    return this.language;
  }

  t(key: string, values?: Record<string, number | string>): string {
    const dictionary = translations[this.language] as Record<string, unknown>;
    const result = key.split('.').reduce<unknown>((current, part) => {
      if (
        current &&
        typeof current === 'object' &&
        part in (current as Record<string, unknown>)
      ) {
        return (current as Record<string, unknown>)[part];
      }
      return undefined;
    }, dictionary);

    if (typeof result !== 'string') {
      return key;
    }

    if (!values) {
      return result;
    }

    return Object.entries(values).reduce((text, [name, value]) => {
      const token = `{${name}}`;
      return text.split(token).join(String(value));
    }, result);
  }
}
