/**
 * mergeOverlappingIntervals.js - A program to merge overlapping intervals in a given input array.
 * @author                      - Ratna Lama
 * @version                     - 1.0.0
 * @description                 -
 * @param {*} array to be merged if an overlapping interval exists
 *
 * --->Example<---
 *      INPUT:
 *          array = [[3,6], [1,2], [4,7], [5,8], [9,12]]
 *      OUTPUT:
 *          result = [[1,2], [3,8], [9,12]]
 *
 * --->Algorithm<---
 *
 * [[3,6], [1,2], [4,7], [5,8], [9,12]]
 *
 *  - #1 Sort based on increasing start element from 2D
 *  - [[1,2], [3,6], [4,7], [5,8], [9,12]]
 *
 *  - Two adjacent intervals are overlapping if:
 *      - end of the previous interval is >= start of the next interval
 *      - 6 >= 4 {interval: [3,6], [4,7]}
 *      - 7 >= 5 {interval: [4,7], [5,8]}
 *      - 8 !>= 9 {NO interval: [5,8], [9,12]}
 *
 *      Number line: <---0--1--2--3--4--5--6--7--8--9--10--11--12--->
 *                          |__|  |________|        |__________|
 *                                   |________|
 *                                       |_______|
 *                                           |__> Overlapping Intervals
 *
 * --->Time Complexity<---
 * time O(n log n) -> since we'll need to sort and the Mergesort yields n log n
 * space O(n) -> linear to store mergerIntervals
 */
const mergeOverlappingIntervals = (array) => {
  // sort 2D array in ascending order by the starting value in place,
  // i.e. the input array will be mutated.
  array.sort((a, b) => a[0] - b[0]);

  const mergedIntervals = [];
  let currentInterval = array[0];
  mergedIntervals.push(currentInterval);

  for (let nextInterval of array) {
    // destructure
    // we'll NOT use currentIntervalStart value so we used _ for throw away variable
    // [_, currentIntervalEnd] = [1,2]
    // --> currentIntervalEnd = 2
    // [nextIntervalStart, nextIntervalEnd] = [3,6]
    // nextIntervalStart -> 3
    // nextIntervalEnd -> 6

    [_, currentIntervalEnd] = currentInterval;
    [nextIntervalStart, nextIntervalEnd] = nextInterval;

    // merge overlapping intervals
    // if end of the current interval is >= start of the next interval
    // merge --> (equivalent to) update the current intervals end value
    if (currentIntervalEnd >= nextIntervalStart) {
      currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
    } else {
      currentInterval = nextInterval;
      mergedIntervals.push(currentInterval);
    }
  }

  return mergedIntervals;
};

const array = [
  [3, 6],
  [1, 2],
  [4, 7],
  [5, 8],
  [9, 12],
];

console.log(mergeOverlappingIntervals(array)); // [ [ 1, 2 ], [ 3, 8 ], [ 9, 12 ] ]
