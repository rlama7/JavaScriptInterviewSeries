/**
 * binarySearch.js      - A program to implement a binary search to locate a target in a given array.
 * @author              - Ratna Lama
 * @version             - 1.0.0
 * @description         - Given array may or may not be sorted.
 *                        Must implement Binary Search to locate a target in the given array.
 *                        Return index if the target is located, otherwise -1.
 *
 * Example -
 * INPUT:
 *      array = [1,5,7,8,3,15,2,11]
 *      target = 11
 * OUTPUT:
 *       index       =  0  1  2  3  4  5  6   7
 *                      |  |  |  |  |  |  |   |
 *       sortedArray = [1, 2, 3, 5, 7, 8, 11, 15]
 *       return ----> target index 6 (11)
 */
const binarySearch = (arr, target) => {
  // sort the array
  arr.sort((a, b) => a - b);

  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex <= endIndex) {
    // define middle index
    let midPoint = Math.floor((startIndex + endIndex) / 2);

    // compare target with the midPoint
    if (target === arr[midPoint]) {
      return `Target ${target} located at index ${midPoint}`;
    }

    // search the left half
    if (target < arr[midPoint]) {
      endIndex = midPoint - 1;
    }

    // search the right half
    if (target > arr[midPoint]) {
      startIndex = midPoint + 1;
    }
  }
  // if target is not found
  console.log(`Target ${target} not found in the array`);
};

// Display
arr = [1, 5, 7, 8, 3, 15, 2, 11];
console.log(arr.sort((a, b) => a - b));
console.log(arr.length);
console.log('8/2 -> ' + 8 / 2);
console.log('9/2 -> ' + 9 / 2);
console.log('9/2 -> Math.floor' + Math.floor(9 / 2));

console.log(binarySearch(arr, 11)); // index 6
console.log(binarySearch(arr, 21)); // target not found message
