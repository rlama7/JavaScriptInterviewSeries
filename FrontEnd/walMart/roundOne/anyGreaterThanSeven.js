/**
 * Create a function named anyGreaterThanSeven which accepts an unspecified
 * number of integer arguments and returns true if any passed argument is
 * greater than 7.
 *
 * @param  {...any} args an unspecified number of arguments
 *
 * --->Example<---
 * anyGreaterThanSeven(1,2,3) -> false
 * anyGreaterThanSeven(1,3,6,8) -> true
 *
 * Array.prototype.some() ->
 * some() method tests whether at least one element in the array passes the test
 * implemented by the provided callback function. It returs true, if in the array,
 * it finds an element for which the provided function returns true; otherwise it
 * returns fasle. It doesn't modify the array.
 */
const anyGreaterThanSeven = (...args) => {
  if (args.length < 1) return -1;

  return args.some((item) => item > 7);
};

const array1 = [];
const array2 = [1, 2, 3];
const array3 = [2, 3, 4, 7];
const array4 = [2, 3, 4, 8, 7];

console.log(anyGreaterThanSeven(...array1)); // -1
console.log(anyGreaterThanSeven(...array2)); // false
console.log(anyGreaterThanSeven(...array3)); // false
console.log(anyGreaterThanSeven(...array4)); // true
