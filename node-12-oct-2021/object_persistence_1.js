const fs = require("fs");
const fileName = "books.json";

let booksObj = [
  { name: "book1", description: "description1", pages: 190 },
  { name: "book2", description: "description2", pages: 90 },
  { name: "book3", description: "description3", pages: 130 }
];

fs.writeFileSync(fileName, JSON.stringify(booksObj));

