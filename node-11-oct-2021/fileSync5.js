const fs = require("fs");

const bookObject = JSON.parse(fs.readFileSync("./writeObject.txt", "utf8"));
console.log(bookObject.name, bookObject.pages);
