/**
 * fib.js               -A program to print the n-th entry in the fibonacci series.
 * @author               Ratna Lama
 * @version              1.0
 * @since                07/27/2019
 *  *
 * @param {*} int        n-the entry
 * @return               returns the n-th entry in the fibonacci series
 *
 * @description
 * -------------EXAMPLES-----------------
 * [0,1,1,2,3,5,8,13,21,34...]
 *
 * f(n) = n if n < 2
 *      = f(n-1) + f(n-2) if n > 2
 */

// memoizedFib
function memoizedFib(fn) {
  const cache = {};

  // pass on multiple arguments to the anonymous function
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
} // end memoizedFib()

// recursive --> SLOW FIB
function slowRecursiveFib(num) {
  // base case
  if (num < 2) {
    return num;
  }
  return fib(num - 1) + fib(num - 2);
} // end fibRecursive()

// iterative
function fibIterative(num) {
  let a = 0;
  let b = 1;
  let c;

  if (num < 2) {
    return num;
  }

  for (let i = 2; i <= num; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
} // end fibIterative()

console.log("30-th Recursive Fib : " + memoizedFib(30));
console.log("30-th Iterative Fib : " + fibIterative(30));

const fib = memoizedFib(slowRecursiveFib);

module.exports = fib;
