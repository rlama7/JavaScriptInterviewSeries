/**
 * slice.js     - A program to demonstrate usage of slice() in JavaScript
 * @author      - Ratna Lama
 * @version     - 1.0.0
 * @description - The slice() method returns a swallow copy of a portion of an array
 *                into a new array object selected from start to end (end not included)
 *                where start and end represent the index of items in that array. The original
 *                array will not be modified.
 *
 *                If start index is undefined slice starts from the index 0.
 *                If end index is greater than the length of the sequence, slice extracts through
 *                to the end of the sequence (arr.length).
 */
const fruits = ['apple', 'banana', 'cherry', 'guava', 'mango', 'orange'];

// start index is defaulted to 0 and end index is 1 but doesn't include end index
console.log(fruits.slice(1)); // [ 'banana', 'cherry', 'guava', 'mango', 'orange' ]

// original fruits array is NOT modified.
console.log(fruits); // [ 'apple', 'banana', 'cherry', 'guava', 'mango', 'orange' ]

// start=2 and end index=4
console.log(fruits.slice(2, 4)); // ['cherry', 'guava']
//      0         1      2    3    4        5         <-- array index
// [ 'apple', 'banana', X,    X, 'mango', 'orange' ]
// --> X marks where the slice portion was taken from
