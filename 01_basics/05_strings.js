const name = "Rahul";
const repoCount = 50;

// console.log(name + repoCount + " value");

// console.log(`Hello there my name is ${name} and my repoCount is ${repoCount}.`);

const gameName = new String("Rahul");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));

// const newName = gameName.substring(0,2);
// console.log(newName);

const anotherName = gameName.slice(-3,5);
console.log(anotherName);

const newString = "    Rahul Gupta    ";
console.log(newString);
console.log(newString.trim());

const url = "rahul@google.com/Rahul%20Gupta";
console.log(url.replace('%20', '-'));

console.log(url.includes("Rahul"));

const myName = new String("Rahul Gupta");
// const myName = "Rahul Gupta"
console.log(myName.split(' '));