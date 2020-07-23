// Asynchronous JS --> Promise
/** 
const second = () => {
    setTimeout(() => {
        console.log('Async code ran!');
    }, 2000);
};

const first = () => {
    console.log('Hey There!');
    second();
    console.log('The end');
}

first();
*/

// Hey There!
// The end
// Async code ran!

// Execution stack
// Global execution context

// Event loop that checks for messages in Message Queue and pushes to the execution stack

// Web APIs for asynchronous function execution

// console
// code.
/** 
 * ES5 callback heell
 * 

function getRecipe() {
    setTimeout(() => {
        const receipeId = [423, 883, 432, 972];
        console.log(receipeId);
        
        setTimeout((id) => {
            const receipe = {
                title:'Fresh Tomato Pasta',
                publisher: 'Tim'
            };
            console.log(`${id}: ${receipe.title}`);
        }, 1000, receipeId[2]);
    }, 2500);
}

getRecipe();
console.log('Food served!');

*/


/**
 * ES6 --> Promises 
 * promise --> object that keeps track about whether a certain event has already happened or not
 * determines what happens after the event has happened
 * implements the concept of a future value tha we're expecting
 * promise states: pending --> settled/resolved --> fullfilled --> rejected
 * 
 

 const getIds = new Promise((resolve, reject) => {
     setTimeout(() => {
         resolve([523, 883, 432, 974]); // when resolved return these data
     }, 1500);
 });

 const getRecipe = (recID) => {
     return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = {title: 'Fresh tomato pasta',
            publisher: 'Jonas'};
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recID);
     });
 }

 
getIds
    // chain then to get fullfilled promise.
    .then(ids => {
    console.log(ids);
    return getRecipe(ids[2]);
})
    .then(recipe => {
        console.log(recipe);
    })
    // chain .catch to get reject promise
    .catch(error => {
        console.log(error);
})

* 
*/


/**
 * promicse consumtion --> async await
 * 
 */


 async function getRecipesAW() {
     const IDs = await getIDs;

 }
 getRecipesAW();
