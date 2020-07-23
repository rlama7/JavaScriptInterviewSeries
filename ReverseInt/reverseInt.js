/**
 * Given an integer, return an integer that is the revers ordering of numbers
 * 
 * Examples:
 * reversInt(15) --> 51
 * reverseInt(981) --> 189
 * reverseInt(500) --> 5
 * reverseInt(-15) --> -51
 * reverseInt(-90) --> -9
 * Math.sign(x) --> x > 0 ? 1: -1
 */

 const reverseInt = (num) => {
   const parsedNum = num
   .toString()
   .split('')
   .reverse()
   .join(''); 
   return parseInt(parsedNum) * Math.sign(num); 
 } 

 
 console.log(reverseInt(-500));