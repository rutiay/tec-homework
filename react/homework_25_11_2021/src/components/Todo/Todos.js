import { Component } from "react";
import * as styles from './Todos.module.css'

class Todos extends Component{
    state = {
        todoArray: [
            {title: "Clean house", status: <select>Status
                <option value={true}>Complete</option>
                <option value={false}>Incomplete</option>
            </select>},
            {title: "Do Homework", status:  <select>Status
                <option value={true}>Complete</option>
                <option value={false} selected>Incomplete</option>
            </select>}
        ], 
        task: "", 
        status: false
    }

    changeHandler = (event) => {
        this.setState({task: event.target.value})
    }

    addTaskHandler = () => {
        let tempArray = this.state.todoArray;
        const newTask = {title: this.state.task, status:  <select>Status
            <option value={true}>Complete</option>
            <option value={false} selected>Incomplete</option>
        </select>};
        tempArray.push(newTask);
        this.setState({todoArray: tempArray})
    }

    RemoveTaskHandler = (event) => {
        let tempArray = this.state.todoArray;
        tempArray.splice(event.target.id);
        this.setState({todoArray: tempArray})
    }

    render() {
        return(
            <div className={styles.task}>
                <div>
                    <input onChange={this.changeHandler} type="text" placeholder="New Task..."></input>
                    <button onClick={this.addTaskHandler}>Add new task</button>
                </div>
                <h1>To Do List</h1>
                {this.state.todoArray.map((task, i) => {
                    return(
                        <div key={i}>
                            <p>{task.title}</p>
                            <p>{task.status}</p>
                            <button id={i} onClick={this.RemoveTaskHandler}>Remove</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Todos;