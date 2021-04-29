const palindrome = (str) => {
  if (str === undefined || str === null || str.length === 0)
    return 'String is empty';
  return str.toLowerCase() === str.split('').reverse().join('').toLowerCase();
};

const str1 = null;
const str2 = 'Mam';
const str3 = 'geeksskeeg';
console.log(palindrome(str1)); // String is empty
console.log(palindrome(str2)); // true
console.log(palindrome(str3)); // true

// two pointer method
const palindromeUsingPointers = (str) => {
  let left = 0;
  let right = str.length - 1;
  // iterate through the string and compare each string along the way
  while (left < right) {
    if (str.length === 0 || str === undefined) return 'String is empty';
    if (str[left].toLowerCase() === str[right].toLowerCase()) return true;
    left++;
    right--;
  }
  return false;
};

console.log(palindromeUsingPointers(str2)); // true
console.log(palindromeUsingPointers(str3)); // true
