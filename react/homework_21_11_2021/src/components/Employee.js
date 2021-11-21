import react from "react";
import './Employee.css'

class Employee extends react.Component{
    constructor(){
        super();
    }

    render() {
        return(
            <div className="div3">
                <img className="img3" src={this.props.obj.img}></img>
                <div>
                    <h1>{this.props.obj.name}</h1>
                    <p>{this.props.obj.roll}</p>
                </div>
            </div>
        )
    }
}

export default Employee;