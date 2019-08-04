/**
 * matrixSpiral.js      -A program to that accepts an integer N and returns a NxN spiral matrix
 * @author               Ratna Lama
 * @version              1.0
 * @since                07/27/2019
 *  *
 * @param {*} int        integer number
 * @return               returns NxN spiral matrix
 *
 * @description
 * -------------EXAMPLES-----------------
 *
 *matrixSpiral(2)
 [
    [1,2],
    [4,3]
]

matrixSpiral(4)
[
   [1,  2,  3,  4],
   [12, 13, 14, 5],
   [11, 16, 15, 6],
   [10, 9,  8,  7]
]
 */

function matrixSpiral(num) {
  const results = [];
  for (let i = 0; i < num; i++) {
    results.push([]);
  }
  let counter = 1;
  let startCol = 0,
    startRow = 0,
    endCol = num - 1,
    endRow = num - 1;

  while (startCol <= endCol && startRow <= endRow) {
    // Top Row
    for (let i = startCol; i <= endCol; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;
    // right col
    for (let i = startRow; i <= endRow; i++) {
      results[i][endCol] = counter;
      counter++;
    }
    endCol--;
    // bottom row
    for (let i = endCol; i >= startCol; i--) {
      results[endRow][i] = counter;
      counter;
    }
    endRow--;

    // start col
    for (let i = endRow; i >= startRow; i--) {
      results[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }
  return results;
} // end matrixSpiral()

console.log(matrixSpiral(4));
module.exports = matrixSpiral;
