//NEWTON-RAPHSON
const math = require('mathjs');
let expression = 'x^4 +x^3 - 7*x^2 - x + 5';
//for (ii) use 'x^3 - 5*x + 3'

const i = math.compile(expression);

const iDer = math.derivative(expression, 'x');

function NR(x0){
  const iValue = i.evaluate({ x: x0 });
  const iDerValue = iDer.evaluate({ x: x0 });

  const x1 = x0 - iValue / iDerValue;
  return x1;
}
let a = 2; //can change
let b = 3;
//for (ii) let a = 1; let b = 0;
let x0 = (a + b)/2;
let n = 1;
let x1 = NR(x0);
while(Math.abs(x1-x0) > 0.0001){
  x0 = x1;
  x1 = NR(x0);
  console.log(x0);
  n++;
}
console.log(n);

