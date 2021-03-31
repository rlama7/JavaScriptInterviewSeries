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
