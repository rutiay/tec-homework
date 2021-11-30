import { Component } from "react";

class Post extends Component{
    state = {
        post : {}
    }

    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.postId}`)
        .then(response => response.json())
        .then(data => this.setState({post: data}))
        .catch(error => console.log(error))
    }

    componentDidUpdate(prevProps) {
        if (this.props.postId !== prevProps.postId) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.postId}`)
            .then(response => response.json())
            .then(data => this.setState({post: data}))
            .catch(error => console.log(error))
        }
      }

    render(){
        return(
            <div>
                <p>id: {this.state.post.id}, userId: {this.state.post.userId}, title: {this.state.post.title}</p>
            </div>
        )
    }
}

export default Post;