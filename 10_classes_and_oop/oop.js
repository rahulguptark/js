// Object literals

const user = {
    username: "Rahul",
    emailId: "Rahul@google.com",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this);
    }

}

console.log(user.username);
// console.log(user.getUserDetails());
console.log(this);


// Constructor function

function newUser(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    return this;
}

const userOne = new newUser("Rahul", 10, true);
const userTwo = new newUser("Raghav", 8, false)
console.log(userOne.constructor);
// console.log(userTwo);

// new keyword: when we use new keyword
// step 1. New object is created.
// step 2. A constructor function is called due to new keyword. Pack all the arguments and give us.
// step 3. All the arguments are injected in "this" keyword.
// step 4. we get it in the function.


// Instanceof in javascript

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);
  // Expected output: true
  
  console.log(auto instanceof Object);
  // Expected output: true
  