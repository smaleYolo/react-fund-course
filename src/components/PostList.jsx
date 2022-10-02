import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {


    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{posts.length > 0 ? title : 'There are no posts here!'}</h1>
            <TransitionGroup>
                {
                    posts
                        // .filter((post) => (post.title + post.body).toLowerCase().includes(filter.toLowerCase()))
                        .map((post) => (
                            <CSSTransition
                                key={post.id}
                                timeout={500}
                                classNames="post"
                            >
                                <PostItem {...post} deletePost={() => remove(post.id)}/>
                            </CSSTransition>
                        ))
                }
            </TransitionGroup>
        </div>
    );
};

export default PostList;