/**
 * Give an array compute mean and mode.
 * 
 * Arithmetic Mean also known as mean or average 
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

const findMeanMedianModeRange = () => {
    const result = [];
    result.push(findMean());
    result.push(findMedian());
    result.push(findMode());
    result.push(findRange());
    return result;
};

// calculate Mean
const findMean = (arr) => {
    return 1;
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




const arr = [3,5,9,0,-6,10,5];
console.log(findMeanMedianModeRange());