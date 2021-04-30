// Classes
class Books{
    // constructor keyword is used to create objects in class
    constructor(bookname, author, date){
        this.bookname = bookname
        this.author = author
        this.date = date
    }
    //Normal Function
    getSummary() {
        this.summary = `${this.bookname} - ${this.author} - ${this.date}`
    }
    /*
    Static Function - they start with static keyword and used when we dont 
    have to use the class objects 
    */
    static getBestseller(){
        return 'Bestseller : Barnes and Noble'
    }
}
book1 = new Books('The Shoe Dog', 'Phil Knight', '2004')
console.log(book1);

console.log(book1.getSummary());
// static functions cannot be used on instances but on classes
console.log(Books.getBestseller());

// SubClass & Inheritance
// class [subclass-name] extends [parentclass-name]

class Comics extends Books{
    constructor(bookname, author, date, edition){
        //super keyword used to inherit from other class
        super(bookname, author, date)
        this.edition = edition
    }
}
comic1 = new Comics('Spiderman', 'Stan Lee', '2002', 'final edition')

// No need to inherit prototype functions
comic1.getSummary();
console.log(comic1);