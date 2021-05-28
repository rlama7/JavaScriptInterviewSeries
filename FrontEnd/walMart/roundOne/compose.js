/**
 * Create a function named compose which accepts an unspecified number of
 * single-argument functions as arguments and returns a function which
 * executes those functions from left to right.
 *
 * @param  {...any} args unspecified number of single-argument functions
 *
 * --->Example<---
 *
 * const addOne = (a) => a+1;
 * const addTwo = (b) => b+2;
 * const multiplyByThree = (c) => c*3
 *
 * compose(addOne, addTwo, multiplyByThree)(3) --> 18 --> 3+1 --> 4+2 --> 6 *3 --> 18
 */
const compose = (...args) => () => args.map((item) => item);

function composeFunc(...args) {
  let len = 0;
  while (len < args.length) {
    args[len];
    len++;
  }
}

const addOne = (a) => a + 1;
const multiplyByTwo = (b) => b * 2;

// console.log(compose(addOne, multiplyByTwo)(3));

// console.log(composeFunc(addOne, multiplyByTwo)(3));

const arr = [10, 20, 30, 40, 50];
console.log(composeFunc(arr));
