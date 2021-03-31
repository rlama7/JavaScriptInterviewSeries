/**
 * executionContext.js  - A program to demonstrate usage/understanding of executin context in JavaScript.
 * @author              - Ratna Lama
 * @version             - 1.0.0
 * @description         - Execution context allows JavaScript Engine to manage the complexities of interpreting
 *                        JavaScript code just as functions and modules, import and exports allows developers to
 *                        manage complexity of JavaScript codes.
 *
 */

/**
 * Global Execution Context - when the JS engine first runs JavaScript code even when
 * there are no codes, the Global Execution Context is created.
 *
 *  Global Execution Context
 *
 *      - Phase I: Creation
 *          window: global object
 *          this: window
 *
 *      - Phase II: EXECUTION
 *          window: global object
 *          this: window
 */

// Example -
// console.log(getUser());
console.log(name1); // undefined
console.log(handle); // undefined

var name1 = 'Ray Love';
var handle = '@raylove';

function getUser() {
  return {
    name1, // ES6 name: name
    handle, // ES6 handle: handle
  };
}

console.log(getUser()); // { name: 'Ray Love', handle: '@raylove' }

/**
 * During CREATION PHASE 4 things happen:
 *      window global object is created
 *      this is created and is set to window global object
 *      variable defined with 'var' is set to 'undefined' value
 *      variable defined with 'let' and 'const' is NOT set to ANY value thus they can not be accessed before initialization
 *      function declaration is put in memory
 *
 *
 *
 * GLOBAL EXECUTION CONTEXT
 *
 *      Phase: Creation
 *
 *      window: global object
 *      this: window
 *      name: undefined
 *      handle: undefined
 *      getUser: fn()
 */

/**
 * HOISTING
 *
 * During CREATION phase of the EXECUTION CONTEXT
 * all variable defined with 'var' keyword is assigned default value of 'undefined'
 * This PROCESS OF variable declaration and assignment of 'undefined' as default value is called HOISTING.
 *
 * NO variable is moved around as the literal meaning of hoisting --> raise up suggests.
 *
 * Also variable hoisting doesn't apply to variable declared with 'let' & 'const'
 */

/**
 * TEMPORAL DEAD ZONE (TDZ)
 *
 * During the CREATION phase of the EXECUTION CONTEXT,
 * variables declared with 'var' keyword is assigned default value of 'undefined'
 * Therefore if we try to access a variable declared with var keyword even before it is declared,
 * we can access it with the defualt value of undefined value.
 *
 * However, for the variables declared with keywords 'let' and 'const' no default value is assigned.
 * Therefore if we try to access a variable declared with keywords 'let' and 'const' prior to declaration
 * and/or initialization we'll see a reference error since the variable doesn't yet EXIST in the memory.
 *
 * This phase of variable betweeen declaration and initialization and access is called Temporal Dead Zone (TDZ).
 *
 */

/**
 * var --> has function scope
 *
 * let & const --> has block scope
 *
 * let --> variable declared with let can be assigned any value
 * let name = 'Ray'
 * name = 'Diamond'     // OK
 *
 * while the variable with 'let' can be first declared and initialzed later,
 * the variable with 'const' keyword must be ASSIGNED A value at the time of declaration.
 *
 * const --> variable declared with const CAN NOT be re-assigned a new value.
 * However, const variable could be mutated.
 *
 * const array1 = [1,2,3]
 * array1 = [1,2,3,4,5]          // NOT OK will generate error
 *
 *    ------VS-----
 *
 * const array2 = [10,20,30]
 * array2.forEach((item) => item*10)    // [100,200,300] OK --> we mutated array2 elements
 * but didn't re-assigned and new value with ASSIGNMENT OPERATOR '='
 */

/**
 * During EXECUTION PHASE 4 things happen:
 *
 * GLOBAL EXECUTION CONTEXT
 *
 *      Phase: EXECUTION
 *
 *      window: global object   // same as creation phase
 *      this: window            // same as creation phase
 *      name: "Ray Love"         // name is assigned value if any
 *      handle: "@raylove"      // handle is assigned value if any
 *      getUser: fn()           // reference function in memory
 */

/**
 * FUNCTION EXECUTION CONTEXT is created when a function is invoked
 * 4 primary events occur during this phase:
 *
 *      - 1) Creates an argument object
 *      - 2) Creates an object called 'this'
 *      - 3) Sets up memory space for variables and functions
 *      - 4) Assign variable declations a default value of 'undefined' while
 *           placing any function declaration in memory.
 *
 *
 *     - WITHIN THE GLOBAL EXECUTION CONTEXT
 *
 *          FUNCTION  EXECUTION CONTEXT IS CREATED DURING THE CREATION PHASE
 *
 *          Phase: Creation
 *          arguments: {length: 0}
 *          this:window
 *
 *
 *          During the EXECUTION PHASE of the Global Execution Context,
 *          once the function is executed it is popped off from the Execution Context
 */

/**
 * SCOPES - where variables are accessible
 */

// Examples for SCOPEs

function first() {
  var name2 = 'Jordan';

  console.log(name2);
}

function second() {
  var name2 = 'Jake';

  console.log(name2);
}

console.log(name2); // undefined --> 'coz variable name is declared with var in line#174 thus hoisted
var name2 = 'Tyler';
first(); // 'Jordan'
second(); // 'Jake'
console.log(name2); // 'Tyler'

/**
 * SCOPE chaining --> if a variable is not avialble within the Execution Context
 * it will look up next to its parent Execution Context. This process will bubble up
 * until it reaches the Global Context and/or the variable value is found.
 * If the variable with a value is found the corresponding value is returned if not found
 * then the reference error will be shown.
 *
 * This process of lookup is called scope chaining.
 *
 */

var name3 = 'Taylor Swift';

function logName() {
  console.log(name3);
}

logName(); // Taylor Swift
// --> since name3 is no available locally it will look up to its closes parent --> and
// this process will continue until it reaches global context. If that variable is located
// then the corresponding value is returned or else error is shown.

/**
 * CLOSURES - when we've a nested function, inner function retains the variable from the outer function
 * through the process called Closure scope.
 *
 * In another words whenever we've nested function, inner function creates a closure scope in the context of
 * outer function's execution context. Therefore the inner function maintains the access to outer function's
 * variable even though the outer function has long been popped off from the execution stack context.
 *
 *
 */
let count = 0;
function outer(x) {
  return function inner(y) {
    return x + y;
  };
}

let add = outer(5);
count += add(2);

console.log('count is: --> ' + count);
