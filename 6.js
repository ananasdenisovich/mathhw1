//BISECTION
function i(x) {
  return Math.pow(x, 10) - 1;
}
function bisect(y, posX, negX, x) {
  if (y > 0) {
    x = (negX + x) / 2;

  } else {
    x = (posX + x) / 2;

  }
  y = i(x);

  return [x, y];
}

function check(x, y, posX, posY, negX, negY) {
  if (y > 0) {
    posY = y;

    posX = x;

  } else {
    negY = y;

    negX = x;

  }
  return [posX, posY, negX, negY];
}

let negX = 0;
let posX = 1.3;
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

console.log("x = " + negX + " (after " + a + " iterations)")
//FALSE POSITION
function falsePosition(y2, posX2, negX2, x2, posY2, negY2) {
  if (y2 > 0) {
    x2 = negX2 - ((x2-negX2)/(y2-negY2))*y2;
  } else {
    x2 = x2 - ((posX2-x2)/(posY2-y2))*y2;
  }
  y2 = i(x2);
  return [x2, y2];
}

let negX2 = 0;
let posX2 = 1.3;
let negY2 = i(negX2);
let posY2 = i(posX2);

var x2 = negX2 - ((posX2-negX2)/(posY2-negY2))*negY2;

let y2 = i(x2);


[posX2, posY2, negX2, negY2] = check(x2, y2, posX2, posY2, negX2, negY2);

let a2 = 1;

while (Math.abs(x2 - (negX2 - ((posX2-negX2)/(posY2-negY2))*negY2)) > 0.0001) {
  [x2, y2] = falsePosition(y2, posX2, negX2, x2, posY2, negY2);
  [posX2, posY2, negX2, negY2] = check(x2, y2, posX2, posY2, negX2, negY2);
  a2 += 1;
}
console.log("x = " + negX2 + " (after " + a2 + " iterations)")
console.log("Bisection needed 12 iteraions and False Position needed 38 iterations, so Bisection is better here")
