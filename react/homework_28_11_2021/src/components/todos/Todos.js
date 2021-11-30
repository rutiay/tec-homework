import { Component } from "react";
import * as styles from './Todos.module.css'

class Todos extends Component{
    freeId = 1;

    state = {
        todoArray: [
            {title: "Clean house", status: true, id: 1},
            {title: "Do Homework", status: false, id: 2}
        ], 
        task: "", 
        status: false
    }

    changeHandler = (event) => {
        this.setState({task: event.target.value})
    }

    addTaskHandler = () => {
        let tempArray = this.state.todoArray;
        const newTask = {title: this.state.task, status: false, id: this.freeId++};
        tempArray.push(newTask);
        this.setState({todoArray: tempArray})
    }

    removeTaskHandler = (id) => {
        const tempArray = this.state.todoArray;
        const index = tempArray.findIndex(task => task.id === id)
        tempArray.splice(index, 1);
        this.setState({todoArray: tempArray})
    }

    updateStatus = (id) => {
        const tempArray = this.state.todoArray;
        const index = tempArray.findIndex(task => task.id === id)
        tempArray[index].status = true;
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
                    !task.status ? 
                        <div key={i}>
                            <h2>{task.title}</h2>
                            <input type="image" src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" alt="" onClick={() => this.removeTaskHandler(task.id)}/>
                            <input type="image" src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="" onClick={() => this.updateStatus(task.id)}/>
                        </div>
                        : ""
                    )
                })}
            </div>
        )
    }
}

export default Todos;