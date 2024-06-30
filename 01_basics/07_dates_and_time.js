// Dates

let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());

// console.log(typeof myDate);

let myCreatedDate = new Date(2024, 9, 26);
// console.log(myCreatedDate.toLocaleDateString());

let myCreatedDateAndTime = new Date(2024, 9, 26, 2, 4);
// console.log(myCreatedDate.toLocaleString());

let createdDate = new Date("2024-10-26");
// console.log(createdDate.toLocaleString());

let createdDateIn = new Date("10-26-2024");
// console.log(createdDateIn.toString());

// +++++++++++++++++++++++++++++++++++++++ Time +++++++++++++++++++++++++++++++++++++

let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(createdDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();

console.log(newDate.toString());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getTime());

// 'The day is ${newDate.getDay()} and the time is ${newDate.getTime()}.'

newDate.toLocaleString('default', {
    weekday: "long",
    day: "2-digit"
})

console.log(newDate);