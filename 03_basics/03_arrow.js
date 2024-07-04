const user = {
    username: "Rahul",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, "Welcome to website"`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Raghav"
// user.welcomeMessage()

// console.log(this);


// function one() {
//     let username = "Rahul"
//     console.log(this.username);
// }
// one()

// const one = function () {
//     let username = "Rahul"
//     console.log(this.username);
// }
// one()

// const one = () => {
//     let username = "Rahul"
//     console.log(this.username);
// }
// one()

// Explicit return : We use return keyword and parenthesis '{}'

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(4,4));

// Implicit return : We don't use return keyword and parenthesis '{}'

// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(6,9));

// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(5,7));

const username = () => ({username: "Rahul"})
console.log(username());

