/** 
 * Call 
 * Bind 
 * Apply
 * 
 * Object 1, Object 2 may have different properties but could have same common method. In such we
 * can make use of Call, Bind and Apply
 * 
 * Object1 : Person Obj with its on unique properties
 * Object2: Athelete Obj with its own unqiue propertis
 * Both Object1 and Object2 have method say: eat(); walk(); sleep();
 *  
 */
const obj = {
    num:2
};

let addToThis = function(a, b, c){
    return this.num + a + b + c;
}

// functionName.call(obj, functionArgs)
// so call in this case calls object properties applies to calculation and returns the result
// const result = addToThis.call(obj, 3);
// console.log(result);

/**
 * Apply works similar to call and the difference is that we can apply it to arr
 */
const arr = [1,2,3];
const result2 = addToThis.apply(obj, arr);
console.log(result2);


/**
 * Bind
 * bind a function to an object
 */

 let bound = addToThis.bind(obj); // here we are binding addToThis function to object

 console.log(bound(1,2,3)); // and then we we call the function itself we'll provide arguments.
