/* 
higher order functions:
Higher-order functions. Functions that operate on other functions, 
either by taking them as arguments or by returning them
*/

// test Arrays
const companies = [
     {name: "Company One", category: "Finance", start: 1981, end: 2003},
     {name: "Company Two", category: "Retail", start: 1992, end: 2008},
     {name: "Company Three", category: "Auto", start: 1999, end: 2007},
     {name: "Company Four", category: "Retail", start: 1989, end: 2010}
]
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//---------------------------------------------------------------------------------------------------

//for Each
//it eterates over each element of a array  => Array.forEach(function(any_name, index, array_name){})
companies.forEach(function(company, index, companies) {
     console.log(`${index} - ${company.name}`)
})


//---------------------------------------------------------------------------------------------------
//Filter 
// it creates a new arrray of filtered data from given array

let greaterThan21 = ages.filter(function(age){
     if(age >= 21){
          return true // Append the array 'greaterThan21' only if the element is greater than 21
     }
})
//ES-6 Style
greaterThan21 = ages.filter(age => age >= 21)  
console.log(greaterThan21) //array of all elements which are greater than 21


//---------------------------------------------------------------------------------------------------//
// Map
// Creates a array from existing given array

let companyNames = companies.map(function(company){
     return (`${company.start} - ${company.end}`)// creates a array of start and end date of companies 
})
console.log(companyNames)

let DoubleAge = ages
     .map(age => age*2)
     .map(age => age+10);
console.log(DoubleAge)


//---------------------------------------------------------------------------------------------------//
// Sort
// it sorts a given array to create a new array
let SortedArray = companies.sort(function(company1, company2){ //sort takes two argument to compare
     if(company1.start > company2.start){ //sorting companies on the basis of start year
          return 1
     }else{
          return -1
     }
}) 
console.log(SortedArray)

let SortAge = ages.sort(function(a, b){
     return a-b // sort array in ascending order
     //return b-a // sort array in descending order  
})
console.log(SortAge)




//---------------------------------------------------------------------------------------------------//
// Reduce
// it reduces array to a single digit 

TotalAges = ages.reduce(function(total, age){// reduce take 2 argument function and starting point
     return total + age
}, 100);
console.log(TotalAges) // Total of ages(460) + 100 = 560