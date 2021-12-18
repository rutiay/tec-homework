import { Component } from "react";
import { Redirect } from "react-router-dom";

class AddBook extends Component {
  state = {
    title: "",
    author: "",
    pages: "",
    img: "",
    synopsis: "",
    isDisabled: true,
    redirectToBooks: false,
  };

  formHandler = (event) => {
    event.preventDefault();
    const newBook = {
      title: this.state.title,
      author: this.state.author,
      pages: this.state.pages,
      img: this.state.img,
      synopsis: this.state.synopsis,
    };
    this.props.addBook(newBook);
    this.setState({ redirectToBooks: true });
  };

  checkInput = () => {
      if(this.state.title && this.state.author && this.state.pages && this.state.img && this.state.synopsis){
          this.setState({isDisabled: false})
      }
  }

  render() {
    if (this.state.redirectToBooks) {
      return <Redirect to="/Books" />;
    }

    return (
      <div>
        <form onSubmit={(event) => this.formHandler(event)}>
          Title:{" "}
          <input
            onChange={(event) => {
              this.checkInput();
              this.setState({ title: event.target.value });
            }}
            type="text"
          />
          <br />
          Author:{" "}
          <input
            onChange={(event) => {
              this.checkInput();
              this.setState({ author: event.target.value });
            }}
            type="text"
          />
          <br />
          Pages:{" "}
          <input
            min={0}
            onChange={(event) => {
              this.checkInput();
              this.setState({ pages: event.target.value });
            }}
            type="number"
          />
          <br />
          Cover:{" "}
          <input
            onChange={(event) => {
              this.checkInput();
              this.setState({ img: event.target.value });
            }}
            type="text"
          />
          <br />
          Synopsis:{" "}
          <textarea
            rows={5}
            onChange={(event) => {
              this.checkInput();
              this.setState({ synopsis: event.target.value });
            }}
          ></textarea>
          <br />
          <input
            type="submit"
            value="Add New Book"
            disabled={this.state.isDisabled}
          />
        </form>
      </div>
    );
  }
}

export default AddBook;
