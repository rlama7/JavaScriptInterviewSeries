/**
 * Bubble sort --> O(n^2)
 * 
 * Algorithm:
 * Fron --> [20, -25, 77, 0, 3] <------ End
 * find the largest element then move to the end of th array
 * from i=0 to array.lenght
 *      from j=0 to array.lenght-i
 *          if the element at j is greater than j+1
 *              swap element at j and j+1
 * 
 * 
 */
const bubbleSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; i < len - i; j++) {
            if(arr[j] > arr[j+1]) {
                // [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                const lesser = arr[j];
                arr[j+1] = arr[j];
                arr[j] = lesser;
            }
        } 
    }
    // returns sorted array
    return arr;
}

// ES6 array swapping using destructuring assignment aray matching
// [a,b] = [b,a];
// let arr = [20, -25, 77, 0, 3];
// const arrSort = bubbleSort([20, -25, 77, 0, 3]);
// console.log(bubbleSort([20, -25, 77, 0, 3]));
console.log('hello world!')

// console.log(arr.length);