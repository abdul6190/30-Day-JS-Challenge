// ------ ARRAY CREATION AND ACCESS -------
// create an array of numbers from 1-5
let arr = [1, 2, 3, 4, 5];
console.log(arr);

// access the first and last element
console.log('First Element ', arr[0]);
console.log('Last Element ', arr[arr.length - 1]);

// ------ ARRAY METHODS (BASIC) -------
// push(), pop(), shift(), unshift()

// push() - add a new number to the end of the array
arr.push(6);
console.log('After adding 6 = ', arr);

// pop() - remove the last element from the array
arr.pop();
console.log('After removing last Element = ', arr);

// shift() - remove the first element from the array
arr.shift();
console.log('After removing first element = ', arr);

// unshift() - add a new number to the beginning of the array
arr.unshift(1);
console.log('After adding element at the beginning = ', arr);

// ------ ARRAY METHODS (INTERMEDIATE) -------
// map(), filter(), reduce()

// create a new array using map() method where each number is doubled
const newArr = arr.map((n) => n * 2);
console.log('Original Array = ', arr);
console.log('Array after each number is doubled = ', newArr);

// create a new array using filter() method with only even numbers
const evenArr = arr.filter((n) => n % 2 == 0);
console.log('Original Array = ', arr);
console.log('Array with only even numbers = ', evenArr);

// calculate sum of all numbers in the array using reduce() method
const sum = arr.reduce((prev, curr) => prev + curr);
console.log(`Sum of [${arr}] = ${sum}`);

// ------ ARRAY ITERATION -------
// use a for loop to iterate over the array
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// use forEach() method to iterate over the array
console.log('Printing array elements using forEach method...');
arr.forEach((n) => console.log(n));

// create a 2-D array (matrix)
// [[1,2,3],[4,5,6],[7,8,9]]
let c = 1;
let matrix = [];
for (let i = 1; i <= 3; i++) {
  let temp = [];
  for (let j = 1; j <= 3; j++) {
    temp.push(c++);
  }
  matrix.push(temp);
}
console.log('2-D array = ', matrix);

// accessing specific element
console.log('Element in the second row, first column = ', matrix[1][0]);
