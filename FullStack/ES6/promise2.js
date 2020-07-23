/**
 * Promise example#1 ---> simple
 */

 let cleanRoom = new Promise((resolve, reject) => {
     let isClean = false;

     if(isClean) {
         resolve('clean');
     } else {
         reject('not clean');
     }
 });

 cleanRoom
        .then((res) => {
            console.log(`The room is ${res}.`);
        })
        .catch((rej) => {
            console.log(`The room is ${rej}.`);
        })


/**
 * Promise example#2 --> chaining
 */

 let cleanGarage = () => {
     return new Promise((resolve, reject) => {
         resolve(`Cleaned the Garage`);
     });
 };

 let removeGarbage = (message) => {
     return new Promise((resolve, reject) => {
         resolve(`${message} removed Garbage`);
     });
 };

 let winIcecream = (message) => {
     return new Promise((resolve, reject) => {
         resolve(`${message} won Icecream`);
     })
 }

 cleanGarage()
    .then((result) => {
        return removeGarbage(result);
    })
    .then((result) => {
        return winIcecream(result);
    })
    .then((result) => console.log(`Done: ${result}`));

// prallel promise

Promise
    .all([cleanGarage(), removeGarbage(), winIcecream()])
    .then(() => console.log(`all done`))



// race promise
Promise
    .race([cleanGarage(), removeGarbage(), winIcecream()])
    .then(() => console.log(`one of the task is done`))


// so {name} I delivered on the promise now please resolve it!