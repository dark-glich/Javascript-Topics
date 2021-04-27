//Coercion
//Type Coercion refers to the process of conversion of values from one data type to another.

// true = 1 , false = 0

console.log(true + 30); // returns 31
console.log(false + 10); // returns 10

// -,*,/, % converts the value into a number

console.log('20' * 2) //returns 40
console.log('10' - true) // returns 9

// '+' converts the value into a string

console.log('20' + 2) //returns 202
console.log('10' + true) // returns 10true

// Truthy & Falsy

/**
 * In JavaScript, a truthy value is a value that is considered true 
 * when encountered in a Boolean context. 
 * All values are truthy unless they are defined as falsy
 */

10 && 'string' && true ? console.log(true) : console.log(false) // returns true

// All the values in javascript are truthy except the following six values :

// [false, 0, "", null, undefined, and NaN]

false && 0 && null ? console.log(true) : console.log(false) // returns false