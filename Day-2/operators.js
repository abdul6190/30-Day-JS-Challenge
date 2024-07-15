// Arithmetic Operators
let num1 = 10;
let num2 = 5;

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);

// Assignment Operators
// num1 += 20;
// num2 -= 4;
// console.log(num1);
// console.log(num2);

// Comparison Operators
console.log(`3 < 3 : ${3 < 3}`);
console.log(`3 > 3 : ${'3' > 3}`);
console.log(`3 <= 3 : ${'3' <= 3}`);
console.log(`3 >= 3 : ${'3' >= 3}`);
console.log(`'3' == 3 : ${'3' == 3}`); // weak check - value only
console.log(`'3' === 3 : ${'3' === 3}`); // strong check - value and type

// Logical Operators
let a = 10,
  b = 8,
  c = 5,
  d = true;

console.log(a > b && a > c);
console.log(a < b || a > c);
console.log(!d);

// Ternary Operator
num1 >= 0
  ? console.log(`${num1} is positive`)
  : console.log(`${num1} is negative`);
