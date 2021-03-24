/**
 * callback.js  -- A program to demonstrate usage of callback function in JavaScript.
 * @author      -- Ratna Lam
 * @version     -- 1.0.0
 * @description -- A callbback function is a function passed into another function as an
 *                 arguent, which is then invoked inside the outer function to complete
 *                 some kind of routine or action.
 *
 *                 USAGE -
 *                 Callbacks are often used to continue code execution after an asynchronous operation
 *                 has completed.
 *
 *                 Example -
 *                 The callback function executed inside a .then() block chained onto the end of a
 *                 promise after that promise fulfills or rejcets.s
 *
 *
 * Credit -
 *     - MDN Web Docs
 *     - Ref > https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
 *     - freecodecamp.org
 *     - Cem Eygi
 *     - Ref > https://www.freecodecamp.org/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/
 *
 */

/**
 * In JavaScript functions are objects. We can pass objects to functions as a parameter.
 * We can pass function as parameter to another fucntions and call them inside the outer functions.
 *
 * Need for Callbacks?
 * JavaScript runs code sequentially in top-down order. However there are also cases the code run after
 * something else happens and also not sequentially. This is called asynchronous programming.
 *
 * Callbacks make sure that a function is not going to run before a task is completed but will run
 * right after the task has completed. It helps us develop asynchronous JavasScript code and keeps
 * us safe from problems and errors.
 *
 * In JavaScript, the way to create a callback fucntion is to pass it as a parameter to another function,
 * and then call it back right after something has happened or some task is completed
 *
 */

const greet = () => console.log('This message is shown after 3 seconds delay.');

setTimeout(greet, 3000); // This message is shown after 3 seconds delay.

// Alternatively we can use anonymous function
setTimeout(function () {
  console.log('This message will dispaly after 5 seconds.');
}, 3000); // // This message is shown after 5 seconds delay.
