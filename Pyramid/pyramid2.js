/**
 * Pyramid structure
 * 
 * Example
 * 
 * '   #   '
 * '  ###  '
 * ' ##### '
 * '#######'
 */

 const pyramid = (num) => {
     const midPoint = Math.floor((2*num-1)/2);
     for (let row =0; row < num; row++) {
         let level = '';
         for (let column = 0; column < 2 * num-1; column++) {
             if (midPoint - row <= column && midPoint + row >= column) {
                 level += '#';
             } else {
                 level += ' ';
             }
         }
         console.log(level);
     }
 } 

 pyramid(25);
