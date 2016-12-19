/// <reference path="p5.d.ts" />
const COL_SIZE = 16;
const min = Math.min(document.documentElement.clientWidth, document.documentElement.clientHeight);
const SIZE = min - (min % COL_SIZE);

const snake = createSnake();
const food = createFood();

function setup() {
  createCanvas(SIZE, SIZE);
  frameRate(20);

  food.newLocation();
}

function draw() {
  background(54, 96, 131);

  fill(200);
  noStroke();

  if (!snake.started) {
    const [title, subtitle] = ['SNAKE GAME', 'Press any arrow key to start'];

    textSize(32);
    text(title, (SIZE / 2) - textWidth(title) / 2, (SIZE / 2) - 12);
    textSize(16);
    text(subtitle, (SIZE / 2) - textWidth(subtitle) / 2, (SIZE / 2) + 14);
  }

  if (snake.points) {
    textSize(32);
    text(snake.points, SIZE - textWidth(snake.points) - 10, 32);
  }

  snake.restart();

  snake.eat(food);

  snake.update();
  snake.draw();

  food.draw();
}

function keyPressed() {
  snake.changeDirection();
}