// Reverse String

/**
 * Given a string, return a new string with the reversed order of characters
 * 
 * Algorithm:
 * turn 'str' into array --> split('')
 * call reverse method on the array -->reverse()
 * join the array back to the string -->join('')
 * return the result
 */

 const reverseString = (str) => {
     return str.split('').reverse().join('');
 }

console.log(reverseString('Hello! How are you?'));

console.log('hello'.split('').reverse().join(''));

/**
 * create a char array
 * for each char take the last and insert it to the first
 * return the new str
 */

 const reverseString2 = (str) => {
     let reversed = '';

     for (let itr of str) {
         reversed = itr + reversed;
     }
     return reversed;
 }

 console.log(reverseString2('lama'));

 /**
  * split()
  * reduce()
  */

  const reverseString3 = (str) => {
       return str.split('').reduce((reversed, char) => char + reversed, '');
  }
