/**
 * heightMatch.js       - A program to match height from an even noumber of students in a class
 *                        with red/blue dress code. The class has exactly same number of red/blue
 *                        dressed students. When staging for photo each student of the same color
 *                        should all be in the same row. You'll need to arrange students in two rows
 *                        such that the student at the back row must be taller than the one in the front
 *                        row. Return true or false based on whether you can stage such photo sessions.
 *
 * @author              - Ratna Lama
 * @version             - 1.0.0
 * @description
 *
 * Example -
 *
 * red = [5,2,3,1,4]
 * sortedRed = [1,2,3,4,5]
 *
 * blue = [8,9,10,6,7]
 * sortedBlue = [6,7,8,9,10]
 *
 * compare sortedRed Vs sortedBlue --> All items in sortedBlue must be greater than sortedRed or vice-versa
 *
 * first Row ----->  1, 2, 3, 4, 5
 * Second (Back) Row -----> 6, 7, 8, 9, 10
 */

const heightMatch = (red, blue) => {
  // sort array
  red.sort((a, b) => a - b);
  blue.sort((a, b) => a - b);

  // separate row by color
  const firstRowColor = red[0] < blue[0] ? 'RED' : 'BLUE';

  for (let index = 0; index < red.length; index++) {
    if (firstRowColor === 'RED') {
      if (red[index] >= blue[index]) return false;
    } else if (blue[index] <= red[index]) return false;
  }

  return true;
};

const red = [1, 2, 3, 14, 25]; // 1 2 3 14, 25
const blue = [1, 2, 3, 10, 35]; // 1,2,3,10,35

const red1 = [1, 5, 3, 2, 4]; //1 2 3 4, 5
const blue1 = [10, 6, 9, 7, 8]; //6,7,8,9,10
// const sorted = (arr) => arr.sort((a, b) => a - b);

console.log('red & blue -> ' + heightMatch(red, blue)); // false

console.log('red1 & blue1 --> ' + heightMatch(red1, blue1)); // true
