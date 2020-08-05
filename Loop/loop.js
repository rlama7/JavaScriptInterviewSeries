/**
 * JS Loops:
 * 
 * for loop
 * for ... in
 * for ... of
 * for each
 * while loop
 * do while loop
 * 
 */

/**
 * Use the for loop classic to print:
 * if a number is a multiple of 3 --> print fizz
 * if a number is a multiple of 5 --> print buzz
 * if a number is a multiple of both 3 & 5 --> fizzbuzz 
 * else print number
 */
const fizzBuzz = (num) => {
    for (let i = 1; i <= num; i++) {
        if (i % 5 === 0 && i %3 === 0) {
            console.log(`fizzbuzz`);
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else if (i % 3 === 0) {
            console.log(`fizz`);
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(15);

/**
 * Use of break and continue in the for classic loop
 * 
 */
console.log(`\n-----------------------------------`);
const breakContinue = (num) => {
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) { // continue if number is a an even 
            continue;
        } else if(i % 3 === 0 && i % 11 === 0) { // breaks out of loop if a number is multiple of both 3 and 11
            break;
        } else {
            console.log(i);
        }
    }
}
breakContinue(50);

/**
 * for...in loop iterates over the enumberable properties of an OBJECT, 
 * in an arbitrary order. For each distincet property, statements can be exectued.
 * 
 * for (variable in object) {
 *      // Some code here 
 * }
 * 
 */
console.log(`\n-----------------------------------`);
const city = {
    0: 'San Francisco',
    1: 'Tokyo',
    2: 'Singapore',
    3: 'Kathmandu',
    4: 'Paris',
    5: 'Pandora'
}
for (let key in city) {
    console.log(`${key}: ${city[key]}`);
}

console.log(`\n-----------------------------------`);
const arr = ['ant', 'bat', 'cat', 'dog', 'egg'];
for (let index in arr) {
    console.log(`${index}: ${arr[index]}`);
}

/**
 * for ... of loop iterates over iterable objects including:
 *      --> Array
 *      --> Map
 *      --> Set
 *      --> Argments object
 * 
 *      for (variable of object) {
 *          // Some code here
 *      }
 */

// ARRAY
console.log(`\n-------------ARRAY----------------------`);
const fruits = ['apple', 'kiwi', 'pineapple', 'cherry']
for (let index of fruits) {
    console.log(`${index}`)
}

// MAP
console.log(`\n---------------MAP--------------------`);
const map = new Map();
// fill map 
map.set(1, "red");
map.set(2, "blue");
map.set(3, 10000);
map.set(4, "green");
for (let key of map) {
    console.log(key);
}
console.log(map);

// SET
console.log(`\n---------------SET--------------------`);
let mySet = new Set();
mySet.add('North');
mySet.add('South');
mySet.add('East');
mySet.add('West');
mySet.add('North'); // can't have duplicate so will only include once
for (let key of mySet) {
    console.log(key); 
}
console.log(mySet);

/**
 * forEach() method executes a provided function once for each array element
 * 
 */
console.log(`\n---------------forEach(--------------------`);
const arr1 = ['a', 'p', 'p', 'l', 'e'];
arr1.forEach((el, index) => {
    console.log(`${index}: ${el}`);
})


/**
 * While loop - execute as long as the condition evaluates to true
 * while (condition is true) {
 *      // some code here
 *      ....
 *      // exit condition
 *      
 * }
 */
console.log(`\n----------------while Loop-------------------`);
let i = 1;
while(i <= 20) {
    if (i % 4 == 0) {
        console.log(i);
    }
    // exit condition
    i++;
}


/**
 * do while loop a close cousin of while loop
 * do while loop makes sure that the code is execute at least once.
 * 
 * do {
 *      // some code
 *      ....
 *      // exit condition
 * 
 * } while (condition is true)
 */
console.log(`\n--------------do while loop---------------------`);
let j = 0;
do {
    console.log(j);
    // exit itr
    j++;

} while (j < 1);