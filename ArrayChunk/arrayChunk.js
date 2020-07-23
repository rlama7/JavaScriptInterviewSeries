/**
 * Array Chunk
 * Given an array and chunk size, divide the array into many sub-arrays where each subarray is of lenght size
 * 
 * Examples
 * chunk([1,2,3,4], 2) --> [[1,2], [3,4]]
 * chunk([1,2,3,4,5], 2) --> [[1,2], [3,4], [5]]
 * 
 * Algorithm:
 * empty array to hold chunked sub-arrays
 * for each element in the original array
 *      --> retrieve the last elemet in 'chunked'
 *      --> if the last element does not exits, of if its lenght is equal to the chunk size
 *          --> push a new chunk into 'chunked' with the current element
 *      else add the current element into the chunk
 * 
 */

 const chunk = (array, size) => {
     const chunked = [];
     
     for (let element of array) {
         const last = chunked[chunked.length - 1];
         if (!last || last.length === size) {
             chunked.push([element]);
         }else {
         last.push(element);
        }
     }
    return chunked;
 }

const arr = [1,2,3,4,5,6,7,8,9,0];
console.log(chunk(arr, 4));


/**
 * Using slice
 * 
 * Algorithm:
 * create an empty array
 * create a index to start at 0
 * while index is less than array.length
 *  --> push a slice of length 'size' from array into chunked
 * --> add size to index
 */
const chunk2 = (array, size) => {
    const chunked = [];
    let index = 0;
    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
}

console.log(chunk2(arr, 4));