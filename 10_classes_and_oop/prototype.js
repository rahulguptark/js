// let firstName = "Rahul    "
// let lastName = "Gupta    "

// console.log(firstName.trueLength);

let myHeroes = ["thor", "spiderman", "hulk"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    hulk: "strength",

    getSpiderPower: function() {
        console.log(`spiderman power is ${this.spiderman}`);
    }
}

Object.prototype.rahul = function() {
    console.log(`Rahul is present in all objects`);
}

// heroPower.rahul()

myHeroes.rahul()


Array.prototype.heyRahul = function() {
    console.log(`Hello rahul`);
}

myHeroes.heyRahul()
// heroPower.heyRahul()


// inheritance
// Prototypal inheritance

const user ={
    name: "Rahul",
    email: "rahul@google.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const taSupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: teachingSupport
}

// Old syntax
teacher.__proto__ = user

// new syntax
Object.setPrototypeOf(teachingSupport, teacher)

// How to print the true length of a string not including the spaces

let anotherUser = "Rahul    "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    // console.log(`${this.length}`);
    console.log(`The true length is: ${this.trim().length}`);
}

anotherUser.trueLength()
"Rahul".trueLength()
"username".trueLength()