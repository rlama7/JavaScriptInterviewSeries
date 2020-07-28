/**
 * Reverst a string
 * @param {} str 
 */
const reverseStr = (str) => {
    // validation
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'Sorry please enter a valid string...';
    }
    return str.split('').reverse().join();
}
const arr = 'Hello World!';
console.log(reverseStr(arr));


const reverseStr2 = (str) => {
    // string validation --> if the string is undefined, or of length 1 
    // or not of type stirng then return message...
    if (!str || str.length < 2 || typeof str !== 'string') {
        return `Sorry please enter a valid string...`;
    }

    const len = str.length -1;
    const reverseArr = [];
    for (let index = len; index >= 0; index--) {
        reverseArr.push(str[index]);
    }
    return reverseArr.join('');
    
}
const arr2 = 'apple';
console.log(reverseStr2(arr2))

const reverseStr3 = str => [...str].reverse().join('');
console.log(reverseStr3(arr2));

console.log([...arr2]);

/**
 * merge sorted arrays
 * array1 --> [1, 3, 5, 7, 9]
 * array2 --> [0,2,4,6,8]
 * mergeSortedArr = (array1, array2) -> [0,1,2,3,4,5,6,7,8,9]
 */

 const mergeSortedArr = (arr1, arr2) => {
     const result = [];
     
     // loop until either array has an element
     while (arr1.length && arr2.length) {
         if (arr1[0] < arr2[0]) {
             result.push(arr1.shift());
         } else {
             result.push(arr2.shift());
         }
     }
     return [...result, ...arr1, ...arr2];
 } 

 const arr11 = [1, 3, 5, 7, 9];
 const arr22 = [0,2,4,6,8, 12, 14, 16];
 console.log(mergeSortedArr(arr11, arr22));
//  console.log(arr11.shift());
//  console.log(arr11);