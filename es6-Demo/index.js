function getGreeting(name = "World.") {
    return "Hello" + name;
}

console.log(getGreeting());
console.log(getGreeting("Nelson."));

// Template Strings

function greeting(name) {
    return `Hello, ${name.substr(0,1).toUpperCase() + name.substr(1)}`;
}

console.log(greeting("nelson"));

// Destructuring and Spreading
let size = "10x20x30x40x50x60";

// split size into two-element array
// let sizeSegments = size.split("x");
// returns ["10", "20"]

// let width = sizeSegments[0];
// let height = sizeSegments[1];
// console.log(width);
// console.log(height);

// ... is used for getting the rest
let [width, height, ...rest] = size.split("x"); 

console.log(width);
console.log(height);
console.log(rest);

let shape = {x:10, y:20, width:30, height:40}

let {x, y} = shape;
console.log(x);
console.log(y);

// Spreading
function sum(n1, n2) {
    return n1 + n2;
}

// notation is used for spreading here, to get all the nums at that point
let nums = [1,2];
console.log(sum(...nums)); 

function sumAll(...numbers) {
    return numbers.reduce((accumlator, n) => accumlator + n, 0);
}

console.log(sumAll(10,20,30,40,50));
