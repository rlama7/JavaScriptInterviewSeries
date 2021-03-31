/**
 * serialization.js     - A program to demonstrate usage of serialization and deserialization in JavaScript.
 * @author              - Ratna Lama
 * @version             - 1.0.0
 * @description         - Serialization is the process whereby an object or data structure is translated into a
 *                        format suitable for transferral over a network, or storage (in an array buffer format, or
 *                        file format).
 *                        JSON.stringify() is used to serialize an objec to JSON string by calling the function.
 *
 *
 *                        Deserialization is the process whereby a series of bytes are converted to an in-memory
 *                        data structure that can be consumed programmatically.
 *                        JSON.parse() is used to deserialize a JSON string, constructing the JavaScript value
 *                        or object described by the string. An optional reviver function can be performed on the
 *                        resulting object before it is returned.
 *
 */
const person = {
  firstName: 'Ray',
  lastName: 'Love',
  DOB: '01/01/2000',
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  age: function () {
    let today = new Date();
    let dateOfBirth = new Date(this.DOB);
    return today.getFullYear() - dateOfBirth.getFullYear();
  },
};

// SERIALIZATIOn

console.log(`Hi! I'm ${person.fullName()} and I'm ${person.age()} years old.`); // Hi! I'm Ray Love and I'm 21 years old.

console.log('person object BEFORE serialization: ');
console.log(person);
/**
 * {
  firstName: 'Ray',
  lastName: 'Love',
  DOB: '01/01/2000',
  fullName: [Function: fullName],
  age: [Function: age]
}
 */

console.log('\nperson object AFTER serialization: ');
const serializedPersonObj = JSON.stringify(person);
console.log(serializedPersonObj); // {"firstName":"Ray","lastName":"Love","DOB":"01/01/2000"}

// DeSERIALIZATIOn
console.log('\nperson object AFTER deSerialization: ');
const deserializedPersonObj = JSON.parse(serializedPersonObj);
console.log(deserializedPersonObj);
