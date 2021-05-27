/**
 * largestRange.js - A program to find the largest range of integers contained in the list.
 * @author         - Ratna Lama
 * @version        - 1.0.0
 * @description    - A range of number is a set of consecutive numbers in the list. Note that numbers
 *                   don't need to sorted or adjacent in the input array. But They need to present in the
 *                   input list.
 *                   Constraints: If there are more than single range of equal length
 *                                return the range for the largest numbers
 * @param {*} array input array
 *
 * --->Example<---
 *      INPUT:
 *          array = [1,5,3,2,12,22,4,10]
 *      OUTPUT:
 *          result = [1,5]
 *
 * --->Algorithm<---
 *  step #1:
 *          - associate a key -> value map for each array elements with default boolean true value
 *          - key: array elements
 *          - value: true
 *
 * step #2:
 *          - check if the value in the map is already visitied
 *              - skip if the key->value is not associated with the map skip
 *              - else mark the visited key as false
 *                  - find the left extreme of the range
 *                  - find the right extreme of the range
 *
 *                    if the currentLength >= largestLength
 *                            largestLength = currentLength;
 *                            bestRagne = [left +1, right-1]
 *
 * step #3:
 *          - return bestRange
 *
 * --->Time Complexity<---
 * Average case time O(n) -> linear
 * Worst case time O(n^2) -> quadratic for sorted list
 * space O(n) -> linear
 */

const largestRange = (array) => {
  if (array.length < 2) return array;
  let bestRange = [];
  let longestLength = 0;
  let map = new Map();

  // associate hashmap for array elements with boolean true
  // 1 -> true
  // 5 -> true
  // ...
  // 10 -> true
  array.forEach((element) => map.set(element, true));

  // check if the value in map is already visited
  for (let [key] of map) {
    // skip if the key -> value is not associated in the hahs map
    if (!map.has(key)) continue;

    // if the key -> value is associated mark it as
    // visited by associating its value to false
    map.set(key, false);

    let currentLength = 1;
    let left = key - 1;
    let right = key + 1;

    // find the left most extreme of the range
    while (map.has(left)) {
      // mark the value visited as false
      map.set(left, false);
      currentLength++;
      left--;
    }

    // find the right most extreme of the range
    while (map.has(right)) {
      // mark the value visited as false
      map.set(right, false);
      currentLength++;
      right++;
    }

    // for more than a single range with the same length
    // return the range for the largest numbers
    if (currentLength >= longestLength) {
      longestLength = currentLength;
      bestRange = [left + 1, right - 1];
    }
  }

  return bestRange;
};

const array1 = [];
const array2 = [1];
const array3 = [1, 5];
const array4 = [5, 1];
const array5 = [3, 3, 3, 3];
const array6 = [1, 5, 3, 2, 12, 22, 4, 11, 10];
const array7 = [1, 2, 3, 4, 5, 6, 7];
const array8 = [9, 8, 7, 6, 5, 4];
const array9 = [1, 5, 3, 2, 12, 14, 22, 4, 11, 13, 10];
// const array10 = [1, 5, 3, 2, 12, 22, 4, 11, 10];

console.log(largestRange(array1)); // []
console.log(largestRange(array2)); // [ 1 ]
console.log(largestRange(array3)); // [ 1, 1 ]
console.log(largestRange(array4)); // [5,5]
console.log(largestRange(array5)); // [3,3]
console.log(largestRange(array6)); // [1,5]
console.log(largestRange(array7)); // [1,7]
console.log(largestRange(array8)); // [4,9]
console.log(largestRange(array9)); // [ 10, 14 ]
// console.log(largestRange(array10)); //
