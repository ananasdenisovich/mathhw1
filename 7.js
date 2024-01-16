//SECANT
function i(x){
  return Math.pow(x, 3) + Math.pow(x, 2) + x + 7;
}
//for (ii) use return x - Math.pow(2.7183, -x);
//for (iii) use return (x * Math.log10(x)) - 1.9;
function secant(x0, x1){
  x2 = x1 - (((x1-x0)/(i(x1)-i(x0)))*i(x1));
  return x2;
}
let x0 = -3; //you can change
let x1 = -2; //also can change
//for (ii) let x0 = 0; let x1 = 1;
//for (iii) let x0 = 3; let x1 = 4;
let a = 1;

while(Math.abs(x0-x1) > 0.0001){
  x2 = secant(x0, x1);
  console.log(x2);
  x0 = x1;
  x1 = x2;
  a++;
}
console.log(a);

