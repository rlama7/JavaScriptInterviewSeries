/**
 * Create a function named arity which takes a function as an argument and
 * returns the number of defined arguments the function accepts.
 *
 * @param {*} fn callback function
 *
 * --->Example<---
 * function:
 *  const addTwo = (a,b) => a+b
 *  const addOne = (a) => a+10;
 *  cont addThree = (a,b,c) => a+b+c;
 *
 * arity(addTwo) -> 2
 * arity(addOne) -> 1
 * arity(addThree) -> 3
 */
const arity = (fn) => fn.length;

const addOne = (a) => a + 10;
const addTwo = (a, b) => a + b;
const addThree = (a, b, c) => a + b + c;
// const addMultiple = (...args) => args.reduce((a, b) => a + b);

console.log(arity(addOne)); // 1
console.log(arity(addTwo)); // 2
console.log(arity(addThree)); // 3
// console.log(arity(addMultiple));
