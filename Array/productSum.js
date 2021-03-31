/**
 * productSum.js    - A program to calculate a function that takes in a special array and returns its product sum.
 * @author          - Ratna Lama
 * @version         - 1.0.0
 * @description     - A special array is non-empty array inside an array
 *                    The depth of the special array is how far nested it is.
 *                    For example:
 *                                the depth of [] --> 1
 *                                the depth of [ [] ] --> 2
 *                                the depth of [ [ [] ] ] --> 3
 *
 * Example -
 *
 * Time Complexity: O(n) --> linear
 * Space Complexity: O(1) --> constant
 */
const productSum = (array, multiplier = 1) => {
  let sum = 0;
  for (const element of array) {
    // check if an element is an array
    if (Array.isArray(element)) {
      sum += productSum(element, multiplier + 1);
    } else {
      sum += element;
    }
  }
  return sum * multiplier;
};

const arr = [3, 1, [6, -8], 4, [2, [-10, 8], 7]];
console.log(productSum(arr)); // 10

module.exports = productSum;

// flatten array with default depth=1
// const flattenArray = (array, depth = 1) => {
//   // recursive case
//   for (const element of array) {
//     if (Array.isArray(element)) {
//       return flattenArray(array, depth + 1);
//     } else {
//       // if not nested array element
//       return array.reduce((accum, value) => accum + value);
//     }
//   }
// };
// console.log(flattenArray(arr, 1));

const arr1 = [1, 2, 3, 4, 5, 6];
const reducer = arr1.reduce((accum, value) => accum + value);
console.log(reducer);
