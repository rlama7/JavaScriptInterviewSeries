/**
 * flattenArray.js      - A program to flatten array in JavaScript.
 * @author              - Ratna Lama
 * @version             - 1.0.0
 * @description         - The flat() method creates a new array with all sub-array elements
 *                        concatenated into it recursivley up to the specified depth.
 *                        depth (OPTIONAL) - The depth level specifying how deep a nested array
 *                        structure should be flattened. Defaults to 1.
 *
 *                        The flat() method makes use of concat() to merge two or more arrays. The concat()
 *                        method does not change the existing arrays, but instead returns a new array.
 */
// const flattenArray = (array) => {};

const arr1 = [1, 2, 3, [4, 5, 6]];
const arr2 = [1, 2, 3, [[4, 5, 6]]];
const arr3 = [1, 2, 3, [[[3, 4]]]];

console.log('arr1: ');
console.log(arr1);
console.log(arr1.flat()); //[ 1, 2, 3, 4, 5, 6 ] | depth=1 (default)
console.log('\n--------------------------------------------------');

console.log('arr2: ');
console.log(arr2); // [ 1, 2, 3, [   [ 4, 5, 6 ]    ]    ]
//                2---------2
//            1__________________1
// 0__________________________________0
//
console.log(arr2.flat(2)); // [1, 2, 3, 4, 5, 6];
console.log('\n--------------------------------------------------');

console.log('arr3: ');
console.log(arr3);
console.log(arr3.flat(3)); // [ 1, 2, 3, 3, 4 ]
console.log('\n--------------------------------------------------');

// UTILIITY

// concat()

const arrConcat1 = ['a', 'b', 'c'];
const arrConcat2 = ['d', 'e', 'f'];
const arrConcat3 = [1, 2, 3];
const arrConcat12 = arrConcat1.concat(arrConcat2);
const arrConcat123 = arrConcat1.concat(arrConcat2, arrConcat3);

console.log(arrConcat1);
console.log(arrConcat2);
console.log(arrConcat12); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(arrConcat123);
console.log('\n--------------------------------------------------');

// export default flattenArray;
