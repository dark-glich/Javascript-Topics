//Note : fetch was designed for the broswer and does not work natively without cross-fetch module
import fetch from 'cross-fetch';

//Fetch 
//The Fetch API allows web browser to make HTTP requests to web servers.

// Get Api
function getData() {
     //url for api 
     url = 'https://jsonplaceholder.typicode.com/todos/1'
     //fetch returns a promise so .then() is used 
     fetch(url).then(function (request){
          return request.json()
     // this also returns a promise
     }).then(function (data) {
          console.log(data)
     })
}
getData()

// Post Api

function postData() {
     // url to which we are posting
     url = 'https://jsonplaceholder.typicode.com/posts'
     // data which will be posted
     let data = {title: 'foo', body: 'bar', userId: 1}
     // setting the method, body, head 
     let params = {
          // mehod stores the method type
          method:'POST',
          // we use JSON.stringify() when the data is a object
          //body stores the data
          body:JSON.stringify(data),
          // header stores the data specifications
          headers:{'content-type':'application/Json'}
     }

     fetch(url, params).then(function(request){
          return request.json()
     }).then(function (data){
          console.log(data)
     }).catch(function (error) {
          console.log('Sorry there is a error !!')
     })
}
postData()

// Catching Error in fetch
function Errordata() {
     //Incorrect url for api 
     url = 'https://ErrorExamples.com'
     //fetch returns a promise so .then() is used 
     fetch(url).then(function (request){
          return request.json()
     }).then(function (data) {
          console.log(data)
     // .catch is used if there is a error in request
     }).catch(function (error) {
          console.log('Sorry there is a error !!')
     })
}
Errordata()
