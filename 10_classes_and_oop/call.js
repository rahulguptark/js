// .call is used to hold the reference

function setUserName(username) {
    // Complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password) {

    setUserName.call(this, username)

    this.email = email
    this.password = password
}

const user = new createUser("Rahul", "rahul@google.com", 123)
console.log(user);