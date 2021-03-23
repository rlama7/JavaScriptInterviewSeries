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
  console.log(arr);
  // sort
  arr.sort((a, b) => a - b);
  console.log(arr);
  // filter out even
  return arr.filter((item) => item % 2 === 0);
};

const oddAndSortedArray = (arr) => {
  console.log(arr);
  // sort
  arr.sort((a, b) => a - b);
  console.log(arr);
  // filter out odd
  return arr.filter((item) => item % 2 !== 0);
};
const array = [12, 3, 2, 1, 7, 6];

const arrEvenSorted = evenAndSortedArray(array);
console.log(arrEvenSorted); // [ 2, 6, 12 ]

const arrOddSorted = oddAndSortedArray(array);
console.log(arrOddSorted); // [ 1, 3, 7 ]
