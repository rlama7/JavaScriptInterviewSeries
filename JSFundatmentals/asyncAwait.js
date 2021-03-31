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
 * Callbacks
 */

// imagine a function like a machine(toaster machine) that takes some input (bread),
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
 * callBack function --> function that is passed as an argument to higherOrder function is called callback function,
 * which is then invoked inside the outer function to complete some kind of routine action.
 */
function higherOrderFunction(x, callback) {
  return callback(5, x);
}

console.log(higherOrderFunction(10, add)); // 15

console.log('\n-----------------PROMISES--------------------------');

/**
 * Promises
 * states:
 *  #1 Pending - default - initial state
 * #2 Fulfilled - success -> promise is fulfilled
 * #3 Rejected - sth is wrong --> promise is rejected
 *
 */

function onSuccess() {
  console.log('Success!');
}

function onError() {
  console.log('Awrr... sth... went wrong1');
}

// Create a Promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(); // promise is fulfilled
    // reject(); // promis is rejected
  }, 2000);
});

// Change the status of a promise

// Listen for when the status of a promise changes
// --> when the promise is resolved the function passed to .then() will be invoked
// --> when the promise is rejected the function passed to .catch() will be invoked
promise.then(onSuccess);
promise.catch(onError);

// .then() and .catch() wraps promises so we can do promise chaining
function getPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 3000);
  });
}

function logA() {
  console.log('A');
}

function logB() {
  console.log('B');
}

function logCAndThrow() {
  console.log('C');
  throw new Error();
}

function catchError() {
  console.log('Error!');
}

// promise chaining
getPromise().then(logA).then(logB).then(logCAndThrow).catch(catchError); // A B C Error!

console.log('\n------------------ASYNC/AWAIT-------------------------');

/**
 * Async/Await
 */

// Example #1
async function hello(name) {
  return 'Hello ' + name;
}
hello('Sam').then((val) => console.log(val));

// Example #2
let helloName = async (name) => {
  return 'Hello ' + name;
};
helloName('Peter').then((val) => console.log(val));

// Example #3
const getName = (name) => `Greeting ${name}.`;
const getAge = (age) => `I'm ${age} years old.`;
// setTimeout(getName, 3000);
// setTimeout(getAge, 4000);

const personInfo = async () => {
  try {
    const name = await setTimeout(getName, 3000, 'John');
    const age = await setTimeout(getAge, 4000, 21);
    return { name, age };
  } catch (error) {
    console.log(error);
  }
};

console.log(personInfo());

console.log('\n-------------------------------------------');
