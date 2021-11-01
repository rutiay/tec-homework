const mongoDB = require("mongodb");
const MongoClient = mongoDB.MongoClient;
const ObjectId = mongoDB.ObjectId;
const mongoURL = "mongodb://localhost:27017/";
const functions = require("./functions");

MongoClient.connect(mongoURL, (error, connection) => {
  if (error) {
    throw error;
  }
  const blog = connection.db("blog");
  // functions.getDocuments(blog, "authors");
  // functions.printByAlphabeticalOrder(blog);
  // functions.addToArray(blog,"617a6321de1ad6bd6cdab29e", "617a6288de1ad6bd6cdab29c");
  // functions.addArray(blog, "617a8fc9f5f382a2fc6502ae", ["617e80d4ddfa1e9f0af4d95d", "617e80d4ddfa1e9f0af4d95c"]);
  // functions.printAuthorsWithPosts(blog);
  // functions.printAuthorsUnder40(blog);
  // functions.printAuthorsOver40(blog);
  // functions.authotsBetween20To60(blog);
  // functions.threeAuthorsBetween20To60(blog);
  // functions.printAuthorsWithoutId(blog);
  // functions.printAuthorsNames(blog);
});
