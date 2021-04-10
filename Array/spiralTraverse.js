/**
 * spiralTraverse.js    - A program to find the spiral array from a n x m two-dimensional array.
 * @author              - Ratna Lama
 * @version             - 1.0.0
 * @description         - Spiral order starts from the tope left corner fo the two-d array,
 *                        goes to the right, and proceeds in a spiral pattern all the way
 *                        until every element has been visited.
 *
 * Example -
 *      INPUT:
 *              startRow (sR) -> (horizontal i.e Left to Right)
 *              endRow   (eR)
 *              startColumn (sC) : (vertical i.e. Top to Bottom)
 *              endColumn   (eC)
 *
 *          array = [
 *                      sR/sC
 *                      [10,    20,    30],
 *                      [40,    50,    60],
 *                      [70,    80,    90],
 *                       eR ->          eC
 *                  ]
 *      OUTPUT:
 *          array = [10, 20, 30, 60, 90, 80, 70, 40, 50]
 *
 * Algorithm -
 *
 *
 * Time Complexity: O(n) --> linear
 * Space Complexity: O(n) --> linear
 *
 */
const spiralTraverse = (array) => {
  const result = [];

  // set bounds for 2-D array
  let startRow = 0,
    endRow = array.length - 1,
    startCol = 0,
    endCol = array[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    // Top Row
    for (let col = startCol; col <= endCol; col++) {
      result.push(array[startRow][col]);
    }

    // Right Most Column
    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(array[row][endCol]);
    }

    // Last Row
    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) break;
      result.push(array[endRow][col]);
    }

    // Left Most Column
    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol === endCol) break;
      result.push(array[row][startCol]);
    }
    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }

  return result;
};

const array = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];

console.log(spiralTraverse(array));
// [10, 20, 30, 60, 90,80, 70, 40, 50]

console.log(array.flat(1)); // flatten array to the depth level=1
// [10, 20, 30, 40, 50, 60, 70, 80, 90]
