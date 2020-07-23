/**
 * Write a function that accepts a string. The function should capitalize the firest 
 * letter of each word in the string then return the capitalized string.
 * 
 * Examples
 * capitalize('a short sentence') --> A Short Sentence
 * 
 * Algorithm:
 * make an empty array words
 * split the input strig by spaces to get an array of words
 * for each word in the array
 *  --> uppercase the first letter of the word
 *  --> join first letter with the rest of the string
 * --> push result into the words array
 * join words into a string and return it 
 */

 'use strict';

const capitalization = (str) => {
    const words = [];
    
    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ');
}

const str = "hello there this is really nice";
console.log(capitalization(str));

// create array of words
console.log(str.split(' '));

// upper case the first letter of each words
for (let word of str.split(' ')) {
    console.log(word[0].toUpperCase() + word.slice(1));
}

// slice 
console.log(str.slice(1));

//join words back
console.log(`\n------------------------------------`);

/**
 * Alternative 
 * 
 * Algorithm:
 * start with a new result string. start its first letter capitalized.
 * Next iterate over each char and look for previous char and if it is empty ' ' then captialize the letter
 */

 const capitalization2 = (str) => {
     let result = str[0].toUpperCase();
     for (let i = 1; i < str.length; i++) {
         if (str[i-1] === ' ') {
             result += str[i].toUpperCase();
         } else {
             result += str[i];
         }
     }
     return result;
 }
 console.log(capitalization2(str));