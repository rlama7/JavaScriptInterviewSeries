/**
 * Arrays -------------->
 * shift() --> removes the first element from an array and returns the removed element 
 * unshift() --> adds one or more elements to the beginning of an array and returns the
 * new length of the array
 * push() ---> adds zero or more elements to the end of an arry and returns the new length of array
 * pop() --> removes the last element from an array and returns that element.
 * splice() --> changes the contents of an array by removing or replacing existing elements and/or adding 
 * new elements in place
 * slice() --> returns a shallow copy of a portion of an arrya into new array object selected from the start 
 * to end (end not included). The original array will not be modified.
 * split() ---> divides a string into an ordered list of substrings, put these substrings into an array, 
 * then return the array. 
 */

//FRONT  <------------------------------------------->  END  
const items = ['apple', 'banana', 'cherry', 'dragonfruit', 'eggplant'];

// shift()
const removedItem = items.shift();
console.log(`${removedItem} --> was removed from the front`);
console.log(items);

// unshift()
const addedItemLen = items.unshift('ant', 'arrow')
console.log(`The new length after adding item to the beginning: ${addedItemLen}`);
console.log(items);

// push()
const addedItemAtEndLen = items.push('yak', 'zebra');
console.log(`The new length after adding item to the end: ${addedItemAtEndLen}`);
console.log(items);

// pop()
const lastItemRemoved = items.pop();
console.log(`The last item removed was: ${lastItemRemoved}`);
console.log(items);

// splice
items.splice(1,0, 'Feb');   // insert at index 1 but doesn't replace item at 1 (0)
console.log(items);

items.splice(5, 1, 'May');  // replaces item at index 5 with 'March
console.log(items);

// slice
console.log(items.slice(0,2));
console.log(items);

// split
const str = 'Hello There!';
const words = str.split(' ');
console.log(words.length);
console.log(words);