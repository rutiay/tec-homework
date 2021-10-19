const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.listen(PORT);