const add = (...args) => {
  if (args.length < 1) return 'Can NOT find sum for 0 argument';
  return args.reduce((accumulator, value) => accumulator + value);
};

const sub = (...args) => {
  if (args.length < 1) return 'Can NOT find difference for 0 argument';
  return args.reduce((accumulator, value) => accumulator - value);
};

const mul = (...args) => {
  if (args.length < 1) return 'Can NOT find product for 0 argument';
  return args.reduce((accumulator, value) => accumulator * value);
};

const div = (...args) => {
  if (args.length < 1 || args < 0)
    return 'Can NOT find reciprocal for 0  or negative argument';
  return args.reduce((accumulator, value) => {
    if (value === 0) return 'Can NOT divide by 0';
    return accumulator / value;
  });
};

/**
 * TEST
 */
const array1 = [];
const array2 = [10];
const array3 = [1, 2];
const array4 = [1, 2, 3];
const array5 = [1, 2, 3, 4, 5, 6];
const array6 = [1, 2, 3, 0, -2];
const array7 = [-1, -2, 3, -4, -5, 0];
// const array8 = [1, 2, 3, 4, 5, 6];
// const array9 = [1, 2, 3, 4, 5, 6];
// const array10 = [1, 2, 3, 4, 5, 6];

// ADD
console.log(add(...array1)); // Can NOT find sum for 0 argument
console.log(add(...array2)); // 10
console.log(add(...array3)); // 3
console.log(add(...array4)); // 6
console.log(add(...array5)); // 21

// SUB
console.log(sub(...array1)); // Can NOT find sum for 0 argument
console.log(sub(...array2)); // 10
console.log(sub(...array3)); // -1
console.log(sub(...array4)); // -4
console.log(sub(...array5)); // -19

// MUL
console.log(mul(...array1)); // Can NOT find sum for 0 argument
console.log(mul(...array2)); // 10
console.log(mul(...array3)); // 2
console.log(mul(...array4)); // 6
console.log(mul(...array5)); // 720
console.log(mul(...array6)); // -0
console.log(mul(...array7)); // 0

// DIV
console.log(div(...array1)); // Can NOT find sum for 0 argument
console.log(div(...array2)); // 10
console.log(div(...array3)); // -1
console.log(div(...array4)); // -4
console.log(div(...array5)); // -19
console.log(div(...array6)); // -0
console.log(div(...array7)); // 0

/**
 * Nested function
 *
 */
const Calculate = {
  result: 0,
  add: function (...args) {
    if (args.length < 1) return 'Can NOT find sum for 0 argument';
    this.result = args.reduce((accumulator, value) => accumulator + value);
    return this;
  },

  sub: function (...args) {
    if (args.length < 1) return 'Can NOT find difference for 0 argument';
    this.result -= args.reduce((accumulator, value) => accumulator - value);
    return this;
  },

  mul: function (...args) {
    if (args.length < 1) return 'Can NOT find product for 0 argument';
    this.result *= args.reduce((accumulator, value) => accumulator * value);
    return this;
  },

  div: function (...args) {
    if (args.length < 1 || args < 0)
      return 'Can NOT find reciprocal for 0  or negative argument';
    this.result /= args.reduce((accumulator, value) => {
      if (value === 0) return 'Can NOT divide by 0';
      this.result = accumulator / value;
      return this;
    });
  },

  end: function () {
    return;
  },
};

console.log(Calculate.add(3, 2).sub(1).mul(3).end());

const MethodChaining = {
  result: 0,
  add: function (a, b) {
    this.result = a + b;
    return this;
  },
  sub: function (c) {
    this.result -= c;
    return this;
  },
  mul: function (d) {
    this.result *= d;
    return this;
  },
  end: function () {
    return this;
  },
};

console.log(MethodChaining.add(3, 2).sub(1).mul(3).end());
