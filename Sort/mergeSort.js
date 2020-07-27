/**
 * Merge sort --> O(n * log(n))
 * 
 * Algorithm:
 * Create results array
 * While there are still elements in both arrays
 *      --> If the first element in the left half is less than the first element in the right half
 *          --> shift the eleemnt from let into a result arr
 *      --> Else
 *          --> shift element from right into the result arr
 *  Take everything from the array that still has stuff in it and put in results.
 * 
 */
const mergeSort = (arr) => {
    // base case
    if (arr.length === 1) {
        return arr;
    }
    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center); // not including center
    const right = arr.slice(center);    // everything including center
    
    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
    const results = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }
    return[...results, ...left, ...right]; // push all left dangling elements from either array left or right
}


console.log(mergeSort([30, -5, 2, 1, -34, 0]));



const mergeSort2 = (arr) => {
    // check if the array has a single element
    // if so then simply return the array
    if (arr.length === 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    // left array consists of elements from 0th to the mid, excluding mid
    const left = arr.slice(0, mid);
    // right array consists of elements from mid to the end of the array.
    const right = arr.slice(mid);

    return merge2(mergeSort2(left), mergeSort2(right));

}

const merge2 = (left, right) => {
    const result = [];

    // loop until until there are any elements on left and right
    while(left.length && right.length) {
        // if the first element of the left array is less than the first
        // element on the right then push that element to result array else 
        // if the first element from the right array is the smaller one then 
        // push the first element from the right to the result array
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        } 
    }
    // return brand new array that includes result, all dangling elements from left and then right
    return [...result, ...left, ...right];
}

console.log(mergeSort2([30, 15, 2, 12, 7, 5 -34, 0]));
