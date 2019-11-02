import React, {useState, useEffect} from "react";
import axios from "axios";


export default function () {
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

    const {post} = usePost(1);
    return (
        <>
            <hr/>
            {post.title}
        </>
    );
}
