// Inheritance 

'use strict';

// ES5 
/**
 * 
 * @param {*} name 
 * @param {*} yearOfBirth 
 * @param {*} job 
 * 
 
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calcAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medal) {
    Person5.call(this, name, yearOfBirth, job); 
    this.olympicGames = olympicGames;
    this.medal = medal;
}


Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medal++;
    console.log(this.medal);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
console.log(johnAthlete5);
console.log(johnAthlete5.calcAge());
console.log(johnAthlete5.wonMedal());

*/

// ES6
// 
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calcAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

// sub class
class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGame, medal) {
        super(name, yearOfBirth, job);
        this.olympicGame = olympicGame;
        this.medal = medal;
    }
    wonMedal() {
        this.medal++;
        console.log(this.medal);
    }
}

const john = new Person6('John', 1990, 'dancer');
console.log(john);
john.calcAge();

const jen = new Athlete6('Jen', 1990, 'swimmer', 3, 10);
console.log(jen);
jen.calcAge();
jen.wonMedal();