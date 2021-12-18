import { Component } from "react";
import { Redirect } from "react-router-dom";

class Books extends Component {
  state = {
    redirectToAddBook: false,
    redirectToDetails: false,
  };
  render() {
    if (this.state.redirectToAddBook) {
      return <Redirect to="/AddBook" />;
    }

    if (this.state.redirectToDetails) {
      return <Redirect to="/BookDetails" />;
    }

    const booksElement = this.props.books.map((book, index) => (
      <tbody key={index}>
        <tr>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>
            <button
              onClick={() => {
                this.setState({ redirectToDetails: true });
                this.props.getDetails(book);
              }}
            >
              Details
            </button>
          </td>
        </tr>
      </tbody>
    ));


    return (
      <div>
        <button onClick={() => {
            this.setState({redirectToAddBook: true});
        }}>Add Book</button>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
            </tr>
          </thead>
          {booksElement}
        </table>
      </div>
    );
  }
}

export default Books;
