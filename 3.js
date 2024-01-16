//FALSE POSITION
function i(x) {
  return Math.pow(x, 3) - (5*x) + 1;
}
// for (ii) use return Math.pow(x, 3) - Math.pow(x, 2) - 1;
// for (iii) use return Math.pow(x, 6) - Math.pow(x, 4) - Math.pow(x, 3) - 1;

function falsePosition(y, posX, negX, x, posY, negY) {
  if (y > 0) {
    x = negX - ((x-negX)/(y-negY))*y;
    console.log("x: " + x);
  } else {
    x = x - ((posX-x)/(posY-y))*y;
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

let negX = 1; //change first limits here!!!
let posX = 0; //and here!!!
//for (ii) let negX = -1; let posX = 3;
//for (ii) let negX = 0; let posX = 2;
let negY = i(negX);
let posY = i(posX);

var x = negX - ((posX-negX)/(posY-negY))*negY;
console.log("x: " + x);
let y = i(x);
console.log("y: " + y);

[posX, posY, negX, negY] = check(x, y, posX, posY, negX, negY);

let a = 1;

while (Math.abs(x - (negX - ((posX-negX)/(posY-negY))*negY)) > 0.0001) {
  [x, y] = falsePosition(y, posX, negX, x, posY, negY);
  [posX, posY, negX, negY] = check(x, y, posX, posY, negX, negY);
  a += 1;
}
console.log(a)
