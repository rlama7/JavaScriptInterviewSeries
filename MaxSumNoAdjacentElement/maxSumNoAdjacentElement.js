/**
 * Give an array of positive numbers, find the maximum sum of subsequence such that NO two numbers 
 * in the sequence should be adjacent in the array.
 * 
 * Example: -
 * arr = [3, 7, 8, 2, 1]
 * output: 3 + 8 + 1 --> 12
 * 
 */

const arr = [3,7,8,2,1];
const arr2 = [1,0,9,2,8,3,7,4,6,5,-20];
const arr3 = [3,2,7,10];

const maxSumNoAdjacentElements = (arr) => {

    let exclude = 0;
    let include = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        let temp = include;
        include = Math.max(exclude + arr[i], include);
        exclude = temp;
    }
    return include;    
};

// max returns the max of number(s)
console.log('max of 5, 7, 9, 10, -16, 12 --> ' + Math.max(5,7, 9, 10, -16, 12));
console.log('arr1 --> ' + maxSumNoAdjacentElements(arr));
console.log('arr2 --> ' + maxSumNoAdjacentElements(arr2));
console.log('arr3 --> ' + maxSumNoAdjacentElements(arr3));