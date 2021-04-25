// CALLBACK
// is a function passed as an argument to another function.

numbers = [10, 14, 103, 94, 02]

// this func takes callback function as the argument 
function addNumber(num, callback){
     setTimeout(function () {
          numbers.push(num);
          console.log(`${num} added in numbers`);
          callback()
     }, 300)
}

// CALLBACK can be asynced as well as synced  

function showNumbers(){
     // setTimeout is a callback function
     setTimeout( () => console.log(numbers), 3000)
     
}
addNumber(20, showNumbers)

