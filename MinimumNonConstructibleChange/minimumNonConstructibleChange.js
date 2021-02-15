/**
 * minimumNonConstructibleChange   - A program to compute minimum non constructible change.
 * @author                         - Ratna Lama
 * @since                          - 1.0.0
 * @description                    - Give a list of positive integers representing the values of coins
 *                                   compute the minimum amount of change that can not be created. The
 *                                   are positive integer value and can have multiple coins of the same
 *                                   denominations.
 * @param {*} coins   unsorted list of coins
 */

const minimumNonConstructibleChange = (coins) => {
  // sort coins
  coins.sort((a, b) => a - b);

  let currentChange = 0;
  for (const coin of coins) {
    if (coin > currentChange + 1) {
      return currentChange + 1;
    }
    currentChange += scoin;
  }
  return currentChange + 1;
};

const arr1 = [5, 7, 1, 1, 2, 3, 22];
const arr2 = [1, 7, 3, 2];
const arr3 = [1, 2, 4, 9];
const arr4 = [1, 2, 3, 5];
const arr5 = [2, 3, 1, 2, 2];
console.log(minimumNonConstructibleChange(arr1)); // 20
console.log(minimumNonConstructibleChange(arr2)); // 14
console.log(minimumNonConstructibleChange(arr3)); // 8
console.log(minimumNonConstructibleChange(arr4)); // 12
console.log(minimumNonConstructibleChange(arr5)); // 11
