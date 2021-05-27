/**
 * Create a function removeDuplicates which takes a non-empty array as a value and
 * returns an array with only one copy of any of the original array's values.
 */
console.log('\n---------Using Set---------------------');
// Set is similar to Array however Set contains only the unique elements
// step #1
//         - use the regular set Constructor to transform an Array into a Set
//         - new Set(array)

// step #2
//         - use the spread operator to transform a set into an Array
//          - Alternatively one can use Array.from(set)
/**
 *
 * @param {*} array to be removed of duplicate elements
 */
// const mySet = new Set(array)
// Array.from(mySet);
const removeDuplicatesUsingSet = (array) => [...new Set(array)];

const array1 = [0, 0, 1, 2, 2];
const array2 = ['a', 'a', 'a'];
const array3 = [10, 10, 11, 12, 12, 'a', 'a'];
const array4 = [100, 100, 1, 22, 22, 'b', 'b', 'c'];

console.log(removeDuplicatesUsingSet(array1)); // [ 0, 1, 2 ]
console.log(removeDuplicatesUsingSet(array2)); // [ 'a' ]
console.log(removeDuplicatesUsingSet(array3)); // [ 10, 11, 12, 'a' ]
console.log(removeDuplicatesUsingSet(array4)); // [ 100, 1, 22, 'b', 'c' ]

console.log('\n---------Using Filter---------------------');
/**
 *
 * @param {*} array to be removed of duplicate elements
 *
 * step #1
 *  use filter for each item
 * step #2
 *  array.indexOf(item) -> returns the first index at which a given element item
 *  can be found in the array, or -1 if it is not present.
 *  Therefore it will exclude any element that is seen again because the index will
 * not match array.indexOf(item) with its current index position.
 */
const removeDuplicatesUsingFilter = (array) =>
  array.filter((item, index) => array.indexOf(item) === index);

console.log(removeDuplicatesUsingFilter(array1)); // [ 0, 1, 2 ]
console.log(removeDuplicatesUsingFilter(array2)); // [ 'a' ]
console.log(removeDuplicatesUsingFilter(array3)); // [ 10, 11, 12, 'a' ]
console.log(removeDuplicatesUsingFilter(array4)); // [ 100, 1, 22, 'b', 'c' ]

console.log('\n---------Using Reduce---------------------');
/**
 * initialize an empty array to collect final values
 * if finaly array contains item, skip it
 * otherwise push that item into our finaly array.
 * @param {*} array to be filtered of duplicates
 */
const removeDuplicatesUsingReduce = (array) =>
  array.reduce((unique, item) => {
    return unique.includes(item) ? unique : [...unique, item];
  }, []);

console.log(removeDuplicatesUsingReduce(array1)); // [ 0, 1, 2 ]
console.log(removeDuplicatesUsingReduce(array2)); // [ 'a' ]
console.log(removeDuplicatesUsingReduce(array3)); // [ 10, 11, 12, 'a' ]
console.log(removeDuplicatesUsingReduce(array4)); // [ 100, 1, 22, 'b', 'c' ]

console.log('\n---------Using HashMap---------------------');
/**
 * Needs further refinement
 * @param {} array
 */
const removeDuplicatesUsingHashMap = (array) => {
  const map = new Map();

  // iterate through the array elements and add
  // only those array element to the hash map that
  // has not been seen.
  for (let index = 0; index < array.length; index++) {
    if (map.has(array[index])) continue;
    map.set(index, array[index]);
  }
  return [Array.from(map.values())];
};

console.log(removeDuplicatesUsingHashMap(array1)); // [ 0, 1, 2 ]
console.log(removeDuplicatesUsingHashMap(array2)); // [ 'a' ]
console.log(removeDuplicatesUsingHashMap(array3)); // [ 10, 11, 12, 'a' ]
console.log(removeDuplicatesUsingHashMap(array4)); // [ 100, 1, 22, 'b', 'c' ]
