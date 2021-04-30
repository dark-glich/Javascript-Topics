// importing fetch
import fetch from 'cross-fetch';

// JSON : Javascript Object Notation

// Example Json Object
let json_obj = '{ "name":"John", "age":"30", "city":"New York"}'

// Example Object
let obj = {
     name :"mark",
     age: "36",
     city: "Delhi",
     freinds: ['kim', 'james']
}

//JSON.parse
// is used to convert json to javascript object
console.log(JSON.parse(json_obj))

//JSON.stringify
//is used to convert javascript object to Json
console.log(JSON.stringify(obj))

// functions cannot be added in json data 
// they converts function into string

// converting json file to javascript object
function getData(url) {
     fetch(url).then(function (request){
          return request.json()
     }).then(function (data) {
          console.log(data)
     })
}
getData('https://jsonplaceholder.typicode.com/todos/1')


// Note - this might not work since it is a relative path
//getData('main.json')
