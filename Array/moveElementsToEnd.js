/**
 * moveElementsToEnd.js - A program to move an integer element from the array to the end.
 * @author              - Ratna Lama
 * @version             - 1.0.0
 * @description         - Restrictions do the array operation in place (Space Complexity(O(1))) -> constant
 *                      - and Try it in Time Complexity of O(n) --> linear.
 *
 * Example -
 *          INPUT:
 *              array = [5,3,2,5,6,5,5,1,5,5,11]     | target = 5
 *          OUTPUT:
 *              array = []
 * Algorithm -
 *
 * Time Complexity: O(n) --> linear
 * Space Commplexity: O(1) --> constant
 */

const moveElementsToEnd = (array, target) => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    if (array[left] === target && array[right] === target) {
      // decrease the right
      right--;
    } else if (array[left] !== target && array[right] !== target) {
      // we don't need to extract and move any array elements
      // just move the left pointer
      left++;
      // right--;
    } else if (array[left] === target && array[right] !== target) {
      // swap
      // [a,b] = [b,a]
      let temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    } else if (array[left] !== target && array[right] === target) {
      left++;
      right--;
    }
  }
  return array;
};

const array1 = [5, 3, 2, 5, 6, 5, 5, 1, 5, 5, 11];
const array2 = [3, 3, 2, 5, 6, 5, 5, 1, 0, 3, 3];
const array3 = [2, 2, 2, 5, 6, 5, 5, 1, 5, 5];
const array4 = [3, 2, 5, 7, 7, 7, 5, 5, 11];
const array5 = [9, 3, 2, 5, 6, 9, 9, 1, 5, 5, 9];
const target1 = 5;
const target2 = 3;
const target3 = 2;
const target4 = 7;
const target5 = 9;
console.log(moveElementsToEnd(array1, target1)); // [ 11, 3, 2, 1, 6, 5, 5, 5, 5, 5, 5]
console.log(moveElementsToEnd(array2, target2)); // [0, 1, 2, 5, 6, 5, 5, 3, 3, 3,3]
console.log(moveElementsToEnd(array3, target3)); // [5, 5, 1, 5, 6,5, 5, 2, 2, 2]
console.log(moveElementsToEnd(array4, target4)); // [3, 2, 5, 11, 5,5, 7, 7,  7]
console.log(moveElementsToEnd(array5, target5)); // [5, 3, 2, 5, 6,5, 1, 9, 9, 9,9]
