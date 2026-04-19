import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // Use relative paths for assets so the project can be deployed 
  // to any subdirectory on GitHub Pages without breaking links.
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});
