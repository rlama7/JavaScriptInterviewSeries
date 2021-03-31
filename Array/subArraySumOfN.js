/**
 * subArraySumOfN.js    - A program to find the subarray of any size that add up to a given numbers
 * @author              - Ratna Lama
 * @version             - 1.0.0
 * @description         - Given an array of positive integers, find the subarrays that add up to a given number.
 *
 * Example -
 *      INPUT:
 *          array = [1, 2, 3, 4, 5, 6, 7, 8, 9];  | desired sum = 15 | any length sub arrays
 *
 *      OUTPUT:
 *         array = [ [1,2,3,4,5], [4,5,6], [7,8] ]
 *
 * REQUIREMENTS/RESTRICTIONS:
 *     - subarray = contiguous
 *     - input size could e anything. so have to be careful with memory usage.
 *     - no negative nubmers or 0 to deal with.
 *
 * ANALYSIS:
 *     - input size is unlimited, so memory can blow up if we are not careful of
 *     - what we keep in memory
 *     - brute force approach won't work both time/ space --> O(n^2) --> quadratic
 *     - No recursion because call stack can overflow
 *     - possible data structures to use? array.
 *
 * Algorithm -
 *      - start calculating window sum starting with the firest element
 *      - expand, or shrink the window by one element at a time.
 *      - Time complexity: O(n) --> linear because we neet to process all array element
 *      - Space Complexity: O(n) --> linear because in worst case scenario we'll need to store all
 *          array elements in cases like [15,15,15,15,15,15]
 *
 * Time Complexity:
 * Space Complexity:
 */

const subArraySumofN = (array, targetSum) => {
  if (targetSum < 0) {
    console.log(`Target sum ${targetSum} must be greater than 0`);
    return;
  }

  let sum = 0;
  let sumStartIndex = 0;
  const subArray = [];

  array.map((element, index) => {
    sum += element;

    while (sum > targetSum) {
      sum -= array[sumStartIndex];
      sumStartIndex++;
    }

    if (sum === targetSum) {
      subArray.push(array.filter((_, i) => i >= sumStartIndex && i <= index));
    }
  });

  return subArray;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(subArraySumofN(array, 15));

// UTILITY
const sum = (...args) => {
  return args.reduce((accum, value) => accum + value);
};

const arr1 = [1, 2];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, 3, 4, 5];

console.log('sum of arr1: ' + sum(...arr1));
console.log('sum of arr2: ' + sum(...arr2));
console.log('sum of arr3: ' + sum(...arr3));
