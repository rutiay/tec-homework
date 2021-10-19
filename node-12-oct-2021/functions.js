function addBook(result, book, arr) {
  if (result == undefined) {
    arr.push(book);
    console.log("Success - Book added to library");
  } else {
    console.log("Error - Book already exist");
  }
}

function updateBook(result, pages) {
  if (result == undefined) {
    console.log("Error - Book doesn't exist");
  } else {
    result.pages = pages;
  }
}

function deleteBook(result, arr) {
  if (result == undefined) {
    console.log("Error - Book doesn't exist");
  } else {
    const index = arr.indexOf(result);
    arr.splice(index, 1);
    console.log("Success - Book deleted from the library");
  }
}

function getAllBooks(arr) {
  console.log(arr);
}

function searchBook(result) {
  if (result == undefined) {
    console.log("Book doesn't exist");
  } else {
    console.log("Success - Here is the book you're looking for");
    console.log(result);
  }
}

module.exports.add = addBook;
module.exports.update = updateBook;
module.exports.delete = deleteBook;
module.exports.print = getAllBooks;
module.exports.search = searchBook;