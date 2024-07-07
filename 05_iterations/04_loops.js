// for each loop

const coding = ["Java", "Ruby", "Python", "Javascript"]


// using normal function

// coding.forEach( function (val) {
//     console.log(val);
// })

// using arrow function

// coding.forEach((val) => {
//     console.log(val);
// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "Javascript",
        fileName: "js"
    },
    {
        languageName: "Java",
        fileName: "java"
    },
    {
        languageName: "Python",
        fileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    // console.log(item.fileName);
})