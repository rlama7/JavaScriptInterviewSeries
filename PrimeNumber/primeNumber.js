/**
 * * 
 * primeNumber.js    -- A program to display if an input elements are prime or composite
 * @author:          -- Ratna Lama
 * @description:
 * 
 * PrimeNumber -- A prime number is a whole number greater than 1, which is only divisible by 1 and iteself
 * Example: 2,3,5,7,11,13,19,23,29,31,37.....
 * 
 * Facts:
 *  2 is the only even prime number
 * every prime number can be represented in the form of 6n+1 or 6n-1 except 2 and 3, where n
 * is a natural number.
 * 2 & 3 are the only two consecutive prime numbers
 * Goldbach Conjecture: every even integer greater than 2 can be expressed as the sum of two primes
 * 
 * Wilsom theorem: a natural number p>1 is a prime number iff:
 *      --> (p-1) !== -1    mod p OR
 *      --> (p - 1) !== (p - 1) mod p
 * 
 * 
 * Example: --
 * 
 * Input:   3,         8,       15,   11,   19,    25,      30,      'apple'
 * Output: Prime Composite Compsite Prime Prime Composite Composite    
 * 
 */

const primeOrComposite = (arr) => {
    const arr1 = [];
    arr.map((item) => isPrimeNumber(item) ? arr1.push('prime'): arr1.push('composite'));
    return arr1;
};

const isPrimeNumber = (num) => {
    // validate for a whole number
    if(typeof num !== 'number') {
        // console.log(`Sorry, ${num} must be a valid whole number. Please try again.`);
        console.log('NotaNumber NaN');
        return;
    }

    // check for positive number
    if (num < 0) {
        console.log(`${num} must be a valid whole number`);
        return;
    }

    // check for a whole number and not floats
    if (isFloat(num)) {
        console.log(`${num} must not be a floating point number`);
        return; 
    }

    // check if number is even therefore divisible by 2
    if(num % 2 === 0) {
        return false;
    }

    // check if odd
    // 3,4,5,6,7,8,9,10,11,12,13,14,15
    for(let i=3; i <= Math.sqrt(num); i+=2) {
        if(num % i === 0) {
            return false;
        }
    }

    // if it is not the case that number is divisible by even and odd 
    // then it must be prime
    return true;
};
const isInt = (num) => Number(num) === num && num % 1 === 0;
const isFloat = (num) => Number(num) === num && num % 1 !== 0;

// check is PrimeNumber()
console.log('Is "apple" a prime number');
isPrimeNumber('apple');
console.log(`isPrimeNumber: 17 --> ${isPrimeNumber(17)}`);

console.log(`Is 13 int --> ${isInt(13)}`);
console.log(`Is 13.5 int --> ${isInt(13.5)}`);

console.log(`Is 21 float --> ${isFloat(21)}`);
console.log(`Is 21.77 float --> ${isFloat(21.77)}`);

console.log(`Square root of 9: ${Math.sqrt(9)}`);

console.log(Math.sqrt(15));

const num = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(primeOrComposite(num));