/**
 * MapJS.js     - A program to demonstrate usage of inbuilt JavaScript Hashmap.
 * @author      - Ratna Lama
 * @version     - 1.0.0
 * @description - The Map object holds key-value pairs and remembers the original insertion
 *                order of the keys. Any value (both objects and primitive values) may be
 *                used as either a key or a value.
 *
 * - A Map object iterates its elements in insertion order -- a for...of loop returns an array
 * of [key, value] for each iteration.
 *
 * Object vs. Map
 *
 * Objetc is similar to Map both let you set keys to values, retrieve those values, delete keys, and
 * detect whether something is stored at a key. Object has been used as Map historically.
 *
 * However there are important differences that make Map preferable in some cases:
 *
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 *
 * 1) A Map does not contain any keys by default. It only contains what is explicitly put into it. An object
 * has a prototype, so it cotains default keys that could collide with your own keys if you are not careful
 *
 * 2) A Map's keys can be any value (including functions, objects, or any primitive). The key of an
 * Object must be either a String or a Symbol.
 *
 * 3) The number of items in a Map is retrieved from its size property whereas the in an Object it
 * must be determined manually.
 *
 * 4) A Map is an iterable, so it can be directly iterated. Object does not implement an iteration
 * protocol, and so objects are not directly iterable using the JavaScript for...of statement by default.
 *
 * 5) Performs better in scenarios involving frequent additions and removals of key-value pairs. Object
 * is not optimized for frequent additions and removals of key-value pairs.
 *
 * 6) Serialization and parsing native support is not available for Map whereas for Objet native support
 * for serialization from Object to JSON, using JSON.stringify()/JSON.parse()
 *
 */

// store data in the Map is through the set(key,value) method

// map instantiation
const contacts = new Map();

let keyPrimitive = 101;
let keyObj = { occupation: 'singer' };
let keyFoo = function () {
  console.log('foo');
};

/**
 * Map.prototype.set(key,value):
 * Sets mapping for  the key -> value pair in the Map object.
 * Returns the Map object.
 */
contacts.set('Taylor', {
  phone: '123-456-789',
  address: '123 Main St., Hollywood, CA USA',
});
contacts.set('Katie', {
  phone: '389-376-1234',
  address: '101 Spear St., Hollywood, CA USA',
});
contacts.set('Megan', {
  phone: '589-333-8969',
  address: '200 1st St, Hollywood, CA USA',
});
contacts.set(keyPrimitive, {
  address: '101 Sweet Home at Heart Location',
  phone: '111-111-1111',
});
contacts.set(keyObj, {
  address: '300 25th St., Carlsbad, CA',
  phone: '555-555-5555',
});
contacts.set(keyFoo, {
  address: '700 Foo St., Menlo Park, CA',
  phone: '999-999-9999',
});

console.log(contacts);
/** 
Map(6) {
  'Taylor' => { phone: '123-456-789', address: '123 Main St., Hollywood, CA USA' },
  'Katie' => {
    phone: '389-376-1234',
    address: '101 Spear St., Hollywood, CA USA'
  },
  'Megan' => { phone: '589-333-8969', address: '200 1st St, Hollywood, CA USA' },
  101 => {
    address: '101 Sweet Home at Heart Location',
    phone: '111-111-1111'
  },
  { occupation: 'singer' } => { address: '300 25th St., Carlsbad, CA', phone: '555-555-5555' },
  [Function: keyFoo] => { address: '700 Foo St., Menlo Park, CA', phone: '999-999-9999' }
}
*/

console.log('\n---------------------------------------------');
/**
 * Map.prototype.has(key) :
 * Returns a boolean asserting whether a vlue has been associated to the key in the
 * Map object or not
 */
console.log(contacts.has('Taylor')); // true
console.log(contacts.has('Swift')); // false

/**
 * Map.prototype.size
 * Returns the number of key/value pairs in the Map object.
 */
console.log(contacts.size); // 6

/**
 * Map.prototype.get(key)
 * Returns the value asociated to the key, or undefined if there is none.
 */
console.log(contacts.get('Taylor')); // { phone: '123-456-789', address: '123 Main St., Hollywood, CA USA' }

