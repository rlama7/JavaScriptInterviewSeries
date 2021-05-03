const data = [
  {
    id: 1,
    first_name: 'Maybelle',
    last_name: 'Rohmer',
    email: 'mrohmer0@studiopress.com',
    gender: 'Non-binary',
    salary: '400.10',
    car: 'Chevrolet',
    DOB: '1/1/2000',
  },
  {
    id: 2,
    first_name: 'Harmonia',
    last_name: 'Labeuil',
    email: 'hlabeuil1@ihg.com',
    gender: 'Genderqueer',
    salary: '900.09',
    car: 'Infiniti',
    DOB: '1/1/1999',
  },
  {
    id: 3,
    first_name: 'Henry',
    last_name: 'Hulatt',
    email: 'hhulatt2@geocities.jp',
    gender: 'Genderqueer',
    salary: '200.16',
    car: 'BMW',
    DOB: '1/1/1998',
  },
  {
    id: 4,
    first_name: 'Leonard',
    last_name: 'Binder',
    email: 'lbinder3@canalblog.com',
    gender: 'Genderqueer',
    salary: '270.81',
    car: 'Chevrolet',
    DOB: '1/1/1997',
  },
  {
    id: 5,
    first_name: 'Jocelin',
    last_name: 'Antuk',
    email: 'jantuk4@bloglines.com',
    gender: 'Genderfluid',
    salary: '892.21',
    car: 'Mazda',
    DOB: '1/1/1996',
  },
  {
    id: 6,
    first_name: 'Lonnie',
    last_name: 'Synke',
    email: 'lsynke5@wp.com',
    gender: 'Male',
    salary: '495.47',
    car: 'Ford',
    DOB: '1/1/1995',
  },
  {
    id: 7,
    first_name: 'Birk',
    last_name: 'Gritton',
    email: 'bgritton6@google.it',
    gender: 'Female',
    salary: '656.82',
    car: 'Honda',
    DOB: '1/1/1994',
  },
  {
    id: 8,
    first_name: 'Ronica',
    last_name: 'Marklow',
    email: 'rmarklow7@bloomberg.com',
    gender: 'Female',
    salary: '627.05',
    car: 'Mercedes-Benz',
    DOB: '1/1/1993',
  },
  {
    id: 9,
    first_name: 'Chelsae',
    last_name: 'Kinchington',
    email: 'ckinchington8@gnu.org',
    gender: 'Genderfluid',
    salary: '766.24',
    car: 'Ford',
    DOB: '1/1/1992',
  },
  {
    id: 10,
    first_name: 'Karoly',
    last_name: 'Matkovic',
    email: 'kmatkovic9@va.gov',
    gender: 'Genderfluid',
    salary: '607.39',
    car: 'Cadillac',
    DOB: '1/1/1992',
  },
  {
    id: 11,
    first_name: 'Ronica',
    last_name: 'Marklow',
    email: 'rmarklow7@bloomberg.com',
    gender: 'Female',
    salary: '627.05',
    car: 'Mercedes-Benz',
    DOB: '1/1/1993',
  },
  {
    id: 12,
    first_name: 'Chelsae',
    last_name: 'Kinchington',
    email: 'ckinchington8@gnu.org',
    gender: 'Genderfluid',
    salary: '766.24',
    car: 'Ford',
    DOB: '1/1/1992',
  },
  {
    id: 13,
    first_name: 'Karoly',
    last_name: 'Matkovic',
    email: 'kmatkovic9@va.gov',
    gender: 'Genderfluid',
    salary: '607.39',
    car: 'Cadillac',
    DOB: '1/1/1992',
  },
];

// #1
console.log('\n-----------------for of-------------------------------');
// for ...of <----- used to Iterate over ARRAYS

// iterate through the array object similar to traditional for loop
// then print the first_name and last_name
// Here user -> represents the user Object in the list therefore we can
// access user's fields (properties) with dot notation
for (const user of data) {
  console.log(`${user.first_name} ${user.last_name} --> $${user.salary}`); // user <- gives
}
// Maybelle Rohmer --> $400.10
// Harmonia Labeuil --> $900.09
// Henry Hulatt --> $200.16 and so on...

// in the following example we are simply accessing array's individual elemnt with for of loop
const array1 = [10, 20, 30, 40, 50];
for (const element of array1) {
  console.log(element);
} // 10 20 30 40 50

// # 2
console.log('\n-----------------for in-------------------------------');
// for ...in <-- used to Iterate over OBJECT

