/**
 * once.js      - A program to implement a function that can be called only one.
 * @author      - Ratna Lama
 * @version     - 1.0.0
 * @description - A function can be called any number of time but will only execute once.
 *                Do not USE third party library such as ramda/underscore but Implement yours own.
 */
function sum(a, b) {
  return a + b;
}

function foo() {
  foo = function () {}; // kill it as soon as it was called
  console.log('Once and Done!');
  let res = sum(7, 5);
  console.log('result is -> ' + res);
}

foo();
foo();
foo();
