/**
 * cookies.js   - A program to demonstrate usage of localStorage.
 * @author      - Ratna Lama
 * @version     - 1.0.0
 * @description -
 *
 */
/**
 * localStorage {}
 * stored locally in the browser
 * capacity is limited to 10mb
 * accessible from any window (browsers)
 * expires Never unless manualy cleared out by user
 * Sent with requests --> NO
 */
// set items to localStorage
localStorage.setItem('name', 'Taylor Swift'); // set key value pair for localStorage
localStorage.setItem('age', 21);
localStorage.setItem('address', '123 Main St.log');

// get localStorage item
console.log(localStorage.getItem(name)); // Taylor Swift
// remove localStorage item
console.log(localStorage.removeItem(age)); // age: 21 is removed from the localStorage

/**
 * sessionStorage {}
 * stored locally in the browser
 * capactiy: 5mb
 * Browsers: HTML5
 * accessible from : Same Tab
 * expires: On tab Close
 * Sent with requests: NO
 */

// set items to sessionStorage
sessionStorage.setItem('name', 'Katie Perry');
sessionStorage.setItem('age', 21);
sessionStorage.setItem('address', '123 Spear St.');

// get sessionStorage item
console.log(sessionStorage.getItem(name)); // Katie Perry
// remove sessionStorage item
console.log(sessionStorage.removeItem(address)); // 123 Spear St. is removed

/**
 * cookies
 * sent with each requests to the server
 * the only way to interact with cookie is via document.cookie{}
 * capacity: 4kb
 * Browsers: HTML/HTML5
 * accessible from: Any window
 * Expires: Manually set
 * Storage Location: Browser and server
 * Sent with requests: YES
 */
// create cookie with firstName and lastName that expires on Year 9999 January 1st.
document.cookie =
  'firstName=Ray; expires=' + new Date(9999, 0, 1).toUTCString();
document.cookie =
  'lastName=Lama; expires=' + new Date(2020, 0, 1).toUTCString(9999, 0, 1);

// view cookie
console.log(document.cookie); // firstName=Ray lastName=Lama
