import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (event) => {
        event.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }

        create(newPost)
        setPost({title: '', body: ''})
    }

    const clearFormFields = (event) => {
        event.preventDefault()
        setPost({title: '', body: ''})
    }

    return (
        <form>
            <MyInput
                type="text"
                placeholder="Posts name..."
                value={post.title}
                onChange={(e) => setPost({...post, title: e.target.value})}
            />

            <MyInput
                type="text"
                placeholder="Posts body..."
                value={post.body}
                onChange={(e) => setPost({...post, body: e.target.value})}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <MyButton onClick={addNewPost}>Create post</MyButton>
                <MyButton onClick={clearFormFields}>Clear</MyButton>
            </div>
        </form>
    );
};

export default PostForm;

// получение данных инпута через useRef

// const bodyInputRef = useRef() - инициализация useRef
// console.log(bodyInputRef.current.value) - проверка useRef
// <MyInput
//      ref={bodyInputRef}
//      type="text"
//      placeholder="Описание поста"
// />