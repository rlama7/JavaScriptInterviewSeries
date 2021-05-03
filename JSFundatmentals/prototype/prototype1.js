/**
 * Javascript Inheritance and the Prototype Chain
 */

// create base animal object
let animal = {};

// add properties to animal object
animal.name = 'Leo';
animal.energy = 10;
console.log(animal); //{ name: 'Leo', energy: 10 }

// add methods to animal object
animal.eat = function (amount) {
  console.log(`${this.name} is eating.`);
  this.energy += amount;
};

animal.sleep = function (length) {
  console.log(`${this.name} is sleeping.`);
  this.energy += length;
};

animal.play = function (length) {
  console.log(`${this.name} is playing.`);
  this.energy -= length;
};

animal.eat(5);
animal.sleep(3);
animal.play(6);
console.log(animal);
