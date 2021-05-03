/**
 * Given a NxN matrix rotate 90 degree.
 * Rotate it such that the rotation is done in place ,i.e. without using extra space.
 *
 * ---Example---
 *      INPUT:
 *          matrix = [
 *                      [1, 2, 3],
 *                      [4, 5, 6],
 *                      [7, 8, 9],
 *                  ]
 *      OUTPUT:
 *          result =   [
 *                      [7, 4, 1],
 *                      [8, 5, 2],
 *                      [9, 6, 3],
 *                  ]
 *
 * ---Algorithm---
 *  #1 first find the Transpose of the matrix
 * #2 Then swap the row and column elements
 *
 * ---Time Complexity---
 * ---Space Complexity---
 *
 * @param {*} matrix NxN matrix to be rotate 90 degree
 */
const rotateMatrix90Deg = (matrix) => {
  // first transpose
  // then swap the first and last column elements
  let rows = matrix.length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < i; j++) {
      // transpose matrix
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  // swap first and last elemnts on each row
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < Math.floor(rows / 2); j++) {
      [matrix[i][j], matrix[i][rows - 1 - j]] = [
        matrix[i][rows - 1 - j],
        matrix[i][j],
      ];
    }
  }
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// transpose of matrix
// [
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
// ];

// next swap the first and last elements column wise.

console.log(rotateMatrix90Deg(matrix));
