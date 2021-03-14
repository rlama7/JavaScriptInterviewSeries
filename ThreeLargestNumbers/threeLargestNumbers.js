/**
 * threeLargestNumbers.js   - A program to find the three largest number from a given array of at least three elements.
 * @author                  - Ratna Lama
 * @version                 - 1.0.0
 * @description             - The array will have at least three elements.
 *                            Find the first three largest numbers and return them.
 *                            If the duplicates exists then return the duplicates.
 *                            DO NOT SORT the array to solve the challenge.
 *
 * Example -
 * INPUT:
 *       array =  [8, 5, 7, 1, 15, 3, 8]
 * OUTPUT:
 *      array = [8, 15, 8]
 *
 * Algorithm:
 *
 * Time Complexity: O(n) --> Linear
 * Space Complexity: O(n) --> Linear becuase we need space to hold numMap
 */
const threeLargestNumbers = (arr) => {
  // create a hashMap
  // use an Object
  const numMap = {};

  // iterate through array
  for (let value of arr) {
    if (numMap[value]) {
      numMap[value]++;
    } else {
      numMap[value] = 1;
    }
  }
  // By this point we've iterated through the array
  // then for each array element if the duplicate exists, we've increased the value
  //   console.log(numMap); // { '1': 1, '3': 1, '5': 1, '7': 1, '8': 2, '15': 1 }

  // collect numMap's values as array
  // this returns sorted array then return the last 3 items
  const keys = Object.keys(numMap);

  return keys.slice(keys.length - 3, keys.length);
};

// Utility

//
array = [8, 5, 17, 15, 15, 3, 8, 8];
console.log('Unsorted array');

console.log(array);
console.log('\n--------------------------------------------');

console.log('\nsorted array --> ');
console.log(array.sort((a, b) => a - b));
// threeLargestNumbers(array); // { '1': 1, '3': 1, '5': 1, '7': 1, '8': 2, '15': 1 }
console.log('\n three largest numbers --> ');
console.log(threeLargestNumbers(array));
console.log('\n--------------------------------------------');

const person = {
  name: 'Ray',
  age: 21,
  address: '123 Main St.',
  occupation: 'engineer',
  hobby: 'surfing',
};

console.log(person);

console.log('\n--------------------------------------------');
console.log('list keys from person obj --> ');
console.log(Object.keys(person));

console.log('\n--------------------------------------------');
console.log('list values from person obj --> ');
console.log(Object.values(person));

console.log('\n--------------------------------------------');
console.log('list key->value pair from the perons obj --> forEach iteration');
Object.entries(person).forEach(([key, value]) => console.log(key, value));

console.log('\n--------------------------------------------');
console.log('list key->value pair from person obj using for of -->');
for (const [key, value] of Object.entries(person)) {
  console.log(key, value);
}
