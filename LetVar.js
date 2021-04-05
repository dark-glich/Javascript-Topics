// Let Vs Var

/**Var :
 * scopes of variable defined using var is a function scope or the global scope
 * variable defined with var can be hoisted meaning declared after it has been used.
 * They can be redeclared and reassigned
 */

console.log('Var Variables:')
i = 'var variables can be hoisted' ;
var i;
console.log(i)

if (true){
    var global = 'var variables are global'
}
console.log(global)

var i = 'var variables can be redeclared'
console.log(i)

console.log("")

/**Let :
 * Any variable defined using let is a block scope
 * variables defined with let cannot be hoisted
 * They cannot be redeclared and reassigned
 * They are declared and assignrd at the same time
 */

console.log('Let Variables:')

let globalLet = 'let variables cannot be hoisted' ;
console.log(globalLet)

if (true){
    let BlockLet = 'var variables are block variables'
    console.log(BlockLet)
}

let u = 'let variables cannot be redeclared'
console.log(u)
 

