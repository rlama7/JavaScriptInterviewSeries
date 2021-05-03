/**
 * ES6 JavaScript class
 *
 */

class Animal {
  constructor(name, energy) {
    // properties
    this.name = name;
    this.energy = energy;
  }
  // methods
  eat(amount) {
    console.log(`${this.name} is eating...`);
    this.energy += amount;
  }
  sleep(length) {
    console.log(`${this.name} is sleeping...`);
    this.energy += length;
  }
  play(length) {
    console.log(`${this.name} is playing...`);
    this.energy -= length;
  }
}

const leo = new Animal('Leo', 10);

leo.eat(10);
leo.sleep(2);
leo.play(5);
console.log(leo);
/**
 *
 * Leo is eating...
 * Leo is sleeping...
 * Leo is playing...
 * Animal { name: 'Leo', energy: 17 }
 *
 */

/**
 * get the prototype of object's instance
 */
const proto = Object.getPrototypeOf(leo);
console.log(proto === Animal.prototype); // true

console.log(leo.hasOwnProperty('name'));
console.log(leo.hasOwnProperty('sleep'));

// check if the instance belongs to a particular class

function User() {}

console.log(leo instanceof Animal); // true
console.log(leo instanceof User); // false

// arrow doesn't have this binding
// therefore we can't use to create a contructor function
// therefore we can't use new keyword with arrow function
const AnimalWithArrow = () => {};
const leoNew = new AnimalWithArrow();
console.log(leoNew.prototype); // TypeError: AnimalWithArrow is not a constructor
