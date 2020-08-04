/**
 * Object Oriented Programming OOP
 * 
 * 4 Pillars of OOP are:
 * Encapsulation
 *      --> group related variables called properties and function called
 *          methods into one to reduce complexity and increase reusability
 *      --> hide properties
 *      --> hide methods
 * Abstraction: 
 *      --> think of radio buttons
 *      --> the complexity is hidden inside and the user can
 *      --> interact with the device withouht needing to know 
 *      --> the underlying workiing mechanisms of a radio
 *      --> reduces complexity + isolate impact of changes
 * 
 * Inheritance
 *      --> help write code with DRY principle 
 *      --> remove redundancy
 * Polymorphism
 *      --> poly -> many  morph -> form ==> Many form
 *      --> 
 * 
 */
'use strict';

// Creating Objects using Object literals
const circle1 = {
    radius: 3,
    location: {
        x: 2,
        y: 4
    },
    draw: function() {
        console.log(`drawing a circle with radius = ${this.radius}`);
    },
};
circle1.draw();


// Creating Objects using Factories 
function createCircle(radius) {
    return {
        radius,     // ES6 radius:radius when properties name and assignment are same can be reduced to a single name
        draw: function() {
            console.log(`drawing another circle with radius = ${radius}`);
        }
    }
}
const circle2 = createCircle(5);
circle2.draw();

// Creating Objects using Contructors
function Circle(radius) {
    // abstraction - defaultLocation and computeOptimumLocation - 
    // these are implementation details that the 
    // user doesn't need to know therefore hide implementations details
    // ES6: use let and const to make properties unaccessible from outside since let and const 
    // creates a block scope 
    let defaultLocation = { 
        x: 0,
        y: 0
    }
    const computeOptimumLocation = function() {
        console.log(`computing optimum locaiton to draw my circle at ${defaultLocation.x}, ${defaultLocation.y}`);
    }

    // the following are member proerties accessible from outside so exposed.
    this.radius = radius;

    // colsure - inner function has the access to the outer variables
    // with closures global variables can be made local(private)
    // a closure is a function having access to the parent scope, even
    // after the parent function has closed.
    this.draw = function() {
        computeOptimumLocation(); // access directly 
        console.log(`drawing yet another circle with radius = ${this.radius}`);
    }

    // getters --> read value
    this.getDefaultLocation = function() {
        return defaultLocation;
    }

    // Alternatively Equivalent
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(val) {
            if(!val.x || !val.y) {
                throw new Error('Invalid location...');
            }
            defaultLocation = value;
        }
    });

    // setters --> set value

}
const myCircle = new Circle(7);
myCircle.draw();

// Properties and Methods can be attache as and when deemed necessary and doesn't have to be pre-defined
myCircle.primaryColor = {
    color: 'red'
}
console.log(`circle primary color: ${myCircle.primaryColor.color}`);

// equivalently we can use [bracket notation]
let secondaryColor = {color: 'yellow'};
myCircle['secondaryColor'] = {color: 'blue'};  // equivalent to dot notation!
console.log(`circle secondary color: ${myCircle['secondaryColor']['color']}`);

// iterate an object
for (let key in myCircle) {
    console.log(`properties in my circle:\n ${key}: ${myCircle[key]}`);
}

// obtain just the properties and not methods
for (let prop in myCircle) {
    if(typeof myCircle[prop] !== 'function') {
        console.log(`Properties Only of my circle:\n ${prop}: ${myCircle[prop]}`);
    }
}

// obtain all keys in Object
const keys = Object.keys(myCircle);
console.log(`List of keys in my circle:\n ${keys}`);

// check property in an object
let prop = 'radius';
if(prop in myCircle) {
    console.log(`My circle has ${prop} property`);
} else {
    console.log(`${prop} property is missing`)
}

// getters
console.log(`my circle's default location1 ->\n 
x: ${myCircle.getDefaultLocation().x}, 
y: ${myCircle.getDefaultLocation().y}`);

// using alternative getters
console.log(`my circle's default location2 ->\n 
x: ${myCircle.defaultLocation.x}, 
y: ${myCircle.defaultLocation.y}`)

// setters

/**
 * Primitives and Referece Types
 * 
 * Value Types: Number, String, Boolean, Symbol, undefined, null
 * Primitieves are copied by their value
 * 
 * Reference Types: Object, Function, Array
 * Objects are copied by their references - copies the address of the object in the memory 
 * and not what's inside the memory
 * 
 */

// Copy by Value Example
let x = 100;
let y = x;  // Copy by value === exact copy of x
x = 999;   // doesn't affect y because x and y are indepenent so when x change at later time y doesn't know
console.log(`x: ${x}`); // 999
console.log(`y: ${y}`); // 100

// Copy by Reference Example - shallow copy
const a = {
    value: 333,
}
let b = a;  // here 'b' points to the --> memory address of 'a' and not value itself
a.value = 777;  // a's value has changed which 'b' has the reference to therefore 'b' knows what value inside 'a' changed
console.log(`b: ${b.value}`);
console.log(`a: ${a.value}`);

// Working with Properties
// Private Properties
// Getters and Setters
