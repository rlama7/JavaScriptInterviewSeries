/**
 * Merge sort --> O(n * log(n))
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