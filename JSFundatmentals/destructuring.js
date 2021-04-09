/**
 * destructuring.js     - A program to demonstrate usage of destructuring in JavaScript.
 * @author              - Ratna Lama
 * @version             - 1.0.0
 * @description         - Destructuring is a JavaScript expression that makes it possible to
 *                        unpack values from iterable likes of arrays or objects into distinct
 *                        variables.
 */

console.log(
  '\n-------------------Prior to ES6---------------------------------'
);
const fruits = ['apple', 'banana', 'cherry', 'fig', 'guava', 'orange', 'lemon'];

// to extract each fruits array element
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // cherry and so on.....

console.log('\n----------After ES6------------------------------------------');
let [favFruitOne, favFruitTwo] = fruits;
console.log(favFruitOne); // apple
console.log(favFruitTwo); // banana

// which is equivalent to
// let favFruitOne = fruits[0]
// let favFruitTwo = fruits[1]

console.log('\n-------Skipping Array Elements-----');
// Skipping Items
let [tastyFruitOne, , , , tastyFruitTwo] = fruits;
console.log(tastyFruitOne); // apple
console.log(tastyFruitTwo); // guava
console.log('\n-------Array Chunking---------------');

// Array chunking
let [yummyFruitOne, yummyFruitTwo, ...otherFruits] = fruits;
console.log(yummyFruitOne); // apple
console.log(yummyFruitTwo); // banana
console.log(otherFruits); // [ 'cherry', 'fig', 'guava', 'orange', 'lemon' ]

console.log('\n-----Destructuring Assignments with Functions---------------');
function getFruits() {
  return fruits;
}

console.log(getFruits()); // ['apple',  'banana', 'cherry', 'fig', 'guava',  'orange', 'lemon']

let [juicyFruit, funnyFruit, ...other] = getFruits();

console.log(juicyFruit); // apple
console.log(funnyFruit); // banana
console.log(other); // [ 'cherry', 'fig', 'guava', 'orange', 'lemon' ]

console.log('\n------Using Default Values in Destructuring------');
// In the event the extracted value is undefined, then default value could be provided
const cars = ['tesla'];

let [
  firstCar = 'modelX',
  secondCar = 'fiskerKarma',
  thirdCar = 'Mustang Mach E',
] = cars;

console.log(firstCar); // tesla
console.log(secondCar); // fiskerKarma --> second and third car doesn't exist in cars array so gets default values
console.log(thirdCar); // Mustang Mach E

console.log('\n-----Destructuring Usage: SWAP ---------------------');
// swap
const num = [1, 2, 3, 4, 5];

let [a, b] = num;

console.log(`Before swapping a: ${a}`); // 1
console.log(`Before swapping b: ${b}`); // 2

// swap
[a, b] = [b, a];

console.log(`After swapping a: ${a}`); // 2
console.log(`After swapping b: ${b}`); // 1

console.log(
  '\n-----------Object Destructuring: Before ES6---------------------'
);

const singerProfile = {
  firstName: 'Taylor',
  lastName: 'Swift',
  genre: 'country/pop',
  occupation: 'singer/song writer',
  country: 'USA',
  age: '21',
};

// Extract person object properties and reassign
let favSinger = singerProfile.firstName;
let favGenre = singerProfile.genre;
let favCountry = singerProfile.country;

console.log(`favorite singer: ${favSinger}`); // Taylor
console.log(`favorite genre: ${favGenre}`); // country/pop
console.log(`favorite country: ${favCountry}`); // USA

console.log(
  '\n-----------Object Destructuring: After ES6---------------------'
);
/**
 * When Destructuring Object make sure the keys and the variable name that we are
 * extracting the data to match
 * otherwise the value will be 'undefined'
 */
let { firstName, lastName, genre, job, occupation } = singerProfile;

console.log(`first name: ${firstName}`); // Taylor
console.log(`last name: ${lastName}`); // Swift
console.log(`best genre: ${genre}`); // country/pop
console.log(`best job: ${job}`); // undefined --> variable job doesn't exist as a KEY in singerProfile object
console.log(`best occupation: ${occupation}`); // singer/song writer

console.log(
  '\n--When Variables Declared before being assigned wrap entire expression with ()----'
);

const animals = {
  name: 'Tika',
  color: 'black and white',
  type: 'feline',
  age: 3,
};

let name, color, type;

({ name, color, type } = animals); // without the () --> compilre will complain ... error ....

