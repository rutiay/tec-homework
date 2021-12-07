import { Component } from "react";
import * as styles from "./ChooseEven.module.css";

class ChooseEven extends Component {
  state = {
    numbers: [],
    message: "",
    time: 0,
    visibility: "hidden",
    isStartClicked: false,
  };
  evenNumberCounter = 0;
  myCounter = 0;
  setIntervalId;
  timeResultArray = [];

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isStartClicked !== this.state.isStartClicked) {
      const temp = [...this.state.numbers];
      for (let index = 0; index < 10; index++) {
        temp[index] = Math.floor(Math.random() * 20 + 1);
        if (temp[index] % 2 === 0) {
          this.evenNumberCounter++;
        }
      }
      if (this.evenNumberCounter !== 0 && this.state.isStartClicked) {
        this.setState({ numbers: temp });
        this.setIntervalId = setInterval(() => {
          this.setState({ time: this.state.time + 1 });
        }, 1000);
      } else {
        this.setState({
          message: "Game not started, Please press the start button.",
        });
      }
    }
  }

  startGame = () => {
    this.setState({ isStartClicked: true });
  };

  clickHandler = (event) => {
    event.target.disabled = true;
    const chosenNumber = event.target.value;
    if (chosenNumber % 2 === 0) {
      this.myCounter++;
      if (this.myCounter === this.evenNumberCounter) {
        this.setState({ message: "Game Over" });
        clearInterval(this.setIntervalId);
        this.timeResultArray = JSON.parse(localStorage.getItem("time")) || [];
        this.timeResultArray.push(this.state.time);
        localStorage.setItem("time", JSON.stringify(this.timeResultArray));
      }
    } else {
      if (this.myCounter !== this.evenNumberCounter) {
        this.setState({ time: this.state.time + 5 });
      }
    }
  };

  showTime = () => {
    this.timeResultArray = JSON.parse(localStorage.getItem("time")) || [];
    this.setState({ visibility: "visible" });
  };

  render() {
    return (
      <div className={styles.container}>
        <button onClick={this.startGame}>Start</button>
        <p>Timer: {this.state.time}</p>
        <div>
          {this.state.numbers.map((number, i) => {
            return (
              <button
                key={i}
                disabled={false}
                value={number}
                onClick={this.clickHandler}
              >
                {number}
              </button>
            );
          })}
        </div>
        <p>{this.state.message}</p>
        <button onClick={this.showTime}>Show Time History</button>
        <ul style={{ visibility: this.state.visibility }}>
          {this.timeResultArray.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default ChooseEven;
