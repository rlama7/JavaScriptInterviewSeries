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
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

console.log(person.fullName());
