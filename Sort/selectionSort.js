/**
 * Selection sort --> O(n^2)
 *
 * Algorithm:
 * from i= 0 to < array.length
 *      assume the element at "ith" position is the least in the array
 *      aasign it ot indexOfMin
 *      For i from i+1 to end of array
 *      see if there is an element with lower value
 *      if there is, record its index
 * It the index of the current elemet and the index of the 'lowest' element is
 * not the same, swap them.
 *
 */
const selectionSort = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      // swap [a, b] = [b, a]
      [arr[indexOfMin], arr[i]] = [arr[i], arr[indexOfMin]];
      // let lesser = arr[indexOfMin];
      // arr[indexOfMin] = arr[i];
      // arr[i] = lesser;
    }
  }
  return arr;
};

const arr = [34, 17, -1, 0, 2];
console.log(selectionSort(arr));
