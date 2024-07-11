// Promise one
const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network calls

    setTimeout(function() {
        console.log("Async task is completed.");
        resolve()
    }, 1000)
})

promiseOne.then(function() {
    console.log("Promise consumed");
})

// Promise two
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2 is completed");
        resolve()
    }, 1000)

}).then(function() {
    console.log("Async 2 is resolved");
})

// Promise three
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "Rahul", email: "rahul@google.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// Promise four
const promiseFour = new Promise(function(resolve, reject){

    setTimeout(function(){
        let error = false;

        if(!error){
            resolve({username: "Rahul", emailId: "rahul@google.com"})
        }else {
            reject("ERROR: Something went wrong")
        }

    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
})

// Promise five

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;

        if(!error){
            resolve({username: "Javascript", password: "123"})
        }else {
            reject("ERROR: JS went wrong")
        }

    }, 1000)
});

async function consumePromisefive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromisefive()


// async function getAllUsers() {
    
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("error :", error);
//     }
// }

// getAllUsers()

// Using fetch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})

