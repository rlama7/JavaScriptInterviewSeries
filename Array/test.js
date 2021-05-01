const movieDataSet1 = [1, 5, 9, 10, 11, 20, 25, 35, 40, 50, 59];
const result = [
  [1, 59],
  [10, 50],
  [20, 40],
  [25, 35],
];
console.log(Math.max(...movieDataSet1)); // 59

const findMaxLengthMovie = (result) => {
  let maxLength = -1;
  let indexPosition = -1;
  for (let i = 0; i < result.length; i++) {
    let max = Math.max(...result[i]);
    if (max > maxLength) {
      maxLength = max;
      indexPosition = i;
    }
  }
  return result[indexPosition];
};

console.log(findMaxLengthMovie(result));
