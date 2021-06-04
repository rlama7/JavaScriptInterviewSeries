/**
 * twoSum.js    - A program to find the sum of a pair from a given list.
 * @author      - Ratna Lama
 * @version     - 1.0.0
 * @description -
 *
 * --->INPUT<---
 *  #1 array1 = [1, 2, 3, 4, 5]; target1 = 10;
 *
 *  #2 array2 = [4, 12, -3, 4, 1]; target2 = 8;
 *
 * --->OUTPUT<---
 * #1 false
 * #2 true
 *
 * --->CONSTRAINTS<---
 *  - list may or may not be sorted
 *  - consider only positive/negative integers and NOT other data types
 *  - you may not use the same element twice.
 *
 * --->EDGES CASES<---
 *  - list could be empty
 *  - list could have a single element ONLY
 *  - list is too large and does NOT Fit in a Memory
 *
 * --->ALGORITHM<---
 *  - find the compliment of a target sum
 *  - if a + b = 12 and and a = 5 then b = 12 -a = 12 -5 = 7
 *
 *  - check if the compliment (7) is in hashmap
 *  - if we find the compliment in hashmap we've the valid pairs so
 *  - return true/false and/or indexes accordingly
 *
 *  - if the compliment is not hashmap
 *  - add the number to the hashmap
 *
 * --->TIME COMPLEXITY<---
 * time O(n) -> linear one single sweep across array elements
 * space O(n) -> linear hash map
 *
 * @param {*} array input list
 * @param {*} targetSum target sum of a pair
 */
const twoSum = (array, targetSum) => {
  const map = new Map();
  let len = array.length;

  for (let index = 0; index < len; index++) {
    /**
     * first complement of a target sum
     * if sum = 11
     * and one if the num1 = 4
     * then the compliments = num2 =  11-4 = 7, i.e., 4 + 7 --> 11
     * we'll try to find the compliment value in the hashmap
     *
     * if we find the compliment in the hashmap then we can return true and/or index positions
     *
     * if we don't find the compliment then we need
     * to add num1 to the hasmap
     */
    let compliment = targetSum - array[index];

    // check if compliment is in hash map
    if (map.has(compliment)) {
      return true;
    }

    // if compliment is not in map then
    // add it to map
    // since we need to access numbers and not index
    // set map such that : 10 ->0, 25 -> 1 ... in the map
    map.set(array[index], index);
  }
  // we've exhausted all our cases and
  // have reached here means we did not find any compliments so
  //   return false
  return false;
};

const array1 = [10, 25, 30, 35, 40, 50];
const target1 = 45;

const array2 = [4, 12, 3, 5, 1, -7];
const target2 = 10;

const array3 = [7, 2, -3, -9, 5];
const target3 = -7;

console.log(twoSum(array1, target1)); // true
console.log(twoSum(array2, target2)); // false
console.log(twoSum(array3, target3)); // true

/**
 * UTITLITY
 * the has() method returns a boolean indicating whether an element with the specified key
 * exists or not
 */
const newHashMap = new Map();
newHashMap.set(100, 'Hundered');
newHashMap.set(200, 'TwoHundred');
newHashMap.set(300, 'ThreeHundred');
console.log(newHashMap);
/**
 Map(3) {
  100 => 'Hundered',
  200 => 'TwoHundred',
  300 => 'ThreeHundred'
}
 */
console.log(newHashMap.has(300)); // true
console.log(newHashMap.has(500)); // false
console.log(newHashMap.get(200)); // TwoHundred
