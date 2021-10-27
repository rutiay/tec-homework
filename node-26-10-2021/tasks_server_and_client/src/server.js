console.log("app is loading");

const express = require("express"),
  app = express(),
  PORT = 8080;

const path = require("path");
const filePath = path.join(__dirname, "..", "public");
app.use(express.static(filePath));
app.use(express.json());

const tasksArray = [];
let freeId = 0;

app.get("/tasks", (req, res) => {
  res.send(tasksArray);
});

app.post("/tasks", (req, res) => {
  const name = req.body.name;
  if (name) {
    const newTask = {
      name: name,
      completed: false,
      date: new Date(),
      id: freeId,
    };
    tasksArray.push(newTask);
    freeId++;
    res.sendStatus(201);
  } else {
    res.sendStatus(400);
  }
});

app.get("/tasks/:id", (req, res) => {
     const id = req.params.id;
     const result = tasksArray.find((task) => {return task.id == id})
     if(result){
         res.send(result)
     }
     else{
         res.sendStatus(404);
     }
});

app.delete("/tasks/:id", (req, res) => {
  const id = req.params.id;
  const index = tasksArray.findIndex((task) => {
    return task.id == id;
  });
  if (index == -1) {
    return res.sendStatus(404);
  }
  tasksArray.splice(index, 1);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`app is listening on port: ${PORT}`);
});
