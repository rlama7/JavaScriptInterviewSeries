// Defaulf Param

'use strict';

// ES5

function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    lastName === undefined ? lastName = 'Smith' : lastName=lastName;
    nationality === undefined ? nationality = 'american': nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
console.log(john);

var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
console.log(emily);

// ES6
function Person (firstName, yearOfBirth, lastName='Smith',  nationality='America') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var dave = new Person('Dave', 1990);
console.log(dave);

var jane = new Person('Jane', 2000, 'Tong', 'Irish');
console.log(jane);