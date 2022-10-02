import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = ({id, title, body, deletePost}) => {
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
            </div>
        </div>
    );
};

export default PostItem;