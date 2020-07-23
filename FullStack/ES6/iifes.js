// IIFES --> Immediately invoked function expressions 
// used to create a private variable --> data privacy


// ES5 
(function() {
    var z = 3;
})();
// since z is private variable can't be accessed outside  thus generates error
// console.log(z);

// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}
// would generate error becuase a and b are block scoped and not function scoped
// console.log(a+b);

// since var is function scope no error is generated for following code
console.log(c);