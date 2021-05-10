/**
 * moveTargetToEndInPlace.js - A program to move the target element to the end keeping
 *                             the order of ther rest elements in its original position.
 * @author                   - Ratna Lama
 * @version                  - 1.0.0
 * @description              -
 * @param {*} array            input list
 * @param {*} target           target to be moved to the end of the list.
 *
 * --->Example<---
 *          INPUT:
 *                array1 = [1, 3, 4, 2, 5, 0, 5, 0];
 *                target1 = 0;
 *          OUTPUT:
 *                 array1 = [ 1, 3, 4, 2,5, 5, 0, 0]
 *
 * NOte that the NON-target items are in its original position
 *
 * --->Algorithm<---
 *  - iterate through the array list once
 *  - on each iteration filter items into two buckets: targetElements and nonTargetElements
 *  - at the end just merge nonTargetElements and targetElements then return
 *
 * --->Time Complexity<---
 * time complexity will be O(n) sinc we iterate through the list only once (linear)
 *
 * Space complexity will be however O(n) // actually 2n since we need to store two lists since we
 * drop constant comes down to linear or O(n)
 *
 *
 */
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

console.log(moveTargetToEndInPlace(array1, target1)); // [ 1, 3, 4, 2,5, 5, 0, 0]
