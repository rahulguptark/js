// const tinderUser = new Object();

const tinderUSer = {};

tinderUSer.id = "123abc"
tinderUSer.name = "Sam"
tinderUSer.isLoggedIn = false

// console.log(tinderUSer);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Rahul",
            lastName: "Gupta"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {5: "e", 6: "f"};

// const obj4 = {obj1, obj2};
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    }
]

// console.log(users[1].id);
// console.log(users[1].email);

// console.log(tinderUSer);
// console.log(Object.keys(tinderUSer));
// console.log(Object.values(tinderUSer));
// console.log(Object.entries(tinderUSer));

// console.log(tinderUSer.hasOwnProperty('isLoggedIn'));
// console.log(tinderUSer.hasOwnProperty('isLogged'));


const course = {
    courseName: "Js in hindi",
    price: "999",
    courseInstructor: "Rahul"
}

// console.log(course.courseName);

//de-structuring of objects
const {courseName, price, courseInstructor: instructor} = course

console.log(courseName);
console.log(price);
console.log(instructor);

// In React

const navbar = ({company}) => {

}
navbar(company = "Rahul")


// json formate

// {
//     "name": "Rahul",
//     "courseName": "Js in hindi",
//     "price": "Free"
// }

// In the form of an array

// [
//     {},
//     {},
//     {}
// ]