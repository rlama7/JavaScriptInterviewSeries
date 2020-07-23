/**
 * Check to see if the tow privdied strings are anagrams of eachother.
 * One string is an angram of another if it uses the same characters
 * in the same quantity. Only consider characters, no spaces or punctuation. 
 * consider the capital letters to be the same as lower case
 * 
 * examples
 * anagrams('rail safety', 'fairy tales') --> true
 * anagrams('RAIL! SAFETY!', 'fairy tales') --> true
 * anagrams('hi There', 'Bye there') --> False
 * 
 * Algorithm 
 * 
 * RegEx --> \w match alphanumeric 
 * 
 */

 // create a  string composing alphanumeric
let str = 'Hello! There!!!'

const cleanedStr = (str) => {
    return str.replace(/[^\w]/g, '').toLowerCase();
}
console.log(cleanedStr(str))
console.log(`\n----------------------`);

// create a charMap
const buildCharMap = (str) => {
    const charMap = {};

    for (let char of cleanedStr(str)) {
        charMap[char] = charMap[char] +1 || 1;
    }
    return charMap;
}
console.log(buildCharMap(str));
// console.log(Object.keys(buildCharMap(str)));
// console.log(Object.values(buildCharMap(str)));
console.log(`\n----------------------`);


const anagrams = (str1, str2) => {
    
    // create a cleaned str char map
    const aCharMap = buildCharMap(str1);
    const bCharMap = buildCharMap(str2);

    // compare if the two strings have the same length
    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    // iterate over object
    for (let char in aCharMap) {
        if(aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }

    return true;
}

console.log(anagrams('Raya!', 'arYa!!'));
console.log(anagrams('RAIL! SAFETY!', 'fairy ?????tales'));
console.log(anagrams('test this', 'test hypothesis'));
console.log(`\n----------------------`);

/**
 * Alternative options
 * 
 */

 // clean punctuation and space and convert string to lowercase
 const cleanStr2 = (str) => {
     return (str.replace(/[^\w]/g, '')).toLowerCase();
 }
 console.log(cleanStr2('Hello! Bot!! There!!!'));
 console.log(`\n----------------------`);

 // convert cleaned string to array then sort and then join back
 const strToSort = (str) => {
     return(cleanStr2(str).split('').sort().join(''))
 }
 console.log(strToSort('Hello! Bot!! There!!!'));
 console.log(`\n----------------------`);

 // check if the two compared strings are of the same length and type
 const anagrams2 = (str1, str2) => {
     return (strToSort(str1) === strToSort(str2));
 }
 console.log(anagrams2('Raya!', 'arYa!!'));
 console.log(anagrams2('RAIL! SAFETY!', 'fairy ?????tales'));
 console.log(anagrams2('test this', 'test hypothesis'));



