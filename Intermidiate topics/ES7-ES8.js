// Es-7 & Es-8 Topics


let string = 'hello'

// padStart
// adds a string at the start until specified lenght is reached
console.log(string.padStart(7, '->'))

// padEnd
// adds a string at the end until specified lenght is reached
console.log(string.padEnd(7, '<-'))

// Object.values
// converts the values of the object to array
let obj = {
     one : 1,
     two: 2,
     three: 3
}
console.log(Object.values(obj))

// Object.entries
// converts the values and the keys of the object to array
let obj2 = {
     apple : 1,
     banana: 2,
     guava: 3
}
console.log(Object.entries(obj2))

// Exponentiation
// '**' can be used to raise a number to a certain power
console.log(2**3)