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
 * @radix | Optinal
 * An integer between 2 and 36 that represents the radix ( the base in the mathematical
 * numeral systems) of the string. Be careful - this does not default to 10! If the
 * radix value is not of the Number type it will be coerced to a number.
 *
 */
console.log('\n---------Hex To Decimal---------------------');

const hexBase = 16;
const convertHexaToDecimal = (string) => {
  const parsedDecimalVal = parseInt(string, hexBase);

  // if the parsed value is not NaN return message | -1
  if (isNaN(parsedDecimalVal)) return -1;

  // check if number is an int
  if (Number.isInteger(string)) return string;

  return parsedDecimalVal;
};

console.log(convertHexaToDecimal('')); // -1
console.log(convertHexaToDecimal(undefined)); // -1
console.log(convertHexaToDecimal(null)); // -1
console.log(convertHexaToDecimal(100)); // 100
console.log(convertHexaToDecimal('10')); // 16
console.log(convertHexaToDecimal('af')); // 175

console.log('\n---------Octal To Decimal---------------------');
const octalBase = 8;
const convertOctalToDecimal = (string) => {
  const parsedDecimalVal = parseInt(string, octalBase);

  // check for NaN
  if (isNaN(parsedDecimalVal)) return -1;

  // check if int
  if (Number.isInteger(string)) return string;

  return parsedDecimalVal;
};

console.log(convertOctalToDecimal('')); // -1
console.log(convertOctalToDecimal(undefined)); // -1
console.log(convertOctalToDecimal(null)); // -1
console.log(convertOctalToDecimal(100)); // 100
console.log(convertOctalToDecimal('467')); // 311
console.log(convertOctalToDecimal('89')); // -1
console.log(convertOctalToDecimal('AF')); // -1
