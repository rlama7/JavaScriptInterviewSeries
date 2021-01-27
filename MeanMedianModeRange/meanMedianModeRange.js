/**
 * Give an array compute mean and mode.
 * 
 * Arithmetic Mean also known as mean or average is obtained by:
 * mean = (1/n) Σ x_i         ( with i = 1 to n ) ... So: x1/n + x2/n + ... + xn/n
 * 
 * Arithmentic Median is a positional average and refers tot he middle value in a distribution
 * sort the number
 * if odd number, divide by 2 and round up to ge the position of the median number
 * if even number, divide by 2. Go to the number in that position and average it with 
 * the number in the next higher position to get the median.
 * 
 * Mode or frequency
 * Range
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
    return 3;
};

// calculate Mode
const findMode = (arr) => {
    return 5;
};

// calculate Range
const findRange = (arr) => {
    return 7;
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


const arr1 = [3,5,9,13,-6,10,5,3];
const arr2 = [10,20,50];
// console.log('sum --> ' + Math.sum(...arr2));

// arr1.push(...arr2);
// console.log(arr1);



console.log('\n---------------Original Array1---------------------');
console.log(arr1);
console.log('\n---------------Destructured Original Array1 Elements---------------------');
console.log(...arr1);
console.log('\n---------------Destructred and Sorted Array1 Elements---------------------');
console.log(arr1.sort());
console.log('\n---------------findSum()---------------------');
let sum = findSum(...arr1);
console.log(`Sum of array1 elements --> ${sum}`);

console.log('\n---------------findMean()---------------------');
console.log('Mean of array1 elements before rounding --> ' + (sum)/arr1.length);
console.log('Mean of array1 elements after rounding --> ' + findMean(arr1));

console.log('\n---------------findMedian()---------------------');

console.log('\n---------------findMin()---------------------');
console.log('Minimum value in Array1 --> ' + findMin(arr1));

console.log('\n---------------findMax()---------------------');
console.log('Maximum value in Array1 --> ' + findMax(arr1));

console.log('\n---------------sortArrayElements()---------------------');
console.log('Sort elements in Array1 --> ' + sortArrayElements(...arr1));





// console.log('');
// console.log(findMeanMedianModeRange(arr2));
// console.log(arr2.reduce((a,b) => a+b, 0));