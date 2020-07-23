'use strict'

// Spread Operator

/** 
 * 
 * 
// ES5 
function addFour(a,b,c,d) {
    return a+b+c+d;
}
var sum1 = addFour(18, 30, 12, 21);
console.log(sum1);

var ages = [18, 30, 12, 21];
var sum2 = addFour.apply(null, ages);
console.log(sum2);

// ES6 
let sum3 = addFour(...ages);
console.log(sum3);

ages.push(10);
console.log(ages);
sum3 = addFour(...ages);
console.log(sum3);

*/

/**
 * join
 * 
 */
const num1 = [1,2,3];
const num2 = [4,5,6];
const mergedNum = [...num1, 100, ...num2];
console.log(mergedNum);
console.log(num1);
console.log(num2);




