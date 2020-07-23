/**
 * FizzBuzz 
 * Write a program that console logs the numbers from 1 to n. But for the multiples of three 
 * print 'fizz' intead of the number and for the multiple of five print 'buzz' 
 * For the numbers which are multiples of both three and five print 'fizzbuzz'
 * 
 * Example:
 * fizzBuzz(15);
 * 1
 * 2
 * fizz
 * 4
 * buzz
 * ...
 * 14
 * fizzbuzz
 * 
 */

 // recursive approach
 const fizzBuzzRecursive = (num) => {
     // base case 
     if (num === 0) {
         console.log(num)
         return;
     } else {
         if (num % 3 === 0 && num % 5 ===0) {
             console.log('fizzbuzz');
         } else if(num %3 === 0) {
             console.log('fizz');
         } else if(num%5===0) {
             console.log('buzz');
         } else {
             console.log(num);
         }
     }
     return fizzBuzzRecursive(num -1);
 }

 fizzBuzzRecursive(15);

 console.log(`\n-----------------------------\n`)

 // iterative approach
 fizzBuzzIterative = (num) => {
     for (let index = 0; index < num; index++) {
         if (index % 3 === 0 && index % 5 === 0) {
             console.log(`fizzbuzz`);
         } else if(index % 5 === 0) {
             console.log(`buzz`);
         } else if(index %3 === 0) {
             console.log(`fizz`);
         } else {
             console.log(index);
         }
     }
 }

 fizzBuzzIterative(15);