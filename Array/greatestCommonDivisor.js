/**
 * greatestCommonDivisor - A program to find the greatest common divisor (factor).
 * @author               - Ratna Lama
 * @version              - 1.0.0
 * @description          - CONSTRAINTS/RESTRICTIONS
 *                       - EDGE CASES
 *                          - check if given inputs are numbers and otherwise return false
 *                          - check if the given inputs are positive otherwise either return
 *                            false or get the positive valuess
 *
 * @param {*} a input number
 * @param {*} b input number
 *
 * --->Example<---
 *      INPUT:
 *          a: 15 -> 1, 3, 5, 15
 *          b: 30 -> 1, 2, 3, 5, 6, 10, 15, 30
 *      OUTPUT:
 *          result: The factors that are common to both 15 and 30 are: 1, 3, 5, 15
 *                  The greatest/largest common divisor/factor is 15
 *
 * --->Algorithm<---
 *
 * --->Time Complexity<---
 */

// time O(n) linear | space O(1) constant
const greatestCommonDivisor = (a, b) => {
  // edge cases
  // check if inputs are numbes otherwise return false or -1
  if (typeof a !== 'number' || typeof b !== 'number') return false;

  // check if number is negative
  // if number is negative either we can return false or
  // find the greatest common divisor of positive numbers
  if (a < 0 || b < 0) {
    a = Math.abs(a);
    b = Math.abs(b);
  }
  if (a === 0 && b === 0) return false;

  while (b) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

/**
 * recursive way to find the greatest common divisor
 * @param {*} a first input
 * @param {*} b second input
 */

// time O(1) constant | space O(n) linear since uses the call stack
const greatestCommonDivisorRecursive = (a, b) => {
  // edge cases
  // check if inputs are numbes otherwise return false or -1
  if (typeof a !== 'number' || typeof b !== 'number') return false;

  // check if number is negative
  // if number is negative either we can return false or
  // find the greatest common divisor of positive numbers
  if (a < 0 || b < 0) {
    a = Math.abs(a);
    b = Math.abs(b);
  }
  if (a === 0 && b === 0) return false;

  // recursive case
  if (b !== 0) {
    return greatestCommonDivisorRecursive(b, a % b);
  } else {
    return a;
  }
};

let a = 15,
  b = 30;

let x = '15',
  y = '30';

let s = -9,
  t = -3;

let w = 20,
  v = 30;

let p = 0,
  q = 0;

let c = 0,
  d = 1;

let e = 1,
  f = 0;

let g = 21,
  h = 23;
// iterative
console.log('Iterative Approach -->');
console.log(greatestCommonDivisor(a, b)); // 15
console.log(greatestCommonDivisor(x, y)); // false
console.log(greatestCommonDivisor(s, t)); // 3
console.log(greatestCommonDivisor(w, v)); // 10
console.log(greatestCommonDivisor(p, q)); // false
console.log(greatestCommonDivisor(c, d)); // 1
console.log(greatestCommonDivisor(e, f)); // 1
console.log(greatestCommonDivisor(g, h)); // 1
console.log('\n--------------------------------');

// recrusive
console.log('Recursive Approach -->');
console.log(greatestCommonDivisorRecursive(a, b)); // 15
console.log(greatestCommonDivisorRecursive(x, y)); // false
console.log(greatestCommonDivisorRecursive(s, t)); // 3
console.log(greatestCommonDivisorRecursive(w, v)); // 10
console.log(greatestCommonDivisorRecursive(p, q)); // false
console.log(greatestCommonDivisorRecursive(c, d)); // 1
console.log(greatestCommonDivisorRecursive(e, f)); // 1
console.log(greatestCommonDivisorRecursive(g, h)); // 1
console.log('\n--------------------------------');

/** UTILITY */
console.log('10/2: ' + 11 / 2); // quotient 5.5
console.log('10 % 2: ' + (11 % 2)); // remainder 1
