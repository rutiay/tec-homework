const arrayOfNumbers = [1, 2, 3, 4, 5];
const process = require("process");
const numberToFind = process.argv[2];

function checkValue(number) {
    return number == numberToFind;
}

const result = arrayOfNumbers.find(checkValue);
if (result == undefined) {
    console.log("not exist");
}
else {
    console.log(`${result} exist. Index: ${arrayOfNumbers.indexOf(result)}`);
}
