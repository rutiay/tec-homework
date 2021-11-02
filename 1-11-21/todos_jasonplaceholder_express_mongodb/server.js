console.log("app is loading...");

const express = require("express"),
  app = express(),
  PORT = 8080;

const functions = require("./functions");

app.use(express.json());

app.get("/todos", (req, res) => {
  functions.getTodos(req, res);
});

app.get("/todos/:id", (req, res) => {
  functions.getTodo(req, res);
})

app.post("/todos", (req, res) => {
  functions.addToDo(req, res);
});

app.delete("/todos/:id", (req, res) => {
  functions.deleteTodoById(req, res);
})

app.patch("/todos/:id", (req, res) => {
  functions.updateById(req, res);
})

app.listen(PORT, () => {
  console.log(`app is listening on port: ${PORT}`);
});
