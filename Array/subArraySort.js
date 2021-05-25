/**
 * subArraySort.js - A program to find the smallest subarray in the input
 *                   array that needs to be sorted in place in order for the
 *                   entire input array to be sorted (in ascending order)
 * @author         - Ratn Lama
 * @version        - 1.0.0
 * @description    -
 * @param {*} array input array to sorted in place
 *
 * --->Example<---
 *      INPUT:
 *        index:   0   1    2     3    4      5
 *        array = [1,  2,   5,    7,   4,     3]
 *                          |_________________|
 *      OUTPUT:
 *        result = [2,5]
 *
 * --->Algorithm<---
 * # Step 1:
 *        - Find the out of order element in the list
 *
 * # Step 2:
 *        - Find the min/max in the out of order element in the list
 *
 * # Step 3:
 *        - Find the correct position of the min out of order element in the list to the left
 *
 * # Step 4:
 *        - Find the correct position of the max out of order element in the list to the right
 *
 * --->Time Complexity<---
 * time O(n) -> linear
 * space O(1) -> constant
 */

const isOutOfOrder = (index, currentElement, array) => {
  // an input array elements are out of order if compared to left and right elements
  // if current is greater than the next element and
  // smaller than the previous element
  // Think of ascending order where number increase going from left to right
  // for example: [1,2,3,4,5,6,7,8,9]

  // However in the following example, 5 is out of order since
  // 5 is greater than the next number 3
  // [2,  5,  3]
  //      |_currentElement

  //  for index=0: 2 > 5
  //  for index=1: 5 > 3 || 5 <2 <---- true 5 > 3
  //  for index=2: 3 < 5 <--- false
  //  so for this case : 5 is out of order and for every number that is out of
  // order there is at least one number out of order

  // edge cases
  // check if first element is out of order
  if (index === 0) return currentElement > array[index + 1];

  // check if the last element is out of order
  // [2,5,3] | current is last element = 3 < 5 previous element
  if (index === array.length - 1) return currentElement < array[index - 1];
  // all other cases
  return currentElement > array[index + 1] || currentElement < array[index - 1];
};

const subArraySort = (array) => {
  // find all unsorted array elements
  // find the smallest element in the unsorted subarray list
  // find the largest element in the unsorted subarray list

  let minOutOfOrder = Infinity;
  let maxOutOfOrder = -Infinity;

  for (let index = 0; index < array.length; index++) {
    currentElement = array[index];

    if (isOutOfOrder(index, currentElement, array)) {
      minOutOfOrder = Math.min(minOutOfOrder, currentElement);
      maxOutOfOrder = Math.max(maxOutOfOrder, currentElement);
    }
  }
  // there is no out of order element in otherwords all the elements are sorted
  if (minOutOfOrder === Infinity) return [-1, -1];

  // find the correct position of the smallest out of order element on the left
  // start from the beginning element and increment towards the right
  let subArrayLeftIdx = 0;
  while (minOutOfOrder >= array[subArrayLeftIdx]) {
    subArrayLeftIdx++;
  }

  // find the correct position of the largest out of order element on the right
  // start from the right most and decrement towards left
  let subArrayRightIdx = array.length - 1;
  while (maxOutOfOrder <= array[subArrayRightIdx]) {
    subArrayRightIdx--;
  }
  // correction subarray index position to sort the entire list
  return [subArrayLeftIdx, subArrayRightIdx];
};

const array1 = [1, 2, 3, 5, 10, 6, 11, 127, 4, 7, 15, 16, 17, 18, 19];
const array2 = [1, 2, 3, 5, 10, 6, 5, 11, 127, 4, 5, 7, 15, 16, 17, 18, 19];
const array3 = [1, 2, 3, 5, -1];
const array4 = [1, 2, 4, 3, 5, 0, -1];
const array5 = [1, 3, 4, 2, 5];
const array6 = [];
const array7 = [1];
const array8 = [1, 2];
const array9 = [20, 10];
const array10 = [1, 2, 3, 4, 5];

console.log(subArraySort(array1)); //[ 3, 14 ]
console.log(subArraySort(array2)); //[ 3, 16 ]
console.log(subArraySort(array3)); // [ 0, 4 ]
console.log(subArraySort(array4)); // [ 0, 6 ]
console.log(subArraySort(array5)); // [ 1, 3 ]
console.log(subArraySort(array6)); // [ -1, -1 ]
console.log(subArraySort(array7)); // [ -1, -1 ]
console.log(subArraySort(array8)); // [ -1, -1 ]
console.log(subArraySort(array9)); // [ 0, 1 ]
console.log(subArraySort(array10)); // [ -1, -1 ]
