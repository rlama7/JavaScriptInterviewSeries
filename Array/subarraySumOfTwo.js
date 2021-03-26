/**
 * subarraySumOfTwo.js  - A progrm to find the subarrays sum (of two adjacent elements) that add to a given sum.
 * @author              - Ratna Lama
 * @version             - 1.0.0
 * @description         -
 *
 * Example -
 *      INPUT:
 *          array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 *          sum = 9
 *      OUTPU:
 *         array = [[1,8] [7,2], [6,3], [5,4], ]
 *
 * Algorithm -
 *
 * 1. Start with a pointer at the first element
 * 2. check if the sum of the first and the next equals 9
 *      2.a. if sum is 9 then pick the elements at those indexes and push to an array
 *          2.a.i --> increase the first pointer and repeat the process
 *      2.b if sum is not 9 after going over the entire element
 *          2.b.i -> move the first pointer to the next and start the same process.
 * 3. at the last make sure to return the subArray that stores those subarray
 *
 * Time Complexity:
 * Space Complexity:
 */
const subArraySumOfTwo = (array, target) => {
  let left = 0;
  let right = left + 1;
  const subArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[left] + array[right] === target) {
      subArray.push(array[left], array[right]);
    } else if (array[left] + array[right] < target) {
      right++;
    } else {
      left++;
    }
  }
  return subArray;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(subArraySumOfTwo(array, 9));
