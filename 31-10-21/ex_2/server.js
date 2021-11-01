const mongoDB = require("mongodb");
const MongoClient = mongoDB.MongoClient;
const ObjectId = mongoDB.ObjectId;
const mongoURL = "mongodb://localhost:27017/";
const operation = process.argv[2];
const id = process.argv[3];
const name = process.argv[4];
const age = process.argv[5];
const posts = process.argv[6];
const obj = { name, age, posts };

MongoClient.connect(mongoURL, (error, connection) => {
  if (error) {
    throw error;
  }
  const blogDB = connection.db("blog");
  switch (operation) {
    case "add":
      blogDB.collection("authors").insertOne(obj, (error, doc) => {
        if (error) {
          throw error;
        }
        console.log(doc);
      });
      break;
    case "update":
        blogDB.collection("authors").updateOne({_id: ObjectId(id)}, {$set: obj}, (error, response) => {
            if(error){
                throw error;
            }
            console.log(response);
        })
      break;
    case "delete":
        blogDB.collection("authors").deleteOne({_id: ObjectId(id)}, (error, response) => {
            if(error){
                throw error;
            }
            console.log(response);
        })
      break;
    case "print one":
        blogDB.collection("authors").findOne({_id: ObjectId(id)}, (error, doc) => {
            if(error){
                throw error;
            }
            console.log(doc);
        })
      break;
    case "print all":
        blogDB.collection("authors").find({}).toArray((error, docs) => {
            if(error){
                throw error;
            }
            console.log(docs);
        })
      break;
    default:
        console.log("ERROR!");
      break;
  }
});
