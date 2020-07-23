// ES6 array methods

'use strict';

const items = [
    {name:'Bike', price:100},
    {name:'TV', price:200},
    {name:'Album', price:10},
    {name: 'Book', price:6},
    {name:'Phone', price:500},
    {name: 'Computer', price:1000},
    {name: 'Keyboard', price:25}
]

const fruits = ['Apple', 'Banana', 'Cherry'];

/**
 * filter method -> takes and array and returns a brand new array with that matches filter condition
 
const filteredItems = items.filter((item) => {
    return item.price <=100;
});
console.log(filteredItems);
console.log(items);

*/

/**
 * map --> map through a list and return a brand new array
 
const findItemName = items.map((item) => item.name);
console.log(findItemName);

const findItemPrice = items.map((item) => {
    return item.price
});
console.log(findItemPrice);

console.log(items);

*/

/**
 * find --> find items that match criteria and returns an object
 * 


 let findItem = items.filter((item) => {
     return item.name === 'Bike';
 })

 console.log(findItem);

findItem = items.find((item) => {
    return item.name === 'Bike';
})

console.log(findItem);
*/

/**
 * forEach --> 
 
items.forEach((item) => {
    console.log(item.name);
})

const price = items.forEach((item) => {
    console.log(item.price);
})
console.log(price);

items.forEach((item, index) => {
    console.log(item, index);
})
*/


/**
 * length
 
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits.length);

let first = fruits[0];
let last = fruits[fruits.length-1];
console.log(`first: ${first}, last:${last}`);
*/

/**
 * push --> adds an item to the end of an Array
 * pop --> removes an item from the end of an array and returns it
 * shift ---> removes an item from the beginning of an Array and returns it 
 * unshift --> adds an item to the beginning of an array
 * indexOf --> find index of an item in the Array
 * splice(pos, item) --> remove an item by starting from the position, till number of item to be removed)
 * slice --> shallow copy of an array
 *
 
fruits.push('Orange', 'Grapes', 'Mango');
console.log(fruits);

let last = fruits.pop();
console.log(last);
console.log(fruits);

let first = fruits.shift();
console.log(first);
console.log(fruits);

fruits.unshift('Tango');
console.log(fruits);

let pos = fruits.indexOf('Cherry');
console.log(pos);

// no such following item so returns -1
console.log(fruits.indexOf('tan')); 

let splicedItem = fruits.splice(pos, 3);
console.log(splicedItem);
console.log(fruits);

let shallowCopy = fruits.slice()
console.log(shallowCopy);
console.log(items);

let itemsShallowCopy = items.slice();
console.log(itemsShallowCopy);
console.log(Object.keys(fruits));
console.log(Object.keys(items));

*/

/**
 * some --> returns T/F immediately after first condition is satisfied
 
const hasItemUnderHundred = items.some((item) => {
    return item.price < 0;
})

console.log(hasItemUnderHundred);
*/

/**
 * reduce --> accumulates to a single item
 * 
 
console.log(items);
const toalPrice = items.reduce((totalCount, item) => {
    return item.price + totalCount;
}, 0)
console.log(toalPrice);


console.log(fruits);
console.log(fruits.includes('Cherry'));
*/

/**
 * for each vs for of
 
console.log(fruits);

const fruitSnack = [];
fruits.forEach((item) => {
    fruitSnack.push(`eat ${item}`);
})

console.log(fruitSnack);

*/

/**
 * findIndex --> finds Index of an array element that matches criteria
 * find --> find an array element that matches criteria
 */

// ES5
var ages = [12, 17, 8, 21, 14, 11];

var legalAge = ages.map(function(legal) {
    return legal>=18;
})
console.log(legalAge);
console.log(legalAge.indexOf(true));
console.log(ages[legalAge.indexOf(true)]);

// ES6

let full = ages.findIndex((cur) => cur>=18);
console.log(full);

// returns and individual item
full = ages.find((curr) => curr >= 18);
console.log(full);

// returns an array
full = ages.filter((curr) => curr>=18);
console.log(full);

full = ages.map((curr) => curr >= 18);
console.log(full);
