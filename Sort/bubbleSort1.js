/**
 * Implement a bubble sort algorithm to sort an array of integers.
 *
 * Example -
 *      array = [4,8,9,2]
 *
 * STEPS:
 *      4, 8, 9, 2
 * --> 4,8,2,9
 * --> 4,2,8,9
 * --> 2,4,8,9
 *
 *
 * Algorithm:
 *         {
 *          for K <- 1 to n-1
 *              { for i <- 0 to n-2
 *              {
 *                if (array[i] > array[i+1])
 *                  {swap (array[i], array[i+1])}
 *              }
 *              }
 *          }
 *
 *
 *          on each pass
 * Time Complexity: O(n**2) --> Quadratic
 * Space Complexity: O(1) --> constant
 *
 */
const bubbleSort = (array) => {
  const len = array.length;
  let flag = 0;

  for (let i = 0; i < len; i++) {
    for (j = 0; j < len; j++) {
      if (array[j] > array[j + 1]) {
        // swap
        // [a,b] = [b,a]
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        // change flag
        flag = 1;
      }
    }
    // flag = 0 means we don't need to check any more

    if ((flag = 0)) break;
  }
  return array;
};

array = [4, 8, 9, 2];
array1 = [17, 5, 12, 3, 7, 1, 2, 15, 8, 6];
console.log(bubbleSort(array)); // [ 2, 4, 8, 9 ]
console.log(bubbleSort(array1)); // [1, 2,  3,  5,  6, 7, 8, 12, 15, 17]
