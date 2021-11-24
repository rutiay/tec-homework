import { Component } from "react";
import './Register.css'

class Register extends Component{
    state = {firstName: "", lastName: "", email: "", password: "", confirmedPassword: ""};

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value}) 
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value}) 
    }

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value})
    }

    changePasswordHandler = (event) => {
        this.setState({password: event.target.value})
    }

    changeConfirmedPasswordHandler = (event) => {
        this.setState({confirmedPassword: event.target.value})
    }

    isValid = (event) => {
        event.preventDefault();
        if (this.state.firstName.length > 0 && this.state.lastName.length > 0 && this.state.email.length > 0 && this.state.password.length > 0){
            if(this.state.password === this.state.confirmedPassword){
                console.log(this.state.firstName, this.state.lastName, this.state.email);
            }
        }
    }

    render() {
        return(
            <div className="Register">
                <h1>Register</h1>
                <p>Create your account. It's free and only takes a minute.</p>
                <form onSubmit={this.isValid}>
                    <input type="text" placeholder="First Name" onChange={this.changeFirstNameHandler}></input>
                    <input type="text" placeholder="Last Name" onChange={this.changeLastNameHandler}></input>
                    <br/><br/>
                    <input type="email" placeholder="Email" onChange={this.changeEmailHandler}></input>
                    <br/><br/>
                    <input type="password" placeholder="Password" onChange={this.changePasswordHandler}></input>
                    <br/><br/>
                    <input type="password" placeholder="Confirm Password" onChange={this.changeConfirmedPasswordHandler}></input>
                    <br/><br/>
                    <input name="checkbox" type="checkbox"></input>
                    <label htmlFor="checkbox">I accept the Terms of Use & Privacy Policy.</label>
                    <br/><br/>
                    <button type="submit">Register Now</button>
                </form>
            </div>
        )
    }
}

export default Register;