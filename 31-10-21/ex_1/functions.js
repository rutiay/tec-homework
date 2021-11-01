// ! create new collection

function addCollectionToDataBase(dataBase, collection) {
  // ! create new collection in the data base, the function "createCollection" is given 2 parameters:
  // ! the first one is the collection name as a string, and the second is a callBack function.
  // ! there are two arguments for the callBack function: error or the collection that we created.
  dataBase.createCollection(collection, (error, myCollection) => {
    if (error) {
      throw error;
    }
    console.log(myCollection);
  });
}

// ! create new document

function insertDocument(dataBase, collectionName, object) {
  // ! create new document in the collection that was given. The data base method "collection" is given
  // ! the collection name, once we have the collection as an object we use the "insertOne" method.
  // ! we give to "insertOne" 2 arguments: tghe first one is the object that we want to add to the collection,
  // ! and the second one is a callBack function. there are two arguments for the callBack function:
  // ! error or the document we created.
  dataBase.collection(collectionName).insertOne(object, (error, doc) => {
    if (error) {
      throw error;
    }
    console.log(doc);
  });
}

// ! print documents

function getDocumentsFromDataBase(dataBase, collection) {
  // ! the function prints all the documents in a collection.
  dataBase
    .collection(collection)
    .find({})
    .toArray((error, result) => {
      if (error) {
        throw error;
      }
      console.log(result);
    });
}

function insertArrayOfDocuments(dataBase, collectionName, myArray) {
  dataBase
    .collection(collectionName)
    .insertMany(myArray, (error, documents) => {
      if (error) {
        throw error;
      }
      console.log(documents);
    });
}

function deleteDocumentById(dataBase, collectionName, id) {
  dataBase
    .collection(collectionName)
    .deleteOne({ _id: ObjectId(id) }, (error, res) => {
      if (error) {
        throw error;
      }
      console.log(res);
    });
}

function updateDocumentById(dataBase, collectionName, id, newValue) {
  dataBase
    .collection(collectionName)
    .updateOne(
      { _id: ObjectId(id) },
      { $set: newValue },
      (error, updatedDocument) => {
        if (error) {
          throw error;
        }
        console.log(updatedDocument);
      }
    );
}

function printAuthorsByalphabeticalOrder(dataBase) {
  dataBase
    .collection("authors")
    .find()
    .sort({ name: 1 })
    .toArray((error, documents) => {
      if (error) {
        throw error;
      }
      console.log(documents);
    });
}

function addToArray(dataBase, authorId, postId) {
  dataBase
    .collection("authors")
    .updateOne(
      { _id: ObjectId(authorId) },
      { $push: { posts: postId } },
      (error, res) => {
        if (error) {
          throw error;
        }
        console.log(res);
      }
    );
}

function addArray(dataBase, authorId, arrayOfPostsId) {
  dataBase
    .collection("authors")
    .updateOne(
      { _id: ObjectId(authorId) },
      { $push: { posts: { $each: arrayOfPostsId } } },
      (error, res) => {
        if (error) {
          throw error;
        }
        console.log(res);
      }
    );
}

function printAuthorsWithPosts(dataBase) {
  dataBase
    .collection("authors")
    .find({ "posts.0": { $exists: true } })
    .toArray((error, docs) => {
      if (error) {
        throw error;
      }
      console.log(docs);
    });
}

function printAuthorsUnder40(dataBase) {
  dataBase
    .collection("authors")
    .find({ age: { $lt: 40 } })
    .toArray((error, documents) => {
      if (error) {
        throw error;
      }
      console.log(documents);
    });
}

function printAuthorsOver40(dataBase) {
  dataBase
    .collection("authors")
    .find({ age: { $gt: 40 } })``
    .toArray((error, documents) => {
      if (error) {
        throw error;
      }
      console.log(documents);
    });
}

function printAuthorsOver20Under60(dataBase) {
  dataBase
    .collection("authors")
    .find({ age: { $gt: 20, $lt: 60 } })
    .toArray((error, documents) => {
      if (error) {
        throw error;
      }
      console.log(documents);
    });
}

function printThreeAuthorsOver20Under60(dataBase) {
  dataBase
    .collection("authors")
    .find({ age: { $gt: 20, $lt: 60 } })
    .limit(3)
    .toArray((error, documents) => {
      if (error) {
        throw error;
      }
      console.log(documents);
    });
}

function printAuthorsWithoutId(dataBase) {
  dataBase
    .collection("authors")
    .find({}).project({ _id: 0 })
    .toArray((error, documents) => {
      if (error) {
        throw error;
      }
      console.log(documents);
    });
}

function printAuthorsNames(dataBase) {
  dataBase
    .collection("authors")
    .find({}).project({ name: 1, _id: 0 })
    .toArray((error, documents) => {
      if (error) {
        throw error;
      }
      console.log(documents);
    });
}

module.exports.createCollection = addCollectionToDataBase;
module.exports.createDocument = insertDocument;
module.exports.getDocuments = getDocumentsFromDataBase;
module.exports.insertDocuments = insertArrayOfDocuments;
module.exports.deleteDocument = deleteDocumentById;
module.exports.updateDocument = updateDocumentById;
module.exports.printByAlphabeticalOrder = printAuthorsByalphabeticalOrder;
module.exports.addToArray = addToArray;
module.exports.addArray = addArray;
module.exports.printAuthorsWithPosts = printAuthorsWithPosts;
module.exports.printAuthorsUnder40 = printAuthorsUnder40;
module.exports.printAuthorsOver40 = printAuthorsOver40;
module.exports.authotsBetween20To60 = printAuthorsOver20Under60;
module.exports.threeAuthorsBetween20To60 = printThreeAuthorsOver20Under60;
module.exports.printAuthorsWithoutId = printAuthorsWithoutId;
module.exports.printAuthorsNames = printAuthorsNames;
