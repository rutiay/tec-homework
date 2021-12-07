import { Component } from "react";
import CounterButton from "./CounterButton";
import CounterMessage from './CounterMessage'


class CounterSimple extends Component{
    state = {count: 0}
    add = () => this.setState({count: this.state.count + 1})
    render(){
        return(
            <>
                <h1>Counter Simple</h1>
                <CounterButton incrementFunction={this.add}/>
                <CounterMessage counter={this.state.count}/>
            </>
        )
    }
}

export default CounterSimple;