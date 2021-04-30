/*
Prototype :
It is an object that is associated with every functions and objects by default in JavaScript
All JavaScript objects inherit properties and methods from a prototype.
*/

// Old Constructor from Constructor.js
function Books(name, author, date) {
    this.name = name;
    this.author = author;
    this.date = date;
}

//you can not add a new property to an existing object constructor:
//add new properties to object constructors prototype property is used:

//Prototype Object
Books.prototype.language = 'English'

//Prototype function
Books.prototype.getSummary = function () {
    return `${this.name} - ${this.author} - ${this.date}`
}

//check if the books is revised
Books.prototype.isChanged = function (year, revised) {
    this.date = year
    this.revised = revised
}

//Prototype functions does not get displayed when instance is logged
book1 = new Books('everything', 'everyone', '2015')

// Assigning a new date using prototype method
console.log(book1); 
book1.isChanged(2021, true)
console.log(book1); 