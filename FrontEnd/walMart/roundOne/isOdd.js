/**
 * Create a function named isOdd which accepts an integer as an argument
 * and returns true if the value is odd. An odd integer is not wholly divisible
 * by two.
 *
 * @param {*} num input integer
 *
 * --->Example<---
 * INPUT:
 *      isOdd(4)
 * OUTPUT:
 *      false
 *
 * INPUT:
 *      isOdd(5)
 * OUTPUT:
 *      true
 */
const isOdd = (num) => {
  // check if the input is an integer
  if (!Number.isInteger(num)) return 'Input must be an integer';
  return num % 2 !== 0;
};

console.log(isOdd('applePie')); // Input must be an integer
console.log(isOdd(4)); // false
console.log(isOdd(5)); // true