console.log(`Animal name: ${name}`); // Tika
console.log(`Animal color: ${color}`); // black and white
console.log(`Animal type: ${type}`); // feline

console.log(
  '\n----Re-assign a variable name for Objects----------------------'
);

// If we don't want to use the Object KEY as the variable name, we could
// re-assign a variable to our liking as following:
const books = {
  title: 'Eloquent Javascript',
  author: 'Marijn Haverbeke',
  edition: 'third',
  price: 20.91,
};

let { title: bookTitle, author: authorName, price: bookPrice } = books;
console.log(
  `${bookTitle} written by ${authorName} costs ${bookPrice}, 
  which is affordable and the value offered is tremendous.`
);

console.log('\n------Using Default Values in Destructuring With Objects------');

const country = {
  countryName: 'USA',
  code: 11,
  capitol: 'Washington D.C.',
};

let {
  countryName = 'America',
  code = 1,
  capitol = 'D.C.',
  population = '300 million', // doesn't exist in country object
  currency = 'dollar', // doesn't exist in country object
} = country;

console.log(
  `The capitol of ${countryName} is ${capitol}. 
  It's population is ${population} and currency is ${currency}`
);

// alternatively set default values when re-assigning variable names
let {
  countryName: nation = 'Uncle Sam',
  capitol: capitolBldg = 'Washington',
  language = 'English', // doesn't exist as property of country object
} = country;

console.log(`\n${nation} speaks ${language} at ${capitolBldg}`); // USA speaks English at Washington D.C.

console.log('\n------Combining Arrays with Objects------');

let seasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  fall: ['September', 'October', 'Nember'],
  winter: ['December', 'January', 'February'],
};

let {
  spring: favSeason,
  summer: hotSeason,
  fall: coldSeason,
  winter: rainySeason,
} = seasons;

console.log(favSeason); // ['March', 'April', 'May'];

console.log(`My favorite months are: ${favSeason}. 
Hot months are: ${hotSeason}. 
Cold months are: ${coldSeason}. 
Rainy months are: ${rainySeason} `);

/**
 * My favorite months are: March,April,May.
 * Hot months are: June,July,August.
 * Cold months are: September,October,Nember.
 * Rainy months are: December,January,February
 */

console.log('\n------Nesting in Object Destructuring------');

const apple = {
  product: 'iphone',
  manufacturer: 'Apple Inc',
  place: {
    country: 'USA',
    state: 'California',
    city: 'Cupertino',
  },
  otherProducts: ['Mac Book Pro', 'ipod', 'itune', 'ipad'],
};

console.log(
  `${apple.product} is designed by ${apple.manufacturer} at ${apple.place.city}, ${apple.place.state}.`
);
// iphone is designed by Apple Inc at Cupertino, California.

let {
  product: iphone,
  manufacturer: appleInc,
  place: { country: countryCode, state: stateCode, city: cityCode },
  otherProducts,
} = apple;

console.log(
  `${iphone} is designed by ${appleInc} in ${stateCode}. Other products are: ${otherProducts}.`
);
// iphone is designed by Apple Inc in California.
// Other products are: Mac Book Pro,ipod,itune,ipad.

console.log('\n------Rest in Object Destructuring---------');

// The rest syntax can also be used to pick up property keys that are not already
// picked up by the destructuring pattern. Those keys and their values are copied
// into a new object:

const friends = {
  friendName: 'Taylor Swift',
  location: 'Hollywood',
  work: 'singer/song writer',
  friends: ['Salena', 'Katie', 'Kim', 'Tina'],
};

let { friendName, work, ...otherList } = friends;

console.log(`${friendName} is a ${work}.`); // Taylor Swift is a singer/song writer.
console.log(otherList);

/** 
 * otherList contains the remaining properties from the friends object. otherList variable 
 * could be renamed to any variable of desired name.
 * 
 * {
    location: 'Hollywood',
    friends: [ 'Salena', 'Katie', 'Kim', 'Tina' ]
  }
 * */

console.log('\n------Object Destructuring and Functions---');

// Object Destructuring can be used to assing parameters to functions:

function toy({
  toyName: nickName = 'Drone',
  toyColor: paint = 'red and white',
} = {}) {
  console.log(`${nickName} is my favorite toy in ${paint} color.`);
}

toy(); // Drone is my favorite toy in red and white color.
// on line 286 --> {} on the Right Hand Side (RHS) makes it possible
// for us to call the function toy without passing any arguments.
