// Arrow Functions

const years = [1990, 1965, 1982, 1937]

// ES5 
var ages5 = years.map(function(el) {
    return 2016 - el;
});
console.log(ages5);

// ES6 
// single argument
let ages6 = years.map(el => 2016 - el); 
console.log(ages6);

// double argument
ages6 = years.map((el, index) => `Age element ${index+1}: ${2016 - el}`) 
console.log(ages6);

// double argument and multiple line with return keyword
ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now -el;
    return `Age element ${index+1}: ${age}`
})
console.log(ages6);

// Lexical this --> shares the surroding this keyword. Arrow function doesn't have its own this keyword

// ES5
function Person(name) {
    this.name = name;
}

Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el) {
        // console.log('this: ' + this);
        return this.name + ' is friends with ' + el;
    }.bind(this)); // without bind would have this = undefined
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);


// ES6
Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map(el => `${this.name} is friends with ${el}`);
    console.log(arr);
}

new Person('Brittany').myFriends6(friends);

// ES5 
var getA = function(a) {
    return a;
}
console.log(getA(5))
// single argument
let getB = a => a; 
console.log(getB(6));

getB = (b) => {return b*b};
console.log(getB(6));

// ES5 this
/** 
var x = function() {
    this.val = 1;
    setTimeout(function() {
        this.val++;
        console.log(this.val);
    }, 1)
};
// generates NaN because this.val++ is unrecognized 
var xx = new x(); 
*/

// alternativel we can set this to that
/** 
var x = function() {
    this.val =1;
    var that = this;
    setTimeout(function() {
        that.val++;
        console.log(that.val);
    })
};
// following doesn't generate error;
var xx = new x();
*/

/** 

// using arrow function
var x = function() {
    this.val = 1;
    setTimeout(()=> {
        this.val++;
        console.log(this.val);
    })
}
console.log(x());
*/

/**
 * number of arguments
 */
var x = function() {
    console.log(arguments[2]);
};
x(1,2,3);

var y = (...n) => {
    console.log(n[2]);
};
y(4,5,6);
