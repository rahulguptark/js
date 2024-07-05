// if

// const isUserLoggedIn = true;

// if(isUserLoggedIn == true) {
//     console.log("User is logged in");
// }

const temp = 40;

// if(temp == 40) {
//     console.log("Temperature is 40 degree");
// } else {
//     console.log("Temperature is not 40 degree");
// }

// if(temp == 40) {
//     console.log("Temperature is 40 degree");
// }
// else {
//     console.log("Temperature is not 40 degree");
// }
// console.log("Executed");

// Conditional operators
// <, >, >=, <=, !=, ==, ===, !==

// let score = 200

// if(score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

const balance = 1000000;

// Don't write code in this way
// if(balance > 5000) console.log("test"), console.log("test2");

// if( balance < 100000) {
//     console.log("balance less than 100000");
// } else if (balance < 500000) {
//     console.log("balance less than 500000");
// } else if (balance < 800000) {
//     console.log("balance less than 800000");
// } else {
//     console.log("balance less than 1200000");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard && 2==2) {
    console.log("You are allowed to shop anything");
}

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged In");
}
