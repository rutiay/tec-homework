import { Component } from "react";
import Post from "./Post";

class Posts extends Component{

    state = {postsArray : []}

    getPosts = () => {
        fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
        .then((response) => {return (response.json())})
        .then(data => this.setState({postsArray : data}))
    }

    render(){
        return(
            <div>
                <button onClick={this.getPosts}>Click</button>
                {this.state.postsArray.map((post) => {
                    return(
                        <Post key={post.id} post={post}/>
                    )
                })}
            </div>
        )
    }
}

export default Posts;