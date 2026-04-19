import { defineConfig } from 'vite';
import { multiplayerRelayPlugin } from './multiplayer-relay.mjs';

export default defineConfig({
  plugins: [multiplayerRelayPlugin()],
  build: {
    chunkSizeWarningLimit: 700
  },
  server: {
    host: '127.0.0.1',
    port: 5174,
    strictPort: true
  },
  preview: {
    host: '127.0.0.1',
    port: 5174,
    strictPort: true
  }
});
