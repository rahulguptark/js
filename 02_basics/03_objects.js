// Singleton
// Object.create

// Object literals

const mySym = Symbol("key1") 

const jsUser = {
    name: "Rahul",
    "fullName": "Rahul Gupta",
    [mySym]: "myKey1",
    age: 22,
    location: "Yamunanagar",
    email: "rahul@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

// console.log(jsUser.name);
// console.log(jsUser.fullName);
// console.log(jsUser["email"]);
// console.log(jsUser["fullName"]);
// console.log(jsUser[mySym]);

jsUser.email = "rahul@apple.com";
// Object.freeze(jsUser);

jsUser.email = "rahul@microsoft.com";
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());