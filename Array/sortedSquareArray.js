/**
 * sortedSquareArray.js     - A program to find a sorted square array given a sorted array.
 * @author                  - Ratna Lama
 * @version                 - 1.0.0
 * @description             - Input array is sorted. Output squared array must also be sorted.
 *                          - Restrictions: Attempt for the linear time complexity, i.e. O(n)
 *
 * Example --
 *      INPUT:
 *             array = [-7, -5, -2, -1,  3, 4, 6]
 *      OUTPUT:
 *       sortedArray = [1, 4, 9, 16, 25, 36, 49]
 *
 * Algorithm --
 *
 * lp -> leftPointer
 * rp -> rightPointer
 *
 * #Step 1
 *    array = [-7, -5, -2, -1,  3, 4, 6]  | sortedSquareArray = [0,0,0,0,0,0,0]
 *              ^                     ^
 *           lp:0                   rp:6
 *
 * # Step 2
 *       array = [-7, -5, -2, -1,  3, 4, 6]  | sortedSquareArray = [0,0,0,0,0,0,49]
 *                     ^                 ^
 *                  lp:1              rp:6
 *
 * # Step 3
 *       array = [-7, -5, -2, -1,  3, 4, 6]  | sortedSquareArray = [0,0,0,0,0,36,49]
 *                     ^              ^
 *                  lp:1           rp:5
 *
 * # Step 4
 *       array = [-7, -5, -2, -1,  3, 4, 6]  | sortedSquareArray = [0,0,0,0,25,36,49]
 *                         ^          ^
 *                        lp:2      rp:5
 *
 *
 * # Step 5
 *       array = [-7, -5, -2, -1,  3, 4, 6]  | sortedSquareArray = [0,0,0,16,25,36,49]
 *                         ^       ^
 *                        lp:2    rp:4
 *
 * # Step 6
 *       array = [-7, -5, -2, -1,  3, 4, 6]  | sortedSquareArray = [0,0,9,16,25,36,49]
 *                         ^    ^
 *                        lp:2  rp:3
 *
 * # Step 7
 *       array = [-7, -5, -2, -1,  3, 4, 6]  | sortedSquareArray = [0,4,9,16,25,36,49]
 *                             ^
 *                             ^
 *                        lp:1  rp:3
 *
 * Time Complexity: O(n) --> linear
 * Space Complexity: O(n) --> linear
 *
 */

/**
 *
 * @param {*} array sorted input array
 *
 * Time complexity - O(n log n);
 * Space Complexity - O(n) - linear
 *
 * COMMENT - NOT OPTIMAL!
 */
const sortedSquaredArray = (array) => {
  // square the array
  const squaredArray = array.map((x) => x * x);

  // sort the array
  return squaredArray.sort((a, b) => a - b);
};

const array = [-7, -5, -2, -1, 3, 4, 6];
console.log('First attempt: ');
console.log(sortedSquaredArray(array)); // [1,  4,  9, 16, 25, 36, 49]
console.log('\n--------------------------------------------------------');

/**
 * OPTIMAL squared array solution
 * @param {*} array array to be squared and sorted
 * O(n) Time Complexity/Space Complexity
 */
const sortedSquareArrayOptimal = (array) => {
  const sortedOptimalArray = [];
  const len = array.length;

  for (let index = len - 1; index > 0; index--) {
    // compare the absolute value of array element @left pointer to the right pointer,
    // i.e. array[leftPointer] > array[rightPointer] ?
    // if the left is greater than right,
    // square the left array element and insert it
    // decrement the right pointer
    let left = 0;
    let right = len - 1;
    if (Math.abs(array[left]) > array[right]) {
      sortedOptimalArray[index] = array[left] * array[left];
      left++;
    } else {
      sortedOptimalArray[index] = array[right] * array[right];
      right--;
    }
  }
  return sortedOptimalArray;
};

const array1 = [-9, -5, -2, -1, 3, 5, 6];
const array2 = [-7, -5, -2, -1, 3];
const array3 = [-2, -1, 3, 4, 6];
const array4 = [];
const array5 = [-7, -5];

console.log('optimal sorted array: ');
console.log(sortedSquaredArray(array));

console.log(sortedSquaredArray(array1)); // [1,  4,  9, 25,25, 36, 81]
console.log(sortedSquaredArray(array2)); // [ 1, 4, 9, 25, 49 ]
console.log(sortedSquaredArray(array3)); // [ 1, 4, 9, 16, 36 ]
console.log(sortedSquaredArray(array4)); // []
console.log(sortedSquaredArray(array5)); // [25,49]

console.log('\n--------------------------------------------------------');

/**
 * Utility
 */

// get abasolute value of negative numbers
let a = -9;
console.log(Math.abs(a));
