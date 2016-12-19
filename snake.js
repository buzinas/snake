function createSnake() {
  const tails = [];
  let [x, y, direction, started] = [0, 0, 0, false];

  const start = () => {
    tails.length = 0;
    [x, y, direction, started] = [0, 0, 0, false];
  };

  const restart = () => {
    if (x < 0 || x >= SIZE || y < 0 || y >= SIZE) {
      return start();
    }

    for (let i = 0; i < tails.length; i++) {
      if (dist(x, y, tails[i].x, tails[i].y) === 0) {
        return start();
      }
    }
  };

  const changeDirection = () => {
    if ((keyCode === LEFT_ARROW && direction !== RIGHT_ARROW) ||
    (keyCode === RIGHT_ARROW && direction !== LEFT_ARROW) ||
    (keyCode === UP_ARROW && direction !== DOWN_ARROW) ||
    (keyCode === DOWN_ARROW && direction !== UP_ARROW)) {
      direction = keyCode;
      started = true;
    }
    else if (keyCode === ENTER) {
      direction = 0;
    }
  };

  const eat = (food) => {
    console.log(food.getLocation());
    const foodLocation = food.getLocation();
    if (dist(x, y, foodLocation.x, foodLocation.y) === 0) {
      tails.push(createVector(x, y));
      food.newLocation();
    }
  };

  const update = () => {
    if (direction === 0) {
      return;
    }

    for (let i = 0; i < tails.length - 1; i++) {
      tails[i] = tails[i + 1];
    }
    tails[tails.length - 1] = createVector(x, y);

    if (direction === UP_ARROW)
      y -= COL_SIZE;
    else if (direction === DOWN_ARROW)
      y += COL_SIZE;
    else if (direction === LEFT_ARROW)
      x -= COL_SIZE;
    else if (direction === RIGHT_ARROW)
      x += COL_SIZE
  }

  const draw = () => {
    fill(255);
    noStroke();
    rect(x, y, COL_SIZE, COL_SIZE);
    tails.forEach(tail => rect(tail.x, tail.y, COL_SIZE, COL_SIZE));
  };

  return {
    restart,
    changeDirection,
    eat,
    update,
    draw,
    get started() {
      return started;
    },
    get points() {
      return tails.length * 10;
    }
  };
}