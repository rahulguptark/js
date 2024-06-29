// primitive datatypes

// 7 Types: String, Number, Boolean, null, undefined, Symbol

const scrore = 100;
const scoreValue = 100.5;
const isLoggedIn = false;
const outsidetemp = null;

let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 343546587687634524n;

// Refrence (non-primitive) datatypes

// Array, Objects, Functions

const heroes = ["Spiderman", "Ironman", "Shaktiman", "Hulk"];

let myObj = {
    name: "Rahul",
    age: 22,
}

let myFunc = function(){
    console.log("Hello World");
}

// console.log(typeof(scrore));
// console.log(typeof(scoreValue));
// console.log(typeof(isLoggedIn));
// console.log(typeof(outsidetemp));
// console.log(typeof(id));
// console.log(typeof(anotherId));
// console.log(typeof(userEmail));
// console.log(typeof(bigNumber));
// console.log(typeof(heroes));
// console.log(typeof(myObj));
// console.log(typeof(myFunc));

// +++++++++++++++++++++++++++++++ Stack and Heap memory +++++++++++++++++++++++++++++++++

// Stack (primitive), Heap (non-primitive)

let myName = "Rahul";

let anotherName = myName;

anotherName = "Raghav";

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@sbi"
}

let userTwo = userOne;

userTwo.email = "rahul@google.com";

console.log(userOne.email);
console.log(userTwo.email);
console.log(userOne.upi);
