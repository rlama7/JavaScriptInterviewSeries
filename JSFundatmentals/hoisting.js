/**
 * hoisting.js      - A program to demonstrate implementation of hoisiting concept in JavaScript.
 * @author          - Ratna Lama
 * @version         - 1.0.0
 * @description     -
 */

// Example #1
var a = 5;
var xPrint = function () {
  console.log(a);
  var a = 10;
};

xPrint();
// undefined -> a is defined but value is not assigned

// Example #2
var p = 100;
var yPrint = function () {
  console.log(p);
  //   var p = 1;
};

yPrint(); // 100
// comment out line 22: var p = 1,
// then we'll have access to global scope p=100 therefore will display 100 becuase
// JS will look up for the value of p at line 19 so will fetch p=100 by the process
// known as hoisting.
// To avoid hoisting and get a block scope, we'll use 'let' & 'const' instead which are block scoped

// Example #3

/** 

let zPrint = function () {
  console.log(q);
  let q = 96; 
};
zPrint(); // should generate Error --> ReferenceError: Cannot access 'q' before initialization

*/

/** 
// Example #4 --> let & const
// in the case of let JS allocates memory for variable (hoisting is still beging applied to let and cost) 
// however it is
// not assigned 'undefined' value unlike in the case of var.
// thus it generates reference error

console.log(color);
let color = 'red';

*/

// Example #5 --> Temporal Dead Zone TDZ
// console.log(name);
// let name = 'Taylor Swift';

// line 57 should throw reference error becuase variable name is allocated memory space
// however unlike var, variables declared with let and const and are NOT automatically
// initialized with default value of 'undefined'
// Therefore if you try to access variable before iniitalization, this period,
// between declaration and initialization is known as Temporal Dead Zone (TDZ)
// and trying to access variable with console.log(name) --> will result in error.
