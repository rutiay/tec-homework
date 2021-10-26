console.log("app is loading");

const express = require("express");
const app = express();
const PORT = 8080;

const fs = require("fs");
const fileName = "comments.json";

app.use(express.json());
const comments = JSON.parse(fs.readFileSync(fileName, "utf8"));
let idCounter = 0;

app.get("/comments", (req, res) => {
  res.send(fs.readFileSync(fileName, "utf8"));
});

app.post("/comments", (req, res) => {
  const email = req.body.email;
  const addressSign = "@";
  const firstIndex = email.indexOf(addressSign);
  const lastIndex = email.lastIndexOf(addressSign);
  if (firstIndex != 0 && firstIndex == lastIndex && firstIndex != -1) {
    const name = req.body.name;
    const message = req.body.message;
    if (name && message) {
      const comment = {
        id: idCounter,
        name: name,
        email: email,
        message: message,
      };
      comments.push(comment);
      fs.writeFileSync(fileName, JSON.stringify(comments));
      idCounter++;
      return res.sendStatus(201);
    }
    res.sendStatus(400);
  } else {
    res.sendStatus(400);
  }
});

app.get("/comments/:id", (req, res) => {
  const id = req.params.id;
  const result =comments.find((comment) => {
    return comment.id == id;
  });
  if (result == undefined) {
    return res.sendStatus(404);
  }
  res.send(result);
});

app.delete("/comments/:id", (req, res) => {
  const id = req.params.id;
  const index = comments.findIndex((comment) => {
    return comment.id == id;
  });
  if (index == -1) {
    return res.sendStatus(404);
  }
  comments.splice(index, 1);
  fs.writeFileSync(fileName, JSON.stringify(comments));
  res.sendStatus(200);
});

app.patch("/comments/:id", (req, res) => {
  const id = req.params.id;
  const foundComment = comments.find((comment) => {
    return comment.id == id;
  });
  if (foundComment == undefined) {
    return res.sendStatus(404);
  }
  const email = req.body.email;
  const addressSign = "@";
  const firstIndex = email.indexOf(addressSign);
  const lastIndex = email.lastIndexOf(addressSign);
  if (firstIndex != 0 && firstIndex == lastIndex && firstIndex != -1) {
    const name = req.body.name;
    const message = req.body.message;
    if (name && message) {
      foundComment.name = name;
      foundComment.email = email;
      foundComment.message = message;
      fs.writeFileSync(fileName, JSON.stringify(comments));
      return res.sendStatus(200);
    }
    res.sendStatus(400);
  } else {
    res.sendStatus(400);
  }
});

app.listen(PORT, () => {
  console.log(`app is listening on port: ${PORT}`);
});
