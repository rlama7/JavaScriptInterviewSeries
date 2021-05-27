/**
 * Create a function named allGreaterThanThree which accepts an unspecified number of
 * integer arguments and returns true only if all passed arguments are greater than 3.
 *
 * @param  {...any} args an unspecified number of integer arguments
 *
 * --->Example<---
 * allGreaterThanThree(1,3,5) -> false
 * allGreaterThanThree(4,5,6) -> trues
 */
const allGreaterThanThree = (...args) => {
  // if array length is 0 return -1 | message
  if (args.length < 1) return -1;

  for (let index = 0; index < args.length; index++) {
    if (args[index] < 3) return false;
    return args[index] > 3;
  }
};

const array0 = [];
const array1 = [1, 3, 5];
const array2 = [4, 5, 6];

console.log(allGreaterThanThree(...array0)); // -1
console.log(allGreaterThanThree(...array1)); // false
console.log(allGreaterThanThree(...array2)); // true
