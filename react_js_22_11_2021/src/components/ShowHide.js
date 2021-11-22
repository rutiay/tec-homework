import { Component } from "react";

class ShowHide extends Component {
  state = { visibility: "visible" };

  visibilityHendler = () => {
    this.setState({
      visibility: this.state.visibility === "visible" ? "hidden" : "visible",
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.visibilityHendler}>Click</button>
        <p style={{ visibility: this.state.visibility }}>{this.props.text}</p>
      </div>
    );
  }
}

export default ShowHide;
