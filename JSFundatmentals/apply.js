/**
 * apply.js     - A program to demonstrate use case of the apply() method.
 * @author      - Ratna Lama
 * @version     - 1.0.0
 * @description - The apply() method calls a function with a given this value, and arguments
 *                provided as an array (or an array-like object).
 *                Differences between call() and apply():
 *                - call() accepts an argument list,
 *                - apply() accepts a single array of arguments.
 */

// object #1
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

// object #2
const employee = {
  firstName: 'Ashley',
  lastName: 'Madison',
  age: 25,
  gender: 'F',
};

// function #1
function sum(a, b, c) {
  return this.age + a + b + c;
}

// apply sum to the person object
const num1 = [1, 2, 3];
console.log('\n-------------------APPLY-----------------------');
console.log('apply() applied to person object -> ' + sum.apply(person, num1)); // 36 --> 30+1+2+3
console.log(
  'apply() applied to employee object -> ' + sum.apply(employee, num1)
); // 31 --> 25+1+2+3

// min/max number in an array
const numbers = [4, 9, 6, 3, 19, 11, 7];

// Min Max cannot be directly applied to array

// option #1 spread operator
console.log('\n-------Finding Min/Max----OPTION#1----Using Spread Operator---');
let min = Math.min(...numbers);
let max = Math.max(...numbers);
console.log(numbers);
console.log(`Min number is: ${min}`);
console.log(`Max number is: ${max}`);

// option #2 apply
console.log('\n-------Finding Min/Max----OPTION#2----Using APPLY()---');
function getMaxOfArray(num) {
  return Math.max.apply(null, num);
}

function getMinofArray(num) {
  return Math.min.apply(null, num);
}
console.log(
  'apply() applied to numbers array to find Max -> ' + getMaxOfArray(numbers)
); // 19
console.log(
  'apply() applied to numbers array to find Min -> ' + getMinofArray(numbers)
); // 3

console.log('\n-------------------CALL-----------------------');
console.log(
  'call() applied to person object -> ' + sum.call(person, 5, 10, 15)
); // 60 --> 30+5+10+15
console.log(
  'call() applied to employee object -> ' + sum.call(employee, 5, 10, 15)
); // 55 --> 25+5+10+15
