/**
* JS Engine:  Behind the Scene
*/

/**
 * #1 JS engine parses and executes program.
 * Code --> Parser --> (Abastract syntax Tre) --> Conversion to Machine Code --
 * --> (Machine readable code) --> Code execution 
 */


/**
 * #2 Execution Contexts
 * (Imagine a box, a container, or a wrapper which stores variables and in which 
 * a peice of our code is evaluated and executed)
 * 
 * THE DEFAULT --> Global execution Context
 * - code that is not inside any function
 * - associated with the global object
 * - in the browser, that's the window object
 * - Ex: lastName === window.lastName;     
 */

let name = 'Taylor';

const first = () => {
    let a = 'Hello!';
    second();
    let x = a + name;
}

const second = () => {
    let b = 'Hi!';
    third();
    let z = b + name;
}

const third = () => {
    let c = 'Hey!';
    let z = c + name;
}

first();


/**
 * When Execution Context is created ---
 * 
 * |----
 * |----
 * |---- Execution Context --third() ---|
 * |---- Execution Context --second() --|
 * |---- Execution Context --first() ---|
 * |----
 * |---- Global Execution Context ------|
 */

/**
 * ------How Execution Context is Created------
 * 
 * 
 * |---- Execution Context Object ------|
 * 
 * |----                            ----|
 * |---- Variable Object (V)         ---|
 * |---- Scope Chain                  --|
 * |---- "This" variable             ---|
 * 
 */

/**
  * Creation phase
  * 
  * A) Creation of the Variable object (VO)
  *     - the argumnent object is created, containing all the arguments that were
  *       passed into the function
  *     - #1 code is scanned for function declarations: for each function, a property is created 
  *       in the Variable Object, pointing to the function.
  *     - #2 code is scanned for variable declartions: for each variable, a property is created in the Variable 
  *       Object, and set to undefined. 
  * 
  *     --> setp 1 and 2 are together known as Hoisting.
  * 
  * B) Creation of the scope chain
  * C) Determine value of "this" variable
  */

/** 
 * Hoisting in practice 
 * */

calcAge1(1999);     // doesn't generate error for function declarations.
function calcAge1(year) {
    console.log(new Date().getFullYear() - year); 
}



// calcAge2(1991); // doesn't work for function expression --> generates error

const calcAge2 = (year) => {
    console.log(new Date().getFullYear() - year);
}

// calcAge(1991); // works fine


// console.log(age); // generates error since variables are declared with undefined 
// during creation of the variable Object (VO)
let age = 21;


/**
 * Scoping in Js
 * 
 * - Scoping: where can we access a certain variable?
 * - each new function creates a scope: the space/environment, in which the variables 
 *   it defines are accessible.
 * - lexical scoping: a function that is lexically within another function gets access to the scope
 *   of the outer function.
 * 
 */

let a = 'Hello!'; // 
first1();       // <----------Global scope   

function first1() { // <---------scope #1
    let b = 'Hi!';
    second();

    function second() { // <---------scope #2
        let c = 'Hey!';
        third1();
    }
}

function third1() { // <---------scope #3
    let d = 'John';
    console.log(a+d);
}

/**
 * Execution stack Vs Scope Chain
 */

// Scope chain --> scope #3 ---> scope #2 --> scope #1 --> Global scope and NOT the other way around

// Execution stack --> Global Execution Context --> Execution context first() --> Execution Context second() --> 
// --> Execution context third() 






/** Execution phase 
 * 
 * The code of the funciton that generated the current execution 
 * context is ran line by line
 *
*/


/**
 * 'this' keyword
 * 
 * Regular function call: this keyword points at the global object (the window object, in the browser)
 * 
 * method call: this variable points to the object that is calling the method.
 * 
 * this keyword is not assigned a value until a funciton whwere it is defined is actually called.
 */
console.log(this); // defaults to window object


function calcAge3(year) {
    console.log(new Date().getFullYear() - year)
    // in a regualr function call, this points to window object
    console.log(this);
}
calcAge3(1991);


const person = {
    name: 'Taylor',
    yearOfBirth: 1999,
    calcAge: function() {
        // this here refers to person object
        console.log(this);
        // therefore when we use this.yearOfBirth it refers to person object's property.
        // Without this, yearOfBirth will be undefined and thus generate error
        console.log(new Date().getFullYear() - this.yearOfBirth);
        console.log(person.name); // is equivalent to saying this.name --> since 'this' here refers to person obj.
        console.log(this.name);

        /** 
        function innerFunction() {
            // this here refers to window object and not the person object.
            // since the regular function call --> 'this' refers to the window object
            console.log(this);
        }
        innerFunction();
        */
    }
}

person.calcAge();

const mike = {
    name: 'Mike',
    yearOfBirth: 2000,
};

// here we can create another calcage but for DRY principle we can
// borrow method from person object
// mike.calcAge = person.calcAge;
// mike.calcAge();