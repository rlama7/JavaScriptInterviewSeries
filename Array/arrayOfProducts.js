/**
 * arrayOfProducts.js  - A program to find the product of an array excluding the self element
 * @author             - Ratna Lama
 * @version            - 1.0.0
 * @description        -
 * @param {*} array    - input array
 *
 * ---Example---
 *
 * ---Algorithm---
 *
 * ---Time Complexity---
 * O(n) --> linear
 *
 * Space Comlexity
 * O(n) --> linear
 */
const arrayOfProducts = (array) => {
  const result = [1, 1, 1, 1, 1];
  let leftRunningProduct = 1,
    rightRunningProduct = 1;

  if (array.length < 1) return array;

  // iterate left to right
  for (let index = 0; index < array.length; index++) {
    result[index] = leftRunningProduct;
    leftRunningProduct *= array[index];
  }

  //   iterate right to left
  for (let index = array.length - 1; index >= 0; index--) {
    result[index] *= rightRunningProduct;
    rightRunningProduct *= array[index];
  }

  return result;
};

const array = [1, 2, 3, 4, 5]; // [ 120, 60, 40, 30, 24 ]
console.log(arrayOfProducts(array));

/**
 * Alternative solution
 * @param {*} array
 *
 * find the product of all elements
 * iterate through and divide product by each element
 * O(n) time | O(n) space
 */

const alternativeArrayOfProduct = (array) => {
  const product = array.reduce((accumulator, value) => accumulator * value);
  return array.map((item) => product / item);
};

console.log(alternativeArrayOfProduct(array)); // [ 120, 60, 40, 30, 24 ]

/**
 * UTILITY
 * get product of an array
 * @param {*} array
 */
const product = (array) =>
  array.reduce((accumulator, value) => accumulator * value);
console.log(product(array)); // 120
