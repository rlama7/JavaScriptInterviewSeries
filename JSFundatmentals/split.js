/**
 * split.js     - A program to demonstrate usage of split() in JavaScript
 * @author      - Ratna Lama
 * @version     - 1.0.0
 * @description - The split() divides a String into an ordered list of substrings,
 *                put these substrings into an array, and returns the array. The divison
 *                is done by searching for a pattern; where the pattern is provided as
 *                the first parameter in the method's call.
 */
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
/** [
  'The',   'quick',
  'brown', 'fox',
  'jumps', 'over',
  'the',   'lazy',
  'dog.'
]
*/
console.log(words);
console.log(words[3]); // fox

// usage check if a string is a palindrome
// madam --> is a palindrome // true
// Madam --> is a palindrome
const isPalindrome = (str) => {
  return str.toLowerCase() === str.split('').reverse().join('').toLowerCase();
};

let word1 = 'Hello';
let word2 = 'Madam';
console.log(`isPalindrome? ${word1}: ${isPalindrome(word1)}`); // isPalindrome? Hello: false
console.log(`isPalindrome? ${word2}: ${isPalindrome(word2)}`); // isPalindrome? Madam: true

/**
 * pointer approach to check if a string is a palindrome
 * @param {*} str string input to be checked for a palindrome
 */
const isPalindromePointerApproach = (str) => {
  // edge cases
  // if string is null | undefined or of length 0 simply return -1
  if (str === undefined || str === null) return -1;

  // get two pointers left & right
  // left starts from the beginning of the string,
  // right starts from the end of the string,
  // increase left until reaches right
  // decrease right until reaches left
  // on each pass check if the string pointed by left === right
  let left = 0,
    right = str.length - 1;
  while (left <= right) {
    if (str[left].toLowerCase() === str[right].toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }
};

let str1;
const str2 = null;
const str3 = undefined;
const str4 = 'e';
const str5 = 'raDar';
const str6 = 'no lemon, no melon';

console.log(isPalindromePointerApproach(str1)); // -1
console.log(isPalindromePointerApproach(str2)); // -1
console.log(isPalindromePointerApproach(str3)); // -1
console.log(isPalindromePointerApproach(str4)); // true
console.log(isPalindromePointerApproach(str5)); // true
console.log(isPalindromePointerApproach(str6)); // true
