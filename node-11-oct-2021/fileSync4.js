const fs = require("fs");
const process = require("process");
fileName = process.argv[2];

const book = { name: "book1", pages: 123 };

fs.writeFileSync(fileName, JSON.stringify(book));