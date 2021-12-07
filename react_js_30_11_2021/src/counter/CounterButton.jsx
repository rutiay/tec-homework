import { Component } from "react";

class CounterButton extends Component{

    render(){
        return(
            <>
                <button onClick={this.props.incrementFunction}>Increment</button>
            </>
        )
    }
}

export default CounterButton;