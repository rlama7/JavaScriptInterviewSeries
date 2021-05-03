/**
 * Javascript Inheritance and the Prototype Chain
 */

// create a contructor class
function Animal(name, energy) {
  let animal = {};
  animal.name = name;
  animal.energy = energy;

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

  return animal;
}

// Now we can create as many animal as we want using the construction function
const lunar = Animal('Lunar', 10);
lunar.eat(5);
lunar.sleep(3);
lunar.play(4);
console.log(lunar);
/**
 * Lunar is eating.
Lunar is sleeping.
Lunar is playing.
{
  name: 'Lunar',
  energy: 14,
  eat: [Function (anonymous)],
  sleep: [Function (anonymous)],
  play: [Function (anonymous)]
}

 */

// same with fargo
const fargo = Animal('Fargo', 5);

/**
 * The issue with the above approach of creating animal instance
 * is that on each instance we are recreating
 * its corresponding properties and methods
 * Such way of re-creating all properties and/or methods
 * for each instance won't be sustainable if we have a
 * large code base
 *
 * Options #1 let's move the methods that's shared across all
 * the instances to a separate class
 */
const animalMethods = {
  eat(amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
  },
  sleep(length) {
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
  },
  play(length) {
    console.log(`${this.name} is playing.`);
    this.energy -= length;
  },
};

/**
 * Next let's reference this animalMethods in the Animal class
 * This way every time we create a new instance of class Animal2
 * then we'll create the methods in animalMethods only once in
 * the memory then we 'll simply reference those every time
 * we create a new instace of the Animal2 type is created
 *
 * However this way creates another drawbacks that is if we need to
 * add any new methods to the Animal methods then we'll
 * need to associate that in the Animal2 type and if not
 * we won't be able to access the methods created in animalmethods.
 */

function Animal2(name, energy) {
  let animal = {};
  animal.name = name;
  animal.energy = energy;
  animal.eat = animalMethods.eat;
  animal.sleep = animalMethods.sleep;
  animal.play = animalMethods.play;
  return animal;
}

// Object.create - delegation
const parent = {
  name: 'Ray',
  age: 21,
  heritage: 'Irish',
};

// use Object.create so the child sort of inherit properties from parent
// by delegation
const child = Object.create(parent);
child.name = 'Ryan';
child.age = 7;

console.log(child); // { name: 'Ryan', age: 7 }

// Even thoug the child doesn't have heritage property defind
// we can see his heritage as Irish
// becuase since we assigned parent during child creation,
// when the property is not found in the child, JS will lookup
// in the parent and if found will return that instead
console.log(child.heritage); // Irish

/**
 * we can use this Object.create(parent) to delegate property
 * function lookup from the parent when needed in the child class
 * let's create Animaltype3 and use this strategy
 *
 * In the following example for Animal3, we assigned Object.create(animalMethods)
 * so if we add or remove any methods we will be automatically
 * reference those methods since
 * any methods not found in the child will be delegated to the parent which
 * in this case is the animalMethods
 *
 * */
function Animal3(name, energy) {
  let animal = Object.create(animalMethods);
  animal.name = name;
  animal.energy = enery;
  return animal;
}

// we'll modify further using the concept of prototype in prototype3.js
