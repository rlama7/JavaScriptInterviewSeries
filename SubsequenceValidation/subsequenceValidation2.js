/**
 * subsequenceValidation2.js     - A program to find whether an array is a subset/subsequence of another array
 * @author                       - Ratna Lama
 * @version                      - 1.0.0
 * @description     Find whether an array is a subset/subsequence of another array
 *
 * For Example: -
 * array1 = [5, 6, 7, 8]
 *
 * The VALId subsequences of array1 are:
 * [5], [6], [7], [8],
 * [5,6], [6.7], [7,8],[5,8],[6,8],
 * [5,6,7],[5,6,8],[6,7,8],[5,7,8]
 * [5,6,7,8]
 *
 * The INVALID subsequences of array1 are:
 * [6,5],[7,5],[8,5]
 * [6,5,7],[7,8,6],[7,8,5]
 * [6,7,8,5],[7,8,6,5]
 *
 * Output: -
 * arr = [5,6,7,8]
 * arrSequence1 = [5,6,7]  ---> TRUE
 * arrSequence1 = [6,7]  ---> TRUE
 * arrSequence1 = [5,6,8]  ---> TRUE
 * arrSequence1 = [6,5,7]  ---> FALSE
 * arrSequence1 = [7,5]  ---> FALSE
 * arrSequence1 = [6,7,8,5]  ---> FALSE
 *
 *
 *
 * Time Complexity is  linear : O(n)
 * Space Complexity is constant : O(1) --> no extra space created
 *
 * Hints: - Make use of TWO pointers
 */
const isSubSequence = (arr, arrSequence) => {
  let arrLength = arr.length;
  let arrSequenceLength = arrSequence.length;

  let j = 0;

  // iterate through the arr and its sequence
  for (let index = 0; index < arrLength && j < arrSequenceLength; index++) {
    if (arr[index] == arrSequence[j]) {
      j++;
    }
  }
  // return true if all the elements of arrSequence were found in arr
  return j === arrSequenceLength;
};

// Output
const arr = [5, 6, 7, 8];
const arrSequence1 = [5, 6, 7];
const arrSequence2 = [6, 7];
const arrSequence3 = [5, 6, 8];
const arrSequence4 = [6, 5, 7];
const arrSequence5 = [7, 5];
const arrSequence6 = [6, 7, 8, 5];

console.log(
  `${arr} --> ${arrSequence1} -->isSubSequence: ${isSubSequence(
    arr,
    arrSequence1
  )}`
);
console.log(
  `${arr} --> ${arrSequence2} -->isSubSequence: ${isSubSequence(
    arr,
    arrSequence2
  )}`
);
console.log(
  `${arr} --> ${arrSequence3} -->isSubSequence: ${isSubSequence(
    arr,
    arrSequence3
  )}`
);
console.log(
  `${arr} --> ${arrSequence4} -->isSubSequence: ${isSubSequence(
    arr,
    arrSequence4
  )}`
);
console.log(
  `${arr} --> ${arrSequence5} -->isSubSequence: ${isSubSequence(
    arr,
    arrSequence5
  )}`
);
console.log(
  `${arr} --> ${arrSequence6} -->isSubSequence: ${isSubSequence(
    arr,
    arrSequence6
  )}`
);
