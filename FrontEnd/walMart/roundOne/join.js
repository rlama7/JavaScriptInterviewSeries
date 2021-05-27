/**
 * Create a function named join which takes two arrays as argument and
 * returns a single array consisting of all the values of those two
 * arrays.
 *
 * @param {*} array1 input array1
 * @param {*} array2 input array2
 *
 * --->Example<---
 * join([0,1],[1,2]) -> [0,1,1,2]
 * join(['a', 'b'], ['c']) -> ['a', 'b', 'c']
 */
const join = (array1, array2) => [...array1, ...array2];

const array1 = [0, 1];
const array2 = [1, 2];
const array3 = ['a', 'b'];
const array4 = ['c', 'd'];
const array5 = [];
const array6 = [100];
const array7 = [];

console.log(join(array1, array2)); // [ 0, 1, 1, 2 ]
console.log(join(array3, array4)); // [ 'a', 'b', 'c', 'd' ]
console.log(join(array5, array6)); // [100]
console.log(join(array5, array7)); // []

/**
 *
 * @param {*} array1 input array1
 * @param {*} array2 input array2
 */
const concatenateArrays = (array1, array2) => array1.concat(array2);
console.log(concatenateArrays(array1, array2)); // [ 0, 1, 1, 2 ]
console.log(concatenateArrays(array3, array4)); // [ 'a', 'b', 'c', 'd' ]
console.log(concatenateArrays(array5, array6)); // [100]
console.log(concatenateArrays(array5, array7)); // []
