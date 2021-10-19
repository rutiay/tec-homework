const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.get("/about.html", (req,res) => {
    res.sendFile(path.join(__dirname, "public", "about.html"));
})

app.listen(PORT);