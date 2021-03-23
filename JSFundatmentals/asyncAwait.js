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
async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
}
fetchUsers();
