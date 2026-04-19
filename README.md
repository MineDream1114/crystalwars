# Crystal Wars

A first-person 3D action survival / mining / objective game prototype built with Three.js, Vite, and TypeScript.

## Setup Steps

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. In the project directory, install dependencies:
   ```bash
   npm install
   ```

## Run Steps

1. To start the local development server:
   ```bash
   npm run dev
   ```
2. Open your browser to the local address provided (usually `http://localhost:5173/`).

## Controls

* **W, A, S, D** - Move
* **Space** - Jump
* **Shift** - Sprint
* **Mouse** - Look around
* **Left Click** - Attack / Mine Block / Use Item
* **1-8** or **Mouse Wheel** - Switch hotbar item
* **E** - Interact (Buy items from Merchant, Open Chests)
* **Esc** - Pause game / Settings

## Gameplay Summary

Your goal is to travel to each of the **8 outer islands** and destroy the glowing purple crystal on each one. Once all 8 crystals are destroyed, you win!

* **Resources:** There is a Resource Generator NPC on each outer island that drops Copper and Gold. The glowing machine on the central island drops valuable Gold and Diamonds.
* **Mining:** Equip your Pickaxe (for hard blocks like Stone and Ores) or Shovel (for soft blocks like Dirt and Grass) to mine underground. You might even find hidden chests containing loot!
* **Shop:** Talk to the Merchant on the center island using `E`. You can spend your gathered Copper, Gold, Emeralds, and Diamonds to buy Blocks (to build bridges), Jump Pads, a Bow & Arrows, or upgrade your tools (Iron -> Diamond -> Rainbow).
* **Blocks & Building:** Buy "Blocks" (🧱) from the Merchant, select them in your hotbar, and left click to build bridges to the outer islands!
* **Teleportation:** Buy "Purple Dotters" (🟣) and throw them with left click to teleport where they land.

## Configuration & Balancing

All balancing values, prices, damage, speed, timer intervals, generation rules, and colors are isolated in:

**`src/config.ts`**

Edit this file if you want to tweak economy prices, crystal HP, generation sizes, item damage, etc.

## Language Setting

The game supports English and Japanese. You can switch the language from the Settings menu on the Title Screen or the Pause Menu.
