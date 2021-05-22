const fourNumberSum = (array, target) => {
  const map = {};
  const quadruplets = [];

  // outer for loop skip the first and last
  for (let i = 1; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let currentSum = array[i] + array[j];
      let diff = target - currentSum;

      if (map.hasOwnProperty(diff)) {
        for (const pairs in map) {
          quadruplets.push(pairs + [array[i], array[j]]);
        }
      }
    }

    for (let k = 0; k < i; k++) {
      currentSum = array[i] + array[k];

      if (!map.hasOwnProperty(currentSum)) {
        map[currentSum] = [[array[k], array[i]]];
      } else {
        map[currentSum].push([array[k], array[i]]);
      }
    }
  }
  return quadruplets;
};

const target1 = 12;
const target2 = 16;
const array1 = [1, 8, 4, -1, 2, 5, 3, 6];
const array2 = [7, 6, 4, -1, 1, 2];

console.log(fourNumberSum(array1, target1));
console.log(fourNumberSum(array2, target2));
