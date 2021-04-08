/**
 * monotonicArray.js  - A program to find if an array of integers is a monotonic.
 * @author            - Ratna Lama
 * @version           - 1.0.0
 * @description       - A monotonic array elements are entirely non-increasing or
 *                      entirely non-decreasing from left to right.
 *                      An empty array and arrays of one element are monotonic
 *
 * Example -
 *      INPUT:
 *          array = [1,1,2,3,4,5,5,7,9,10]
 *      OUTPUT:
 *          true
 *
 * Algorithm -
 *
 *
 * Time Complexity: O(n) --> linear
 * Space Complexity: O(1) --> constant
 */
const monotonicArray = (array) => {
  let isNonDecreasing = true; // increasing
  let isNonIncreasing = true; // decreasing

  for (let index = 1; index < array.length; index++) {
    let current = array[index];
    let previous = array[index - 1];

    if (current < previous) {
      //                              previous     current
      isNonDecreasing = false; // [   -1,          -2,     -3, -4, -5] --> NOT increasing (DECREASING)
    }

    if (current > previous) {
      //   previous    curent
      isNonIncreasing = false; // [   1,          2,      3,4,5] --> NOT Decreasing (INCREASING)
    }
  }
  return isNonDecreasing || isNonIncreasing;
};

const array1 = [1, 1, 2, 3, 4, 5, 5, 7, 9, 10];
const array2 = [1, -1, 2, -3, 4, 5, 5, -7, 9, 10];
const array3 = [-1, -1, -2, -3, -4, -5, -5, -7, -9, -10];
const array4 = [];
const array5 = [10];
const array6 = [-10, 16];
const array7 = [-20, 16, 20];

console.log(monotonicArray(array1)); // true
console.log(monotonicArray(array2)); // false
console.log(monotonicArray(array3)); // true
console.log(monotonicArray(array4)); // true
console.log(monotonicArray(array5)); // true
console.log(monotonicArray(array6)); // true
console.log(monotonicArray(array7)); // true
