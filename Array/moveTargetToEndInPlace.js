const moveTargetToEndInPlace = (array, target) => {
  // check edges cases
  if (array.length <= 1) return array;

  if (target === undefined) return 'Please specify the target element';

  // iterate throught the array and separate the NON-target element
  // the target elements
  const targetElements = [];
  const nonTargetElements = [];

  for (let index = 0; index < array.length; index++) {
    // found target elements
    if (array[index] === target) {
      targetElements.push(array[index]);
    } else {
      // found the NON target elements
      // fill the NON target elements list
      nonTargetElements.push(array[index]);
    }
  }

  return [...nonTargetElements, ...targetElements];
};

const array1 = [1, 3, 4, 2, 5, 0, 5, 0];
const target1 = 0;

console.log(moveTargetToEndInPlace(array1, target1)); // [
    1, 3, 4, 2,
    5, 5, 0, 0
  ]
