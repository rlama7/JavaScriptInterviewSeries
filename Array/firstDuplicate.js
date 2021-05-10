/**
 * firstDuplicate.js    - A program to find the first duplicate in a given array.
 * @author              - Ratna Lama
 * @version             - 1.0.0
 * @param {*} array     - input array of integers
 * @description         - Constraints/Restrictions:
 *                        Don't mutate the input aray
 *                        If no duplicates then return -1;
 *
 * --->Example<---
 *      INPUT:
 *         array1 = [12,3,4,5,2,3,4]
 *         array2 = [9,3,4,5,5,4,3,9]
 *      OUTPUT:
 *          result1 = 3 since 3 repeats first before 4
 *          result2 = 5 since 5 repeats firs before 4,3 or 9
 *
 * --->Algorithm<---
 *
 * --->Time Complexity<---
 * Time O() ->
 * Space O() ->
 *
 *
 */

// O(n) time | O(n) space
// uses Set Data Structure
// Set objects are collections of values. A value in the Set may only occur once.
const firstDuplicate = (array) => {
  const seen = new Set();

  for (let index = 0; index < array.length; index++) {
    if (seen.has(array[index])) {
      return array[index];
    } else {
      seen.add(array[index]);
      console.log(seen);
    }
  }

  // if we reached here means we did not find the duplicate
  return -1;
};

const array1 = [12, 3, 4, 5, 2, 3, 4];
const array2 = [9, 3, 4, 5, 5, 4, 3, 9];
const array3 = [0, 1, 2, 3, 4, 5];

console.log(firstDuplicate(array1)); // 3
console.log(firstDuplicate(array2)); // 5
console.log(firstDuplicate(array3)); // -1
