/**
 * setTimeout.js       - A program to demonstrate use cases of setTimeout() method in JS.
 * @author             - Ratna Lama
 * @version            - 1.0.0
 * @description        - setTimeout() sets a timer which executs a fucntion or specified pieces of
 *                       code once the time expires.
 *                       setTimeout(fn, 0) --> takes function to run after time (in milliseconds) t=0 in this case
 *
 *                       Differences between setTimeout() vs setInterval() vs clearTimeout()
 *                       setTimeout() runs code once after a set period of time whereas
 *                       setInterval() runs code repeatedly at no less than the number of milliseconds
 *                       given by the function beging executed as susbsequent parameters fo the setInterval() call.
 *
 *                       A call to setTimeout() returns a "timer identifier" that we can use to cancel the
 *                       execution by using the clearTimeout(timerId);
 */

// setTimeout()
const hello = (msg) => console.log(msg);
const greeting = setTimeout(hello, 2000, 'Hello Universe');

console.log(greeting); // 'Hello Universe' --> after 2 seconds

// clearTimeout()
clearTimeout(greeting);
// If we comment out clearTimeout we should see print out --> 'Hello Universe'
// However clearTimeout(greeting) will cancel the execution therefore won't output anything to the screen.

// setInterval()
const foo = (a, b) => {
  console.log(`My favorite fruits are: ${a} & ${b}`);
};

const favFruits = setInterval(foo, 5000, 'apple', 'banana');

console.log(favFruits); // My favorite fruits are: apple & banana --> should print this repeteadly each after 5 seconds.
