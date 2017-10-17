// Put your JavaScript lab code here!

let sentence = "I like JavaScript more than I like to party. ";
let slice = sentence.slice(28, 43);
console.log(slice);

let uni = "I love Washington State University!";
let replace = uni.replace("Washington State University", "University of Washington");
console.log(replace);

let combine = sentence.concat(replace);
console.log(combine)

function sumUpTo(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function vowelCount(arr) {
    var arr = stri.match(/[aeiou]/gi);
    if(arr === null) {
        return 0;
    } else {
        return arr.length;
    }
}

function findMin(array) {
    var minNum = 999999;
    for(let i = 0; i < array.length; i++) {
        if(array[i] < minNum) {
            minNum = array[i];
        }
    }
    return minNum;
}

