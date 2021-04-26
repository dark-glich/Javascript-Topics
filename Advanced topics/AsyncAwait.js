//Note : fetch was designed for the broswer and does not work natively without cross-fetch module
import fetch from 'cross-fetch';

// Async Await
/**
 * "async and await make promises easier to write"
 * 
 * async makes a function return a Promise
 * 
 * await makes a function wait for a Promise */

// Creating a new Promise 
function CheckName(name) {
     return new Promise((resolve, reject) =>{
          name == 'bilal' ? resolve('name is Bilal') : reject('name is not Bilal')
     })
}
// Creating another Promise
function ShowAge(name) {
     return new Promise((resolve, reject) =>{
          name == 'name is Bilal' ? resolve(`${name} and your age is 15`) : reject('Sorry age not defined')
     })
}
// Async Await
async function toCheck(name){
     // if check_name is resolved then try block will run
     try{
          const check_name = await CheckName(name)
          console.log(check_name);
          const age = await ShowAge(check_name)
          console.log('Age is 15')
     // else catch block will run
     }catch(error){
          console.log(error)
     }

}

toCheck('bilal')

// Example with Fetch

async function getData() {
     try {
          const url = 'https://jsonplaceholder.typicode.com/todos/1'
          // await function work asynchronously 
          let request = await fetch(url) 
          request = await request.json()
          return request
     }catch{
          console.log('Unable To Fetch the Api')
     }

}
const data = getData()
let response = data.then(request => console.log(request))