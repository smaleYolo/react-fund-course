import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])

    const [fetchById, isLoading, error] = useFetching(async() => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })

    const [fetchComments, isComLoading, comError] = useFetching(async() => {
        const response = await PostService.getCommentsById(params.id)
        setComments(response.data)
    })


    useEffect(() => {
        fetchById(params.id)
        fetchComments(params.id)
    },[])


    return (
        <div>
            <h1>Вы попали на страницу поста: {params.id}</h1>
            {isLoading
                ? (<Loader/>)
                : (<div>{post.id}. {post.title}</div>)
            }
            <div>
                <h1>Comments</h1>
                {
                    comments.map((item, index) => (
                        <div key={item.id}>
                            <h3>{index + 1}. {item.name}</h3>
                            <h5>{item.email}</h5>
                            <p>{item.body}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PostIdPage;