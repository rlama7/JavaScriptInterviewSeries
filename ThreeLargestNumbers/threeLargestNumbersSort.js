/**
 * threeLargesNumbersSort.js     - A program to find the three largest numbers if sort option is available
 *
 */
const threeLargestNumbersSort = (arr) => {
  // first sort the given array in a descending order
  // slice the sorted array from 0th index to 3rd index (3rd Index NOT included)
  return arr.sort((a, b) => b - a).slice(0, 3);
};

// Output
const arr = [9, 3, 15, 10, 2, 7, 11, 17, 1, 4, 19];

console.log(threeLargestNumbersSort(arr));
