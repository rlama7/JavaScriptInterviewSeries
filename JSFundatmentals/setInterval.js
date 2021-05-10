/**
 * setInterval() method has the same syntax as setTimeout
 * The only difference is that the setTimeout runs the function only once
 * after a delay in milliseconds, but setInterval calls the function regularly
 * after the given interval of time in milliseconds
 *
 * setInterval (func|code, [delay], [arg1], [arg2], ...)
 */

let i = 1000;
const fizzBuzzUsingSetInterval = () => {
  if (i % 2 === 0) {
    console.log('fizz', i);
    i++;
  } else {
    console.log('buzz', i);
    i--;
  }
};

// following will call greet function every 3 seconds until further calls are cancelled
let timerId = setInterval(fizzBuzzUsingSetInterval, i);

// we can use clearInterval(timerId) to stop futher calls
// let timerId = setInterval(greet, 3000);

// we can make use of setTimeout to call stop the setInterval after say 10 seconds
setTimeout(() => {
  clearInterval(timerId);
}, 8000);
