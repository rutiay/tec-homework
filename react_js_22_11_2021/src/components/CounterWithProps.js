import { Component } from "react";

class CounterWithProps extends Component {
  state = { counter: this.props.counter };

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

export default CounterWithProps;