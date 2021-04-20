/**
 * sortedDuplicates.js - A program to sort and filter out duplicates from a given list of strings
 * @author             - Ratna Lama
 * @version            - 1.0.0
 * @description        - Given an input string list, sort the list and remove duplicates
 *
 * @param {*} strList input string list
 *
 * ---Algorithm---
 *
 * ---Time Complexity---
 * best sorting algorithm has O(n) -> n logn so will be the case here.
 *
 * filter happens at O(n) time -> linear however they are not nested so
 *
 * Time Complexity: O(n) -> n logn
 * Space Complexity: O(n) -> linear
 * We see that the input array list is not mutated therfore we can safely say that while sorting and filtering
 * there is list created to store in the memory
 */
const sortedDuplicates = (strList) => {
  return strList
    .sort() // sort string compared to its UTF value default value
    .filter((item, index) => strList.indexOf(item) === index); // filter item
};

const array = ['x', 'w', 'b', 'z', 'w', 'a', 'c', 'a'];
console.log(sortedDuplicates(array)); // [ 'a', 'b', 'c', 'w', 'x', 'z' ]
console.log(array); // ['a', 'a', 'b', 'c', 'w', 'w','x', 'z']
console.log(array.indexOf(array[0]));
