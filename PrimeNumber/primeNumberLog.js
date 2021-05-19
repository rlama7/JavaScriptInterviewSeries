/**
 * primeNumberLog.js - A program to display the result arry of prime numbers only upto input number.
 * @author           - Ratna Lama
 * @version          - 1.0.0
 * @description      -
 * @param {*} number to be checked if prime number
 *
 * --->Example<---
 *      INPUT:
 *          num = 20
 *
 *      OUTPUT:
 *          result = [2,3,5,7,11,13,17,19]
 * --->Algorithm<---
 * --->Time Complexity<---
 * time O()
 * space O()
 */

const primeNumberLog = (number) => {
  // prime numbers are positive integers greater than 1 so
  // for less than 2 such as 0,1 we will simple return false;
  // also check if the input number is an integer and if not return false
  if (number < 2 || !Number.isInteger(number)) return false;

  // initialize result array with 2
  // Next iterate until the number
  // while filtering out even and composite numbers
  // if we find even simply continue to the next number
  // if we find composite number continue to the next number
  const result = [2, 3, 5, 7];
  // fill the result array
  for (let index = 2; index <= number; index++) {
    // filter out even
    if (index % 2 === 0) {
      continue;
    } else if (index % Math.sqrt(index) === 0) {
      // filter out odd and multiple of odds
      continue;
    } else if (index % 3 === 0) {
      continue;
    } else if (index % 5 === 0) {
      continue;
    } else if (index % 7 === 0) {
      continue;
    }

    result.push(index);
  }
  return result;
};

const num2 = 0;
const num3 = 1;
const num4 = '400';
const num1 = 400;

console.log(primeNumberLog(num2)); // 0 <- false
console.log(primeNumberLog(num3)); //1 <- false;
console.log(primeNumberLog(num4)); //'400' <- false;
console.log(primeNumberLog(num1)); //
// [
//     2,   3,   5,   7,  11,  13,  17,  19,  23,  29,  31,  37,
//    41,  43,  47,  53,  59,  61,  67,  71,  73,  79,  83,  89,
//    97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 143, 149,
//   151, 157, 163, 167, 173, 179, 181, 187, 191, 193, 197, 199,
//   209, 211, 221, 223, 227, 229, 233, 239, 241, 247, 251, 253,
//   257, 263, 269, 271, 277, 281, 283, 293, 299, 307, 311, 313,
//   317, 319, 323, 331, 337, 341, 347, 349, 353, 359, 367, 373,
//   377, 379, 383, 389, 391, 397
// ]

/**
 * UTILITY
 *
 * check if a number is an integer
 *
 */
const number1 = 1;
const number2 = 0;
const number3 = 10.01;
const number3A = 10.0;
const number4 = '1';
const number5 = [1, 2, 3];
const number6 = { a: 1, b: 2 };

console.log(Number.isInteger(number1)); // true
console.log(Number.isInteger(number2)); // true
console.log(Number.isInteger(number3)); // false
console.log(Number.isInteger(number3A)); // true

console.log(Number.isInteger(number4)); // false
console.log(Number.isInteger(number5)); // false
console.log(Number.isInteger(number6)); // false

const isFloat = (n) => Number(n) === n && n % 1 !== 0;
console.log(isFloat(number3)); // true
console.log(isFloat(number3A)); // false
