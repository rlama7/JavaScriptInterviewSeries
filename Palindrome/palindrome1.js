const palindrome = (str) => {
  /**
   * Algorithm:
   *
   * 1. convert the given string to lowercase
   * 2. split string by '' so forms array string
   * 3. reverse the string array
   * 4. join the reversed string array by ''
   * 5. compare the given string With the reversed string
   *
   */
  let newStr = str.toLowerCase();
  return newStr === newStr.split('').reverse().join('') ? true : false;
};

// Output
let str = 'Madam';
console.log(palindrome(str));

// Utility
console.log('\n--------------------------------------');
console.log(`To lowercase ${str} --> ${str.toLowerCase()}`); // MadaM --> madam

console.log('\n--------------------------------------');
console.log(
  "To split string by space '' and convert to array so we can apply reverse to it--> "
);

let newStr = str.toLowerCase().split('');
console.log(newStr); // [ 'm', 'a', 'd', 'a', 'm' ]
console.log('\n--------------------------------------');

console.log(newStr.reverse()); // [ 'm', 'a', 'd', 'a', 'm' ]
console.log('\n--------------------------------------');

console.log(newStr.join(''));
