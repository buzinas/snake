function createFood() {
  const cols = SIZE / COL_SIZE;
  let [x, y, r, g, b] = [0, 0, 0, 0, 0];

  const p = () => floor(random(cols)) * COL_SIZE;
  const c = () => round(random(255));

  const getLocation = () => createVector(x, y);

  const newLocation = () => [x, y, r, g, b] = [p(), p(), c(), c(), c()];

  const draw = () => {
    stroke(255);
    fill(r, g, b);
    rect(x, y, COL_SIZE, COL_SIZE);
  };

  return {
    getLocation,
    newLocation,
    draw
  };
}