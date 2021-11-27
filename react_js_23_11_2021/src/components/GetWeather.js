import { Component } from "react";
import "./GetWeather.css";
import axios from "axios";

class GetWeather extends Component {
  state = { city: "", data: "", styleColor: "", styleBackgruond: "" };

  changeCityHandler = (event) => {
    this.setState({ city: event.target.value });
  };
  getWeather = () => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=1423c5ee7b02e7fe48e2f3d33e53313e`
      )
      .then((response) => {
        this.setState({
          data: `The current temperature is: ${(response.data.main.temp - 273.15).toFixed()}°C.
          The highest temperature is: ${(response.data.main.temp_max - 273.15).toFixed()}°C, and the lowest is: ${(response.data.main.temp_min - 273.15).toFixed()}°C`,
          styleColor: "green",
          styleBackgruond: "#c2f6c2",
        });
      })
      .catch(() => {
        this.setState({
          data: "That city could not be found.",
          styleColor: "red",
          styleBackgruond: "#F8B6E7",
        });
      });
  };

  render() {
    return (
      <div className="GetWeather">
        <br />
        <br />
        <h1>What's The Weather?</h1>
        <p>Enter the name of a city.</p>
        <br />
        <input
          onChange={this.changeCityHandler}
          type="text"
          placeholder="Eg. London, Tokyo"
        ></input>
        <br />
        <br />
        <br />
        <button onClick={this.getWeather}>Submit</button>
        <p
          style={{
            color: this.state.styleColor,
            background: this.state.styleBackgruond,
          }}
        >
          {this.state.data}
        </p>
      </div>
    );
  }
}

export default GetWeather;
