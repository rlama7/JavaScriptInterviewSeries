/**
 * this.js      - A program to demonstrate usage of 'this' keyword in JavaScript.
 * @author      - Ratna Lama
 * @version     - 1.0.0
 * @description - 'this' keyword allows us which object to be the focal point when invoking
 *                 any function or methods. In other words, 'this' keyword enables us to make use
 *                 of various functions and methods with different context.
 *
 *                 Usage Scenario -
 *                 Imagine we've bunch of objects with similar functionality. In such case in case of
 *                 repeating similar functions for each objects, we can have one common function across
 *                 multiple objects and we could use the function for each different object.
 *
 */

/**
 * 'this' in the context of binding namely -
 *  - Implicit Binding
 *  - Explicit Binding
 *  - new Binding
 *  - window Binding
 */

/**
 * Implicit Binding - Left of the Dot At Call Time
 * Ask where is this function invoked --> then look to the Left of the DOT at call time
 * to find the 'this' reference.
 */

// Example #1
console.log(
  '\n-----------------------Implicit Binding Example-------------------------------'
);
const taylor = {
  name: 'Taylor',
  age: 25,
  greet: function () {
    console.log('Greeting ' + this.name);
  },
};

const katie = {
  name: 'Katie',
  age: 21,
  greet: function () {
    console.log('Greeting! ' + this.name);
  },
};

// Implicit binding of 'this' --> look to the left where the function is invoked to find
// which object is being called upon.
taylor.greet(); // Greeting! Taylor
katie.greet(); // Greeting!  Katie
console.log('------------------------------------------------------');

// Example #2
// constructor function
const Candidate = function (name, age) {
  return {
    name, // ES6 name: name
    age, // ES6 age: age
    greet: function () {
      console.log('Greeting! ' + this.name);
    },
    mother: {
      name: 'Stacey',
      greet: function () {
        console.log('Greeting! ' + this.name);
      },
    },
  };
};

const jim = Candidate('Jim', 45);
console.log(jim);
/**
 * {
  name: 'Jim',
  age: 45,
  greet: [Function: greet],
  mother: { name: 'Stacey', greet: [Function: greet] }
}
 */
jim.greet(); // Greeting! Jim --> jim object is being referenced here!
jim.mother.greet(); // Greeting! Stacey -->

console.log(
  '\n-----------------------Explicit Binding Example-------------------------------'
);

/**
 * Explicit Binding of 'this' keyword using call(), apply() and bind()
 */
const greet = function (lang_1, lang_2, lang_3) {
  console.log(
    `Greeting! ${this.firstName} ${this.lastName}. I can speak  ${lang_1}, ${lang_2}, and ${lang_3}.`
  );
};

const boss = {
  firstName: 'Ray',
  lastName: 'Love',
};

const employee = {
  firstName: 'Ashley',
  lastName: 'Bradford',
};

const languages = ['JavaScript', 'Java', 'Python'];

// call()
console.log('\n----------------------call()-------------------------------');
greet.call(boss, languages[0], languages[1], languages[2]); // Greeting! Ray Love I can speak  JavaScript, Java, and Python.

greet.call(employee, languages[0], languages[1], languages[2]); // Greeting! Ashley Bradford I can speak  JavaScript, Java, and Python.

// apply()
console.log('\n----------------------apply()-------------------------------');

greet.apply(boss, languages); // Greeting! Ray Love. I can speak  JavaScript, Java, and Python.

greet.apply(employee, languages); // Greeting! Ashley Bradford. I can speak  JavaScript, Java, and Python.

// bind()
// while call() and apply() immediately invoke functions being called,
// bind() returns functions which can be subsequently invoked
console.log('\n----------------------bind()-------------------------------');
const newGreetingBoss = greet.bind(
  boss,
  languages[0],
  languages[1],
  languages[2]
);
const newGreetingEmployee = greet.bind(
  employee,
  languages[0],
  languages[1],
  languages[2]
);

// Invoke return greeting functions:
newGreetingBoss(); // Greeting! Ray Love. I can speak  JavaScript, Java, and Python.
newGreetingEmployee(); // Greeting! Ashley Bradford. I can speak  JavaScript, Java, and Python.

console.log(
  '\n----------------------new Binding()-------------------------------'
);
/**
 * new Binding()
 * when an object is contructed using 'new' keyword, behind the scene, JavaScript
 * will create an object and 'this' will reference this newly created object
 */
const Animal = function (animalName, type, color) {
  // this = {---> reference the instance of Animal which is zebra in this case}
  this.animalName = animalName;
  this.type = type;
  this.color = color;
};

const zebra = new Animal('Zuba', 'Zebra', 'black and white');
console.log(zebra);
/**
 * Animal { animalName: 'Zuba', type: 'Zebra', color: 'black and white' }
 * */

console.log(
  '\n----------------------window Binding()-------------------------------'
);
/**
 *
 */

const getAge = function () {
  console.log(this.age);
};

const me = {
  age: 25,
};

getAge(); // undefined <-- this
age = 21;
getAge(); // 21
