/**
 * currying.js  - A program to demonstrate usage of currying in JavaScript.
 * @author      - Ratna Lama
 * @version     - 1.0.0
 * @description - Currying is a transformation of functions that translates a function from
 *                callable as f(a, b, c) into callable as f(a) (b) (c).
 *                Currying doesn't call a function. It just transforms it.
 *                Currying allows us to easily get partials.
 *                Currying turns multi-argument function into unary (single argument) functions.
 *
 */
let add = function (a) {
  return function (b) {
    return a + b;
  };
};

let addToFive = add(5);
console.log(addToFive(2)); // 7
console.log('\n----------------------------------------------------');

let avg = function (...n) {
  let sum = n.reduce((accum, value) => accum + value);
  return sum / n.length;
};

const arr1 = [1, 2, 3, 4, 5];
console.log(avg(...arr1)); // 15/5 = 3
console.log('\n----------------------------------------------------');

let spiceUp = function (fn, ...n) {
  return function (...m) {
    return fn.apply(this, n.concat(m));
  };
};

let doAvg = spiceUp(avg, 1, 2, 3);
console.log(doAvg(4, 5, 6)); // 3.5

/**
 * Breakdown of line #30 & #31
 * avg --> does the average after concating n & m array --> 1,2,3,4,5,6 => 21/6 => 7/2 = .3.5
 *  */

console.log('\n----------------------------------------------------');

const greet = function (a) {
  return function (b) {
    return function (c) {
      console.log(`${a} to ${b} using ${c}`);
    };
  };
};

greet('Greeting')('friends')('JavaScript.'); // Greeting to friends using JavaScript.

// Alternatively we could do step by step
let greet1 = greet('Greeting');
console.log(greet1); // [Function (anonymous)]

let friends = greet1('friends');
console.log(friends); // [Function (anonymous)]

friends('JavaScript'); // Greeting to friends using JavaScript.

// Using Arrow Function
const hello = (a) => (b) => (c) => console.log(`${a} ${b} is ${c}`);
hello('Favorite')('fruit')('cherry');
