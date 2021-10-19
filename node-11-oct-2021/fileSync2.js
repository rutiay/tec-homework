const fs = require("fs");
const process = require("process");
const fileName = process.argv[2];

console.log(fs.readFileSync(fileName, "utf8"));