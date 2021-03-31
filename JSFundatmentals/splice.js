/**
 * splice.js     - A program to demonstrate usage of splice() in JavaScript
 * @author      - Ratna Lama
 * @version     - 1.0.0
 * @description - The splice() method changes the content of an array by removing or
 *                replacing existing elements add/or adding new elements in place.
 *                @arguments :
 *                          array.splice(start[, deleteCont[, item1[, item2[, ...]]]])
 *
 *                          start -> start index at which to start changing the array.
 *                          deleteCount | OPTIONAL
 *                                      An integer indicating the number of elements in the array to remove from start
 *                          item1, item2, ....|OPTIONAL
 *                                      The elements to add to the array, beginning fromt he start.
 *                                      If you do not specify any elements, splice() will only remove elements from the array.
 */

const daysOfWeek = [
  'Monday', // 0
  'Wednesday', // 1
  'Thursday', // 2
  'Friday', // 3
  'Saturday', // 4
  'Sunday', // 5
];

// only delete items from array
daysOfWeek.splice(1, 2); // starting from index 1 delete two items --> // Wednesday & Thursday
console.log(daysOfWeek); // [ 'Monday', 'Friday', 'Saturday', 'Sunday' ]
//                                0         1           2          3        <----- index

// delete and also add
daysOfWeek.splice(2, 2, 'Tuesday', 'Wednesday');
// starting from index=2 delete two items -->
// Sunday in this case, only 1 is available so will delete Sunday and won't complain then will insert Tuesday and Wednesday
console.log(daysOfWeek); // [ 'Monday', 'Friday', 'Tuesday', 'Wednesday' ]
