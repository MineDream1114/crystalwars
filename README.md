# Island Crystal Breaker

A playable first-person 3D island action / mining / objective prototype built with TypeScript, Three.js, and Vite.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the local dev server:

```bash
npm run dev
```

3. Open [http://localhost:5174/](http://localhost:5174/) in a browser.

## GitHub Sync

This project is now prepared for GitHub sync:

- local Git repository initialized on `main`
- `.gitignore` added
- GitHub Actions CI added at `.github/workflows/ci.yml`

When you push to GitHub, Actions will automatically run `npm ci` and `npm run build`.

To connect this local project to a GitHub repository:

```bash
git remote add origin <YOUR_GITHUB_REPO_URL>
git add .
git commit -m "Initial game prototype"
git push -u origin main
```

## Online Multiplayer

- The title screen now includes an **Online Lobby**.
- The public online server address is `1111`.
- Enter a player name, then either:
  - click **Join Public 1111**
  - or type a custom server address and click **Join By Address**
- Friends can join the same match by opening the same local URL and entering the same server address.
- While connected, the game syncs:
  - room seed / island layout
  - player presence and names
  - shared crystal HP / destruction progress
  - basic shared block and jump-pad placements

This multiplayer relay is embedded into the local Vite server, so `npm run dev` is enough for both the game and the room server.

## Build

```bash
npm run build
```

## Controls

- `W / A / S / D`: move
- `Mouse`: look
- `Space`: jump
- `Shift`: sprint
- `Left Click`: use current item / attack / mine / place
- `Mouse Wheel` or `1-7`: switch hotbar item
- `E`: interact with merchant, chests, island generators, and the center machine
- `Esc`: unlock pointer / pause
- Title screen lobby: enter a player name and server address to join friends online
- Touch:
  - drag the virtual joystick to move
  - drag the right side to look
  - tap or hold the large `Use` button to attack / mine / place continuously
  - tap hotbar slots to switch items
  - use the `Jump`, `Interact`, `Sprint`, `Pause`, and `Fullscreen` buttons
  - mobile settings include touch sensitivity, left-handed layout, auto-sprint, and haptics

## Gameplay Summary

- Explore the center island and 4 outer islands.
- Collect copper and gold from the outer-island generators.
- Collect gold and diamonds from the center machine.
- Dig underground for randomly placed chests and ores.
- Buy arrows, bow, purple dotters, jump pads, blocks, and tool upgrades from the merchant.
- Upgrade sword, pickaxe, and shovel through `basic -> iron -> diamond -> rainbow`.
- Destroy the crystal on each outer island to win.

## Economy Anchors

- `1 copper = 1 block`
- `5 gold` for iron-tier upgrades, jump pads, and purple dotters
- `12 emeralds` for diamond-tier upgrades
- `20 emeralds` for rainbow-tier upgrades

Other prices like bow and arrows are kept in editable config.

## Where To Edit Balance / Content

- Balance, world sizing, pricing, timers, and tool stats: `src/config.ts`
- English / Japanese localization: `src/localization.ts`
- World generation, islands, crystals, chests, generators, and machine behavior: `src/world/BlockWorld.ts`
- First-person game loop, item use, combat, and interactions: `src/game/Game.ts`
- HUD, title screen, settings, shop, and win screen: `src/ui/UIManager.ts`
- Online room client logic: `src/network/MultiplayerClient.ts`
- Remote player rendering: `src/game/RemotePlayerManager.ts`
- Local multiplayer relay for dev / preview: `multiplayer-relay.mjs` and `vite.config.ts`

## Notes / Simplifying Assumptions

- The world uses block units where `1 block = 1 unit`, and chunk constants are defined as `9 x 9 x 18`.
- Each outer island is generated around a 2 x 2 chunk footprint.
- Bridges connect the center island to each outer island so the prototype is fully playable without requiring advanced mobility before the first upgrades.
- Crystals are the main hostile objective targets; mining and ranged combat are both supported even though the prototype does not yet include roaming enemies.
- Multiplayer is currently a lightweight room-based prototype focused on co-op presence, shared crystal progress, and friend joining rather than full authoritative PvP combat.
