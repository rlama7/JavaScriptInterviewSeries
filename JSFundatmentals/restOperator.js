/**
 * restOperator.js  -- A program to demonstrate usage of rest opearator in JavaScripts
 * @author          -- Ratna Lama
 * @version         -- 1.0.0
 * @description     -- Also known as Rest parameters. The rest parameter syntax allows a function
 *                     to accept an indefinite number of arguments as an array, providing a way to
 *                     represent variadic fucntions, i.e., one which accepts a variable number of arguments in JavaScript.
 *
 */
const sum = (...args) => args.reduce((previous, current) => previous + current);

// OUTPUT
const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log(sum(1)); // 1
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(...array1)); // 15
console.log(...array1); // 1 2 3 4 5

// Find even
const even = (...args) => {
  return args.filter((item) => item % 2 === 0);
};

console.log(even(...array2)); // [ 2, 4, 6, 8, 0 ]

// Find odd
const odd = (...args) => {
  return args.filter((item) => item % 2 !== 0);
};
console.log(odd(...array2)); // [ 1, 3, 5, 7, 9 ]

// an integer greater than 1 is called a prime number iff its only positive divisors (factors) are one and itself.
const isPrime = (num) => {
  if (num < 2) return num;

  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

// Find prime numbers
const primeList = (...array) => {
  return array.filter((item) => isPrime(item));
};

console.log(primeList(...array2)); // [ 1, 3, 5, 7 ]
