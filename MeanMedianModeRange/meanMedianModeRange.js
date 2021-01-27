/**
 * Give an array compute mean and mode.
 * 
 * Arithmetic Mean also known as mean or average is obtained by:
 * mean = (1/n) Σ x_i         ( with i = 1 to n ) ... So: x1/n + x2/n + ... + xn/n
 * 
 * Arithmentic Median is a positional average and refers tot he middle value in a distribution
 * sort the number and count the number of elements
 * 
 * if odd number, divide county by 2 and round up to ge the position of the median number
 * 1,2,4, 6, 7 --> 5/2 --> 2.5 ~ 3 --> the number in position 3 is 4
 * --> equivalently for odd number we we can do ---> (count + 1) /2 --> (5 + 1)/2 --> 3 so the number on 
 * 3rd position is 4
 *
 * NOTE: array elements index start from 0 therefore we'll need to take  count-1 instead
 *  
 * if even number, divide by 2. Go to the number in that position and average it with 
 * the number in the next higher position to get the median.
 * 1,2,4,6,7,8 --> count /2 --> 6/2 --> 3
 * So we have count, count+1 position elements 4, 6 respectively in the middle
 * next take the average of count + count+1 elements / 2 ---> (4+6)/2 --> 5 as Median 
 * Note the Median may or may not be included in the provided sequence
 * 
 * NOTE: array elements index start from 0 therefore we'll need to take count and count-1 instead
 * 
 * Mode or frequency is the value that is repeated more often than any other value.
 * In the case there are same number of repeated values, take the one with the lowest value
 * Example:- 1,2,3,2,3,1 --> take 1 as mode.
 * 
 * 
 * Range is the difference between the largest and the smallest value in the array.
 * sort the array elements
 * then largest element - smallest element --> range
 * 
 * Print real number up to 5 digits.
 * If more than one number ahs the same frequency, then choose the smallest number as a mode.
 * 
 * Example:-
 * [3,5,9,0,-6,10,5] -->  Mean=3.7143, Mode=5
 * 
 * [6,9,6,2,1,4,2] --> Mean=4.2857, Mode=2 (although both both 2 and 6 has the same frequency=2 we pick the mode of the smallest number)
 */

const findMeanMedianModeRange = (arr) => {
    const result = [];
    result.push(findMean(arr), findMedian(arr), findMode(arr), findRange(arr), findSum(...arr));
    return result;
};

// calculate Mean then round to the nearest five digit precision
const findMean = (arr) => {
    return roundToFiveDigit(findSum(...arr) / arr.length);
};

// calculate Median
const findMedian = (arr) => {
    let medianVal = 0;
    let len = arr.length;
    
    // Step:1 Sort array
    const sortedArr = sortArrayElements(...arr);

    // check even or odd length array elements
    if (len % 2 === 0) { // is even
        // take average of two middle numbers from a sorted array
        // since array element's index starts from 0 we'll need take one step back 
        medianVal =  (sortedArr[len/2 -1] + sortedArr[len/2]) / 2;
    } else { // is odd
        // take middle number only
        // since array element's index starts from 0 we'll need to take one step back
        medianVal = sortedArr[(len-1) / 2];
    }
    return medianVal;
};

// calculate Mode
const findMode = (arr) => {
    return 5;
};

// calculate Range
const findRange = (arr) => {
    const sortedArr = sortArrayElements(...arr);
    let len = sortedArr.length;
    return (sortedArr[len - 1] - sortedArr[0]);
};

// calculate the sum of all values in a given aray
const findSum = (...arr) => {
    return (arr.reduce((accumulatorValue, currentValue) => accumulatorValue+currentValue, 0));
};

// calculate Min
const findMin = (arr) => Math.min(...arr);

// calculate Max
const findMax = (arr) => Math.max(...arr);

// Helper function to round number to five digits precision
const roundToFiveDigit = (num) => (Math.round(num *10000) + Number.EPSILON) / 10000;
// console.log("round to five --> " + roundToFiveDigit(3.7142857142857144));

// Helper function to sort number 
const sortArrayElements = (...arr) => arr.sort((a, b) => a - b);


const arr1 = [1,3,5,1,7,-2,10,5,3,1,11,1];
const arr2 = [1, 6, 9, 5, 3];
// console.log('sum --> ' + Math.sum(...arr2));

// arr1.push(...arr2);
// console.log(arr1);



console.log('\n---------------Original Array1---------------------');
console.log(arr1);
console.log('\n---------------Destructured Original Array1 Elements---------------------');
console.log(...arr1);
console.log('\n---------------Destructred and Sorted Array1 Elements---------------------');
console.log(sortArrayElements(...arr1));
console.log('\n---------------findSum()---------------------');
let sum = findSum(...arr1);
console.log(`Sum of array1 elements --> ${sum}`);

console.log('\n---------------findMean()---------------------');
console.log('Mean of array1 elements before rounding --> ' + (sum)/arr1.length);
console.log('Mean of array1 elements after rounding --> ' + findMean(arr1));

console.log('\n---------------findMedian()---------------------');
console.log('sorted array1 --> ' + sortArrayElements(...arr1));
console.log('median of array1 elements EVEN LENGTH--> ' + findMedian(arr1));
console.log('sorted array2 --> ' + sortArrayElements(...arr2));
console.log('median of array2 elements ODD LENGTH--> ' + findMedian(arr2));

console.log('\n---------------findRange()---------------------');
console.log('Range in Array1 --> ' + findRange(arr1));
console.log('Range in Array2 --> ' + findRange(arr2));


console.log('\n---------------findMin()---------------------');
console.log('Minimum value in Array1 --> ' + findMin(arr1));

console.log('\n---------------findMax()---------------------');
console.log('Maximum value in Array1 --> ' + findMax(arr1));

console.log('\n---------------sortArrayElements()---------------------');
console.log('Sort elements in Array1 --> ' + sortArrayElements(...arr1));

console.log('len of arr1 --> ' + arr1.length);
console.log('len/2 of arr1 --> ' + arr1.length/2);



// console.log('');
// console.log(findMeanMedianModeRange(arr2));
// console.log(arr2.reduce((a,b) => a+b, 0));