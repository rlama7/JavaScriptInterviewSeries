/**
 * MaxChar
 * Given a string return the character that is most commonly used in the string.
 * 
 * Same as find character frequency
 * anagram
 * 
 * Examples:
 * maxChar('abcccddeeee') --> e
 * maxChar('apple123345111')--> 1
 * 
 * Algorithm:
 * take a string then convert to Object Map
 */
const str = 'Hello There!';
const chars = {};
 
     
for (let char of str ) {
    chars[char] = chars[char] + 1 || 1;
}

 console.log(chars);


 const maxChar = (str) => {
     const charMap = {};
     let max = 0;
     let maxChar = '';

     // iterate through the array/string
     for (let char of str) {
         if(charMap[char]) {
             charMap[char]++;
         } else {
             charMap[char] = 1;
         }
     }
     // iterate through the object 
     for (let char in charMap) {
         if (charMap[char] > max) {
             max = charMap[char];
             maxChar = char;
         }
     }
     console.log(`${maxChar}: ${max}`);
     return maxChar;
 }

 console.log(maxChar('Hello There!'));