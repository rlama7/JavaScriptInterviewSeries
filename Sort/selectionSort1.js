/**
 * selectionSort1.js  - A program to implement selection sort in JavaScript.
 *
 * Example -
 *         array = [7,2,9,5,1]
 *
 *
 * Algorithm -
 *
 * * STEP #1
 *            /--> indexOfMin
 *           /
 *   -index->0   1   2    3     4    5
 *  |
 *   -sorted-|----unsorted-------------
 *          [9,  3,  7,   2,    4,   1]  // shift the index of min from left to right. When all array elements are compared swap 9 & 1
 *      -----|--------------------------
 *
 * * STEP #2
 *                /--> indexOfMin
 *               /
 *           0   1   2    3     4    5
 *   -sorted-----|----unsorted-------------
 *          [1,  3,  7,   2,    4,   9]      // shift the index of min from left to right. When all array elements are compared swap 2 & 3
 *      ---------|--------------------------
 *
 * * STEP #3
 *                    /--> indexOfMin
 *                   /
 *           0   1   2    3     4    5
 *   -sorted---------|----unsorted-------------
 *          [1,  2,  7,   3,    4,   9]      // shift the index of min from left to right. When all array elements are compared swap 3 & 7
 *      -------------|--------------------------
 *
 * * STEP #4
 *                          /--> indexOfMin
 *                         /
 *           0   1   2    3     4    5
 *   -sorted--------------|----unsorted-------------
 *          [1,  2,  3,   7,    4,   9]      // shift the index of min from left to right. When all array elements are compared swap 4 & 7
 *      ------------------|--------------------------
 *
 * * STEP #5
 *                                /--> indexOfMin
 *                               /
 *           0   1   2    3     4    5
 *   -sorted--------------------|----unsorted-------------
 *          [1,  2,  3,   4,    7,   9]
 *      ------------------------|--------------------------
 * // shift the index of min from left to right. When all array elements are compared swap 7 & 7 no Swap needed here
 *
 * STEP #6
 *                                    /--> indexOfMin
 *                                   /
 *           0   1   2    3     4    5
 *        ---sorted------------------|----unsorted-------------
 *          [1,  2,  3,   4,    7,   9]
 *        ---------------------------|--------------------------*
 // shift the index of min from left to right. When all array elements are compared swap 9 & 9 no Swap needed here*
 *
 *
 * Time Complexity: O(n^2) --> Quadratic
 * Space Complexity: O(1) --> constant
 *
 */
const selectionSort1 = (array) => {
  const len = array.length;

  for (let i = 0; i < len; i++) {
    let indexOfMin = i;
    for (j = i + 1; j < len; j++) {
      if (array[j] < array[indexOfMin]) {
        // update index of minima
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      // swap
      [array[i], array[indexOfMin]] = [array[indexOfMin], array[i]];
    }
  }
  return array;
};

// Display
const arr = [9, 3, 7, 2, 4, 1];
console.log(selectionSort1(arr));
