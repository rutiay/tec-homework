import { Component } from "react";

class Post extends Component {

  render() {
    return (
      <div>
        <h1>Title</h1>
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.body}</p>
      </div>
    );
  }
}

export default Post;
