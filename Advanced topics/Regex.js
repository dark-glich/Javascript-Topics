// Regex
/*
A regular expression is an object that describes a pattern of characters.
Regular expressions are used to perform pattern-matching and "search-and-replace" functions on text.
*/

let regex = /Regex/; // regular expression literal
let text = 'To search the Regex Regex' // example text to search

// Functions

// 1. exec() returns a array if there is a match else returns null
console.log(regex.exec(text)) // returns array

// 2. test() returns true if there is a match else returns false
console.log(regex.test(text)) // returns true

// 3. text.seacrh(regex) returns the index of match else returns -1
console.log(text.search(regex)) // returns 14

// 4. text.replace(regex, replace to) replaces the regex to replace to
console.log(text.replace(regex, 'regular')) // replaces Regex to regular

//5. text.match(regex) returns the array of matches
console.log(text.match(regex))

//------------------------------------------------------------------------------------------------
// Modifiers

// /g --> global match (find all matches rather than stopping after the first match)
regex = /Regex/g;
console.log(text.match(regex)) // returns ['Regex', 'Regex']

// /i --> Perform case-insensitive matching
regex = /regex/i;
text = 'Case insensitive Regex'
console.log(regex.test(text)) // returns true


//------------------------------------------------------------------------------------------------
//Brackets

// [x - y] --> find all the characters between 'x' & 'y' 
regex = /[a-c]/gi;
text = 'Barackets in Regex'
console.log(text.match(regex))

// [xy] --> Do a search for the characters "x" and "y" in a string

regex = /[ac]/gi;
text = 'Barackets in Regex'
console.log(text.match(regex)) 

// [^a] --> returns all the characters execpt 'a'
regex = /[^a]/gi;
text = 'Barackets in Regex'
console.log(text.match(regex)) 

// [x|y] --> Do a global search to find any of the specified alternatives ('x'|'y'):
regex = /[b|r]/gi;
text = 'Barackets in Regex'
console.log(text.match(regex)) 


//------------------------------------------------------------------------------------------------
// Metacharacters

// \w --> finds a word character  (a-z, A-Z, 0-9, _).
regex = /[\w]/g;
text = '% % # ( $ a j'
console.log(text.match(regex)) 

// \W --> Do a global search for special characters 
regex = /[\W]/g;
text = 'abcd@'
console.log(text.match(regex)) 

// \d --> Do a global search for digits
regex = /[\d]/g;
text = 'abcd123'
console.log(text.match(regex)) 

// \s --> Do a global search for whitespace 
regex = /[\s]/g;
text = 'abcd 123'
console.log(text.match(regex).length) 


//------------------------------------------------------------------------------------------------
//Quantifiers

// /xy+ --> Do a global search for at least one "x" followed by "y"
regex = /lo+/g;
text = 'helooo l'
console.log(text.match(regex)) 

// /10* --> Do a global search for a "x" followed by "y" will include "x" alone 
regex = /lo*/g;
text = 'helooo l'
console.log(text.match(regex))

// /x$ --> Do a global search for "x" at the end of a string else null
regex = /o$/g;
text = 'heloo o'
console.log(regex.test(text))

// /^x --> Do a global search for "Is" at the beginning of a string else null

regex = /^o/g;
text = 'o heloo'
console.log(regex.test(text))
