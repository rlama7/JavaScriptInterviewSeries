/**
 * keywordNewUsage.js  - A program to demonstrate usage of keyword 'new' in JavaScript.
 * @author             - Ratna Lama
 * @version            - 1.0.0
 *
 * @description        - What is 'new' keyword in JavaScript and how is it used?
 * 'new' keyword does following thins:
 * 1. It creates a new object. The type of this object is simpley object.
 * 2. It sets the new object's internal, inaccessible, [prototype], i.e. __proto__   propety to
 *    be the constructor function's external, accessible, prototype object (eveyr function/object)
 *    automatically has a prototype property.
 *    Every object inherits property from the parent object -> Object via prototypal inheritance. It
 *    can only be set at object creation time, eithe with 'new' or with Object.create()
 * 3. It makes 'this'variable point to the newly created object.
 * 4. It executes the contructor function, using the newly created object whenever 'this' is mentioned.
 * 5. It returns the newly created object, unless the contructor fucntion returns a non-null object
 *    reference. In this case, that object references is returned instead.
 */
