/**
 * Create a function name removeVowels which takes a string as an argument
 * and returns that string with all vowels removed.
 *
 * @param {*} string input string to be filtered vowels
 *
 * --->Example<---
 * removeVowels('Hello World') // 'Hll Wrld'
 * removeVowels('FOOBAR') // 'FBR'
 */
const removeVowels = (string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  // first split string to array --> [H, e, l, l, o, ' ', W, o, r, l, d]
  // second filter out vowels from  string array
  // finally join the string array back --> 'Hll Wrld'
  return string
    .split('')
    .filter((item) => !vowels.includes(item))
    .join('');
};

console.log(removeVowels('Hello World')); // 'Hll Wrld'
console.log(removeVowels('FOOBAR')); // 'FBR'
