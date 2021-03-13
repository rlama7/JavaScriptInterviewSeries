/**
 * binarySearch.js      - A program to implement a binary search to locate a target in a given array.
 * @author              - Ratna Lama
 * @version             - 1.0.0
 * @description         - Given array may or may not be sorted.
 *                        Must implement Binary Search to locate a target in the given array.
 *                        Return index if the target is located, otherwise -1.
 *
 * Example -
 * INPUT:
 *      array = [1,5,7,8,3,15,2,11]
 *      target = 11
 * OUTPUT:
 *       index       =  0  1  2  3  4  5  6   7
 *                      |  |  |  |  |  |  |   |
 *       sortedArray = [1, 2, 3, 5, 7, 8, 11, 15]
 *       return ----> target index 6 (11)
 */

/**
 * Iterative approach to the binary search
 * Time Complexity: O()
 * Space Complexity: O(1) --> constant since no extra array is created
 *  */
const binarySearchIterative = (arr, target) => {
  // sort the array
  arr.sort((a, b) => a - b);

  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex <= endIndex) {
    // find middle index then floor it to get integer value
    let midPoint = Math.floor((startIndex + endIndex) / 2);

    // compare target with the midPoint
    if (target === arr[midPoint]) {
      return `Target ${target} located at index ${midPoint}`;
    }

    // search the left half
    if (target < arr[midPoint]) {
      endIndex = midPoint - 1;
    }

    // search the right half
    if (target > arr[midPoint]) {
      startIndex = midPoint + 1;
    }
  }
  // if target is not found
  console.log(`Target ${target} not found in the array`);
};

/**
 * recursive approach to binary search
 *
 * Time Complexity: O() -->
 * Space Complexity: O(log n) -->
 */
const binarySearchRecursive = (arr, target, startIndex, endIndex) => {
  // sort the array
  arr.sort((a, b) => a - b);

  // base condition
  if (startIndex > endIndex)
    return `Target ${target} not found in the given array.`;

  // find midPoint, floor the value to only get integer value
  let midPoint = Math.floor((startIndex + endIndex) / 2);

  // if the target element is present at the midPoint return the midPoint as the desired index
  if (target === arr[midPoint])
    return `Target ${target} located at index: ${midPoint}`;

  // check the left half of the array
  if (target < arr[midPoint]) {
    return binarySearchRecursive(arr, target, startIndex, midPoint - 1);
  } else {
    // check the right half of the array
    return binarySearchRecursive(arr, target, midPoint + 1, endIndex);
  }
};

/**
 * Utility functions and/or outputs
 *
 * */
arr = [1, 5, 7, 8, 3, 15, 2, 11];
console.log('\n---------------------------------------------');

// sort
console.log('sorted array --> ' + arr.sort((a, b) => a - b));
console.log('array length --> ' + arr.length);
console.log('\n---------------------------------------------');

// floor
console.log('8/2 -> ' + 8 / 2);
console.log('9/2 -> ' + 9 / 2);
console.log('9/2 -> Math.floor' + Math.floor(9 / 2));
console.log('\n---------------------------------------------');

// slice() method returns a shallow copy of a portion of an array
// into a new array object selected from START index to END index (END NOT included)
const fruits = ['apple', 'banana', 'cherry', 'mango', 'orange', 'grapes'];
console.log(fruits);

// start index is defaulted to 0 and end index is 2 (NOT INCLUDED) thus returns
// cherry,mango,orange,grapes
console.log(
  'slice up to INDEX 2 (NOT including index 2) --> ' + fruits.slice(2)
);

// start index is defaulted to 2 and end index is 5 (NOT INCLUDED) thus returns
// cherry,mango,orange
console.log(
  'slice between 2 & 5 (NOT including index 5) --> ' + fruits.slice(2, 5)
);
console.log('\n---------------------------------------------');

// Check Iterative approach
console.log(binarySearchIterative(arr, 11)); // index 6
console.log(binarySearchIterative(arr, 21)); // target not found message
console.log('\n---------------------------------------------');

// Check Recursive approach
arr1 = [1, 7, 3, 8, 6, 15, 2, 11];
console.log('sorted arr1 --> ' + arr1.sort((a, b) => a - b));
console.log(binarySearchRecursive(arr1, 2, 0, arr1.length - 1)); // index 6
console.log(binarySearchRecursive(arr1, 21, 0, arr1.length - 1)); // target not found message
console.log('\n---------------------------------------------');
