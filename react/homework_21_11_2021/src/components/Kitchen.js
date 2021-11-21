import React from "react";
import './Kitchen.css';

class Kitchen extends React.Component{
    constructor(){
        super();
    }

    render() {
        return(
            <div className="div1">
                <img className="img1" src={this.props.obj.img}></img>
                <h1>{this.props.obj.name}</h1>
                <p>{this.props.obj.roll}</p>
            </div>
        )
    }
}

export default Kitchen;