import { Component } from "react";
import { Redirect } from "react-router-dom";

class Persons extends Component {
  state = {
    redirectToAddPerson: false,
    redirectToDetails: false,
  };

  render() {
    if (this.state.redirectToAddPerson) {
      return <Redirect to="/AddPerson" />;
    }

    if (this.state.redirectToDetails) {
      return <Redirect to="/Details" />;
    }

    const personElement = this.props.persons.map((person, index) => (
      <li key={index}>
        {person.name}, {person.age}{" "}
        <button
          onClick={() => {
            this.props.setCurrentPerson(person);
            this.setState({ redirectToDetails: true });
          }}
        >
          Details
        </button>
      </li>
    ));
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ redirectToAddPerson: true });
          }}
        >
          Add Person
        </button>
        {personElement}
      </div>
    );
  }
}

export default Persons;
