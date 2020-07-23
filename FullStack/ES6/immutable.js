/**
 * Immutable --> once it's created it cannot be changed.
 * Persistent
 * Persistent Immutable Data Structure
 * LIST -->
 * MAP --> 
 */

//  'use strict';

 // primitive const variable is immutable 
 const foo = 123;
 // following will generate error
//  foo = 321;
//  console.log(foo);

// an object declared with const keyword is mutable. This happens because 
// the new object points to the same object but the properties of the object can be changed
const person = {
    name: 'Amy',
    address: '123 Main St',
    age: 21
}

// person.prototype.toString = function() {
//     return JSON.stringify(this);
// }
// Before
console.log(person);
console.log(`Before: ${JSON.stringify(person)}`) // stringify object to pretty print

// After Mutation
person.name = 'Ben';
person.address = '321 New St';
console.log(person);

// However following will throw an error since variables declared with const can't be reassigned
let anotherPerson = {
    name: 'Tammy',
    address: '111 Hope St',
    age: 31
}

// error
// person = anotherPerson;
// console.log(person);

let thirdPerson = person;
console.log(`third Person: ${JSON.stringify(thirdPerson)}`);


// Object properties are mutable because object's properties are not part of the 
// reference and has no bearing on what the object properties are, and only where the 
// object itself lives.

// Object freeze --> prevents properties being mutable only on a single layer. However, 
// if the object has nested object then object freeze won't resolve the issue entirely

// iterates over the properties of the object and freezes them recursively essentially creating 
// immutable objects
Object.freeze(person); 
// person.age = 100;


// generates error when used in strict mode 'use strict';
console.log(`Person object's age doesn't change: ${JSON.stringify(person.age)}`);

// Creating immutable objects containing neste objects
const deepFreeze = (obj) => {
    // freeze the first level object's properties
    Object.freeze(obj);

    // iterate over the properties of the object and freeze them recursivley
    Object.keys(obj).forEach((key, value) => {
        if (typeof obj[key] === 'object') {
            deepFreeze(obj[key]);
        }
    });
};


const nestedPerson = {
    name: 'foo',
    job: {
        description: 'engineer', 
        hobby: {
            likes: 'building new products'
        }
    }
}

nestedPerson.job.hobby.likes = 'fly kites';
console.log(nestedPerson);

const frozenNestedPerson = deepFreeze(nestedPerson);

// following wiil generate error with 'use strict' mode enabled 
nestedPerson.job.hobby.likes = 'swimming';
console.log(nestedPerson);


// iterate through the key values of object --> level1 
console.log('\n----------------Level 1 Object KEY-->VALUE iteration --------------------')

for (const[key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}

// iterate through the key values of Object ---> Nested deep level
console.log('\n----------------deep nested level Object KEY-->VALUE iteration --------------------');
const deepNestedIteration = (obj) => {
    Object.keys(obj).forEach(key => {
        console.log(`key: ${key}, value:${obj[key]}`);

        if (typeof obj[key] === 'object') {
            deepNestedIteration(obj[key]);
        }
    });
}

const deepObjItr = deepNestedIteration(nestedPerson);
console.log(deepObjItr);