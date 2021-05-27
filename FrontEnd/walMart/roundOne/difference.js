/**
 * #3
 * Create a function named difference which takes two integers as arguments and
 * returns the absolute value of the difference.
 *
 * @param {*} num1 input integer
 * @param {*} num2 input integer
 *
 * --->Example<---
 * INPUT:
 *      difference(1,2)
 * OUTPUT:
 *       1
 *
 * INPUT:
 *      difference(-5,5)
 * OUTPUT:
 *      10
 */
const difference = (num1, num2) => {
  // EDGE cases:

  if (
    num1 === undefined ||
    num2 === undefined ||
    num1 === null ||
    num2 === null
  )
    // if either of the input is undefined | null
    return -1;

  // if either of the input is string
  if (typeof num1 !== 'number' || typeof num2 !== 'number')
    return 'Both the input must be an integer. Please try again!';

  return Math.abs(num1 - num2);
};

console.log(difference('', '')); // Both the input must be an integer. Please try again!
console.log(difference(10, undefined)); // -1
console.log(difference(undefined, 20)); // -1
console.log(difference(undefined, undefined)); // -1
console.log(difference(10, null)); // -1
console.log(difference(null, 30)); // -1
console.log(difference(null, null)); // -1
console.log(difference(100, 'args')); // Both the input must be an integer. Please try again!
console.log(difference('args', 200)); // Both the input must be an integer. Please try again!
console.log(difference('hello', 'world')); // // Both the input must be an integer. Please try again!
console.log(difference(1, 2)); // 1
console.log(difference(-5, 5)); // 10
