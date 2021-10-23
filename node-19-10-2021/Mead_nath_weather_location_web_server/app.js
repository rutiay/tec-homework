const axios = require("axios");
const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;
const API_KEY = "1423c5ee7b02e7fe48e2f3d33e53313e";
const filePath = path.join(__dirname, "public");

app.use(express.static(filePath));
app.get('/city',function(req,res){
    let cityName = req.query.city;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
    axios.get(url)
    .then(function (response) {
        if(response.status === 200){
            let longitude = response.data.coord.lon;
            let latitude = response.data.coord.lat;
            res.send(`<h1>${cityName}</h1><p>Longtitude: ${longitude}<br>Latitude: ${latitude}</p>`);
        }
    })
    .catch(function (error) {
        res.send("Error: You must provide a city name!");
    })
});

app.listen(PORT);