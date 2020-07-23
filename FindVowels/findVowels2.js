/**
 * Find Vowels
 * 
 * Examples 
 * findVowels('Hi There!) --> 3
 * findVowels('Why do you ask?') --> 4
 * 
 */


const findVowels = (str) => {
    let count = 0;
    const checker = ['a', 'e', 'i', 'o', 'u'];

    for (let char of str.toLowerCase()) {
        if(checker.includes(char)) {
            count++;
        }
    }
    return count;
}



let str = 'Why do you ask?';
console.log(findVowels(str));
