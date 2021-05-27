/**
 * Create a function named onlyTruthy which takes as an argument an array of
 * values and returns an array consisting of only those values which are
 * truthy (equivalent to true).
 *
 * @param {*} array input array
 *
 * --->Example<---
 * onlyTruthy([false, true, true]) // [true,true]
 * onlyTruthy([0,1,'', 'a']) // [1, 'a']
 */
const onlyTruthy = (array) => {
  return array.filter(
    (item) =>
      item !== false &&
      item !== 0 &&
      item !== null &&
      item !== undefined &&
      item !== isNaN(item) &&
      item !== '' &&
      item !== ' '
  );
};

console.log([]); // []
console.log(onlyTruthy([false, true, true])); // [true, true]
console.log(onlyTruthy([0, 1, '', 'a'])); // [1, a]
console.log(onlyTruthy([null, 1, -1, -0, undefined, 100])); // [ 1, -1, 100]
