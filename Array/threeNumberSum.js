/**
 * threeeNumberSum.js   - A programt to find the triplet target sum.
 * @author              - Ratna Lama
 * @version             - 1.0.0
 * @description         - The function will take a non-empty array of distinct integers.
 *                        The function should find triplet sum equal to the target value and
 *                        return a 2-D array.
 *                        The returned tripelets should be in an ascending order and the triplets
 *                        themselves should be ordered in an ascending order.
 *
 *                        Returns an empty array if no such sum exists.
 *
 *
 * Example -
 *      INPUT:
 *          array = [-3, 1, 5, 6, 4,7, 2, -7, -2]      | target sum = 3
 *      OUTPUT:
 *          array = [
 *                      [-7,4,6],
 *                      [-3,1,5],
 *                      [-3,4,2],
 *                      [-2,1,4]
 *                  ]
 *
 * Algorithm -
 *
 * Time Complexity: O(n^2) --> quadratic
 * Space Complexity: O(n) --> linear
 */
const sum = (...args) => args.reduce((accum, value) => accum + value);

const tripletSum = (array, target) => {
  const arrayLength = array.length;
  // sort the array
  array.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < arrayLength - 2; i++) {
    let leftPointer = i + 1;
    let rightPointer = arrayLength - 1;

    while (leftPointer < rightPointer) {
      const currentSum = array[i] + array[leftPointer] + array[rightPointer];

      if (currentSum === target) {
        result.push([array[i], array[leftPointer], array[rightPointer]]);
        leftPointer++;
        rightPointer--;
      } else if (currentSum < target) {
        leftPointer++;
      } else if (currentSum > target) {
        rightPointer--;
      }
    }
  }

  //   result.push(array.slice(2, 5));
  return result;
};

const array = [-3, 1, 5, 6, 4, 7, 2, -7, -2];
console.log(sum(...array)); // 13
console.log(tripletSum(array, 3)); // [ [ -7, 4, 6 ], [ -3, 1, 5 ], [ -3, 2, 4 ], [ -2, 1, 4 ] ]
