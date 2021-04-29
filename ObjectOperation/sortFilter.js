const sortFilter1 = (array) => {
  // remove duplicates
  // sort based on the price (ascending order)
  return array.filter((item, index) => {
    item.indexOf(item[0] == index);
  });
};

// const sortFilter2 = (array) => {
//     // remove duplicates
//     // sort based on the price (ascending order)
//     array.sort((a,b) => )
//   };

const array1 = [
  ['apple', '2.50'],
  ['banana', '1.50'],
  ['cherry', '3.50'],
  ['mango', '4.50'],
  ['cherry', '3.50'],
  ['apple', '2.50'],
  ['banana', '1.50'],
  ['grapes', '.50'],
];

const array2 = [
  ['apple', '2.50'],
  ['banana', '1.50'],
  ['cherry', '3.50'],
  ['mango', '4.50'],
  ['cherry', '3.50'],
  ['apple', '2.50'],
  ['banana', '1.50'],
  ['grapes', '.50'],
];

console.log(sortFilter1(array1));
// console.log(sortFilter1(array2));
