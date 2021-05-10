/**
 * longestPeak.js       - A program to find the longest peak in a given integer array.
 * @author              - Ratna Lama
 * @version             - 1.0.0
 * @description         -
 * @param {*} array     - input array
 *
 * --->Example<---
 *          INPUT:
 *              array = [1,3,4,4,5,-1,9,8,6,5,-2,-4,3,7]
 *          OUTPUT:
 *              result = 7    // [-1,9,8,6,5,-2,-4]
 *
 * --->Constraitns<---
 * - consider an input array of integer arrays
 *
 *
 * --->Edge Cases<---
 * - emtpy array | array with 1 elements
 * - sorted array
 * - array with the same elements
 *
 *
 *
 * --->Algorithm<---
 *  - find the peaks
 *  - return the max of the peaks
 *
 *
 * --->Time Complexity<---
 * Time Complexity O(n) best cases -> O(n^2) worst case
 * if we are given an array with million items and say
 * there is a peak that stretch either to the left and right in extreme case
 * scenario then we'll see almost O(n^2) in the extreme case
 *
 * Space Complexity O(1) -> constant
 */

const longestPeak = (array) => {
  // if there exists any peak then the minimum length of such peak
  // should be 3 since we need minimum of 3 elements to form a peak
  let longestPeak = 0;

  // Edge cases: emtpy array | array with 1 elements
  if (array.length < 3) return array.length;

  // 1. find the peak
  // In order for an element to be considered the peak point
  // there should be at least one element to the left and to the right of the
  // strictly less than the peak element in consideration

  // start iterating from the second element till the second last element
  let index = 1;
  while (index < array.length - 1) {
    // find peak
    let isPeak =
      array[index - 1] < array[index] && array[index] > array[index + 1];

    // if not peak continue to the next element
    if (!isPeak) {
      index++;
      continue;
    } else {
      // if peak is found
      // expand left to find the length left side -> .........^
      let leftIndex = index - 2;
      while (leftIndex >= 0 && array[leftIndex] < array[leftIndex + 1]) {
        leftIndex--;
      }

      // expand right to find the length right side ->   ^..........
      let rightIndex = index + 2;
      while (
        rightIndex < array.length &&
        array[rightIndex] < array[rightIndex - 1]
      ) {
        rightIndex++;
      }
      let currentPeakLength = rightIndex - leftIndex - 1;

      // find the max index from longestPeak and the currentPeakLength
      longestPeak = Math.max(longestPeak, currentPeakLength);
      index = rightIndex;
    }
  }

  // 2. return the max of the peaks
  return longestPeak;
};

const array = [1, 3, 4, 4, 5, -1, 9, 8, 6, 5, -2, -4, 3, 7];
console.log(longestPeak(array)); // 7
