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
 * time O() ->
 * space O() ->
 */
const mergeOverlappingIntervals = (array) => {
  // sort 2D array in ascending order by the starting value in place, i.e. the input
  // array will be mutated.
  array.sort((a, b) => a[0] - b[0]);
  // merge overlapping intervals
  // if start of next
  return array;
};

const array = [
  [3, 6],
  [1, 2],
  [4, 7],
  [5, 8],
  [9, 12],
];

console.log(mergeOverlappingIntervals(array));
