/**
 * Create a function named getLast which takes a non-empty array of unspecified length
 * and returns the last element of the array.
 *
 * @param {*} array input array
 */
const getLast = (array) => array[array.length - 1];

const array1 = [1, 2, 3];
const array2 = [9, 7, 5];

console.log(getLast(array1)); // 3
console.log(getLast(array2)); // 5
