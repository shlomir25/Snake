export const GRID_SIZE = 15;

export function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1
  }
}

export function isSnakeOutsideOfGrid(position) {
  return position.x < 1 || position.x > GRID_SIZE || position.y < 1 || position.y > GRID_SIZE;
}