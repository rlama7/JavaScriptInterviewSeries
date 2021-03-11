/**
 * fib memoized
 */

const memoizedNthFib = (num, memoize = { 1: 0, 2: 1 }) => {
  if (num in memoize) return memoize[num];
  memoize[num] =
    memoizedNthFib(num - 1, memoize) + memoizedNthFib(num - 2, memoize);
  return memoize[num];
};

console.log(memoizedNthFib(15, { 1: 0, 2: 1 }));
