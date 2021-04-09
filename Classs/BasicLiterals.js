// Object Literals

books = {
    name: 'something',
    author: 'someone',
    date: 'anything',
    summary: function() {
        //this keyword is used access the value of the same object
        return `${this.name} - ${this.author} - ${this.date}`
    }
}
// item can be accessed using object[item] 
console.log(books['name']);
// item can be accessed using object.item
console.log(books.name);
// Using object function
console.log(books.summary());

// returns all the keys of the object
console.log(Object.keys(books));

// returns all the values of the object
console.log(Object.values(books));