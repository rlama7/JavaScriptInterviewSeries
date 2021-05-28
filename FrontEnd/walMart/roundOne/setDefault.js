/**
 * Create a function named setDefualt which takes an argument of any
 * value and returns a function, which when passed a truthy argument, returns
 * that truhty argument, and when passed a falsy argument,
 * returns the original argument passed to setDefault.
 *
 * @param {*} val input value to a function
 */
const setDefault = (val) => (flag) => (flag ? flag : val);

function setDefaultFunc(val) {
  return function (flag) {
    if (flag) {
      return true;
    } else {
      return val;
    }
  };
}

console.log(setDefault(72)(true)); // true
console.log(setDefault('foobar')(false)); // foobar

console.log(setDefaultFunc(72)(true)); // true
console.log(setDefaultFunc('foobar')(false)); // foobar
