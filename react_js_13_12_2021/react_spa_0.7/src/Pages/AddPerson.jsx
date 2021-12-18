import { Component } from 'react';
import { Redirect } from 'react-router-dom';

class AddPerson extends Component {
    state = {name: "", age: 0, biography: "", redirectToPersons: false}

    formHandler = (event) => {
        event.preventDefault();
        const person = {name: this.state.name, age: this.state.age, biography: this.state.biography}
        this.props.addPerson(person);
        this.setState({redirectToPersons: true})
    }

    render() {
        if(this.state.redirectToPersons){
            return <Redirect to="/Persons"/>
        }

        return (
            <div>
                <form onSubmit={(event) => this.formHandler(event)}>
                    Name<input type="text" onChange={(event) => {
                        this.setState({name: event.target.value})
                    }}></input>
                    Age<input type="number" onChange={(event) => {
                        this.setState({age: event.target.value})
                    }}></input>
                    Biography<textarea onChange={(event) => {
                        this.setState({biography: event.target.value})
                    }}></textarea>
                    <input type="submit" value="Add Person"></input>
                </form>
            </div>
        );
    }
}

export default AddPerson;