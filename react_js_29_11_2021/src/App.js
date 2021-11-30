import { Component } from "react";
import "./App.css";
import Post from "./components/post/Post";
import PostWithEdit from "./components/postTable/PostWithEdit";

class App extends Component {
  state = {
    id: 1,
  };

  render() {
    return (
      <div className="App">
        <input
        type="number"
          defaultValue={this.state.id}
          onChange={(event) => {
            if(event.target.value < 101 && event.target.value > 0){
              this.setState({ id: event.target.value});
            }
          }}
        ></input>
        <Post postId={this.state.id} />
        <PostWithEdit />
      </div>
    );
  }
}

export default App;
