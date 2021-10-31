const express = require("express"),
  app = express(),
  PORT = 8080;

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/blog";

//   MongoClient.connect(url, function(err, client) {
//     if (err) throw err;
//     var blog = client.db("blog");
//     blog.collection("authors").find({}).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//     blog.collection("posts").find({}).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         client.close();
//     });
// });

function printDataFromCollection(collection) {
  MongoClient.connect(url, function (err, client) {
    if (err) throw err;
    var blog = client.db("blog");
    blog.collection(collection).find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        client.close();
      });
  });
}

printDataFromCollection("authors");
printDataFromCollection("posts");

app.listen(PORT, () => {
  console.log(`app is listening to port: ${PORT}`);
});
