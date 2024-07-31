// -------- TEMPLATE LITERALS --------
let name = 'Virat',
  age = '34';

console.log(`Name : ${name} \n Age : ${age}`);

let multiLine = `this is
a multiline string 
enclosed in backticks
`;
console.log(multiLine);

// ------- DESTRUCTURING --------
let arr = [1, 2, 3, 4, 5];
const [a, b] = arr;
console.log(a, b);

let book = {
  title: 'Decoding JavaScript',
  author: 'Rushabh Mulraj Shah',
  year: 2023,
};

const { title, author } = book;
console.log(`${title} is written by ${author}`);

// ------ SPREAD AND REST OPERATORS -------
let newarr = [...arr, 6, 7, 8];
console.log(newarr);

function sum(...args) {
  return args.reduce((prev, curr) => prev + curr);
}

let result1 = sum(1, 2, 3);
let result2 = sum(2, 4, 6, 8, 10, 12, 14);
console.log(`Sum of [1,2,3] = ${result1}`);
console.log(`Sum of [2,4,6,8,10,12,14] = ${result2}`);

// ------- DEFAULT PARAMETERS --------
function product(a, b = 1) {
  return a * b;
}
console.log(product(5, 2));
console.log(product(5));

// ------ ENHANCED OBJECT LITERALS --------

let user = {
  firstName: 'Virat',
  lastName: 'Kohli',
  age: 34,
  sportType: 'Cricket',
  isMarried: true,
  display() {
    return `${this.firstName} ${this.lastName} is a ${this.sportType} player`;
  },
};

console.log(user);
console.log(user.display());

const brand = 'Toyota';
const model = 'Corolla';
const year = 2022;

const car = {
  brand, // Property shorthand
  model,
  year,
  start() {
    console.log(`${this.brand} ${this.model} is starting...`);
  },
  drive(speed) {
    console.log(`${this.brand} ${this.model} is driving at ${speed} km/h.`);
  },
  getAge(currentYear) {
    return currentYear - this.year;
  },
};

console.log(car.brand); // Output: Toyota
console.log(car.model); // Output: Corolla
console.log(car.year); // Output: 2022

car.start(); // Output: Toyota Corolla is starting...
car.drive(100); // Output: Toyota Corolla is driving at 100 km/h.

console.log(`Car age: ${car.getAge(2024)} years`); // Output: Car age: 2 years
