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

const n = [1, 2, 3, 5, 6, 7, 9, 0];
console.log(twoSumBruteForce(n, 8));

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
