//BISECTION
function i(x) {
  return x - Math.cos(x);
}
// for (ii) use return Math.pow(2.7183, -x) - x;
// for (iii) use return Math.pow(2.7183, x) - 4*Math.sin(x);

function bisect(y, posX, negX, x) {
  if (y > 0) {
    x = (negX + x) / 2;
    console.log("x: " + x);
  } else {
    x = (posX + x) / 2;
    console.log("x: " + x);
  }
  y = i(x);
  console.log("y: " + y);
  return [x, y];
}

function check(x, y, posX, posY, negX, negY) {
  if (y > 0) {
    posY = y;
    console.log("posY: " + posY);
    posX = x;
    console.log("posX: " + posX);
  } else {
    negY = y;
    console.log("negY: " + negY);
    negX = x;
    console.log("negX: " + negX);
  }
  return [posX, posY, negX, negY];
}

let negX = 0; //change first limits here!!!
let posX = 1; //and here!!!
// for (ii) and (iii) let negX = 1; and let posX = 0;
let negY = i(negX);
let posY = i(posX);

var x = (negX + posX) / 2;
console.log("x: " + x);
let y = i(x);
console.log("y: " + y);

[posX, posY, negX, negY] = check(x, y, posX, posY, negX, negY);

let a = 0;

while (Math.abs(x - (negX + posX) / 2) > 0.0001) {
  [x, y] = bisect(y, posX, negX, x);
  [posX, posY, negX, negY] = check(x, y, posX, posY, negX, negY);
  a += 1;
}
console.log(a)
