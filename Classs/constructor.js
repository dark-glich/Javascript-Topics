// Constructor
// This is used to create different instances of the class
function Books(name, author, date) {
    this.name = name;
    this.author = author;
    this.date = date;
    this.summary = function () {
        return `${this.name} - ${this.author} - ${this.date}`
    }
}
//To create instances new keyword is used
const book1 = new Books('something','someone', 'sometime')
const book2 = new Books('anything', 'anyone', 'anytime')

// Logging the instances
console.log(book1.author);
console.log(book2.summary());