/**
 * Anagrams solution - II
 *
 */

// clean punctuation and space and convert string to lowercase
const cleanStr2 = (str) => {
  return str.replace(/[^\w]/g, '').toLowerCase();
};
console.log(cleanStr2('Hello! Bot!! There!!!'));
console.log(`\n----------------------`);

// check if the two compared strings are of the same length and type
const anagrams2 = (str1, str2) => {
  return strToSort(str1) === strToSort(str2);
};
console.log(anagrams2('Raya!', 'arYa!!'));
console.log(anagrams2('RAIL! SAFETY!', 'fairy ?????tales'));
console.log(anagrams2('test this', 'test hypothesis'));

// convert cleaned string to array then sort and then join back
const strToSort = (str) => {
  return cleanStr2(str).split('').sort().join('');
};
console.log(strToSort('Hello! Bot!! There!!!'));
console.log(`\n----------------------`);