// get the object from the data
const userObj = data[0];
console.log(userObj);
// {
//   id: 1,
//   first_name: 'Maybelle',
//   last_name: 'Rohmer',
//   email: 'mrohmer0@studiopress.com',
//   gender: 'Non-binary',
//   salary: '400.10',
//   car: 'Chevrolet',
//   DOB: '1/1/2000'
// }

// Next let's iterate over the userObj to get keys only
for (const userProp in userObj) {
  console.log(userProp);
}

// userObje Keys
// id
// first_name
// last_name
// email
// gender
// salary
// car
// DOB

// we can destructure keys and values from the object in following way
// for (const userProp in userObj) {
//   console.log(userProp);
// }

//#3
console.log('\n-----------------filter-------------------------------');
// filter <- filter data based on a criteria

// let's filter user in the data based on salary > 500
const getSalary = (strSalary) => parseInt(strSalary);
// since all the values are in the data are in string format we need integer for salary to compare
const userWithSalaryGreaterThan500 = data.filter(
  (user) => getSalary(user.salary) > 500
);

// let's filter user in the data based on age > 25
const getDate = (strDOB) => {
  let today = new Date();
  let birthday = new Date(strDOB);
  return today.getFullYear() - birthday.getFullYear();
};
const userWithAgeGreaterThan25 = data.filter((user) => getDate(user.DOB) > 25);

console.log('--->salary greater than 500<---');
console.log(userWithSalaryGreaterThan500);

console.log('--->age greater than 25<---');
console.log(userWithAgeGreaterThan25);

// // Next filter out user from data based on same email
// const isDuplicateEmail = (data) =>
//   data.findIndex((user) => (user.email = email));
// const filteredUserWithSameEmail = data.filter((user) =>
//   isDuplicateEmail(user.email)
// );

//#4
console.log('\n-----------------sort()-------------------------------');
// let't sort user based on first Name
const sortUserBasedOnFirstName = data.filter(
  (user) => user.first_name.toLowerCase() - user.first_name.toLowerCase()
);
console.log(sortUserBasedOnFirstName);

console.log('\n-----------------find---------------------------------');
// find() method returns the value of the first element in the provided list
// that satisfies the provided testing funciton. if no value satisfy the
// testing function, undefined is returned.

const findUserNamedBirk = data.find((user) => user.first_name === 'Birk');
console.log(findUserNamedBirk);

console.log('\n-----------------findIndex----------------------------');
// findIndex() method returns the index of the first element in the array that
// satisfies the provided testing function. Otherwise, it returns -1, indicating that
// no element passed the test

const findIndexForUserNamedBirk = data.findIndex(
  (user) => user.first_name === 'Birk'
);
console.log(
  'Index of user object with user first_name: Birk is -->  ' +
    findIndexForUserNamedBirk
); // 6

console.log('\n-----------------map----------------------------------');
// map() method is a very versatile method that we can used to transform
// iterable objects such as an array and an object
// map() does not mutate input data but instead returns new list

const addDescriptionField = data.map((user) => {
  return {
    ...user,
    description: `${user.first_name}'s favorite car is ${user.car}.`,
  };
});

console.log(addDescriptionField);

console.log('\n-----------------reduce-------------------------------');
// reduce

console.log('\n-----------------every--------------------------------');
// every

console.log('\n-----------------some---------------------------------');
// some

console.log('\n-----------------includes-----------------------------');
// includes

console.log('\n-----------------splice-------------------------------');
// splice

console.log('\n-----------------slice--------------------------------');
// slice

console.log('\n-----------------concat-------------------------------');
// concat

console.log('\n-----------------sort---------------------------------');
// sort
const compareUserFirstName = (a, b) => {
  // lowercase to ignore character casing
  const nameA = a.first_name.toLowerCase();
  const nameB = b.first_name.toLowerCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
};
const sortUserFirstNameAlphabetically = (data) =>
  data.sort(compareUserFirstName);
console.log(sortUserFirstNameAlphabetically(data));

console.log('\n--------------------------------------------');
const filteredDataWithSalaryGreaterThan500 = data.filter(
  (user) => user.salary > 500
);
// console.log(filteredDataWithSalaryGreaterThan500);

console.log('\n--------------------------------------------');
console.log('Object keys (data)');
// console.log(Object.keys(data));
console.log('\n--------------------------------------------');

console.log('Object values (data)');
// console.log(Object.values(data));
console.log('\n--------------------------------------------');

console.log('Object entries(data');
// console.log(Object.entries(data));

console.log('\n--------------------------------------------');
// const sum = (data) => {
//   data.reduce((accum, value) => {
//     return accum + id.value;
//   }, 0);
// };

// console.log(sum(data));

console.log('\n--------------------------------------------');
