/**
 * asyncAwati.js    - A program to demonstrate uses of async() await() in JavaScript.
 * @author          - Ratna Lama
 * @version         - 1.0.0
 * @description     - Async / Await makes your code look synchronous, and in a way that it makes it behave
 *                    more shynchronously. The await keyword blocks execution of all the code that follows it
 *                    until the promise fulfills, exactly as it would with a synchronous operation.  It
 *                    does allow other tasks to continue to run in the meantime, but the awaited code is blocked.
 *
 */

const { reset } = require('nodemon');

// Example - Synchronous code
function otherFunction() {
  console.log('This is other function');
}

console.log('I am First'); // I am First
otherFunction(); // This is other function
console.log('I am Second'); // I am Second
console.log('\n-------------------------------------------');

// Example - Asynchronous code
// Even though setTimeout is supposed to take 0 seconds, due to ashynchronous nature,
// It will be executed the last.
setTimeout(() => {
  console.log('Hello, I was late');
}, 0);

console.log('I am the first one at line');
console.log('I was the second one at the line');
console.log('\n-------------------------------------------');

// Async / Await
// async function fetchUsers() {
//   const res = await setTimeout();
//   console.log(res);
// }
// try {
//   fetchUsers();
// } catch (e) {
//   console.log(e);
// }

/**
 * Callbacks, Promises & Async/Await
 */

// imagine a fucntion like a machine(toaster machine) that takes some input (bread),
// you press the function button then machine does its work and return the results.
function add(x, y) {
  return x + y;
}

const me = add; // make reference to the function add in memory
me(1, 2); // 3 --> equivalent to me pressing the button on --> referencing the function add in memory and executing it.

// JavaScript can take function as an input parameter and also return function
function addTen(x, addReference) {
  return addReference(10, x);
}

console.log(addTen(5, add)); // 15

/**
 * higherOrderFunction --> takes in function as an argument
 * callBack function --> function that is passed as an argument to higherOrder function is called callback function
 */
function higherOrderFunction(x, callback) {
  return callback(5, x);
}

console.log(higherOrderFunction(10, add)); // 15
