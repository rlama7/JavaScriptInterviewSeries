/**
 * factorial.js     - A program to find the factorial of a given number.
 * @author          - Ratna Lama
 * @version         - 1.0.0
 * @description     - Given an integer number find the factorial of the number.
 *
 * Example -
 * Factorial of --> 0! = 1
 * Factorial of --> 1! = 1
 * Factorial of --> 5! = 5*4*3*2*1 = 120
 *
 * Time Complexity: O() -->
 * Space Complexity: O() -->
 */

// Recursive Approach
const factorial = (num) => {
  // base case
  if (num < 0)
    return "Sorry can't compute factorial for negative number. Try positive number!";
  if (num === 0 || num === 1) return 1;

  return num * factorial(num - 1);
};

// Display
console.log('-7! --> ' + factorial(-7));
console.log('0! --> ' + factorial(0));
console.log('1! --> ' + factorial(1));
console.log('5! --> ' + factorial(5)); // 120
