/**
 * insertionSort.js     - A program to implement insertion sort.
 * @author              - Ratna Lama
 * @version             - 1.0.0
 * @description         - Given an array of an integers, sort the array using insertion sort
 *
 * Example -
 *      array = [9,3,7,2,4,1]
 *
 *
 * Algorithm -
 *
 * STEP #1
 *   -sorted-----|----unsorted-----
 *          [9,  3, 7, 2, 4, 1]
 *          -----|----------------
 *
 * STEP #2
 *  --sorted-----|----unsorted-----
 *          [3,  9, 7, 2, 4, 1]        // swap 3 and 9 position
 *          -----|----------------
 *
 * STEP #3
 *      -sorted-----|----unsorted-----
 *          [3,  9, 7, 2, 4, 1]        // swap 7 and 9
 *          --------|----------------
 *
 * STEP #4
 *         --sorted-----|----unsorted-----
 *          [2, 3,  7,  9,  4, 1]        // swap 2 & 7 then 2 & 9 then 2 & 3
 *        --------------|----------------
 *
 * STEP #5
 *         ---------sorted-----|----unsorted-----
 *          [2, 3,  7,  9,  4, 1 ]              // swap 4 & 9 then 4 & 7
 *               --------------|----------------
 *
 *
 * STEP #6
 *         ----------sorted-----|----unsorted-----
 *          [2, 3,  4, 7,  9,   1]                // swap 1 & 9 then 1 & 7 then 1 & 4 then 1 & 3 and then 1 & 2
 *        ----------------------|----------------
 *
 *
 * Time Complexity: O(n^2) --> Quadratic
 * Space Complexity: O(1) --> in place, constant
 */
const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      //swap [a,b] = [b,a]
      [array[j - 1], array[j]] = [array[j], array[j - 1]];
      j--;
    }
  }
  // return sorted array
  return array;
};

// Display
array = [9, 3, 7, 2, 4, 1];
console.log(insertionSort(array)); // [ 1, 2, 3, 4, 7, 9 ]
