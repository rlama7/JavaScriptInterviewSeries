/**
 * Two Number Sum
 *
 * Given an array of n integers and a number k, determing whether
 * there is a pair of elements in the array that sums to exactly k.
 *
 * For example, given the array n = [1,3,7,0,9] and k = 8, --> there is a
 * pair 1 & 7 that yields k = 8.
 *
 * But given k = 5 --> there is no such pair
 *
 * Follow-Up Questions:
 *
 * Are the array elements necessarily postive?
 *  --> they can be positive, negative or zero
 *
 * Can we consider pairs of an element and itself?
 * --> NO, the pair should consist of two different array elements
 *
 * Can the array contain duplicates?
 * --> Sure that's a possibility
 *
 * Is the array sorted?
 * --> No gurantee
 *
 * Integer overflow?
 * --> Disregard for simplicity
 * --> If you are SMART enought then please state your solutions
 *
 * PITFALLs:
 *
 * - Make sure the solution works on arrays of zero or one element
 * - Make sure the soultion always returns a value
 * - Make sure the solution works with both positive and negative numbers
 * - Make sure their solution works if the only way to make the sum is to use
 *    an element that appears twice in the array. For example, n=[4,4] with k=8
 * -
 *
 */

/**
 * OPTION: #1
 * Brute force way
 * Time complexity O(n^2) --> Theta(n^2) possible pairs
 * Space Complexity O(1) --> No auxiliary structures are created
 */

const twoSumBruteForce = (array, k) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == k) {
        console.log(
          `two pairs are: [${array[i]}, ${array[j]}] --> yield sum: ${k}`
        );
        return true;
      }
    }
  }
  return false;
};

const n1 = [1, 2, 3, 5, 6, 7, 9, 0];
console.log(twoSumBruteForce(n1, 8));

/**
 *
 * RUN locally --> $ node twoSum.js
 *
 * OUTPUT ---------->
 *
 * two pairs are: [1, 7] --> yield sum: 8
 * true
 * <----------
 *
 */

/**
 * OPTION #2
 * Hashing
 * Use map to create a table of all the elements in the array.
 * Then scan over the array where A[i] + A[j] = k ---> A[j] = k - A[i]
 *
 * PITFALLs:
 * - make sure the solution handles the case where there are duplicated elements
 * in the array and doesn't accidentally let you pair an element with itself
 *
 * TIME COMPLEXITY:
 * O(n) since insertions and looks in a has talbe takes O(n) time.
 * Space Complexity is O(n)
 *
 * GOOD SOLUTION
 *
 */

const twoSumHashMap = (arr, k) => {
  const map = new Map();
  for (let index = 0; index < arr.length; index++) {
    if (map.get(k - arr[index])) {
      console.log(
        `two pairs are: [${arr[index]}, ${
          arr[k - arr[index]]
        }] --> yield sum: ${k}`
      );
      return true;
    }
    map.set(index, arr[index]);
  }
};

const n2 = [9, 5, 0, 12, -3];
console.log(twoSumHashMap(n2, 12));

/**
 * OPTION #3
 * Sorting and Binary Search
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(log n) <-- if quicksort
 *                 : O(1)     <-- if heap sort
 */

const twoSumSortSearch = (arr, k) => {
  // first sort array so we can make use of Binary Search
  arr.sort((a, b) => a - b);
  console.log(arr);

  for (let index = 0; index < arr.length; index++) {
    // find siblingIndex
    let siblingIndex = binarySearch(arr, k - arr[index]);

    if (siblingIndex >= 0) {
      // found it
      /**
       * If this points a us, then the pair exists only if
       * there is another copy of the element.
       */
      if (
        siblingIndex != index ||
        (index > 0 && arr[index - 1] == arr[index]) ||
        (i < arr.length - 1 && arr[index + 1] == arr[index])
      ) {
        return true;
      }
    }
  }
  return false;
};

console.log('+-------------------sortArr----------------------------------+');
const arrS = [4, 8, 1, -5, 9, 7, 2];
console.log(`Unsorted array is: ${arrS}`);

// sort with expressions
arrS.sort((a, b) => a - b);
console.log(`sorted array is: ${arrS}`);

// Binary Search
const binarySearch = (arr, target) => {
  // Define star and end Index
  let startIndex = 0;
  let endIndex = arr.length - 1;

  // start comparing
  while (startIndex <= endIndex) {
    // define middle index
    let midIndex = Math.floor((startIndex + endIndex) / 2);

    // compaare middle index with the target for match
    if (target === arr[midIndex]) {
      console.log(
        `Target ${target} located at index: ${midIndex} of the Sorted array`
      );
      return;
    }

    // Search Right side of the Array
    if (target > arr[midIndex]) {
      console.log('Searching the right side of the Array');

      // assing startIndex and increas the index by 1 to narrow search
      startIndex = midIndex + 1;
    }

    // Search Left side of the Array
    if (target < arr[midIndex]) {
      // assign end index and decrease the index by 1 to narrow
      console.log('Searching the left side of the aray');
      endIndex = midIndex - 1;
    }
  }
};

console.log(
  '\n+-------------------Binary Search----------------------------------+'
);
const arrSB = [4, 8, 1, -5, 9, 7, 2];
console.log(`Unsorted array is: ${arrSB}`);
console.log('+----------------------+');

// sort with expressions
arrSB.sort((a, b) => a - b);
console.log(`sorted array is: ${arrSB}`);
console.log('+----------------------+');
binarySearch(arrSB, -5);
console.log('\n+----------------------+');

console.log(
  '\n+-------------------TwoSumSortSearch----------------------------------+'
);

twoSumSortSearch(arrSB, 11);
