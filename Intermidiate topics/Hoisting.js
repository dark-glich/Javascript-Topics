// Variable Hoisting
/**
 * In JavaScript, a variable can be declared after it has been used.
 * Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope
 * Javascript creates a space in the memory which is set to undefined 
 * when it is accessed before being declared  
 *  */ 


console.log(x) // this will return undefined
var x 

//JavaScript only hoists declarations, not initializations.
console.log(b) // this will also return undefined
var b = 10


//Variables defined with let and const are hoisted but not initialized.
console.log(a) // this will give error
let a = 2

// Function Hoisting

hoistFunc(); // this will still run the function 
function hoistFunc() {
    console.log("Functions hoist too!");
}

// Javascript will only hoist the function declaration not expression

nonHoistedFunc(); // this will give a error
var nonHoistedFunc = function () {
    console.log("This will not work!");
};

// Variable inside functions

var i = 'global'; 

(function() { 
  console.log(i); // this will be undefined since it will reference to local 'i' which will be hoisted at the top of the Function
  var i = 'local'; 
})();