/**
 * moveTargetToEndInPlaceInOrder.js - A program to move target element in an array
 *                                    to the end in place while maintaining the order
 *                                    of the input array.
 * @author                          - Ratna Lama
 * @version                         - 1.0.0
 * @description                     - Constraints/Edge cases: maintain the order of the
 *                                    elements
 *
 * --->Example<---
 *      INPUT:
 *          array = [0,1,3,0,5,0,8,0]
 *          target = 0
 *
 *      OUTPUT:
 *          result = [1,3,5,8, 0,0,0,0] <-- in this example, the order in which
 *                  non-zero elements appeared in the input array is maintained
 *                  in the final array
 *
 * --->Algorithm<---
 *
 * --->Time Complexity<---
 * time O(n) -> linear one pass
 * space O(1) -> constant
 *
 * @param {*} array input array
 */
const moveTargetToEndInPlaceInOrder = (array, target) => {
  // EDGE CASES
  // if array is empty or of length 1 then return array
  if (array.length < 2) return array;

  // if the target is undefined or not a number return false and or message
  if (target === undefined || target === null)
    return `Target value can not be null or undefined`;

  // if target is not found then return message

  // iterate through the array
  // on each pass check if the element === target
  // if so grab it and push it to the end of the array
  // else continue
  for (let index = 0; index < array.length; index++) {
    if (array[index] === target) {
      // remove element at the index
      array.splice(index, 1);
      // push to the end of the array the target element
      array.push(target);
    } else {
      continue;
    }
  }
  return array;
};

const array1 = [];
const array2 = [1];
const array3 = [0, 1, 3, 0, 5, 0, 8, 0];
const array5 = ['a', 'b', 'a', 'd', 'e', 'a'];

const target1 = 0;
const target2 = null;
let target3;
const target4 = 10;
const target5 = 'a';

console.log(moveTargetToEndInPlaceInOrder(array3, target1)); // [1, 3, 5, 8,0, 0, 0, 0]
console.log(moveTargetToEndInPlaceInOrder(array3, target2)); // Target value can not be null or undefined
console.log(moveTargetToEndInPlaceInOrder(array3, target3)); // Target value can not be null or undefined
console.log(moveTargetToEndInPlaceInOrder(array1, target1)); // []
console.log(moveTargetToEndInPlaceInOrder(array2, target1)); // [1]
console.log(moveTargetToEndInPlaceInOrder(array3, target4));
console.log(moveTargetToEndInPlaceInOrder(array5, target5)); // [ 'b', 'd', 'e', 'a', 'a', 'a' ]

/**
 * UTILITY
 * slice Vs splice
 *
 * for splice index begins at 0
 */

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = ['a', 'b', 'c', 'd', 'e'];

arr1.splice(1, 1); // remove 1 element at index 1
arr2.splice(1, 1); // // remove 1 element at index 1
console.log(arr1, arr2); // [ 1, 3, 4, 5, 6 ] [ 'a', 'c', 'd', 'e' ]

arr1.splice(2, 0, 'January'); // at index 2 remove 0 element and add 'January'
arr2.splice(2, 0, 100); // at index 2 remove 0 element and add 100
console.log(arr1, arr2); // [ 1, 3, 'January', 4, 5, 6 ] [ 'a', 'c', 100, 'd', 'e' ]
