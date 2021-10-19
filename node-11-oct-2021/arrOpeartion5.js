const arrayOfNumbers = [1, 24, 65, 89];
const process = require("process");
const numberToFind = process.argv[2];

function checkNumber(number){
    return number == numberToFind;
}

const result = arrayOfNumbers.find(checkNumber);
if(result == undefined){
    console.log("number was not found");
}
else{
    arrayOfNumbers[arrayOfNumbers.indexOf(result)] += 1;
    console.log(arrayOfNumbers);
}