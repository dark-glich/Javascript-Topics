// Ternary Operator
/**
 * they are used to minize the if/else statements.
 * Structure:
 * Condtion ? True Statement : False statement
 */

let Check = 5
Check == 5 ? Check = 'This is True statement' : Check = 'This is False statement'
console.log(Check);

Check = 5
/**
 * Nested Ternary operator :
 * Condtion ? (Nested Condition ? nested true : nested false) : False statement
 */

Check == 5 ? (Check != 'five' ? Check = 'This is Nested True' : check = 'Nested False')
            : Check = 'This is False statement'
console.log(Check);

/**
 * Ternary Assignment
 * Variable = Condtion ? True Statement : False statement
 */
 let a = 3;
 let result = (a == 3) ? 'True': "false";
 console.log(result);
