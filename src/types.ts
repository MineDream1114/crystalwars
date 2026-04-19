export type Language = 'en' | 'ja';

export type GamePhase = 'title' | 'playing' | 'paused' | 'shop' | 'win';

export type MultiplayerStatus = 'offline' | 'connecting' | 'online';

export type Currency = 'copper' | 'gold' | 'emerald' | 'diamond';

export type ToolTier = 'basic' | 'iron' | 'diamond' | 'rainbow';

export type EquipmentId = 'sword' | 'pickaxe' | 'shovel';

export type HotbarItemId =
  | EquipmentId
  | 'bow'
  | 'blocks'
  | 'purpleDotter'
  | 'jumpPad';

export type BlockType =
  | 'grass'
  | 'dirt'
  | 'stone'
  | 'sand'
  | 'copperOre'
  | 'goldOre'
  | 'emeraldOre'
  | 'diamondOre'
  | 'bridge';

export type BlockCategory = 'soft' | 'hard' | 'ore' | 'utility';

export type InteractableType =
  | 'merchant'
  | 'generator'
  | 'machine'
  | 'chest'
  | 'jumpPad';

export interface Price {
  currency: Currency;
  amount: number;
}

export interface ToolStats {
  damage: number;
  blockDamage: number;
  cooldown: number;
  range: number;
}

export interface BlockDefinition {
  color: number;
  category: BlockCategory;
  hp: number;
  solid: boolean;
}

export interface BlockData {
  type: BlockType;
  x: number;
  y: number;
  z: number;
  hp: number;
}

export interface NotificationEntry {
  id: number;
  key: string;
  values?: Record<string, number | string>;
  createdAt: number;
}

export interface InventoryState {
  currentHotbarIndex: number;
  hotbar: HotbarItemId[];
  hasBow: boolean;
  arrows: number;
  blocks: number;
  purpleDotters: number;
  jumpPads: number;
  toolTiers: Record<EquipmentId, ToolTier>;
  currencies: Record<Currency, number>;
}

export interface ShopEntry {
  id: string;
  itemKey: string;
  descriptionKey: string;
  price: Price;
  action:
    | {
        type: 'consumable';
        item: 'blocks' | 'arrows' | 'purpleDotters' | 'jumpPads';
        amount: number;
      }
    | {
        type: 'unlock';
        item: 'bow';
      }
    | {
        type: 'upgrade';
        item: EquipmentId;
        tier: ToolTier;
      };
}

export interface InteractionPrompt {
  type: InteractableType;
  id: string;
  key: string;
  distance: number;
}

export interface Vec3Like {
  x: number;
  y: number;
  z: number;
}

export interface MultiplayerPlayerSnapshot {
  id: string;
  name: string;
  position: Vec3Like;
  yaw: number;
  health: number;
  currentItem: HotbarItemId;
  updatedAt: number;
}

export interface MultiplayerBlockOverride {
  key: string;
  x: number;
  y: number;
  z: number;
  type: BlockType | null;
}

export interface MultiplayerJumpPadState {
  x: number;
  y: number;
  z: number;
}

export interface MultiplayerRoomSnapshot {
  roomId: string;
  publicRoomId: string;
  seed: number;
  players: MultiplayerPlayerSnapshot[];
  destroyedCrystals: string[];
  crystalHp: Record<string, number>;
  blockOverrides: MultiplayerBlockOverride[];
  jumpPads: MultiplayerJumpPadState[];
}
