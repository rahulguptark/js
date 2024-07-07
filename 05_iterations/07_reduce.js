const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce( function (accumulator, currentValue) {
//     console.log(`accumulator: ${accumulator} and current value ${currentValue}`);
//     return accumulator + currentValue
// }, 0)

const myTotal = myNums.reduce( (accumulator, currentValue) => {
    // console.log(`accumulator: ${accumulator} and current value ${currentValue}`);
    return accumulator + currentValue
}, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        course: "Java",
        price: 3999
    },
    {
        course: "Python",
        price: 2999
    },
    {
        course: "Javascript",
        price: 4999
    },
    {
        course: "Data science",
        price: 6999
    }    

]

const grandTotal = shoppingCart.reduce( (accumulator, item) => {
    return accumulator + item.price}, 0)
console.log(`Your Total Amount is rs ${grandTotal}`);
