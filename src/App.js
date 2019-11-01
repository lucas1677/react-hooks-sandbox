import React, {useEffect, useState} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

    const [count, setCount] = useState(0);


    useEffect(() => {
        window.document.title = "hello lucas!" + count;
    }, [count]);


    function usePost(postId) {
        const [post, setPost] = useState({});

        useEffect(() => {
            async function fetchPost() {
                let response = await axios("http://127.0.0.1:3000/posts/" + postId);
                setPost(response.data);
            }

            fetchPost();
        }, [postId]);

        return {post}
    }

    function increaseCount() {
        setCount(count + 1);
    }

    const {post} = usePost(1);

    return (
        <div className="App">
            <header className="App-header">
                <hr/>
                {count}
                <hr/>
                {post.title}
                <hr/>
                <img src={logo} onClick={increaseCount} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
