/**
 * transposeMatrix.js   - A program to find the transpose of a Matrix of size NxN or NxM.
 * @author              - Ratna Lama
 * @version             - 1.0.0
 * @description         - Given a matrix of size NxN or NxM transpose a matrix.
 *                        The transpose of a matrix is the new matrix obtaine by flipping over
 *                        its main diagonal, switching the row and column indics of the matrix
 *
 * ---Example---
 *      INPUT:
 *          matrix = [
 *                      [1,2,3],  <- 0
 *                      [4,5,6],  <- 1
 *                      [7,8,9]   <- 2
 *                  ]
 *      OUTPUT:
 *          result = [
 *                      [7,4,1],
 *                      [8,5,2],
 *                      [9,6,3]
 *                   ]
 *
 *
 * ---Algorithm---
 *
 * ---Time Complexity---
 * @param {*} matrix input matrix of size NxN or NxM
 */
const transposeMatrix = (matrix) => {
  // first find the transpose of a matrix
  // that is, leave the diagonal from left top to the right bottom as it is
  // so in the example below
  // if M = |a_ij| then M(T) = |a_ij|
  //
  // [
  //    [1,2,3],  <- 0
  //    [4,5,6],  <- 1
  //    [7,8,9]   <- 2
  //  ]
  // Transpose of the matrix would be
  //   [
  //    [1,4,7],  <- 0 // switch: 2 <--> 4
  //    [2,5,8],  <- 1 // switch: 3 <--> 7
  //    [3,6,9]   <- 2 // switch: 6 <--> 8
  //  ]
  // Next step switch first and last column leaving middle column in tacke to rotate if needed
  //   [
  //    [7,4,1],  <- 0 // switch: 7 <--> 1
  //    [8,5,2],  <- 1 // switch: 8 <--> 7
  //    [9,6,3]   <- 2 // switch: 3 <--> 9
  //  ]
  // done

  let rows = matrix.length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  return matrix;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(transposeMatrix(matrix));
// [
// [ 1, 4, 7 ],
// [ 2, 5, 8 ],
// [ 3, 6, 9 ]
// ]
