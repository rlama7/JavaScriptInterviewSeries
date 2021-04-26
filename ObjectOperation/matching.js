const matching = (obj) => {};

const person = {
  firstName: 'Taylor',
  lastName: 'Swift',
  age: 21,
  occupation: 'singer/song-writer ',
  address: '123 Main St, California, USA',
  earnings: '500',
};
console.log('\n-------person object:------------------------------->');
console.log(person);

console.log('\n-------person array object key:value entries-------->');
console.log(Object.entries(person));

console.log('\n-------iterate through object key:value entries-------->');
for (const [key, value] of Object.entries(person)) {
  console.log(`${key} : ${value}`);
}

console.log('\n-------convert object to Map()-------->');
/**
 * The new Map() constructor accepts an iterable of entries.
 * With Object.entries, you can easily convert from Object to Map
 */
const map = new Map(Object.entries(person));
console.log(map);

console.log('\n-------set()---------------------------->');
// add property color to person object
// color: 'blue'
map.set('color', 'blue');

// add property friendds to person object
map.set('friends', { best: 'Salena', average: 'Zalena', worst: 'Katie' });

console.log(map);

console.log('\n-------size---------------------------->');
// get size of map length of Key or Value item
console.log(map.size);

console.log('\n-------has()---------------------------->');
// check if a particular key/value exist in a map
console.log(map.has('color')); // true <- color property exists in a map
console.log(map.has('dog')); // false <- dog property doesn't exist in a map

console.log('\n-------get()---------------------------->');
// get the value associate with key or undefined if there is none
console.log(map.get('color')); // blue <- value associated with color is blue
console.log(map.get('dog')); // undefined <- value associated with dog does not exist 'coz the dog key iteself does not exist

console.log('\n-------iterate over map---------------------------->');
// iterate through the map
// get both key and value
for (let [key, value] of map) {
  console.log(`${key} -> ${value}`);
}

console.log(
  '\n-------iterate over map and get only keys---------------------------->'
);
for (let key of map.keys()) {
  console.log(key);
}

console.log(
  '\n-------iterate over map and get only values---------------------------->'
);
for (let value of map.values()) {
  console.log(value);
}
/**
 * If node installed run: $ node <fileName.js>
 * $ node matching.js
 * to see the output
 */
