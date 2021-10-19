const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "about.html"))   
})

app.get('/courses', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "courses.html"))
})

app.get('/mentoring', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "mentoring.html"))
})

app.get('/testimonials', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "testimonials.html"))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "contact.html"))
})

app.get('/events', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "events.html"))
})

app.listen(PORT);