import {useEffect, useState} from 'react';

const Reddit = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        fetch("https://www.reddit.com/r/reactjs.json")
        .then(res => res.json())
        .then(data => setPosts(data.data.children))
        .catch(error => console.error(error));
    }

    useEffect(getPosts, []);
    const postElement = posts.map((post, index) => <li key={index}>{post.data.title}</li>)
    return (
        <div>
            <ul>
                {postElement}
            </ul>
        </div>
    );
};

export default Reddit;