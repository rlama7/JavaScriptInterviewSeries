/**
 * Create a function named convert Hexadecimal which takes as an argument
 * a string representing a hexadecimal integer (base-16) and returns a
 * decimal integer (base-10).
 *
 * @param {*} string an input string representing a hexadecial integer (base-16)
 *
 * --->Example<---
 * INPUT:
 *      convertHexadecimal('10')
 * OUTPUT:
 *      16
 *
 * INPUT:
 *      convertHexadecimal('af')
 * OUTPUT:
 *       175
 *
 * The parseInt() function parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems)
 *
 * parsetInt(string, radix)
 *
 * @parm {*} string the vlaue to parse. If the argument is not a string, then it is converted
 * to one use the ToString abstract operation. Leading whitespace in this argument is ignored.
 *
 *
 */
const base = 16;
const convertHexadecimal = (string) => {
  const parsed = parseInt(string, base);

  // if the parsed value is not NaN return message | -1
  if (isNaN(parsed)) return -1;

  // check if number is an int
  if (Number.isInteger(string)) return string;

  return parsed;
};

console.log(convertHexadecimal('')); // -1
console.log(convertHexadecimal(undefined)); // -1
console.log(convertHexadecimal(null)); // -1
console.log(convertHexadecimal(100)); // 100
console.log(convertHexadecimal('10')); // 16
console.log(convertHexadecimal('af')); // 175
