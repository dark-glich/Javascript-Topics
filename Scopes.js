// Scopes

/**
 * Scopes are determined lexically : 
 * Lexical scope means that in a nested group of functions, 
 * the inner functions have access to the variables and other resources 
 * of their parent scope.
 */


var ParentVar = "parent variable"

function child(statement) {
    console.log(statement + ParentVar)
}
child('Child function can use ')

/**
 * Nested Functions Create scope chain :
 * This means that the functions can use the variables and other resources 
 * of the upper scope 
 */

var global = 'global variable'

function localfunctiom(para) {
    var local = 'local variable'
    console.log(para + global)
    
    function nestedfunction(para) {
        console.log(para + local + ' and ' + global)
    }

    nestedfunction('Nested Function can use ')
}

localfunctiom('Local Function can use ')