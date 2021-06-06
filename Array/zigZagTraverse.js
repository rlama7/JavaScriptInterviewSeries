/**
 * zigZagTraverse.js    - A program that accepts 2D Array as an input and traverses in a
 *                        zigzag fashion to return 1D array.
 * @author              - Ratna Lama
 * @version             - 1.0.0
 * @description         - Zig zag order starts at the top left corner of the the 2D array,
 *                        goes down by one element, and proceeds in a zigzag pattern all the way
 *                        to the bottom right corner.
 *
 * --->INPUT<---
 *      array = [
 *                [1,3,4,10],
 *                [2,5,9,11],
 *                [6,8,12,15],
 *                [7,13,14,16]
 *              ]
 * --->OUTPUT<---
 *          [1,2,3,4,5,6,7,8,9,10,11,12,13,,14,15,16]
 *
 * --->CONSTRAINTS/RESTRICTIONS<---
 *
 * --->EDGE CASES<---
 *
 * --->ALGORITHM<---
 *
 * --->TIME COMPLEXITY<---
 * time O() ->
 * space O() ->
 *
 * @param {*} twoDArray 2D-Array input
 * @return {*} array 1D-Array
 */

// check for perimeter
const isOutOfBounds = (row, col, height, width) => {
  return row < 0 || row > height || col < 0 || col > width;
};

const zigZagTraverse = (twoDArray) => {
  const result = [];
  const height = twoDArray.length - 1; // 3
  const width = twoDArray[0].length - 1; // 3
  //   console.log(height, width);

  // check if we are on the perimeter of 2D-Array
  let row = 0,
    col = 0,
    goingDown = true;

  while (!isOutOfBounds(row, col, height, width)) {
    result.push(twoDArray[row][col]);

    // if we are going down
    // ...and if we are either at first column or final row
    // ......then change direction to go up
    // ......if we are at the last row then go to right
    // ......if we are at the first column then go down by 1 row
    // else if we are NOT at the first column or final row
    // ......increment the row and decrement the column by 1

    if (goingDown) {
      if (col === 0 || row === height) {
        goingDown = false;
        if (row === height) {
          col++; // go to right
        } else {
          row++; // go down by 1 row
        }
      } else {
        // we are going diagonally down right to left
        row++;
        col--;
      }
    } else {
      // else are we at the top row or right most column
      // in that case we need to change direction to goingDown = true
      // if we are at the right most column, we can only go down
      // if we ae at the top row we can only go to the right
      if (row === 0 || col === width) {
        goingDown = true;
        if (col === width) {
          row++;
        } else {
          col++;
        }
      } else {
        // we are NOT at the top row or right most column
        // we are going diagonally rup left to right
        row--;
        col++;
      }
    }
  }
  return result;
};

const twoDArray = [
  [1, 3, 4, 10],
  [2, 5, 9, 11],
  [6, 8, 12, 15],
  [7, 13, 14, 16],
];

console.log(zigZagTraverse(twoDArray)); // [1,  2,  3,  4,  5,  6,7,  8,  9, 10, 11, 12,13, 14, 15, 16]
