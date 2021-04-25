// Promises
/**A JavaScript Promise object can be:

Pending
Fulfilled
Rejected
The Promise object supports two properties: state and result.

While a Promise object is "pending" (working), the result is undefined.

When a Promise object is "fulfilled", the result is a value.

When a Promise object is "rejected", the result is an error object. */
function func(num1, num2) {
    // Promise starts with new keyword
    return new Promise(function(resolve, reject){
        // Suppose this is a Api
        setTimeout(() => {
        product = num1*num2
        //resolve calls .then function
        //reject call .catch function
        product < 10 ? resolve() : reject('Product is greater than 10')
        }, 2000)
    })
}

func(2, 4).then(function(){ //then keyword is used to set resolve function
    console.log('Product is smaller than 10');
})
.catch(function(error){ //catch keyword is used to set reject function
    console.log(error);
})

//Practical Example

