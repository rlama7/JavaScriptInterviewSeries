// classes

'use strict';



// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name,
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calcAge = function() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}
var john5 = new Person5('John', 1990, 'teacher');

console.log(john5);
// console.log(john5.calcAge(2000));
 
// ES6

class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calcAge() {
        let age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hey there!');
    }
}

const jen = new Person6('Jen', '2000', 'model');
console.log(jen);
console.log(typeof(jen));

Person6.greeting();


