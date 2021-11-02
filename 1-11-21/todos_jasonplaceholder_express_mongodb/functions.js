const mongoDB = require("mongodb"),
  MongoCleint = mongoDB.MongoClient,
  mongoURL = "mongodb://localhost:27017/";

const dbName = "jsonplaceholder";
const collectionName = "todos";

let idCounter = 1;

function getTodos(req, res) {
  MongoCleint.connect(mongoURL, (error, connection) => {
    if (error) {
      throw error;
    }
    const jsonplaceholderDB = connection.db(dbName);
    jsonplaceholderDB
      .collection(collectionName)
      .find()
      .toArray((err, docs) => {
        if (err) {
          res.sendStatus(404);
        }
        res.send(docs);
        connection.close();
      });
  });
}

function getTodo(req, res) {
  MongoCleint.connect(mongoURL, (error, connection) => {
    if (error) {
      throw error;
    }
    const jsonplaceholderDB = connection.db(dbName);
    const id = req.params.id;
    jsonplaceholderDB
      .collection(collectionName)
      .findOne({ id: Number(id) }, (err, todo) => {
        if (err) {
          res.sendStatus(404);
        }
        res.send(todo);
        connection.close();
      });
  });
}

function addToDo(req, res) {
  MongoCleint.connect(mongoURL, (error, connection) => {
    if (error) {
      throw error;
    }
    const jsonplaceholderDB = connection.db(dbName);
    const id = idCounter;
    const userId = req.body.userId;
    const title = req.body.title;
    const completed = req.body.completed;
    if (userId && title && completed !== "") {
      const obj = { userId, id, title, completed };
      jsonplaceholderDB
        .collection(collectionName)
        .insertOne(obj, (err, response) => {
          if (err) {
            res.sendStatus(404);
          }
          res.sendStatus(201);
          idCounter++;
          connection.close();
        });
    } else {
      res.sendStatus(400);
    }
  });
}

function deleteTodoById(req, res) {
  MongoCleint.connect(mongoURL, (error, connection) => {
    if (error) {
      throw error;
    }
    const jsonplaceholderDB = connection.db(dbName);
    const id = req.params.id;
    jsonplaceholderDB
      .collection(collectionName)
      .deleteOne({ id: Number(id) }, (err, response) => {
        if (err) {
          res.sendStatus(404);
        }
        res.send(response);
        connection.close();
      });
  });
}

function updateById(req, res) {
  MongoCleint.connect(mongoURL, (error, connection) => {
    if (error) {
      throw error;
    }
    const jsonplaceholderDB = connection.db(dbName);
    const id = req.params.id;
    const userId = req.body.userId;
    const title = req.body.title;
    const completed = req.body.completed;
    let myObj = {};
    if (userId) {
      myObj.userId = userId;
    }
    if (title) {
      myObj.title = title;
    }
    if (completed !== "") {
      myObj.completed = completed;
    }
    jsonplaceholderDB
      .collection(collectionName)
      .updateOne({ id: Number(id) }, { $set: myObj }, (err, response) => {
        if (err) {
          res.sendStatus(400);
        }
        res.send(response);
        connection.close();
      });
  });
}

module.exports = { getTodos, addToDo, deleteTodoById, updateById, getTodo };
