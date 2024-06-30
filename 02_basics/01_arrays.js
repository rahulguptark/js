// Array

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["Ironman", "Tonystark", "Spiderman"];

const arr3 = new Array(1, 2, 3, 4, 5);
// console.log(arr1[3]);

// Array methods

// arr1.push(6);
// arr1.push(7);
// arr1.pop();

arr1.unshift(9);
arr1.shift();

// console.log(arr1);

// console.log(arr1.includes(3));
// console.log(arr1.indexOf(4));

const newArr = arr1.join();

// console.log(arr1);
// console.log(newArr);

// console.log(typeof newArr);


// slice, splice

const arr = [1, 2, 3, 4, 5];
console.log("A", arr);

const newArr1 = arr.slice(1,4);
console.log(newArr1);
console.log("B", arr);

const newArr2 = arr.splice(1,4);
console.log(newArr2);
console.log("C", arr);

// slice : No change in the original array
// splice : There is change in the original array
