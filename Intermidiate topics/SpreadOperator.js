// Spread operator -> (...)

/**
 * three places you can use spread: 
 * 1. In function calls => When passing arguments to a function, we can use spread to expand an itererable element.
 * 2. In array literals => We can also use spread syntax to create new arrays using existing arrays.
 * 3. In object literals
 */

//function calls
const tempratures = [20, 29, 73, 13, 85]
console.log(Math.min(tempratures))// NaN
console.log(Math.min(...tempratures))// 20, 29, 73, 13, 85
console.log( ..."BANANAS");// B A N A N A

//array literals
const numberWords = ['one', 'two', 'three']
const numberValue = [1, 2, 3]
let allNumnber = [...numberWords, ...numberValue]

console.log(allNumnber)// ['one', 'two', 'three', 1, 2, 3]

// Spread is also commonly used to create a copy of an array.
const originals = ["Mona Lisa", "American Gothic", "The School of Athens"];
const copies = [...originals];
console.log(copies)

//object literals
lastName = {surname: 'tyson'}
firstName = {firstname: 'mike'}
Fullname = {...firstName, ...lastName}
console.log(Fullname)