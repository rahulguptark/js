function multiplyByFive(num) {
    return num * 5
}
multiplyByFive.power = 2;

console.log(multiplyByFive(5));
console.log(multiplyByFive.power);
console.log(multiplyByFive.prototype);

function createUser(username, price) {
    this.username = username
    this.price = price
}

createUser.prototype.increment = function () {
    this.price++;
}

createUser.prototype.printMe = function () {
    console.log(`Price is: ${this.price}`);
}

const chai = new createUser("Chai", 25)
const tea = createUser("tea", 250)

chai.printMe()

// Here's what happens behind the scenes when the new keyword is used.

// A new object is created: The new keyword initiates the creation of a new javascript object.

// A prototype is linked: The new created object gets linked to the prototype property of the constructor function. this means that it has access to properties and methods defined on the constructor's prototype.

// The constructor is called: The constructor function is called with specified arguments and this is bound to the newly created object. If no explicit return value is spcified from the constructor, javascript assumes this, the newly created object, to be the intended return value.

// The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.