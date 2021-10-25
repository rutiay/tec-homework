console.log("app is loading...");

const express = require("express"),
  app = express(),
  PORT = 8080;

const axios = require("axios");
const API_KEY = process.env.OPEN_WEATHER_API_KEY;

const path = require("path");
const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));

const hbs = require("hbs"),
  viewsPath = path.join(__dirname, "..", "templates", "views"),
  partialsPath = path.join(__dirname, "..", "templates", "partials");

app.set("view engine", "hbs");

app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
  res.render("index");
});

app.get('/city',function(req,res){
  let cityName = req.query.city;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
  axios.get(url)
  .then(function (response) {
      if(response.status === 200){
          let longitude = response.data.coord.lon;
          let latitude = response.data.coord.lat;
          res.render("info",{city : cityName, Longtitude: longitude, Latitude : latitude});
      }
  })
  .catch(function () {
      res.render("error.hbs");
  })
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/help", (req, res) => {
  res.render("help");
});

app.listen(PORT, () => {
  console.log(`app is listening on port: ${PORT}`);
});

