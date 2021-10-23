const exp = require("constants");
const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;

const filePath = path.join(__dirname, "public");

app.use(express.static(filePath));

app.listen(PORT);