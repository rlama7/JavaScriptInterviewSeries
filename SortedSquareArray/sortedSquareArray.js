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

const sortedSquareArrayOptimal = (array) => {};
