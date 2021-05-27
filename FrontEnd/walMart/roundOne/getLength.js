/**
 * #1
 * Create a function named getLength which takes a string as an argument
 * and returns the length of the string:
 *
 * --->Example<---
 * INPUT: getLength('foo')
 * OUTPUT: 3
 *
 * INPUT: getLength('hello')
 * OUTPUT: 5
 *
 * @param {*} string input string
 */

const getLength = (string) => {
  // for undefined and null as an input return some message | -1;
  if (string === undefined || string === null) return -1;

  // if input is not a string then return message
  if (typeof string !== 'string')
    return 'Please enter a valid string as an input and Try again!';

  return string.length;
};

console.log(getLength('')); // 0
console.log(getLength(undefined)); // -1
console.log(getLength(null)); // -1
console.log(getLength(123456)); // Please enter a valid string as an input and Try again!
console.log(getLength('foo')); // 3
console.log(getLength('hello')); // 5
