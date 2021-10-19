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

switch (mode) {
    case "max":
        console.log(max());
        break;
    case "min":
        console.log(min());
        break;
    case "sum":
        console.log(sum());
        break;
    case "avg":
        console.log(average());
        break;
    default:
        console.log("Error!");
        break;
}
