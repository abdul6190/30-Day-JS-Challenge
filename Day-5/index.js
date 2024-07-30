// ------- FUNCTION DECLARATION --------
// function to check if a number is even or odd
function isEvenOrOdd(n) {
  if (n % 2 == 0) {
    console.log(`${n} is an Even number`);
  } else {
    console.log(`${n} is an Odd number`);
  }
}

isEvenOrOdd(12);

// function to calculate the square of a number and return the result
function calculateSquare(n) {
  return n * n;
}
let n = 4;
console.log(`Square of ${n} is ${calculateSquare(n)}`);

// ------- FUNCTION EXPRESSION --------
// a function expression to find the maximum of two numbers and log the result
const maxNum = function (a, b) {
  a > b
    ? console.log(`${a} is greater than ${b}`)
    : console.log(`${b} is greater than ${a}`);
};

maxNum(12, 5);

// a function expression to concatenate two strings and return the result
const concatinate = function (a, b) {
  return a + b;
};

console.log(concatinate('Hello ', 'World'));

// ------- ARROW FUNCTIONS --------
// an arrow function to calculate the sum of two numbers and return the result
const sum = (a, b) => a + b;
console.log(sum(10, 20));

// an arrow function to check if a string contains a specific character and return a boolean value
const isCharacterPresent = (str, c) => str.includes(c);
console.log(isCharacterPresent('Hello', 'e'));

// ------- FUNCTION PARAMETERS AND DEFAULT VALUES --------
// a function that takes two parameters and return their product. Provide a default parameter for the second parameter
function product(a, b = 1) {
  return a * b;
}
console.log(product(5));
console.log(product(5, 3));

// a function that takes a person's name and age and returns a greeting message. Provide default value for the age
function greet(name, age = 24) {
  console.log(`Hi ${name}, how are you?`);
}
greet('Rohit');

// ------- HIGHER ORDER FUNCTIONS --------
// write a higher order function that takes a function and a number, and calls the function that many times
function callFn(fn, n) {
  for (let i = 1; i <= n; i++) {
    fn();
  }
}

function test() {
  console.log('This is a test function...');
}

callFn(test, 3);

// write a higher order function that takes two functions and a value, applies the first function to the value and then
// applies the second function to the result

function calc(func1, func2, value) {
  const result1 = func1(value);
  const result2 = func2(result1);
  return result2;
}

const add2 = (n) => n + 2;

const multiply3 = (n) => n * 3;

console.log(calc(add2, multiply3, 5));
