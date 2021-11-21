import React from "react";
import './Food.css'

class Food extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="div2">
                <div>
                    <h1>{this.props.obj.title}</h1>
                    <p>{this.props.obj.description}</p>
                </div>
                <img className="img2" src={this.props.obj.img}></img>
            </div>
        )
    }
}

export default Food;