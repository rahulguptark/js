const marvel_heroes = ["Ironman", "Spiderman", "Thor"];
const dc_heroes = ["Superman", "Flash", "Batman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

// console.log(marvel_heroes[3][1]);

const all_heroes = marvel_heroes.concat(dc_heroes);
// console.log(all_heroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes];
// console.log(all_new_heroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, 8, [8, 9], 5];

const realAnotherArray = anotherArray.flat(Infinity);
// console.log(realAnotherArray);

console.log(Array.isArray("Rahul"));
console.log(Array.from("Rahul"));

console.log(Array.from({name: "Rahul"})); //interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));