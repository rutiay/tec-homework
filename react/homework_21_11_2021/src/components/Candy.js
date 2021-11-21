import React from "react";
import './Candy.css'

class Candy extends React.Component{
    constructor(){
        super();
    }

    render() {
        return (
            <div className="category">
                <img className="img" src={this.props.obj.link}/>
                <div>
                    <h1 className="title">{this.props.obj.title}</h1>
                    <p className="para">{this.props.obj.message}</p>
                </div>
            </div>
        )
    }
}

export default Candy;