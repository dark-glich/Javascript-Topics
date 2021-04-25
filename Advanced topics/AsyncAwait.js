//Note : fetch was designed for the broswer and does not work natively without cross-fetch module
import fetch from 'cross-fetch';

// Async Await
/**
 * "async and await make promises easier to write"
 * 
 * async makes a function return a Promise
 * 
 * await makes a function wait for a Promise */

async function getData() {
     const url = 'https://jsonplaceholder.typicode.com/todos/1'
     // await function work asynchronously 
     let request = await fetch(url) 
     request = await request.json()
     return request
}
const data = getData()
let response = data.then(request => console.log(request))
console.log(response);