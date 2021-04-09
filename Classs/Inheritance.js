// Old Constructor and Prototype
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
//Inheritance

function Comic(name, author, date, edition) {
    //.call is used to inherit from other class
    Books.call(this, name, author, date)
    //Creating edition
    this.edition = edition
}

//inheriting the prototype function
Comic.prototype = Object.create(Books.prototype)

//Changing constructor from Books to Comic
Comic.prototype.constructor = Comic

//instance
comic1 = new Comic('SpiderMan', 'Stan Lee', '2003', '5')
console.log(comic1);

console.log(comic1.getSummary());