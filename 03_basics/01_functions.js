function sayMyName() {
    console.log("R");
    console.log("A");
    console.log("H");
    console.log("U");
    console.log("L");
}

// sayMyName();

// Function for adding two numbers

// function addTwoNumbers(num1, num2) { // parameters
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
    // let result = num1 + num2;
    // return result;

    return num1 + num2;
}

const result = addTwoNumbers(4,7); // arguments
// console.log("Result: ", result);

function welcomeMessage(username = "sam") {

    // if(username === undefined) & if(!username) both are same.
    
    if(!username){
        console.log("Please enter a username");
        return;
    }

    return `${username} just logged in`
}

// console.log(welcomeMessage("Rahul"));

// console.log(welcomeMessage(""));
// console.log(welcomeMessage());

// const message = welcomeMessage("Rahul");
// console.log(message);

function calculateCartPrice(val1, val2, ...num) {
    return num;
}

// console.log(calculateCartPrice(200, 300, 400, 50000));

const user = {
    username: "Rahul",
    price: 1999
}

function handleObject(anyObject) {
    // console.log(`username is ${anyObject.username} and the price is ${anyObject.price}`);
}

// handleObject(user);

handleObject({
    username: "Rahul",
    price: 3999
})

const myNewArray = [100, 200, 400, 800];

function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 500, 800, 400, 2000]));