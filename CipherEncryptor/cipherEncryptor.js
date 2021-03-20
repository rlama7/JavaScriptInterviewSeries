/**
 * cipherEncryptor.js       - A program to encrypt a string by shifting every letter in the input
 *                            string by k positions.
 * @author                  - Ratna Lama
 * @version                 - 1.0.0
 * @description             - Input string is in lowercase.
 *                            Provided key can only be positive integer.
 *                            Encrypted string must wrap around the alphabets, i.e. z -> a.
 *
 *
 * Example -
 *
 * Algorithm -
 *
 * Time Complexity: O(n) --> Linear
 * Space Complexity: O(n) --> Linear
 *
 *
 */
const cipherEncryptor = (string, key) => {
  // force the key to be equal or less than 26 for the total alphabets
  const newKey = key % 26;
  const encryptedString = [];

  for (const letter of string) {
    // get character code for each letter in a string + newKey
    let newLetterUnicode = letter.charCodeAt() + newKey;

    // convert charCode to a letter
    if (newLetterUnicode <= 122) {
      encryptedString.push(String.fromCharCode(newLetterUnicode));
    } else {
      encryptedString.push(String.fromCharCode(96 + (newLetterUnicode % 122)));
    }
  }
  return encryptedString.join('');
};

// Display
const str1 = 'wxyz';
console.log(`${str1} --> ${cipherEncryptor(str1, 2)}`); // yzab

/**
 * Utility
 *
 * */

// index-->0  1  2  3  4
const str2 = 'super';

// string length --> 5
const len = str2.length;

console.log(
  `The string ${str2}'s length is ${len}. The character at index ${
    len - 1
  } is ${str2.charAt(len - 1)}`
);

// charCodeAt()
console.log(
  `The character code for: a --> ${'a'.charCodeAt()} & z --> ${'z'.charCodeAt()}`
);

// fromCharCode()
console.log(
  `From character code to a letter: 97 --> ${String.fromCharCode(
    97
  )} & 122 --> ${String.fromCharCode(122)}`
);
