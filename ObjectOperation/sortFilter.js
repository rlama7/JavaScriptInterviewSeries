const compareByName = (a, b) => a[0] - b[0];

const sortFruits = (array) => array.sort(compareByName);

// using Includes
const removeDuplicatesUsingIncludes = (array) => {
  let unique = [];
  array.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
};

// using sets
const removeDuplicatesUsingSets = (array) => [...new Set(array)];

// Adding a unique method to the Array prototype
// In JavaScript the arart

const array1 = [
  ['apple', '2.50'],
  ['banana', '1.50'],
  ['cherry', '3.50'],
  ['mango', '4.50'],
  ['cherry', '3.50'],
  ['apple', '2.50'],
  ['banana', '1.50'],
  ['grapes', '.50'],
];

const array2 = [
  'apple',
  'grapes',
  'fig',
  'cherry',
  'grapes',
  'banana',
  'apple',
  'cherry',
  'apple',
];

console.log(sortFruits(array1));

// list with Duplicates
console.log('--->List with Duplicates: <---');
console.log(array2); // ['apple','grapes','fig','cherry','grapes','banana','apple','cherry','apple']

console.log('---> List without Duplicates <---');
console.log(removeDuplicatesUsingIncludes(array2)); // [ 'apple', 'grapes', 'fig', 'cherry', 'banana' ]
console.log(removeDuplicatesUsingSets(array2)); // [ 'apple', 'grapes', 'fig', 'cherry', 'banana' ]

console.log('---> List without duplicates and sorted <---');
console.log(removeDuplicatesUsingIncludes(array2).sort()); // [ 'apple', 'banana', 'cherry', 'fig', 'grapes' ]

/** UTILITY */

function compare(a, b) {
  // following sorts in ascending order
  if (a > b) return 1; // b comes before a
  if (b > a) return -1; // a comes before b
  return 0; // a & b are left unchanged with respect to each other
}

const array3 = [4, 2, 3, 5, 1];
console.log(array3.sort(compare)); // [ 1, 2, 3, 4, 5 ]

// writing compare function in a compact form
console.log(array3.sort((a, b) => a - b)); // // [ 1, 2, 3, 4, 5 ]

// function compareList(a, b) {
//   const fruitA = a.item[0];
//   const fruitB = b.item[0];

//   let comparison = 0;
//   if (fruitA > fruitB) {
//     comparison = 1;
//   } else if (fruitA < fruitB) {
//     comparison = -1;
//   }
//   return comparison;
// }

// console.log(array2.sort(compareList));
