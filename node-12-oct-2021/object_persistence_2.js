const fs = require("fs");

const booksJson = fs.readFileSync("books.json", "utf8");
const booksObj = JSON.parse(booksJson);

let min = booksObj[0].pages;
for (const book of booksObj) {
    if(min > book.pages){
        min = book.pages;
    }
}

function checkPages(book){
    return book.pages == min;
}

const result = booksObj.find(checkPages);
console.log(result.name);
