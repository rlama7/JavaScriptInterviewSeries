/**
 * smallestDifference.js    - A program to find the smallest differences of two array elements.
 * @author                  - Ratna Lama
 * @version                 - 1.0.0
 * @description             - Input arrays are non-empty arrays of integers. Find the pair of number
 *                            (one from each array) such that the the absolute difference is close to zero.
 *                            The absolute difference between two integers is the distance between them on
 *                            the real number line.
 *
 *                            Assume there will be only one pair of numbers with the smallest difference.
 *                            Also array can be of different size.
 *
 *                             <--(-5)--(-4)--(-3)--(-2)--(-1)--0--(+1)--(+2)--(+3)--(+4)--(+5)-->
 *
 *                              # the absolute difference between -4 and +4 --> 8
 *
 *                              # the absolute difference between +2 and +3 --> 1
 *
 * Example -
 *      INPUT:
 *          array1 = [1,4,8,5]
 *          array2 = [-9,0,11,7,3]
 *      OUTPUT:
 *
 * Algorithm:
 *
 *
 * Time Complexity: O(n log n) --> linear because sorting yields O(n log n)
 * Space Complexity: O(1) --> constant
 *
 */
const smallestDifference = (array1, array2) => {
  // sort both arrays
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);

  let left = 0,
    right = 0;
  let smallestDiff = Infinity;
  let currentDiff = Infinity;
  let smallestPair = [];

  while (left < array1.length && right < array2.length) {
    let firstNum = array1[left];
    let secondNum = array2[right];
    currentDiff = Math.abs(firstNum - secondNum);

    if (firstNum < secondNum) {
      left++;
    } else if (firstNum > secondNum) {
      right++;
    } else {
      return [firstNum, secondNum];
    }

    if (smallestDiff > currentDiff) {
      smallestDiff = currentDiff;
      smallestPair = [firstNum, secondNum];
    }
  }
  return smallestPair;
};

const array1 = [1, 4, 8, 5];
array1.sort((a, b) => a - b);
console.log(array1); // sorted array1 : [1,4,5,8]

const array2 = [-9, 0, 11, 7, 3];
array2.sort((a, b) => a - b);
console.log(array2); // sorted array2: [-9,0,3,7,11]

console.log(smallestDifference(array1, array2)); // [ 1, 0 ]

const arr3 = [-1, 3, 5, 10, 20, 28];
const arr4 = [15, 17, 26, 134, 135];
console.log(smallestDifference(arr3, arr4)); // [ 28, 26 ]
