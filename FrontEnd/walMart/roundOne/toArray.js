/**
 * Create a function named toArray which takes an unspecified number
 * or arguments and return an array with those arguments as values.
 *
 * @param  {...any} args an unspecified number of arguments
 *
 * --->Example<---
 * toArray(1,2,3) -> [1,2,3]
 * toArray('a') -> ['a']
 */
const toArray = (...args) => [...args];

const array1 = [];
const array2 = [1];
const array3 = [1, 2];
const array4 = [1, 2, 3, 4];
const array5 = [1, 2, 3, 4, 5];
const array6 = [1, 2, 3, 4, 5, 6];
const array7 = [1, 2, 3, 4, 5, 6, 7];

console.log(toArray(...array1)); // []
console.log(toArray(...array2)); // [ 1 ]
console.log(toArray(...array3)); // [ 1, 2 ]
console.log(toArray(...array4)); // [ 1, 2, 3, 4 ]
console.log(toArray(...array5)); // [ 1, 2, 3, 4, 5]
console.log(toArray(...array6)); // [ 1, 2, 3, 4, 5, 6 ]
console.log(toArray(...array7)); // [ 1, 2, 3, 4, 5, 6, 7 ]
