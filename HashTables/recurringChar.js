/**
 * Find a recurring character
 *
 * Example:
 *
 * arr1 = [2,5,1,2,,3,5,1,2,4,1,1,1];     // returns 2 as soon as it finds the first recurring character
 *
 * arr2 = [1,2,3,4,5];      // returns undefined since all elements are unique
 */

// time complexity: O(n^2) --> quadratic very bad...
// space complexity: O(1)
const firstRecurringChar1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return undefined;
};

const arr1 = [2, 5, 5, 1, 20, 0, 3, 5, 1, 2, 4, 1, 1, 1];
// returns 2 since we are comparing 2 with the rest elements first
console.log(`arr1: ${firstRecurringChar1(arr1)}`);

// using object map
// time complexity --> O(n) --> linear
// space complexity --> O(n) --> linear
const firstRecurringChar2 = (arr) => {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      return arr[i];
    } else {
      map[arr[i]] = i;
    }
    // console.log(map);
  }
};

const arr2 = [7, 0, 15, 2, 35, 1, 20, 5, 1];
// returns 5 since 5 repeats the most first
console.log(`arr2: ${firstRecurringChar2(arr2)}`);

/**
 * Using the JS Map instead of object
 */

const firstRecurringChar3 = (arr) => {
  // instantiate a HashMap
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    // loop through the array and associate key value in the Map Object
    map.set(i, arr[i]);
    // if the value is associated to the key in the Map then return that value
    if (map.has(arr[i])) {
      return map.get(arr[i]);
    }
  }
};
const arr3 = [3, 5, 3, 5, 1, 2, 5, 1];
// returns 7 since 7 repeats the most first
console.log(`arr3: ${firstRecurringChar3(arr3)}`);
