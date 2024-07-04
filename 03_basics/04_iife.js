// Immediately invoked function expression (IIFE)

//Jo function immediately execute ho jaye and Global scope ke polution se problem hoti hai kai baar to global scope ke jo bhi variable hai yaa fir jo bhi declaration hai uske polution ko hatane ke liye hum IIFE ka use karte hai

(function one() {
    //Named IIFE
    console.log(`Db connected`);
})();

((name) => {
    console.log(`Db connected 2 ${name}`);
})(`Rahul`)

// (Function definition) (Execution call)