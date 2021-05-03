/**
 * Prototype in Javascript is a property on a function that points to the Object
 * The benefit of prototype is that instead of having to manage the shared methods
 * in a separate class/function for that matter, we can use the prototype type within
 * the same class and share the commonly used methods all the instances of the same class.
 *
 * In the following example, for Animal class, all the instances of this class
 * will share the common methods such as eat/sleep play and if we add any other
 * methods in the future, those will be readily available to the instances.
 *
 * ... continuation from prototype2.js
 * Instead of delegating all the methods to the animalMethods in prototype2.js
 * Now we are delegating to the Animal.prototype.
 *
 * Observer #1 & #2 are critical for Object instantiation
 *
 * We'll use the JavaScripts built in approach to futher simplify this .
 *
 */

// constructor function
function Animal(name, energy) {
  //# 1 actually create the animal instce
  let animal = Object.create(Animal.prototype);
  animal.name = name;
  animal.energy = energy;

  // #2 return the animal create
  return animal;
}

Animal.prototype.eat = function (amount) {
  console.log(`${this.name} is eating`);
  this.energy += amount;
};

Animal.prototype.sleep = function (length) {
  console.log(`${this.name} is sleeping`);
  this.energy += length;
};

Animal.prototype.play = function (length) {
  console.log(`${this.name} is playing`);
  this.energy += length;
};
