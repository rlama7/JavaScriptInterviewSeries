/**
 * evenOddCorrectIndex.js   - A program to sort the input array such that even item is at even index
 *                            and odd item is at odd index of the array.
 * @author                  - Ratna Lama
 * @version                 - 1.0.0
 * @description             - Input array may or may not be sorted and also output array may or
 *                            may not be sorted.
 *                            All we care that the output array has item such that in the even
 *                            index even item is present and where odd indexes are odd items are placed.
 *                            Also consider input array is equal mix of odd/even items so
 *                            you will not see the scenario where there are only even/odd
 *                            Restriction:
 *                                          Attempt for Time Complexity: O(n) --> Linear
 *                                          Space Complexity: O(1) --> constant
 *
 * Example -
 *          INPUT:
 *              array = [1,6,5,2,7,4,3,10]
 *          OUTPUT
 *              result = []
 *
 * Algorithm -
 *      Time Complexity: O(n) --> linear
 *      Space Complexity: O(1) --> constant
 *
 */
const evenOddCorrectIndex = (array) => {
  let left = 0,
    right = 1;

  while (left < array.length) {
    // check if the element at even index is even
    if (array[left] % 2 === 0) {
      left += 2;
    } else if (array[right] % 2 === 1) {
      // check if the element at odd index is odd
      right += 2;
    } else {
      // swap
      [array[left], array[right]] = [array[right], array[left]];
      left += 2;
      right += 2;
    }
  }
  return array;
};

const array1 = [1, 6, 5, 2, 7, 4, 3, 10];
const array2 = [5, 1, 4, 0];

console.log(evenOddCorrectIndex(array1));
// index:0   1   2   3    4    5    6    7
//      [ 6, 1,  2,  5,   4,   7,   10,  3]

console.log(evenOddCorrectIndex(array2)); // [ 0, 1, 4, 5 ]
