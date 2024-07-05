// const email = "rahul@gmail.com"

const email = []

if(email) {
    console.log("Got your email");
} else {
    console.log("Don't have your email");
}

// falsy values
// false, 0, -0, BigInt 0n, null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// How to check the array is empty ?

if(email.length === 0) {
    console.log("Array is empty");
}

// How to check the object ia empty ?

const empObj = {}

if(Object.keys(empObj).length === 0) {
    console.log("Object is empty");
}

// null coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? undefined ?? 5 ?? 15

console.log(val1);


// Terniary operator
// Condition ? true : false

const price = 500;
price <= 400 ? console.log("price is less than 400") : console.log("price is more than 400");
