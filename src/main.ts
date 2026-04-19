/**
 * Crystal Wars - Entry Point
 */

import './style.css';
import { Game } from './game';

// Remove Vite's default app div if present
const app = document.getElementById('app');
if (app) app.remove();

// Start the game
new Game();
