// This function can be called as you want and when you want
const testFunction = () => {
  console.log('Hello World!');
};
testFunction();

// This function will evalute the given expression and then return undefined
// You won't be able to call it again!
void (function anotherFunction() {
  console.log('You can see this print only ONCE!');
})();

// anotherFunction(); <-- This will result in reference error as there is
// no record of anotherFunction()

// following function is declared and immediately executed
(function testX() {
  console.log('This is test function');
})();

/**
 * In the following exmaple we combine javascript:void(0) to 
 * tell the HTML element to run javascript  but do not navigate away 
 * from the current page which is where Link is displayed currently.
 * Thus void(0) in such case refere to do nothing- don't reload, don't navigate
 */
<a href="javascript:void(0)">Link</a>

<a
  id="link"
  href="javascript:void(document.querySelector('#link').style.color='red')"
>
  Link
</a>;
