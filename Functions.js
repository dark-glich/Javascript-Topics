// Run the Code to see topics Covered

/**
 * FE = Function Expressions:
 * They can be stored in a variable
 * the variable can be used as a function
 * Functions defined using an expression are not hoisted:
 * That means they cannot be used before assigning.
 */
let func = function () {
    console.log("function Expression")
}
func()

/**
 * IIFE = Immediately Invoked Function Expression:
 * They will execute automatically
 * They cannot be reused
 */

var IIFE = (function (){
    console.log("Immediately Invoked Function Expression");
}())

/**
 * Anonymous Function :
 */