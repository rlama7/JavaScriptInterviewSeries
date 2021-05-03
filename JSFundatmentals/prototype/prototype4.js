/**
 * Now let's see what happens if we instance an object with 'new keyword'
 *
 * Using new keyword will change the two critical areas noted #1 & #2 that
 * is commented out below
 *
 * #1 --> creates object with delegation to parent AnimalInstantiatedWithNew.prototype
 * #2 --> returns the animal instance
 *
 * IMPLICIT Returns
 *
 *
 */

// constructor function
function AnimalInstantiatedWithNew(name, energy) {
  //   let animal = Object.create(AnimalInstantiatedWithNew.prototype);

  // implicit returns :
  // let this= Object.create(AnimalInstantiatedWithNew.prototype)
  // then we can use this to reference the anial instance so

  //   animal.name = name;
  this.name = name;

  //animal.energy = energy;
  this.energy = energy;

  //   return animal;
  // return this <--- done IMPLICITLY thus commented out
}

// create prototype methods
AnimalInstantiatedWithNew.prototype.eat = function (amount) {
  console.log(`${this.name} is eating`);
  this.energy += amount;
};
AnimalInstantiatedWithNew.prototype.sleep = function (length) {
  console.log(`${this.name} is sleeping`);
  this.energy += length;
};
AnimalInstantiatedWithNew.prototype.play = function (length) {
  console.log(`${this.name} is playing`);
  this.energy -= length;
};

const lunar = new AnimalInstantiatedWithNew('Lunar', 10);
console.log(lunar);
lunar.eat(10);
lunar.sleep(3);
lunar.play(10);
console.log(lunar);
/**
 * Lunar is eating
Lunar is sleeping
Lunar is playing
AnimalInstantiatedWithNew { name: 'Lunar', energy: 13 }
 */

// Next we'll explore ES6 -2015 JavaScript class
