// Palindrome

/**
 * Given a string, return true if the string is a palindrome or false it is no.
 * Palindromes are the strings that form the same word if it is reversed.
 * Do include spaces and punctuation in determining if the string is a palindrome.
 * Examples:
 * abba --> true
 * abcdefg --> false
 */

const palindrome = (str) => {
  return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
};

console.log(palindrome('ABa'));
console.log(palindrome('Madam I am adam'));

console.log('HELP'.toLowerCase());

const palindrome2 = (str) => {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
};

console.log(palindrome2('hello'));
console.log(palindrome2('abba'));
console.log(palindrome2('atta'));
