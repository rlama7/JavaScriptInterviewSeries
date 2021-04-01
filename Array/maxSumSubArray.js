/**
 * maxSumSubArray.js    - A program to find maximum sub subarray of the given size.
 * @author              - Ratna Lama
 * @version             - 1.0.0
 * @description         -
 *
 *  REQUIREMENTS:
 *  - Sub arrays are contiguous by definition, so the elements should be adjacent.
 *  - In the example below although [2,4] yields max sum -> 2 & 4 are not contiguous i.e., adjacent
 *  - those doesn't qualify as a valid max sum
 *
 *  RESTRICTIONS:
 *  - Unless otherwise specified inputs size can be of any amounts so this will have serious
 *  - consequences to the efficiency of our solution.
 *
 *  ANALYSIS:
 *  - If input size is unlimited, memory can blow up if we are not careful of what we keep in memory
 *  - Is recursion a choice? Since almost all programming languages includeing JavaScript have
 *  - limited memory for call stack, it will likely overflow.
 *  - Data Structures? We could array for this solutions.
 *
 *
 *
 * Example -
 *      INPUT:
 *          array = [1,2,3,4,-1,2]   | sub array size = 2
 *      OUTPUT:
 *          maxSub = 5 --> given by subarray = [2,3]
 *
 * Algorithm -
 *
 *  OPTION#1: Brute Force
 *          - calculate all possible subarrays with 2 members and store them in a hash table (map).
 *          - Iterate over the hash table until you find the subarray with the maximum sum.
 *          - Time complexity: O(n) for hash table creation, and O(1) for every lookup afterward.
 *          - Space Complexity: O(n) --> if input size is unbound then the memory usage will be unbound
 *
 * OPTION#2: Sliding Window (statically sized)
 *          - start calculating window sum starting with the first 2 elements
 *          - slide the window by one element at a time
 *          - Time Complexity: O(n) --> linear since we'll have to process n - array elements
 *          - Space Complexity: O(1) --> in place OR constant since we are not using extra space
 *
 *          - [1,  2,  3,  4,  -1,  2]        | sub array size = 2   | firstPointer (fp) | secondPointer (sp) | sum=0
 *  step#1
 *             [1,2] <-- sum < 1+2 : sum=3 : sum | move fp++ and sp++
 *
 *              ...continue this process untill all sp < array.length
 *
 *
 *
 * Time Complexity - O() -->
 * Space Complexity - O() -->
 *
 */
const maxSumSubArray = (array, size) => {
  let maxSum = 0;

  for (let i = 0; i < array.length; i++) {
    let firstPointer = i;
    let secondPointer = firstPointer + 1;

    if (array[firstPointer] + array[secondPointer] > maxSum) {
      maxSum = array[firstPointer] + array[secondPointer];
    } else {
      firstPointer++;
      secondPointer++;
    }
  }
  return maxSum;
};

const array = [1, 2, 3, 4, -1, 2];
const size = 2;

console.log(maxSumSubArray(array, size)); // 7
