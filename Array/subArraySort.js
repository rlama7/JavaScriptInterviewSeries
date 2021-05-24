/**
 * subArraySort.js - A program to find the smallest subarray in the input
 *                   array that needs to sorted in place in order for the
 *                   entire input array to be sorted (in ascending order)
 * @author
 * @version
 * @description
 * @param {*} array input array to sorted in place
 *
 * --->Example<---
 * --->Algorithm<---
 * --->Time Complexity<---
 *
 */
const isOutOfOrder = (index, currentElement, array) => {
  // an input array elements are out of order if compared to left and right elements
  // [2,  5,  3]
  //      |_currentElement

  //  for index=0: 2 > 5
  //  for index=1: 5 > 3 || 5 <2 <---- true 5 > 3
  //  for index=2: 3 < 5 <--- false
  //  so for this case : 5 is out of order and for every number that is out of
  // order there is at least one number out of order

  // edge cases
  // first element
  if (index === 0) return currentElement > array[index + 1];
  // last element
  if (index === array.length - 1) return currentElement < array[index - 1];
  // all other cases
  return currentElement > array[index + 1] || currentElement < array[index - 1];
};

const subArraySort = (array) => {
  // find all unsorted array elements
  // find the smallest element in the unsorted subarray list
  // find the largest element in the unsroted subarray list

  let minOutOfOrder = Infinity;
  let maxOutOfOrder = -Infinity;

  for (let index = 0; index < array.length; index++) {
    currentElement = array[index];

    if (isOutOfOrder(index, currentElement, array)) {
      minOutOfOrder = Math.min(minOutOfOrder, currentElement);
      maxOutOfOrder = Math.max(maxOutOfOrder, currentElement);
    }
  }
  if (minOutOfOrder === Infinity) return [-1, -1];

  // find left out of order element
  let subArrayLeftIdx = 0;
  while (minOutOfOrder >= array[subArrayLeftIdx]) {
    subArrayLeftIdx++;
  }

  // find right out of order element
  let subArrayRightIdx = array.length - 1;
  while (maxOutOfOrder <= array[subArrayRightIdx]) {
    subArrayRightIdx--;
  }
  return [subArrayLeftIdx, subArrayRightIdx];
};

const array1 = [1, 2, 3, 5, 10, 6, 11, 127, 4, 7, 15, 16, 17, 18, 19];
const array2 = [1, 2, 3, 5, 10, 6, 5, 11, 127, 4, 5, 7, 15, 16, 17, 18, 19];
const array3 = [1, 2, 3, 5, -1];
const array4 = [1, 2, 4, 3, 5, 0, -1];
const array5 = [1, 3, 4, 2, 5];

console.log(subArraySort(array1)); //[ 3, 14 ]
console.log(subArraySort(array2)); //[ 3, 16 ]
console.log(subArraySort(array3)); // [ 0, 4 ]
console.log(subArraySort(array4)); // [ 0, 6 ]
console.log(subArraySort(array5)); // [ 1, 3 ]
