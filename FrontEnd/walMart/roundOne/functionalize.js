/**
 * Create a function called fucntionalize which takes a value and returns
 * a function, which when executed, returns that value.
 *
 * @param {*} val input value to be returned
 *
 * --->Example<---
 * functionalize('a')() --> 'a'
 * functionalize(100)(0) --> 100
 * functionalize(flase()) --> false
 */

// Using arrow function
const functionalize = (val) => () => val;

// using regular function
function func(val) {
  return function () {
    return val;
  };
}

console.log(functionalize('a')()); // a
console.log(functionalize('1000')()); // 1000
console.log(functionalize('true')()); // true
console.log(func('apple')()); // 'apple'
console.log(func(10)()); // 10
console.log(func(false)()); // false
