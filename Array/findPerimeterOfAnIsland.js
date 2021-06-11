// this JavaScript compiler uses the Node engine
// use console.log(variable) to debug the code
/*
    You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.
    Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
    The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.
    // ro c1`               
    Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]] // r_0 c_0
    Output: 16
*/
// input
// ij = 1 land
// ij = 0 water
// perimeter = 4(length) = 4*4= 16

//  output - 16 only for the brown boxes

// constraints: no diagonal / width and height <= 100

// edge cases:

// time complexity:  time O(n^2) | space O(1)

// algorithm
// wherever I see grid[i][j] = 1 land -> caculate its perimeter
//  each cell is square so i do perimeter = 4*l = 4*1 = 4
// there are 7 cells that are lands and need to be considered in calculation of perimeter = 7 *4 = 28
// total overlap = 6*2 = 12
// 28 -12 = 16
// each cell is supposedly of length 4 sides
// but if there is neighbor with land value  grid[i][j] = 1 then we need to subtract that from the total perimeter sum

const findAllPerimeter = (array) => {
  let perimeterSum = 0;

  const row = array[0].length - 1;

  const col = array.length - 1;

  for (let i = 0; i <= row; i++) {
    for (j = 0; j <= col; j++) {
      // find the land
      if (array[i][j] === 1) {
        perimeterSum += 4;
        // before i sum the perimeterSum
        // i'll need find the nieighbors if exits
        if (i > 0 && grid[i - 1][j] === 1) {
          //find neighbor
          perimeterSum -= 2;
        }

        if (j > 0 && grid[i][j - 1] === 1) {
          perimeterSum -= 2;
        }
      }
    }
  }
  return perimeterSum;
};

const grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];

console.log(findAllPerimeter(grid)); // 16
