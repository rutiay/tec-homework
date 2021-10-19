const fs = require("fs");
const process = require("process");
const fileName = process.argv[2];
const text = process.argv[3];

fs.writeFileSync(fileName, text, {flag: 'a'});