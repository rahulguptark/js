// for in loop

const obj = {
    js: "javascript",
    java: "java",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in obj) {
    // console.log(`${key} is the shortcut for ${obj[key]}`);
}

const lang = ["js", "java", "cpp", "ruby", "python"]

for (const key in lang) {
    // console.log(lang[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
   console.log(key);
}

// Maps are not iterable by for in loop