/**
 * debouncing.js    - A program to demonstrate usage of debouncing in JavaScript.
 * @author          - Ratna Lama
 * @version         - 1.0.0
 * @description     - A Debounce is a higher order function (function that takes function
 *                    as an argument and/or returns function) that limits the rate at
 *                    which a function can fire.
 *                    The Debounce function takes primarily two arguments (or more on need basis ...)
 *                    a function to execute and the fire rate limit in milliseconds.
 *
 */

/**
 * Debounce function takes a function to be executed and returns a function.
 * As long as the functions continues to be invoked, function will not be triggered.
 * The function will be executed after it stops being called for N-miliseconds.
 * @param {*} fn to be executed
 * @param {*} delay time delay in milliseconds (ms)
 */
const debounce = (fn, delay) => {
  let timeoutId;

  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId); // cancels setTimeout()
    }

    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

// let count = 0;
const display = debounce((count) => console.log(count++), 3000);
console.log(dipslay(0));

// document.getElementById('btnId').addEventListener(
//   'click',
//   debounce((e) => {
//     console.log(count++);
//     // count= 0, 1, 2, 3 .... chould be console logged after every 3 seconds  or 3000 milliseconds
//     // subsequent clicking the 'Click Me' btn should only produce a single console log.
//   }, 3000)
// );
