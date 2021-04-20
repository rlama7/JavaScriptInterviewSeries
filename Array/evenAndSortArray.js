/**
 * evenAndSortArray.js  - A program to sort only even from a given array.
 * @author              - Ratna Lama
 * @version             - 1.0.0
 * @description         -
 *
 * Example -
 *      INPUT:
 *          array = [12,3,2,1,7,6]
 *      OUTPUT:
 *          evenAndSortedArray = [2,6,12]
 *          oddAndSortedArray = [ 1, 3, 7 ]
 *
 *
 * Time Complexity -
 *          Time Complexity: O(n log n) --> since the best sort algorightm runs in O(n log n)
 *          Space Complexity: O(1) --> In place, no extra space consumed.
 */
const evenAndSortedArray = (arr) => {
  // filter out even from a sorted array
  return arr.sort((a, b) => a - b).filter((item) => item % 2 === 0);
};

const oddAndSortedArray = (arr) => {
  // filter out odd from a sorted array
  return arr.sort((a, b) => a - b).filter((item) => item % 2 !== 0);
};
const array = [12, 3, 2, 1, 7, 6];

console.log(evenAndSortedArray(array)); // [ 2, 6, 12 ]

console.log(oddAndSortedArray(array)); // [ 1, 3, 7 ]
