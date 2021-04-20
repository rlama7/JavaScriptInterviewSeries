/**
 * increasingSum.js     - A program to find the sum of increasing array elements.
 * @author              - Ratna Lama
 * @version             - 1.0.0
 * @description         -
 *
 *
 * Example -
 *      INPUT
 *          array = [1,2,3,4,5,6,7,8,9]
 *      OUTPUT
 *          restul = [1, 5, 15, 24]
 *              1 <- 1
 *              5 <- 2+3
 *              15 <- 4+5+6
 *              24 <- 7+8+9
 *
 * Algorithm -
 *
 * Time Complexity -
 * Space Comlexity -
 */
const sumReduce = (array) => array.reduce((a, b) => a + b);

const increasingSum = (array) => {
  const result = [];

  let left = 0,
    right = 1;

  while (left < right && right < array.length) {
    if (right > array.length - 1) {
      right = array.length - 1;
    }
    result.push(sumReduce(array.slice(left, right)));
    left = right;
    right = left + right + 1;
  }
  return result;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sumArgs = (...args) => args.reduce((a, b) => a + b);

console.log(sumArgs(1)); //1
console.log(sumArgs(1, 2)); // 3
console.log(sumArgs(1, 2, 3)); // 6
console.log(sumArgs(1, 2, 3, 4, 5)); // 15

console.log(sumReduce(array)); //45
console.log(sumReduce(array.slice(1, 3))); // 5  <--- sum for array indexes betwen 1 and 3 [last NOT included]
console.log(sumReduce(array.slice(3, 6))); // 15 <-- sum between indexes beween 3 and 6 [last index not included]
console.log(sumReduce(array.slice(0, 1)));

console.log(increasingSum(array)); // [1, 5, 15, 24];
