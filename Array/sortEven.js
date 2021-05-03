/**
 * Given a list filter out the evens
 * and return the sub array in sorted order
 *
 * @param {*} array to be filtered and sorted for even numbers only
 *
 * Time comlexity O(n logn) since sorting will cost n logn
 * Space Complexity: O(n) since the function is pure, it does not
 * mutate the given input insteads stores sorted array in temporary location
 *
 */
const sortEven = (array) =>
  array.filter((element) => element % 2 === 0).sort((a, b) => a - b);

const array = [1, 71, 10, 2, 30, 4, 5, 6, 70, 8, 9, 20];

console.log(array);
console.log(sortEven(array)); // [2,  4,  6,  8, 10, 20, 30, 70]
