/**
 * lets add prototype method to filter say prime numbers and sort them
 *
 * since arrow function does not have its own this binding we can not use prototype with
 * arrow function so we have to use the regular function for it.
 *
 * @param {*} array
 */
Array.prototype.filterAndSort = function () {
  // filter out prime
  const result = [];
  //let len = this.length;

  for (let j = 0; j < this.length; j++) {
    if (isPrime(j)) result.push(this[j]);
  }

  // We have prime numbers in the result list
  // next sort them inplace.
  return result.sort((a, b) => a - b);
};

// filter our prime numbers
function isPrime(num) {
  // prime numbers are numbers that are divisible by 1 and itself
  // if number is less than 4 then we'll simply return number
  // we'll only consider positive integers as prime numbers
  if (num < 2) return true;

  // if number is even then such numbers are not prime
  if (num % 2 === 0) return false;

  // for other multiples of odd we can check for square root of a number
  // 5,7,11 are prime however multiples of such 5x5 = 25, 7x7= 49 11x11 = 121 are not
  for (let i = 2; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  //   console.log(result); // [25, 11, 4, 2,19, 15, 7]

  // by this point we should have exhausted all our cases for finding NON-prime
  // therefore the number must be prime
  return true;
}
// console.log(filterAndSort.prototype);//

const array = [-1, 1, 25, 11, 4, 33, 2, 37];

console.log(array.filterAndSort());
