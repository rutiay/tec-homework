const arrayOfNumbers = [1, 2, 3, 4, 5];
const process = require("process");
const mode = process.argv[2];

function max() {
    let max = 0;
    for (const number of arrayOfNumbers) {
        if (number > max) {
            max = number;
        }
    }
    return max;
}

function min() {
    let min = arrayOfNumbers[0];
    for (const number of arrayOfNumbers) {
        if (number < min) {
            min = number
        }
    }
    return min;
}

function sum() {
    let sum = 0;
    for (const number of arrayOfNumbers) {
        sum += number;
    }
    return sum;
}

function average() {
    let average = sum() / arrayOfNumbers.length;
    return average;
}

if (mode == "max") {
    console.log(max());
}
else if (mode == "min") {
    console.log(min());
}
else if (mode == "sum") {
    console.log(sum());
}
else if (mode == "avg") {
    console.log(average());
}
else {
    console.log("Error!");
}

