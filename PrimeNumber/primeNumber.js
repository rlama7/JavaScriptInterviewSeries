/**
 * PrimeNumber -- 
 * A prime number is a whole number greater thatn 1, which is only divisible by 1 and iteself
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
 */

const isPrimeNumber = (num) => {
    // validation
    if(typeof num !== 'number') {
        console.log(`Sorry, ${num} must be a valid whole number. Please try again.`);
        return;
    }
    // check if even
    if(num % 2 === 0) {
        return false;
    }

    // check if odd
    for(let i=3; i <= Math.sqrt(num); i+=2) {
        if(num % i === 0) {
            return false;
        }
    }

    // if it is not the case that number is divisible by even and odd 
    // then it must be prime
    return true;
}

console.log(isPrimeNumber('17'));