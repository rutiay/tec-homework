import { Component } from "react";
import * as styles from "./PostWithEdit.module.css";

class PostWithEdit extends Component {
  state = {
    postsArray: [],
    userId: null,
    title: "",
    body: "",
    postToEdit: { id: null, userId: null, title: "", body: "" },
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ postsArray: data }))
      .catch((error) => console.error(error));
  }

  editHandler = (post) => {
    this.setState({
      postToEdit: post,
      userId: post.userId,
      title: post.title,
      body: post.body,
    });
  };

  removeHandler = (id) => {
    const temp = this.state.postsArray;
    const index = temp.findIndex((post) => post.id === id);
    temp.splice(index, 1);
    this.setState({ postsArray: temp });
  };

  changeUserIdInputHandler = (event) => {
    this.setState({ userId: event.target.value });
  };

  changeTitleInputHandler = (event) => {
    this.setState({ title: event.target.value });
  };

  changeBodyInputHandler = (event) => {
    this.setState({ body: event.target.value });
  };

  updateHandler = (event) => {
      event.preventDefault();
      const temp = this.state.postsArray;
      const index = temp.findIndex(post => post.id === this.state.postToEdit.id);
      temp[index].userId = this.state.userId;
      temp[index].title = this.state.title;
      temp[index].body = this.state.body;
      this.setState({postsArray: temp});
  }

  render() {
    return (
      <div className={styles.container}>
        <h1>Update form</h1>
        <form onSubmit={this.updateHandler}>
          User Id:{" "}
          <input
            type="number"
            value={this.state.userId}
            onChange={this.changeUserIdInputHandler}
            required
          ></input>
          <br />
          <br />
          Title:{" "}
          <input
            type="text"
            value={this.state.title}
            onChange={this.changeTitleInputHandler}
            required
          ></input>
          <br />
          <br />
          Body:{" "}
          <input
            type="text"
            value={this.state.body}
            onChange={this.changeBodyInputHandler}
            required
          ></input>
          <br />
          <br />
          <button>Update</button>
          <br />
          <br />
        </form>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>User Id</th>
              <th>title</th>
              <th>body</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {this.state.postsArray.map((post) => {
            return (
              <tbody key={post.id}>
                <tr>
                  <td>{post.id}</td>
                  <td>{post.userId}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  <td>
                    <input
                      type="image"
                      src="https://cdn-icons.flaticon.com/png/512/5129/premium/5129694.png?token=exp=1638200248~hmac=43446f7c9edab42db6bb78c6fa88951f"
                      alt=""
                      onClick={() => this.editHandler(post)}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="image"
                      src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                      alt=""
                      onClick={() => this.removeHandler(post.id)}
                    ></input>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}

export default PostWithEdit;
