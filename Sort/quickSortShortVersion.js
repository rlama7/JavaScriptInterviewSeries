const quickSortShortVersion = (array) => {
  // base case for recursion to exit
  if (array.length <= 1) return array;

  // for the best case scenario we'd want to attempt to
  // get the middle element as the pivot
  let pivot = array[Math.floor(array.length / 2)];

  // Next we want to divide the given array into smaller sub-aray
  const leftSubArray = [];
  const rightSubArray = [];

  // if the element is less than the pivot group all such
  // elements to the leftSubArray

  // if the element is greater or equal than the pivot group all such
  // elements to the rightSubArray

  for (const element of array) {
    // if we encounter pivot item simply continue
    if (element === pivot) continue;

    if (element < pivot) {
      leftSubArray.push(element);
    } else {
      rightSubArray.push(element);
    }
  }

  // By this point we've done the first iteration of finding the middle pivot element
  // and dividing the array two sub groups: leftSubArray and rightSubArray
  // we need to continue doing this process to the sub array namely: leftSubArray and rightSubArray
  // untill we get the base case which is just a single element.

  // Once we've the base case for recursion, we are safe to do recursion
  return [
    ...quickSortShortVersion(leftSubArray),
    pivot,
    ...quickSortShortVersion(rightSubArray),
  ];
};

const array1 = [7, 4, 1, 5, 13, 2, 9, 0, -11, 11, 8];
console.log('array1 length / 2: ' + array1.length / 2);
console.log(
  'floor value of array1.length/2 ---> ' + Math.floor(array1.length / 2)
);
console.log(quickSortShortVersion(array1)); // [-11, 0, 1, 2,  4, 5, 7, 8, 9, 11]
