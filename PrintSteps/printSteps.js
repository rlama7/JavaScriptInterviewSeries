/**
 * Print Steps
 * Write a function that accepts a positive Number N. 
 * The funciton should conole log a step shape with N levels using # character. Make 
 * sure the step has spaces on ther right hand side!
 * 
 * Examples:
 * Steps(3)
 *         '#    '
 *         '##   '
 *         '###  '
 *         '#### '
 *         '#####'
 *  
 * Algorithm:
 * think interms of square matrix
 * from 0 to n iterate through the rows
 *  -> create an empty string 'stari'
 * -> from 0 to n (iterate throuh the columns)
 *      -> if the current column is equal to or less thena the current row
 *            --> add '#'
 *      -> else 
 *              add space to siare
 *  console log stair
 */

 const steps = (n) => {
     
     for (let row = 0; row < n; row++) {
        let stair = '';
        for(let column = 0; column < n; column++)  {
            if(column <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }
        console.log(stair);
     }
 }

steps(7);

/** 
 * Recursive Approach
 */

 const stepsRecursive = (num, row=0, stair = '' ) => {
     // base case
     if (num == row) {
         return;
     }
     
     if (num === stair.length) {
         console.log(stair);
         return stepsRecursive(num, row + 1);
     }

     if (stair.length <= row) {
         stair += '#';
     } else {
         stair += ' ';
     }
     steps(num, row, stair);
 }
 stepsRecursive(21);