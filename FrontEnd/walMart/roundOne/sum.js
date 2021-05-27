/**
 * Create a function named sum which takes as an argument a non-empty
 * array of integers and returns the sum of those integers
 *
 * @param {*} array input array to be reduced to find sum
 *
 * --->Example<---
 * sum([1,2,3]) // 6
 * sum([0,4,4,4]) // 12
 */
const sum = (array) => {
  // if empty array then return error message | -1
  if (array.length < 1) return -1;

  return array.reduce((accumulator, value) => accumulator + value);
};

console.log(sum([])); // -1
console.log(sum([1])); // 1
console.log(sum([1, 2, 3])); // 6
console.log(sum([0, 4, 4, 4])); // 12
