import {isOnSnake, expandSnake} from './snake.js';
import {randomGridPosition} from './grid.js';

let food = getRandomFoodPosition();
const EXPANSION_RATE = 1;

export function update() { 
  if(isOnSnake(food, false)) {
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
  }
};

export function draw(board) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  board.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while(newFoodPosition == null || isOnSnake(newFoodPosition, false)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}