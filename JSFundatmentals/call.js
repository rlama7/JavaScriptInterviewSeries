/**
 * call.js      - A program to demonstrate use case of call() method.
 * @author      - Ratna Lama
 * @version     - 1.0.0
 * @description - The call() allows for a function/method belonging to one object to be assigned and called
 *                for a different object
 *                The call() method calls a function with a given this value and arguments provided
 *                individually.
 *                call() and apply() are used to write methods/functions separately and then
 *                associate with separate objects individually.
 *                Differences -
 *                call() can't be used with array item whereas apply() can be used with array.
 *
 */

// object #1
const person = {
  firstName: 'John',
  lastName: 'Doe',
  x: 20,
};

// object #2
const num = {
  x: 10,
};

// function #1
function fullName() {
  return this.firstName + ' ' + this.lastName;
}

// fucntion #2
let sum = function (a, b, c) {
  return this.x + a + b + c;
};

console.log(fullName.call(person)); // // John Doe
console.log('call() applied to person object -> ' + sum.call(person, 1, 2, 3)); // 26
console.log('----------------------------------------------------');
console.log('call () applied to num object --> ' + sum.call(num, 1, 2, 3)); // 16
console.log(fullName.call(person)); // John Doe
