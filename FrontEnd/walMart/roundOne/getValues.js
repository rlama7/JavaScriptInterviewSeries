/**
 * Create a function named getValues which takes an object and
 * returns an array of the enumerable property values of the object.
 * @param {*} obj input object to be enumerated
 */
const getValues = (obj) => {
  const property = [];
  const values = [];
  for (const prop in obj) {
    // push properties
    property.push(prop);

    // push values
    values.push(obj[prop]);
  }
  // return property
  return values;
};

const fruits = {
  apple: 10,
  oranges: 5,
  peaches: 7,
  nectarine: 3,
  mango: 12,
};

const func = {
  a: 'foo',
  b: 'bar',
  c: 'baz',
};

console.log(getValues(fruits)); // [ 10, 5, 7, 3, 12 ]
console.log(getValues(func)); // [ 'foo', 'bar', 'baz' ]
