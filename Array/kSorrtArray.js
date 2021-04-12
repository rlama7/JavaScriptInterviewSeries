/**
 * kSortArray.js    - A program to find total occurences of K in a sorted array.
 * @author          - Ratna Lama
 * @version         - 1.0.0
 * @description     -
 *
 * Example -
 *      INPUT:
 *          array = [1,5,9,11,13,19,21,29]    | target = 9
 *      OUTPUT:
 *
 * Algorithm -
 *
 *
 * Time Complexity: O(log n) --> log of n
 * Space Complexity: O(1) --> constant
 *
 */

console.log(
  '\n---------------BEGIN Recursive BS----------------------------------------------'
);
/**
 * Recursive binary search
 * Time Complexity: O(log n) --> log of n
 * Space Complexity: O(log n) --> log of n due to recursive call stack usage
 * @param {*} array input array to be searched
 * @param {*} target given target (index of target) to be searched in the input array
 * @param {*} left starting index (inclusive) of the array to be searched for the target element
 * @param {*} right ending index (inclusive) of the array to be searched for the target element
 */
const binarySearchRecursive = (array, target, left, right) => {
  // base case
  if (array.length === 0 || left > right) return false;

  // find the mid point
  // avoid doing left+right/2 --> to avoid integer overflow
  let midPoint = Math.floor(left + (right - left) / 2);

  if (target === array[midPoint]) {
    // we've found the target so return the index of the target element
    return midPoint;
  } else if (target < array[midPoint]) {
    // search the left half of the array
    return binarySearchRecursive(array, target, left, midPoint - 1);
  } else {
    // search the right half
    return binarySearchRecursive(array, target, midPoint + 1, right);
  }

  // by this point if we reached here means we couldn't
  // find the target
  return false;
};

console.log(
  '\n----BEGIN kSortArray Algorithm---Using Modified Iterative BS--------------'
);
/**
 * Iterative binary search
 * Time Complexity: O(log n) --> log of n
 * Space Complexity: O(1) --> constant
 *
 * IterativeBinary search is more efficient compared to recursive approach due to no usage
 * of call stack we get constant space complexity and log n time complexity same as for recursive
 * approach.
 *
 * This approach is modified to find the first occurence of target &&
 * last occurence of the target item.s
 *
 * @param {*} array input sorted array to be searched for a target item
 * @param {*} target array element to be searched in a sorted array
 */
const binarySearchIterative = (array, target) => {
  // check the empty array case
  if (array.length === 0) return false;

  // define the bound for the smaller array chunk
  let left = 0,
    right = array.length - 1;

  while (left <= right) {
    // find the mid point
    let midPoint = Math.floor(left + (right - left) / 2);

    // check point target at each midPoint index
    if (target === array[midPoint]) {
      return midPoint;
    } else if (target < array[midPoint]) {
      // check the left half of the array
      right = midPoint - 1;
    } else {
      // check the right half of the array
      left = midPoint + 1;
    }
  }

  // If we reached here means target could not be found.
  return false;
};

// -----------------------OUTPUT-----------------------------
console.log('\n-------OUTPUT-------------------------------------');
const array = [1, 1, 1, 1, 1, 5, 9, 11, 13, 19, 21, 29];
const emptyArray = [];
const target1 = 1;
const target2 = 29;
const target3 = 13;
const target4 = 11;
const target5 = 19;
const target6 = 0;
const target7 = 9000000000;
console.log(
  `Index of target1: ${target1} in array: ${array} is ${binarySearchRecursive(
    array,
    target1,
    0,
    array.length - 1
  )}` //Index of target1: 1 is 0
);
console.log(
  `Index of target1: ${target1} in empty array ${emptyArray} is ${binarySearchRecursive(
    emptyArray,
    target1,
    0,
    array.length - 1
  )}` //Index of target1: 1 is 0
);

console.log(
  `Index of target1: ${target1} in array: ${array} is ${binarySearchIterative(
    array,
    target1
  )}` //Index of target1: 1 is 0
);
console.log(
  `Index of target1: ${target1} in empty array: ${emptyArray} is ${binarySearchRecursive(
    emptyArray,
    target1,
    0,
    array.length - 1
  )}` //Index of target1: 1 is 0
);

const kSortArray = (array, target) => {
  const kOccurences = [];
  let left, right;
  let leftBound = 0,
    rightBound = array.length - 1;

  const firstKItem = binarySearchIterative(array, target);
  const lastKItem = binarySearchIterative(array, target);

  return lastKItem - firstKItem + 1;
};

console.log(kSortArray(array, target1));

console.log(
  '\n-------------BEGIN Iterative BS------------------------------------------------'
);

console.log(
  '\n----------------------UTILITY---------------------------------------'
);

let midPoint1 = (left, right) => Math.floor(left + (right - left) / 2);
let midPoint2 = (left, right) => Math.floor((left + right) / 2);

let left = 1,
  right = 8;
console.log(`Mid point1 of ${left} & ${right} is : ${midPoint1(left, right)}`); // Mid point1 of 1 & 8 is : 4
console.log(`Mid point2 of ${left} & ${right} is : ${midPoint2(left, right)}`); // Mid point2 of 1 & 8 is : 4
console.log('\n-------------------------------------------------------------');

console.log((a = b = c = d = 15));
console.log(`a:${a}, b:${b}, c:${c}, d:${d}`);
