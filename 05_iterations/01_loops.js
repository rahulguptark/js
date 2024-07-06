// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 4) {
        // console.log("4 is the best number");
    }
    // console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop: ${j} and Outer loop: ${i}`);
        // console.log(i + "*" + j + " = " + i*j);
    }
    
}

let myArray = ["Spiderman", "Batman", "Ironman", "Antman"]

// console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
    
}

// break and continue

for (let index = 1; index <= 20; index++) {

    if(index == 4) {
        // console.log("4 is detected");
        break;
    }
    // console.log(`value of index is: ${index}`);

}

for (let index = 1; index <= 20; index++) {

    if(index == 4) {
        // console.log("4 is detected");
        continue;
    }
    // console.log(`value of index is: ${index}`);

}

// While loop

let index = 0

while (index <= 10) {
    // console.log(`Value of index is: ${index}`);
    index = index + 2
}


let myArray2 = ["Spiderman", "Ironman", "Superman", "Antman"]

let arr = 0
while (arr < myArray2.length) {
    // console.log(`The value is: ${myArray2[arr]}`);
    arr = arr + 1
}

// do while loop

let score = 1

do {
    console.log(`The score is: ${score}`);
    score++

} while (score <= 10);