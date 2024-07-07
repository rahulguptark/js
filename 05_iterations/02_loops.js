// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}


const greetings = "Hello there!"

for (const greet of greetings) {
    if (greet == " ") {
        continue;
    }
    // console.log(`Each char is: ${greet}`);

}

// Maps: Maps hold the unique values. values are stored in key value pairs like in objects, but values are printed in the same order as they are entered.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key,':', value);
}

const myObj = {
    sport1 : 'Cricket',
    sport2 : 'football',
    sport3 : 'Badminton'
}

for (const [key, value] of myObj) {
    // console.log(key, value);
}

// Objects cannot be iterated with for of loop
// To iterate on objects we use for in loop