//Gauss-Seidal
function calcX(y, z){
  return (12 - y - z)*0.1
}
function calcY(x, z){
  return (13 - (2*x) - z)*0.1
}
function calcZ(x, y){
  return (14 - (2*x) - (2*y))*0.1
}
let y0 = 0;
let z0 = 0;
let x0 = 0;


function gaussSeidel(x0, y0, z0){
  newX = calcX(y0, z0);
  console.log(newX);
  newY = calcY(newX, z0)
  console.log(newY)
  newZ = calcZ(newX, newY);
  console.log(newZ);
  return [newX, newY, newZ]
}

let count = 1;


while(count < 10){
  console.log("iteration " + count);

  const [newX, newY, newZ] = gaussSeidel(x0, y0, z0);

  let deltaX = Math.abs(newX - x0);
  let deltaY = Math.abs(newY - y0);
  let deltaZ = Math.abs(newZ - z0);

  if (deltaX < 0.0001 && deltaY < 0.0001 && deltaZ < 0.0001) {
    break;
  }
  x0 = newX;
  y0 = newY;
  z0 = newZ;
  count++;
}
