const fs = require("fs");
const fileName = "todo.json";

const op = process.argv[2];
const name = process.argv[3];
const author = process.argv[4];
const pages = Number(process.argv[5]);

let libraryObj;

try {
  let libraryJson = fs.readFileSync(fileName, "utf8");
  libraryObj = JSON.parse(libraryJson);
} catch (error) {
  libraryObj = [];
}

const book = { name, author, pages };
const result = libraryObj.find(checkBook);

switch (op) {
  case "add":
    if (result == undefined) {
      libraryObj.push(book);
      console.log("Success - Book added to library");
    } else {
      console.log("Error - Book already exist");
    }
    break;
  case "update":
    if (result == undefined) {
      console.log("Error - Book doesn't exist");
    } else {
      result.pages = pages;
    }
    break;
  case "delete":
    if (result == undefined) {
      console.log("Error - Book doesn't exist");
    } else {
      const index = libraryObj.indexOf(result);
      libraryObj.splice(index, 1);
      console.log("Success - Book deleted from the library");
    }
    break;
  case "getAll":
    console.log(libraryObj);
    break;
  case "search":
    if (result == undefined) {
      console.log("Book doesn't exist");
    } else {
      console.log("Success - Here is the book you're looking for");
      console.log(result);
    }
    break;
  default:
    console.error("Error");
    break;
}

function checkBook(bookToFind) {
  return bookToFind.name == book.name;
}

libraryJson = JSON.stringify(libraryObj);
fs.writeFileSync(fileName, libraryJson);
