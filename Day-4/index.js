// LOOPS
// print numbers from 1-10 using for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//table of 5 using for loop
let n = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${n} X ${i} = ${n * i}`);
}

// sum of numbers from 1-10 using while loop
let sum = 0,
  i = 1;
while (i <= 10) {
  sum += i;
  i++;
}
console.log('Sum of numbers from 1-10 is', sum);

// print numbers from 10 to 1 using while loop
let j = 10;
while (j > 0) {
  console.log(j);
  j--;
}

// print numbers from 1-5 using do...while loop

let k = 1;
console.log('Printing numbers from 1-5 using do...while loop');
do {
  console.log(k);
  k++;
} while (k <= 5);

// factorial of a number using do...while loop
let n1 = (n2 = 5);
let f = 1;
do {
  f *= n1;
  n1--;
} while (n1 > 0);
console.log(`Factorial of ${n2} is ${f}`);

/*
Print this pattern using nested for loops
*
* *
* * * 
* * * *
* * * * *
*/

for (let a = 1; a <= 5; a++) {
  let pattern = '';
  for (let b = 1; b <= a; b++) {
    pattern += '* ';
  }
  console.log(pattern);
}

// print numbers 1-10 skip the number 5 using continue statement
for (let z = 1; z <= 10; z++) {
  if (z == 5) continue;
  console.log(z);
}

// print numbers from 1-10, stop the loop when the number is 7 using the break statement
for (let y = 1; y <= 10; y++) {
  if (y == 7) break;
  console.log(y);
}
