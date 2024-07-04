let a = 300;

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;

    // console.log("Inner ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Rahul"

    function two() {
        const website = "youtube"

        console.log(website);
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true) {
    const username = "Rahul"
    if (username === "Rahul") {
        const website = " Youtube"
        // console.log(username + website);
    }

    // console.log(website);
}
// console.log(username);

// +++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++


console.log(addOne(4));
function addOne(num) {
    return num + 1;
}

console.log(addTwo());
const addTwo = function(num) {
    return num + 1;
}

