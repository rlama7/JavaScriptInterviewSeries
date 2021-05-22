/**
 * hashMapImplementation.js
 */
const hashStringToInt = (string, max) => {
  let hash = 0;
  for (let index = 0; index < string.length; index++) {
    hash += string.charCodeAt(index);
  }
  //   console.log(hash);
  return hash % max;
};

const hashMap = function () {
  const map = [];
  const size = 4; // number of bucket

  // API

  // print
  this.print = function () {
    console.log(map);
  };

  // setter
  this.setItem = function (key, value) {
    const idx = hashStringToInt(key, size);

    if (map[idx] === undefined) {
      map[idx] = [[key, value]];
    } else {
      let inserted = false;

      for (let i = 0; i < map[idx].length; i++) {
        if (map[idx][i][0] === key) {
          map[idx][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        map[idx].push([key, value]);
      }
    }
  };

  // remove
  this.remove = function (key) {
    let index = hashStringToInt(key, size);
    if (map[index].length === 1 && map[index][0][0] === key) {
      delete map[index];
    } else {
      for (let i = 0; i < map[index]; i++) {
        if (map[index][i][0] === key) {
          delete map[index][i];
        }
      }
    }
  };

  // lookup
  this.lookup = function (key) {
    let index = hashStringToInt(key, size);
    if (map[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < map[index].length; i++) {
        if (map[index][i][0] === key) {
          return map[index][i][1];
        }
      }
    }
  };
};

/**
 * Display
 */
const hMap = new hashMap();
hMap.setItem('Cyber Truck', 'Tesla');
hMap.setItem('F150', 'Ford');
hMap.setItem('Rav4', 'Toyota');

hMap.print();
//  [
//     [ [ 'F150', 'Ford' ] ],
//     [ [ 'Rav4', 'Toyota' ] ],
//     [ [ 'Cyber Truck', 'Tesla' ] ]
//   ]

console.log(hMap.remove('Rav4'));
hMap.print();

console.log(hMap.lookup('F150')); // Ford

const str1 = 'Hello W ';
const max = 10;
console.log(hashStringToInt(str1, max)); // 1

/**
 * UTILITY
 */
