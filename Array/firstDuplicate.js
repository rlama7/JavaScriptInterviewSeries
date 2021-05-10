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
    }
  }

  // if we reached here means we did not find the duplicate
  return -1;
};

/**
 * iterate through the input array
 * for each array element map it to the index of array by
 *
 *  if array[Math.abs(element) -1] < 0
 *      returh Math.abs(element)
 *
 * if we have already seen the array element then it'll have negative value so
 * we'd simply return the absolute value of that value.
 *
 *  array[Math.abs(element) -1] *= -1
 *
 *
 *
 * @param {*} array array to be searched for the first duplicate
 * O(n) time -> linear | O(1) space -> constant
 */
const firstDuplicateOptimal = (array) => {
  for (const element of array) {
    if (array[Math.abs(element) - 1] < 0) return Math.abs(element);
    array[Math.abs(element) - 1] *= -1;
  }

  // did not find duplicates
  return -1;
};

const array1 = [12, 3, 4, 5, 2, 3, 4];
const array2 = [9, 3, 4, 5, 5, 4, 3, 9];
const array3 = [0, 1, 2, 3, 4, 5];

console.log(firstDuplicate(array1)); // 3
console.log(firstDuplicate(array2)); // 5
console.log(firstDuplicate(array3)); // -1

console.log(firstDuplicateOptimal(array1)); // 3
// console.log(firstDuplicateOptimal(array2)); // 5
// console.log(firstDuplicateOptimal(array3)); // -1

/**
 * UTILITY
 */

// Set
const mySet = new Set();
mySet.add(10);
mySet.add(20);
mySet.add(10);
mySet.add(30);
mySet.add(30);
mySet.add(40);

console.log(mySet); // Set(4) { 10, 20, 30, 40 }
console.log(mySet.has(10)); // true
console.log(mySet.has(50)); // false

// Absolute value
console.log(Math.abs(-10)); // 10
