const throwOn9 = (number) => {
  if (number !== 9) {
    return number;
  } else {
    throw '9 is not allowed';
  }
};

try {
  throwOn9(7);
} catch (e) {
  console.error(e);
}

console.log(throwOn9(1)); // 1
console.log(throwOn9(7)); // 7
console.log(throwOn9(9)); // 9 is not allowed
