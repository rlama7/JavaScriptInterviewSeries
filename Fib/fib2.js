/**
 * Fibonacci Numbers
 * 
 * print out the n-th entry in the fibonacci series
 * 
 * Examples: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 .......
 * fib(4) --> 3
 */

 // iterative
const fibItr = (num) => {
    const result = [0,1];
    for (let index = 2; index <= num; index++) {
        let first = result[index-1];
        let second = result[index-2];
        let next = first + second;
        result.push(next);   
    }
    return result.length -1;
}

console.log(fibItr(5));
console.log(`\------------------------------`)

// recursive --> O(n^2) NO NO NO for interview purpose <--- 
const slowFib = (num) => {
    const result = [0, 1];
    // base case
    if (num < 2) {
        return num;
    }
    // call memoized function
    return fib(num -1) + fib(num - 2);
}

// console.log(slowFib(5));
// console.log(`\------------------------------`)


/** 
 * recursive solution to fib with improved time complexity 
 * Memoization --> store the arguments of each function call along with the result.
 * If the function is called again with the same arguments, return the precomputed result
 * 
 * slow fib func --> Memoized func --> fast fib func
 * 
 */ 


// memoize takes function and return functions also called higher order function
const memoize = (fn) => {
    const cache = {};

    // takes multiple args
    return function(...args) {

        // check if the result is in cache - if the result is in cache
        // then serve the result from there
        if (cache[args]) {
            return cache[args];
        }
        
        // if the result is not in cache then compute result and cache it
        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    };

}

const fib = memoize(slowFib);

console.log(fib(15));




