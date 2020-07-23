// Destructure

/** 
 * Destructure Array 
// ES5 
var john = ['John', 26];
var name = john[0];
var age = john[1];
console.log(name + ' is ' + age + ' years old.');

// ES6
const[name1, age1] = ['Jen', 21];
console.log(`${name1} is ${age1} years old.`);

*/


/** 
 * Destructure Object
 

 const person = {
     firstName : 'Dina',
     lastName : 'Jones',
     age : 21
 }

 // destructured variable matches key name of the object
 const {firstName, lastName, age} = person;
 console.log(`${firstName} ${lastName} is ${age} years old.`);

 // destructured variable is different thatn the key of the objet
 const {firstName:a, lastName:b, age:c} = person;
 console.log(`${a} ${b} is ${c} years old.`);

 */

 /**
  * returning multiple item from a function
  */
 const retirement = (year) => {
     const currentAge = new Date().getFullYear() - year;
     return [currentAge, 65 - currentAge];
 }

 const[age, retirementAge] = retirement(1990);
 console.log(`${age}:${retirementAge}`);