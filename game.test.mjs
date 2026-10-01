import assert from 'node:assert/strict';
import { Game } from './game.js';

const game = new Game();
game.snake.body = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 2, y: 0 },
];
game.direction = 'LEFT';
game.nextDirection = 'LEFT';
game.food = { x: 0, y: 0 };

try {
  game.update();
  assert.equal(game.running, false, 'Snake should stop when it hits the wall');
  console.log('Wall-collision test passed');
} catch (error) {
  console.error('Wall-collision test failed');
  throw error;
}
