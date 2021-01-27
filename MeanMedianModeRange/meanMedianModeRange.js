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
    // create an object hash of array elements
    let count = {};
    let max = 0;

    // const arrT = [1,2,3]
    arr.forEach((item) => {
        if (count[item] === undefined) {
            count[item] = 0;
        }
        count[item]++;
    });

    // convert object to array
    // Arr1 --> count: {"1":4,"3":2,"5":2,"7":1,"10":1,"11":1,"-2":1}
    // Arr2 --> count: {"1":1,"3":1,"5":1,"6":1,"9":1}
    console.log('count object --> ' + JSON.stringify(count));

    // Fetch only values from object
    let fetchValuesFromObj = Object.values(count);
    console.log('fetchValuesFromObj --> ' +  fetchValuesFromObj);

    // use Max/Min to find the max and min from the array
    // Math.max(...fetchValuesFromObj)
    // convert string to int
    return parseInt(getKeyByValue(count, findMax(fetchValuesFromObj)));
};

// calculate Range
const findRange = (arr) => {
    // const sortedArr = sortArrayElements(...arr);
    // let len = sortedArr.length;
    // return (sortedArr[len - 1] - sortedArr[0]);

    // alternatively faster approach
    return findMax(arr) - findMin(arr);
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

// Helper function to sort number 
const sortArrayElements = (...arr) => arr.sort((a, b) => a - b);

// Helper function to Get Key By Value from Object
const getKeyByValue = (obj, val) => {
    return Object.keys(obj).find(key => obj[key] === val);
};

// Helper function to find even or odd  LENGTH
const isEven = (arr) => {
    const len = arr.length;
    return arr.length % 2 === 0 ? `EVEN --> (${len})` : `ODD --> (${len})`;
};


const arr1 = [1,3,5,1,7,-2,10,5,3,1,11,1];
console.log(` arr1 ${arr1}`);
const arr2 = [3, 6, 9, 5, 3, 1, 1];
const arr3 = [1,2,3,4,5,6];
const arr4 = [3,4,5,3,4,5,4,5,4,5,5];

console.log('\n---------------Original Array1---------------------');
console.log(arr1);

console.log('\n---------------Destructured Original Array1 Elements---------------------');
console.log(...arr1);

console.log('\n---------------Sorted Array1 Elements---------------------');
console.log(sortArrayElements(...arr1));

console.log('\n---------------findSum()---------------------');
let sum = findSum(...arr1);
console.log(`Sum of array1 elements --> ${sum}`);

console.log('\n---------------findMean()---------------------');
console.log('Mean of array1 elements before rounding --> ' + (sum)/arr1.length);
console.log('Mean of array1 elements after rounding to FIVE digits --> ' + findMean(arr1));

console.log('\n---------------findMedian()---------------------');
console.log('original arra1 --> ' + arr1);
console.log('sorted array1 --> ' + sortArrayElements(...arr1));
console.log(`Median of array1 elements ${isEven(arr1)} Length  -->  + ${findMedian(arr1)}\n`);

console.log('original arra2 --> ' + arr2);
console.log('sorted array2 --> ' + sortArrayElements(...arr2));
console.log(`Median of array2 elements ${isEven(arr2)} LENGTH-->  + ${findMedian(arr2)}\n`);

console.log('original arra3 --> ' + arr3);
console.log('sorted array3 --> ' + sortArrayElements(...arr3));
console.log(`median of array3 elements ${isEven(arr3)} LENGTH-->  + ${findMedian(arr3)}\n`);

console.log('original arra4 --> ' + arr4);
console.log('sorted array4 --> ' + sortArrayElements(...arr4));
console.log(`median of array4 elements ${isEven(arr4)} LENGTH-->  + ${findMedian(arr4)}\n`);

console.log('\n---------------findMode()---------------------');
console.log('\nMode in Array1 --> ' + findMode(arr1));
console.log('\nMode in Array2 --> ' + findMode(arr2));
console.log('\nMode in Array3 --> ' + findMode(arr3));
console.log('\nMode in Array4 --> ' + findMode(arr4));

console.log('\n---------------findRange()---------------------');
console.log(`Range in Array1: [${arr1}] Max: ${findMax(arr1)} Min: ${findMin(arr1)} -->  + ${findRange(arr1)}`);
console.log(`Range in Array2: [${arr2}] Max: ${findMax(arr2)} Min: ${findMin(arr2)} -->  + ${findRange(arr2)}`);
console.log(`Range in Array3: [${arr3}] Max: ${findMax(arr3)} Min: ${findMin(arr3)} -->  + ${findRange(arr3)}`);
console.log(`Range in Array4: [${arr4}] Max: ${findMax(arr4)} Min: ${findMin(arr4)} -->  + ${findRange(arr4)}`);

console.log('\n---------------findMin()---------------------');
console.log(`findMin in Array1: [${arr1}]  Min: --> ${findMin(arr1)}`);

console.log('\n---------------findMax()---------------------');
console.log(`findMax in Array1: [${arr1}]  Max: --> ${findMax(arr1)}`);

console.log('\n---------------sortArrayElements()---------------------');
console.log(`Sort elements in Array1: [${arr1}] -->  + ${sortArrayElements(...arr1)}`);

console.log('\n---------------roundToFiveDigit()---------------------');
console.log("round to five digit: 3.7142857142857144 --> " + roundToFiveDigit(3.7142857142857144));

console.log('\n------------------------------------------------------\n');