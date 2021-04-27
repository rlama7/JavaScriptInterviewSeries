/**
 * isNaN.js     - A program to determine whether a value is NaN (Not-A-Number)
 *                or not.
 * @param {*} value to be tested.
 * @author      - Ratna Lama
 * @version     - 1.0.0
 * @description - Unlike all other possible values in JavaScript, it is not
 *                possible to use the equality operators (== and ===) to compare
 *                a value againset NaN to determine whether the value is NaN or not,
 *                because both NaN==NaN and NaN===Nan evaluate to false. Hence the
 *                necessity of an isNan function.
 *
 *                NaN values are generate when arithmetic operations result in
 *                undefined or unrepresentable values. Such values do not necessarily
 *                represent overflow conditons. A NaN also results fro attempted
 *                coercion to numeric values of non-numeric values for which no
 *                primitive numeric value is available.
 *
 *                For example - 0/0 results in a NaN - but 5/0 does not result in NaN.
 *
 */
const isNotANumber = (value) => {
  if (isNaN(value)) {
    return 'Not a Number!';
  }
  return value * 100;
};

console.log(isNotANumber(100)); // 10000
console.log(isNotANumber(0 / 0)); // Not a Number!
console.log(isNotANumber()); //Not a Number!

/**
 * UTILITY
 */

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

console.log(0 / 0); // NaN
console.log(5 / 0); // Infinity
console.log(0 / 7); // 0
