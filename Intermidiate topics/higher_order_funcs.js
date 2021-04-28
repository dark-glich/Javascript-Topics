/* higher order functions:
Higher-order functions. Functions that operate on other functions, 
either by taking them as arguments or by returning them*/

// test Arrays
const companies = [
     {name: "Company One", category: "Finance", start: 1981, end: 2003},
     {name: "Company Two", category: "Retail", start: 1992, end: 2008},
     {name: "Company Three", category: "Auto", start: 1999, end: 2007},
     {name: "Company Four", category: "Retail", start: 1989, end: 2010}
]
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//---------------------------------------------------------------------------------------------------

//for Each --> it eterates over a array 
// Array.forEach(function(any_name, index, array_name){})
companies.forEach(function(company, index, companies) {
     console.log(company.name)
})

