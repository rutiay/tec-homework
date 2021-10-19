const arrayOfBooks = [];
arrayOfBooks.push({name: "bookA", pages: 190}, {name: "bookB", pages: 30}, {name: "bookC", pages: 61});

const process = require("process");
const bookName = process.argv[2];

function checkBook(book){
    return book.name == bookName;
}

const result = arrayOfBooks.find(checkBook);
if(result == undefined){
    console.log("book was not found");
}
else{
    const index = arrayOfBooks.indexOf(result);
    arrayOfBooks.splice(index, 1);
    console.log(arrayOfBooks);
}