// if-else statement
let num = 4;
if (num === 0) {
  console.log(`${num} is zero`);
} else if (num > 0) {
  console.log(`${num} is positive`);
} else {
  console.log(`${num} is negative`);
}

// check if a person is eligible to vote
let age = 21;
if (age >= 18) {
  console.log('Eligible to Vote..');
} else {
  console.log('Not Eligible to Vote..');
}

// find the largest of three numbers using nested if-else statements

// let a = 8,
//   b = 5,
//   c = 10;

// if (a >= b) {
//   if (a >= c) {
//     console.log(`The largest among ${a}, ${b}, ${c} is ${a}`);
//   } else {
//     console.log(`The largest among ${a}, ${b}, ${c} is ${c}`);
//   }
// } else if (b >= c) {
//   if (b >= a) {
//     console.log(`The largest among ${a}, ${b}, ${c} is ${b}`);
//   } else {
//     console.log(`The largest among ${a}, ${b}, ${c} is ${a}`);
//   }
// } else {
//   console.log(`The largest among ${a}, ${b}, ${c} is ${c}`);
// }

// Determine the day of the week based on a number (1-7) using switch-case

let day = 4;

switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
    break;
  case 7:
    console.log('Sunday');
    break;
  default:
    console.log('Please enter a number from 1-7');
}

// assign a grade ('A','B','C','D','F') based on a score using switch case

let score = 92;

switch (true) {
  case score >= 90:
    console.log('GRADE : A');
    break;
  case score >= 80:
    console.log('GRADE : B');
    break;
  case score >= 70:
    console.log('GRADE : C');
    break;
  case score >= 60:
    console.log('GRADE : D');
    break;
  case score >= 50:
    console.log('GRADE : E');
    break;
  case score < 50:
    console.log('GRADE : F');
    break;
  default:
    console.log('Enter an integer value between 1-100');
}

// check whether a number is even ort odd using ternary operator
let number = 13;
number % 2 == 0
  ? console.log(`${number} is Even`)
  : console.log(`${number} is Odd`);

// check if a year is a leap year
let year = 2024;

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log('Leap Year');
} else {
  console.log('Not a Leap Year');
}
