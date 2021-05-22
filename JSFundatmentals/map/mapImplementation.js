/**
 * map implementation in JavaScript
 */
const myMap = function () {
  this.collection = {};
  this.count = 0;

  // find the size of the map
  this.size = function () {
    return this.count;
  };

  // set key value pairs into the collection
  this.set = function (key, value) {
    this.collection[key] = value;
    this.count++;
  };

  // check if the key exists in the collection
  this.has = function (key) {
    return key in this.collection;
  };

  // get value using key
  // if the key exists in the collection return the corresponding value
  // otherwise return null
  this.get = function (key) {
    return key in this.collection ? this.collection[key] : null;
  };

  // delete a key value pair
  // if a key value exists delte the the pair
  // then decrement the count size;
  this.delete = function (key) {
    if (key in this.collection) {
      delete this.collection[key];
      this.count--;
    }
  };

  // get all values from the map
  this.values = function () {
    const result = [];
    for (let key of Object.keys(this.collection)) {
      result.push(this.collection[key]);
    }
    return result.length > 0 ? result : null;
  };

  // clear the collection
  this.clear = function () {
    this.collection = {};
    this.count = 0;
  };
};

/**
 * Let's see the Map in action
 */
const map = new myMap();
// setter
map.set('apple', 10);
map.set('banana', 12);
map.set('cherry', 6);
map.set('dragonfruit', 1);
map.set('grapes', 100);

// getters
console.log(map.get('cherry')); // 6
console.log(map.size()); // 5
console.log(map.values()); //[ 10, 12, 6, 1, 100 ]

console.log(map);
/**
 myMap {
  collection: { apple: 10, banana: 12, cherry: 6, dragonfruit: 1, grapes: 100 },
  count: 5,
  size: [Function (anonymous)],
  set: [Function (anonymous)],
  has: [Function (anonymous)],
  get: [Function (anonymous)],
  delete: [Function (anonymous)],
  values: [Function (anonymous)],
  clear: [Function (anonymous)]
}
 */