/**
 * Map.prototype.clear()
 */

console.log('\n------------------[key, value]---------------------------');
// Iteration Methods
// Iterating Map with for...of
// Extract both key -> value pairs from a Map
for (let [key, value] of contacts) {
  console.log(key + ' = ' + value);
}
/**
 * 
Taylor = [object Object]
Katie = [object Object]
Megan = [object Object]
101 = [object Object]
[object Object] = [object Object]
function () {
  console.log('foo');
} = [object Object]
 */

console.log('\n------------------keys()---------------------------');

// Extract only key from a Map
for (let key of contacts.keys()) {
  console.log(key);
}
/**
Taylor
Katie
Megan
101
{ occupation: 'singer' }
[Function: keyFoo]
 */

console.log('\n-----------------values()----------------------------');

// Extract only value from a Map
for (let value of contacts.values()) {
  console.log(value);
}
/**
{ phone: '123-456-789', address: '123 Main St., Hollywood, CA USA' }
{ phone: '389-376-1234', address: '101 Spear St., Hollywood, CA USA' }
{ phone: '589-333-8969', address: '200 1st St, Hollywood, CA USA' }
{ address: '101 Sweet Home at Heart Location', phone: '111-111-1111' }
{ address: '300 25th St., Carlsbad, CA', phone: '555-555-5555' }
{ address: '700 Foo St., Menlo Park, CA', phone: '999-999-9999' }
 */

console.log('\n----------------Entrie()-----------------------------');

for (let [key, value] of contacts.entries()) {
  console.log(key + ' = ' + value);
}
/**
 * Taylor = [object Object]
Katie = [object Object]
Megan = [object Object]
101 = [object Object]
[object Object] = [object Object]
function () {
  console.log('foo');
} = [object Object]
 */

console.log('\n-------------forEach--------------------------------');

// Map iteration with forEach()
contacts.forEach((value, key) => console.log(key + ' = ' + value));

/**
 * Taylor = [object Object]
Katie = [object Object]
Megan = [object Object]
101 = [object Object]
[object Object] = [object Object]
function () {
  console.log('foo');
} = [object Object]

 */

console.log('\n-----------Relation with Array Objects----------');
let kvArray = [
  ['USA', 'Washington D.C.'],
  ['Nepal', 'Kathmandu'],
  ['France', 'Paris'],
  ['Japan', 'Tokyo'],
];

// Give and 2D key-value Array we can convert it to map using the
// regular Map constructor

// #1
let countryToCapitalCityMap = new Map(kvArray);
console.log(countryToCapitalCityMap);

/**
 * 
 Map(4) {
  'USA' => 'Washington D.C.',
  'Nepal' => 'Kathmandu',
  'France' => 'Paris',
  'Japan' => 'Tokyo'
}
 */

console.log(countryToCapitalCityMap.has('USA')); // true
console.log(countryToCapitalCityMap.has('Brazil')); // false

console.log(countryToCapitalCityMap.get('Nepal')); // Kathmandu

console.log('\n----------------Array.from()-----------------------------');
// use Array.from() to transform a Map into a 2D key-value Array
console.log(Array.from(countryToCapitalCityMap));

/**
 * [
  [ 'USA', 'Washington D.C.' ],
  [ 'Nepal', 'Kathmandu' ],
  [ 'France', 'Paris' ],
  [ 'Japan', 'Tokyo' ]
]
 */

// More succint way is to use the spread syntax
console.log([...countryToCapitalCityMap]);
/**
 * [
  [ 'USA', 'Washington D.C.' ],
  [ 'Nepal', 'Kathmandu' ],
  [ 'France', 'Paris' ],
  [ 'Japan', 'Tokyo' ]
]
 */

console.log('\n---------------------------------------------');
console.log('\n---------------------------------------------');
console.log('\n---------------------------------------------');
console.log('\n---------------------------------------------');
console.log('\n---------------------------------------------');
console.log('\n---------------------------------------------');
console.log('\n---------------------------------------------');
console.log('\n---------------------------------------------');
console.log('\n---------------------------------------------');
