/**
 * productofArrayExceptSelf.js      - A program to calculate product of an array except self.
 * @author                          - Ratna Lama
 * @version                         - 1.0.0
 * @description                     - Given an array (arr), return an output (arrProduct) such that the
 *                                    output is equal to the product of all the elements of array (arr)
 *                                    except arr[i].
 *
 * RESTRICTIONS:
 * - solve it without division
 * - solve it in O(n) time complexity.
 * - Solve it with O(1) time complexity.
 *
 * Example -
 * Input:   [5,   2,       3,      4]
 * Output:  [24,   60,      40,     30]
 *          /      |        /       |
 *      (2*3*4)  (5*3*4)  (5*2*4)  (5*2*3)
 *
 * Time Complexity: O(n) --> Linear
 * Space Complexity: O(1) --> Constant
 */
const productOfArrayExceptSelf = (arr) => {
  // find the product
  const product = arr.reduce((a, b) => a * b);

  // map over the each product and divide by the number --> 120 /[5,2,3,5]
  return arr.map((item) => product / item);
};

const arr = [5, 2, 3, 4];
console.log(productOfArrayExceptSelf(arr)); // [24, 60, 40, 30]
console.log('reduce ' + arr.reduce((a, b) => a * b));

module.exports = productOfArrayExceptSelf;
