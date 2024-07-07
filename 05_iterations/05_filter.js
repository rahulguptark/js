const coding = ["Java", "Cpp", "Javascript", "Ruby", "Python"]

const values = coding.forEach( (item) => {
    // console.log(item);
    return item
} )

// console.log(values);


// filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => {
    return num > 4
} )
// console.log(newNums);

// Using for each 

const newNums2 = []
myNums.forEach( (num) => {
    if(num > 4) {
        newNums2.push(num)
    }
} )

// console.log(newNums2);


// Example

const books = [
    {title: "Book1", genre: "Non-fiction", publish: 1981, edition: 2008},
    {title: "Book2", genre: "Non-fiction", publish: 1986, edition: 2013},
    {title: "Book3", genre: "Fiction", publish: 1990, edition: 2018},
    {title: "Book4", genre: "Non-fiction", publish: 1994, edition: 2017},
];

let userBooks = books.filter( (book) => book.genre === "Fiction" )

userBooks = books.filter( (book) => {
    return book.genre === "Non-fiction" && book.publish >= 1990
})
console.log(userBooks);