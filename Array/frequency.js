const frequencyCheck = (array) => {
  const map = {};

  for (let index = 0; index < array.length; index++) {
    if (map[array[index]] === undefined) {
      return array[index];
    } else {
      map[array[index]] = i;
    }
  }
  return map;
};

const array = [1, 4, 2, 3, 1, 2, 3, 3, 4];
console.log(frequencyCheck(array)); // { 1 => 0, 4 => 0, 2 => 0, 3 => 0 }
