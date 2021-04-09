// Old Constructor from Constructor.js
function Books(name, author, date) {
    this.name = name;
    this.author = author;
    this.date = date;
    //Removed function
}
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

// new value can also be using prototype method
console.log(book1); 
book1.isChanged(2021, true)
console.log(book1); 