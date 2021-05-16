// #1
// Following approach works only if the array list contains
// positive integers ONLY
// time complexity O(n logn) | Space complexity O(n)
const moveZeroToEnd = (array) => {
  // let's first sort
  // then we can reverse the sorted list so all the
  // 0,0 moves to the end.
  // However this approach will work only if the array list
  // is positive integers ONLY
  // this approach will break if the array list has negative numbers.
  return array.sort((a, b) => a - b).reverse();
};

// #2 Time Complexity O(n) | Space Complexity O(1)
const moveTargetToTheEnd = (array, target) => {
  // gracefully handle cases here there the list is empty or single element
  if (array.length <= 1) return array;

  let left = 0,
    right = array.length - 1;
  while (left < right) {
    // let's call the target as the element that we want to move to the right
    // let's check for the array element at left and right pointer
    // swap the element if we find target
    // there could be four scenario:

    // FIRST - if left pointer and right pointer are both NOT pointing to the target element
    // - no swapping is required increment left pointer

    // SECOND - if both the left and the right are pointing to the target
    // move the right pointer until we find the NON target element to swap
    // decrement right pointer

    // ThIRD - if left pointer is pointing to the target element and the right is NOT
    // swap the left and right elements then decrement the right pointer

    // FOURTH - if the right is pointing to the target element and the left is not
    if (array[left] !== target && array[right] !== target) {
      left++;
    } else if (array[left] === target && array[right] === target) {
      right--;
    } else if (array[left] === target && array[right] !== target) {
      // swap the element
      [array[left], array[right]] = [array[right], array[left]];
      right--;
    } else if (array[left] !== target && array[right] === target) {
      right--;
    }
  }
  return array;
};

const array1 = [1, 0, 1, 0];
const array2 = [3, 0, -1, 0, -2, 5, 0, 7];
const array3 = [];
const array4 = [1];
const array5 = [0, 0, 1, 0];
const array6 = [1, 1, 1, 0];
const array7 = [1, 0, 0, 0, 1];
const target = 0;
console.log(moveZeroToEnd(array1)); // [1,1,0,0]
console.log(moveZeroToEnd(array2)); // [7,  5,  3, 0,0, -1, -2]
console.log(moveTargetToTheEnd(array1, target)); // [ 1, 1, 0, 0 ]
console.log(moveTargetToTheEnd(array2, target)); // [ 7, 5, 3, -2, -1, 0, 0,  0]
console.log(moveTargetToTheEnd(array3, target)); // []
console.log(moveTargetToTheEnd(array4, target)); // [ 1 ]
console.log(moveTargetToTheEnd(array5, target)); // [ 1, 0, 0, 0 ]
console.log(moveTargetToTheEnd(array6, target)); // [ 1, 1, 1, 0 ]
console.log(moveTargetToTheEnd(array7, target)); // [ 1, 1, 0, 0, 0 ]
