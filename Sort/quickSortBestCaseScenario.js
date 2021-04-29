/**
 * Best case scenario for quick sort happens if the pivot item selected is the middle item
 * which yields time complexity of O(n log n)
 *
 * INPUT
 *  array = [9,1,12,  10,  34,5, 7]
 *                     ^_ if the middle item is the pivot then it is in correct position
 *
 * Alternatively we can randomly select a pivot item.
 *
 * Worst case scenario for quick sort happens if the array is in reveres sorted order
 * and the pivot is not necessarily middle item
 * which yields time complexity of O(n^2) <- quadratic
 *
 * @param {*} array array to be sorted
 *
 */
const quickSortBestCaseScenario = (array) => {
  // base case for recursion
  if (array.length <= 1) return array;

  // the idea behind quick sort is to get the pivot (ideally )
  // middle element and then group all the element less than
  // pivot to the left and
  // element greater than pivot to the right
  // such that the pivot element will be sorted in the position
  // then repeat the same procss for all the left and the right sub-arrays
  // which brings to the recursive scenario.
  // for Space complexity, since call stack will be used,
  // it can range from O(log n) for best case scenario
  // to O(n) linear for worst case scenario.

  // select middle element as the pivot
  let pivot = array[Math.floor(array.length / 2)];
  const leftSubArray = [];
  const rightSubArray = [];

  // let's iterate through the array then sub divide the array elements
  // to the leftSubArray and to the rightSubArray
  for (let index = 0; index < array.length; index++) {
    // if we got the pivot item just continue...
    if (array[index] === pivot) continue;
    // fill up the leftSubArray with all the elements less than the pivot
    if (array[index] < pivot) {
      leftSubArray.push(array[index]);
    } else {
      // fill up the rightSubArray with all the elements greater or equal than the pivot
      rightSubArray.push(array[index]);
    }
  }
  // we've done one iteration let's repeat the process for the leftSubArray and the rightSubArray
  // this brings to the recursive scenario so let's find the base case, i.e. exit scenarion for
  // recursion

  // for the subarray we could have three scenarios
  // leftSubArray && rightSubArray has item in them
  // Only lefSubArray has item in it
  // last but not the least rightSubArray has item in it

  //   if (leftSubArray.length > 0 && rightSubArray.length > 0) {
  //     return [
  //       ...quickSortBestCaseScenario(leftSubArray),
  //       pivot,
  //       ...quickSortBestCaseScenario(rightSubArray),
  //     ];
  //   } else if (leftSubArray.length > 0) {
  //     return [...quickSortBestCaseScenario(leftSubArray), pivot];
  //   } else {
  //     return [pivot, ...quickSortBestCaseScenario(rightSubArray)];
  //   }

  // we can shorten the last part
  return [
    ...quickSortBestCaseScenario(leftSubArray),
    pivot,
    ...quickSortBestCaseScenario(rightSubArray),
  ];
};

const array = [4, 2, 3, 7, 1, 5, -9, 10];
console.log(quickSortBestCaseScenario(array)); // [-9, 1, 2, 3,4, 5, 7, 10]
