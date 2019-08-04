/**
 * findVowels.js        -A program to find total number of vowels in a given sentence.
 * @author               Ratna Lama
 * @version              1.0
 * @since                07/27/2019
 *  *
 * @param {*} str        string or sentence to parse to find the total number of vowels
 * @return               returns the number of vowels used in a string
 *
 * @description
 */

// iterative
function findVowels(str) {
  let counter = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      counter++;
    }
  }
  return counter;
} // end findVowels

// Using regX
function vowels(str) {
  const matches = str.match(/[aeiou]/gi); // regX --> returns null or Array
  return matches ? matches.length : 0;
}

console.log(findVowels("HellO thEre YOU!"));
console.log(vowels("olA huLA?"));

module.exports = findVowels;
