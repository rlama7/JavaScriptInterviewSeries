// FrontEnd
// Use concise language to explain below questions (have coding questions later, use your time wisely)

// - Explain how `this` works in JavaScript

// - Can you describe the main difference between a `.forEach` loop and a `.map()` loop and why you would pick one versus the other?

// - What's a typical use case for anonymous functions?

// console.log(this)

// const obj = {}

// const array = [1,2,3]
// array.map((item) => item*item);

// array.forEach((item) => item*item)

//Coding

// Given a buggy sorted array that has one misplaced integer, write a function that corrects the bug and makes the array correctly sorted.

// E.g., input [10, 20, 30, 15, 40, 50 ] should be [10, 15, 20, 30, 40, 50].

// requirements
const input = [10, 20, 30, 15, 40, 50];

console.log(input.sort((a, b) => a - b)); // O(n logn)

// O(n)

const correctArry = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let left = i;
    let right = i + 1;
    let min = arr[left];

    // if the array is not in ascending order
    if (arr[left] > arr[right]) {
      // check if min
      while (right >= 0 && min > arr[right]) {
        right--;
        //
      }
    }
  }
};
