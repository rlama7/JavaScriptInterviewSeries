/**
 * quickSort.js  - A program to implement quick sort in JavaScript.
 * @author       - Ratna Lama
 * @version      - 1.0.0
 * @description  -
 *
 * Example -
 *      INPUT:
 *          array: [ 4,  1, 9, 0, -1, 10, 3, 7, 19]
 *      OUTPUT:
 *         sortedArray = [-1, 0,  1,  3, 4, 7, 9, 10, 19]
 *
 *
 * Algoritm -
 *  pick a pivot (usually the first or last element)
 *  iterate through the array element except the pivot used ( first or last)
 *      if the element is less than pivot add it to the left array partition
 *      if the element is greater than the pivot add it to the right array partiton
 *
 * return recursive call to the quickSort() with the leftarray partiton, pivot, and the right array partition
 *
 * Time Complexity: O(n logn)
 * Space Complexity: O(n) due to use of call stack / partition array
 *
 */
const quickSort = (array) => {
  // base case
  if (array.length <= 1) return array;

  // assign last array element as the pivot
  const pivot = array[array.length - 1];
  const leftArray = [];
  const rightArray = [];

  // iterate through each array element (except the last which is the pivot)
  // and create two sub arrays based on -
  // if the element is less than pivot add that element to the leftArray
  // if the element is greater than the pivot add that element to the rightArray
  for (const el of array.slice(0, array.length - 1)) {
    el < pivot ? leftArray.push(el) : rightArray.push(el);
  }
  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
};

const array = [4, 1, 9, 0, -1, 10, 3, 7, 19];
console.log(quickSort(array)); // [-1, 0,  1,  3, 4, 7, 9, 10, 19]

/**
 * UTILITY
 */

// original array
console.log(array); // [ 4,  1, 9, 0, -1, 10, 3, 7, 19]

// spread operator --> iterates over iterable objec such as an array or object and
// returns the comma separated value,
console.log(...array); // 4 1 9 0 -1 10 3 7 19

// slice() --> returns new array with
// starting index =0 and
// ending inex = array.length-1 (excludes ending index)
console.log(array.slice(0, array.length - 1));
// [ 4,  1, 9, 0, -1, 10, 3, 7] <---notice last element 19 is missing
