/**
 * closure.js      - A program to demonstrate use of closure in js.
 * @author         - Ratna Lama
 * @version        - 1.0.0
 * @description    - A closure is the combination of a function bundled together
 *                   with references to its surrounding state (the lexical environment).
 *                   In other words, a closure gives you access to an outer function's
 *                   scope from an inner function. In JavaScript, closures are created every
 *                   a fucntion is created, at function creation time.
 */

/**
 * Example #1
 * name --> is not really local to greeting() however it
 * can have access to global scope variables
 *  */
let name = 'Ray';

function greeting() {
  console.log(`Hi ${name}!`);
}
greeting();

name = 'Bill';
greeting();

/**
 * Example #2
 * Nested function
 *
 *  */
function outer(outerVar) {
  const randomLocation = 'Hawaii';
  return function inner(innerVar) {
    console.log(`Inner Variable: ${innerVar}`);

    // following variables: outerVar and randomLocation are not local to inner function
    // however due to closures inner function keep tracks of outer variable.
    // Thus even when the outer function is done executing you still have access to those
    // outer variables.
    console.log(`Outer Variable: ${outerVar}`);
    console.log(`Random Variable: ${randomLocation}`);
  };
}

const newFunction = outer('OutSide');
newFunction('InSide');
// Outer Variable: OutSide
// Inner Variable: Inside
// Random Variable: Hawaii

// Example #3
