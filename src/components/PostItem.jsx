import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const PostItem = ({id, title, body, deletePost}) => {
    const navigate = useNavigate();

    return (
        <div className="post">
            <div className="post__content">
                <strong>{id}. {title}</strong>
                <div>
                    {body}
                </div>
            </div>

            <div className="post__btns">
                <MyButton onClick={deletePost}>Delete</MyButton>
                <MyButton onClick={() => navigate(`/posts/${id}`)}>Open</MyButton>
            </div>

        </div>
    );
};

export default PostItem;