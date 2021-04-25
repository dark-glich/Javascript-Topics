/**
 * Arrow functions:
 * Arrow functions allow us to write shorter function syntax:
 * Structure - let varname = (parameter) => what you have to return
 */

//Arrow functions with Multiple Arguments
let arrowFunc = (a, b) => a + b
console.log(arrowFunc(5, 2)); //returns 7

//Arrow functions with Single Arguments 
//they does not use paranthese
let arrowFunc2 = argument => argument*2
console.log(arrowFunc2(10)); //returns 20

//Anonymous Arrow functions 
//they does not use name for variable
document.addEventListener('click', () => console.log('hello'))