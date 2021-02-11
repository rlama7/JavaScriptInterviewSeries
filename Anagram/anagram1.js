/**
 * anagram1.js      - A program to check if given two strings are an Anagram.
 * @author          - Ratna Lama
 * @version         - 1.0.0
 * @description     -
 *
 * Anagram Solution - I
 *
 * Check to see if the two privdied strings are anagrams of eachother.
 * One string is an angram of another if it uses the same characters
 * in the same quantity. Only consider characters, no spaces or punctuation.
 * consider the capital letters to be the same as lower case
 *
 * Examples: -
 * anagrams('rail safety', 'fairy tales') --> true
 * anagrams('RAIL! SAFETY!', 'fairy tales') --> true
 * anagrams('hi There', 'Bye there') --> False
 *
 * Algorithm: -
 *
 * Time Complexity: -
 *
 * RegEx --> \w match alphanumeric
 *
 */
const anagrams1 = (str1, str2) => {
  // create a cleaned str char map
  const aCharMap = buildCharMap(str1);
  const bCharMap = buildCharMap(str2);

  // compare if the two strings have the same length
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  // iterate over object
  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
};

/**
 *
 * @param {*} str
 * @return str with removed spaces and characters
 */
const cleanedStr = (str) => {
  return str.replace(/[^\w]/g, '').toLowerCase();
};

// let str = 'Hello! There!!!';
// console.log(`\n---------------------------------------------------------\n`);
// console.log(cleanedStr(str));
// console.log(`\n---------------------------------------------------------\n`);

/**
 *
 * @param {*} str
 * @return object char map object
 */
const buildCharMap = (str) => {
  const charMap = {};

  for (let char of cleanedStr(str)) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
};
// console.log(`\n---------------------------------------------------------\n`);
// console.log(buildCharMap(str));
// console.log(Object.keys(buildCharMap(str)));
// console.log(Object.values(buildCharMap(str)));
// console.log(`\n---------------------------------------------------------\n`);

/** 
console.log(anagrams('Raya!', 'arYa!!'));
console.log(anagrams('RAIL! SAFETY!', 'fairy ?????tales'));
console.log(anagrams('test this', 'test hypothesis'));
console.log(`\n----------------------`);

*/

module.exports = anagrams1;
