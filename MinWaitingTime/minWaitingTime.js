/**
 * minWaitingTime.js    - A program to calulate the minimum waiting time for a given non-empty array.
 * @author              - Ratna Lama
 * @version             - 1.0.0
 * @description         -
 *
 * Example:
 * Array could be mutated
 * if the given quries
 * arr1 = [2, 5] --> min waiting time  are as follows:
 * 0 seconds for first item --> 2
 * 2 seconds for the second item --> 5
 * -> Total waiting time of 0 + 2  --> 2 seconds total
 *
 * arr2 = [2, 5, 8] --> min waiting time  are as follows:
 * 0 seconds for first item --> 2
 * 2 seconds for the second item --> 5
 * (2+5) seconds for the third item --> 8
 * -> Total waiting time of 0 + 2 + (2+5) --> 9 seconds total
 *
 * arr3 = [2,8,6,3] --> SORT --> [2,3,6,8]
 * min waiting time  are as follows:
 * 0 seconds for first item --> 2
 * 2 seconds for the second item --> 3
 * (2+3) seconds for the third item --> 6
 * (2+3+6) seconds for the fourth item --> 8
 * -> Total waiting time of 0 + 2 + (2+3) + (2+3+6)--> 18 seconds total
 *
 */

const minWaitingTime = (arr) => {
  // sort array
  arr.sort((a, b) => a - b);

  let totalMinTime = 0;
  for (let index = 0; index < arr.length; index++) {
    let duration = arr[index];
    let itemLeft = arr.length - (index + 1);
    totalMinTime += duration * itemLeft;
  }
  return totalMinTime;
};

const sort = (arr) => arr.sort((a, b) => a - b);

const arr = [2, 8, 6, 3];
console.log('arr.length --> ' + arr.length);

console.log('minWaitingTime --> ' + minWaitingTime(arr));
console.log('sorted arr -->  ' + arr.sort());
