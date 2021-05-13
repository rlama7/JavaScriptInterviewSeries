/**
 * gcdOfStrings.js - A program to find the greatest common divisor of Strings.
 * @author         - Ratna Lama
 * @version        - 1.0.0
 * @description    -
 *
 * --->Example<---
 * # 0
 * Input: 'ABABAB' 'ABABAB ABABAB' 'ABABAB ABABAB ABABAB'
 *            |_1         |_2                |_3
 *
 * Divisor: AB divides  str1  3 times equally
 *          AB divides  str2  6 times equally
 *          AB divides  str3  9 times equally
 *
 *
 * Also    ABABAB divides  str1  1 times equally
 *         ABABAB divides  str2  2 times equally
 *         ABABAB divides  str3  3 times equally
 *
 * Output:
 *         Since 'ABABAB' is longer than 'AB',
 *         the greatest common divisor of strings, 1, 2, & 3 is 'ABABAB'
 *
 * #1
 *  Input: str1 = 'ABCABC', str2 = 'ABC'
 *  Output: 'ABC'
 *
 * #2
 *  Input: str1 = 'ABABAB', str2 = 'ABAB'
 *  Output: 'AB'
 *
 * #3
 *  Input: str1 = 'HELLO', str2 = 'WORLD'
 *  Output: ''
 *
 * #4
 *  Input: str1 = 'ABCDEF', str2 = 'ABC'
 *  Output: ''
 *
 *
 *
 * --->Algorithm<---
 * --->Time Complexity<---
 *
 * @param {*} str1 input string
 * @param {*} str2 input string
 */
const gcdOfStrings = (str1, str2) => {
  // remove white spaces
  str1 = str1.replace(/\s/g, '');
  str2 = str2.replace(/\s/g, '');

  if (str1 + str2 !== str2 + str1) {
    return false; // can't find gcd of strings in such case.
  } else if (str1 === str2) {
    return str1;
  } else if (str1.length > str2.length) {
    // str1 = 'ABABAB' , str2 = 'AB'
    // str1 = 'AB' | 'ABAB'
    return gcdOfStrings(str1.substring(str2.length), str2);
  } else {
    // str2 = 'ABCABCABC' , str1 = 'ABC'
    // str2 = 'ABC' | 'ABCABC'
    return gcdOfStrings(str1, str2.substring(str1.length));
  }
};

let str1 = 'ABCABC',
  str2 = 'ABC';

let str3 = 'ABABAB',
  str4 = 'ABAB';

let str5 = 'HELLO',
  str6 = 'WORLD';

let str7 = 'ABCDEF',
  str8 = 'ABC';

let str9 = 'ABABAB',
  str10 = 'ABABAB ABABAB',
  str11 = 'ABABAB AB ABABAB';
console.log(gcdOfStrings(str1, str2)); // ABC
console.log(gcdOfStrings(str3, str4)); // AB
console.log(gcdOfStrings(str5, str6)); // fasle
console.log(gcdOfStrings(str7, str8)); // false
console.log(gcdOfStrings(str9, str10)); // ABABAB
console.log(gcdOfStrings(str10, str11)); // AB
console.log(gcdOfStrings(str9, str11)); // AB
