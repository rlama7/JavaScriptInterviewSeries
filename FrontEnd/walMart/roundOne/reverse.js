/**
 * Create a function named reverse which takes a non-empty array
 * as an argument and returns a reversed array WITHOUT MUTATING THE INPUT.
 *
 * CAUTION: array.reverse() -> reverses the array in place, i.e., the input
 * arrays will be mutated therefore can not be used here.
 *
 * Instead we'll traverse through the array from the last element to the first
 *
 * @param {*} array input array to be reversed without mutating the input
 */
const reverse = (array) => {
  const newArray = [];

  for (let index = array.length - 1; index >= 0; index--) {
    newArray.push(array[index]);
  }

  return newArray;
};

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

console.log(array1);
console.log(array2);
console.log(reverse(array1));
console.log(reverse(array2));
console.log(array1);
console.log(array2);
