/**
 * Create a function named addTwo which takes an array of integers as an argument
 * and returns an array where each value has been incremented by two.
 * @param {*} array input array
 *
 * --->Example<---
 * INPUT:
 *      addTwo([1,2,3])
 * OUTPUT:
 *      [3,4,5]
 *
 * INPUT:
 *      addTwo([0,0])
 * OUTPUT:
 *      [2,2]
 */
const addTwo = (array) => array.map((element) => element + 2);

const array0 = [];
const array1 = [1];
const array2 = [1, 2, 3];
const array3 = [0, 0];
const array4 = [-3, -1];

console.log(addTwo(array0)); // []
console.log(addTwo(array1)); // [3]
console.log(addTwo(array2)); // [3,4,5]
console.log(addTwo(array3)); // [2,2]
console.log(addTwo(array4)); // [-1,1]
