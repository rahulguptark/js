// ES6

class User{
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    capitalizeUserName() {
        return `${this.username.toUpperCase()}`
    }
}

const newUser = new User("Rahul", "rahul@google.com,", 123)
console.log(newUser.encryptPassword());

const newUSer2 = new User("Raghav", "raghva@google.com", 345)
console.log(newUSer2.capitalizeUserName());


// Behind the scene

function User2(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User2.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User2.prototype.capitalizeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const newUser3 = new User2("Rahul", "rahul@google.com,", 123)
console.log(newUser3.encryptPassword());

const newUser4 = new User2("Raghav", "raghav@google.com", 345)
console.log(newUser4.capitalizeUserName());