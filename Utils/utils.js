// /**
//  *
//  * @param {*} str
//  * @return str with removed spaces and characters
//  */
// const cleanedStr = (str) => {
//   return str.replace(/[^\w]/g, '').toLowerCase();
// };

// let str = 'Hello! There!!!';
// console.log(`\n---------------------------------------------------------\n`);
// console.log(cleanedStr(str));
// console.log(`\n---------------------------------------------------------\n`);

// /**
//  *
//  * @param {*} str
//  * @return object char map object
//  */
// const buildCharMap = (str) => {
//   const charMap = {};

//   for (let char of cleanedStr(str)) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// };
// console.log(`\n---------------------------------------------------------\n`);
// console.log(buildCharMap(str));
// console.log(Object.keys(buildCharMap(str)));
// console.log(Object.values(buildCharMap(str)));
// console.log(`\n---------------------------------------------------------\n`);
