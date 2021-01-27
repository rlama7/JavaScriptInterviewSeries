/**
 * Give an array compute mean and mode.
 * 
 * Arithmetic Mean also known as mean or average is obtained by:
 * mean = (1/n) Σ x_i         ( with i = 1 to n ) ... So: x1/n + x2/n + ... + xn/n
 * 
 * Median
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
    result.push(findMean(arr), findMedian(arr), findMode(arr), findRange(arr), findSum(arr));
    return result;
};

// calculate Mean
const findMean = (arr) => {
    return findSum() / arr.length;
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
    return arr.reduce((accumulatorValue, currentValue) => accumulatorValue+currentValue, 0);
};

// calculate Min

// calculate Max



const arr1 = [3,5,9,0,-6,10,5];
const arr2 = [10,20,50];
// console.log('sum --> ' + Math.sum(...arr2));
console.log('Max --> ' + Math.max(...arr2));
console.log('Min --> ' + Math.min(...arr2));
arr1.push(...arr2);
console.log(arr1);

console.log('/n---------------findSum---------------------');
console.log('Sum of array1 elements -->' + findSum(arr1));

console.log('/n---------------findMean---------------------');
console.log('Mean of array1 elements --> ' + findMean(arr1));

console.log('/n---------------findMedian---------------------');
console.log('');
console.log(findMeanMedianModeRange(arr2));
console.log(arr2.reduce((a,b) => a+b, 0));