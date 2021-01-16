import {SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead, isSnakeCollidedHimself, getSnakeLength} from './snake.js';
import {update as updateFood, draw as drawFood} from './food.js';
import {isSnakeOutsideOfGrid, GRID_SIZE} from './grid.js';

let lastRenderTime = 0;
let isGameOver = false;
let isWin = false;
const board = document.getElementById('board');

function main(currentTime) {
  if(isGameOver || isWin) {
    let confirmMessage = isGameOver ? 'You lost! Press O.K to restart...' : 'You won! Press O.K to restart...';
    if(confirm(confirmMessage)){
      window.location = '/';
    }
    return;
  }
  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if(secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;
  update();
  draw();
}

window.requestAnimationFrame(main)

function update() { 
  updateSnake();
  updateFood();
  checkGameOver();
  checkWin();
};

function draw() {
  board.innerHTML = '';
  drawSnake(board);
  drawFood(board);
};

function checkGameOver() {
  isGameOver = isSnakeOutsideOfGrid(getSnakeHead()) || isSnakeCollidedHimself(); 
}

function checkWin() {
  isWin = getSnakeLength() >= GRID_SIZE * GRID_SIZE - 1;
}