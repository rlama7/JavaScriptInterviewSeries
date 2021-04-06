/**
 * monotonicArray.js  - A program to find if an array of integers is a monotonic.
 * @author            - Ratna Lama
 * @version           - 1.0.0
 * @description       - A monotonic array elements are entirely non-increasing or
 *                      entirely non-decreasing from left to right.
 *                      An empty array and arrays of one element are monotonic
 *
 * Example -
 *
 * Algorithm -
 *      INPUT:
 *          array = [1,1,2,3,4,5,5,7,9,10]
 *      OUTPUT:
 *          true
 *
 * Time Complexity: O() -->
 * Space Complexity: O() -->
 */
const monotonicArray = (array) => {
  let isNonDecreasing = true;
  let isNonIncreasing = true;

  for (let index = 1; index < array.length; index++) {
    if (array[index] < array[index - 1]) {
      isNonDecreasing = false;
    }

    if (array[index] > array[index - 1]) {
      isNonIncreasing = false;
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
