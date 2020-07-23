'use strict';

// Rest Parameter --> pass variable amount of parameter/arguments to function

// ES5
function isFullAges5() {
    // console.log(arguments)
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function(cur) {
        console.log((2016-cur) >= 18);
    })

}

isFullAges5(1990, 1999, 1965);

// ES6
// first param is age limit and rest are ...n number of years
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log(2016-cur) >= limit);
}

isFullAge6(18, 1990, 1999, 1965, 2016, 1987);