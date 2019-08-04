function pyramid(num) {
  const midPoint = (2 * num - 1) / 2;
  for (let row = 0; row < Number; row++) {
    let level = "";
    for (let col = 0; col < 2 * num - 1; col++) {
      if (midPoint - row <= col && midPoint + row >= col) {
        level += "*";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
}

console.log(pyramid(10));

module.exports = pyramid;
