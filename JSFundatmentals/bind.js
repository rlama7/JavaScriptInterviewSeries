/**
 * bind.js      - A program to demonstrate implementation of bind() method.
 * @author      - Ratna Lama
 * @version     - 1.0.0
 * @description - The bind() method creates a new function that, when called, has its this
 *                keyword set to the provided value, with a given sequence of arguments preceding
 *                any provided when the new function is called.
 *
 */

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
};

const fullName = function (a, b, c) {
  return this.age + a + b + c;
};

// bind fullName() to person object
const bindFullNameToPersonObj = fullName.bind(person);

console.log(bindFullNameToPersonObj); // [Function: bound fullName]

// execute the bindFullNameToPersonObj function () --> supply arguments since
// this bounded fucntion will  be calling fullName() function

console.log(bindFullNameToPersonObj(1, 2, 3)); // 26 --> 20+1+2+3
