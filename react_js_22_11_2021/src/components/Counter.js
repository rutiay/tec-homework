import { Component } from "react";

class Counter extends Component {
  state = { counter: 0 };

  incrementHandler = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementHandler}>Increment</button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default Counter;
