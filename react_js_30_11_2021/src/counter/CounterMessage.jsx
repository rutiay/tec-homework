import { Component } from "react";

class CounterMessage extends Component{
    render(){
        return(
            <>
                <p>Count: {this.props.counter}</p>
            </>
        )
    }
}

export default CounterMessage;