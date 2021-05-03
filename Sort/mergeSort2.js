const mergeSort2 = (array) => {
  // base case for the recursion to exit
  if (array.length <= 1) return array;

  // divide
  // to divide the given problem, let's take the
  // midpoint and cotinously divide the array into smaller subarray
  // until we get only a single element
  // then we'll merge them together to get the desired result
  const length = array.length;

  // we'll need to get the floor value of the mid value.
  let mid = Math.floor(length / 2);
  // left
  const left = mergeSort2(array.slice(0, mid)); // mid is excluded, i.e. last index is excluded for slice.
  // right
  const right = mergeSort2(array.slice(mid)); // mid to the last element.

  // conquer - merge
  return merge(left, right);
};

const merge = (left, right) => {
  // we get two arrays as an input argument
  // we'll need to compare each element from the left and right and then
  // place them in order in the final result
  const result = [];

  // itetrate through as long as we have at least one element in either of the subarray
  // we could do left.length > 0 but since JavaScript has truthy value
  // we can simpley say as long as left.length is true, i.e. there is
  // at least one element continue through the loop.
  while (left.length && right.length)
    // check if the left element is smaller than the right element from the left and right subArray
    // if YES the take the first element from the left and push it to the result list
    // if the right element is smaller than the left then take the smaller element from the
    // right and push it to the result list
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else if (right[0] < left[0]) {
      result.push(right.shift());
    }

  // By this point we would have exhausted at least one of the list,
  // so return all the list element from the result, any remaining from the left and any remaining
  // from the right as the final result of sorted elements.
  return [...result, ...left, ...right];
};

const array1 = [6, 81, 3, 0, 9, 1, 10];
console.log(mergeSort2(array1)); //[0,  1,  3, 6, 9, 10, 81]

/**
 * Utility
 *
 */
