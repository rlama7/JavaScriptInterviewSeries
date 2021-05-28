const safelyTraverse = (obj, array) => {
  for (const prop in obj) {
    console.log(prop);
  }
};

const obj1 = {
  first: {
    second: 2,
  },
};

const obj2 = {};

const array1 = ['first', 'second'];
const array2 = ['a', 'b'];

console.log(safelyTraverse(obj1, array1));
console.log(safelyTraverse(obj2, array2));
