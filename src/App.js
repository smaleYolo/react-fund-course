import React, {useEffect, useState} from "react";
import './styles/App.css';

import PostService from "./API/PostService";

import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/MyModal/MyModal";
import Loader from "./components/UI/Loader/Loader";

import {useFetching} from "./hooks/useFetching";
import {usePosts} from "./hooks/usePosts";
import {getPageCount, getPagesArray} from "./utils/pages";
import {Pagination} from "@mui/material";

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    let pagesArray = getPagesArray(totalPages)

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })



    useEffect(() => {
        fetchPosts()
    },[page])



    const removePost = (id) => {
        setPosts(posts.filter((item) => item.id !== id))
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className="App">
            <MyButton
                style={{ marginTop: '10px'}}
                onClick={() => setModal(true)}
            >
                Create post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {
                postError &&
                    <h1>Произошла ошбика ${postError}</h1>
            }
            {isPostsLoading ? (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 70}}>
                    <Loader/>
                </div>
            ) : (
                <PostList
                    remove={removePost}
                    posts={sortedAndSearchedPosts}
                    title='Posts list'
                />
            )}

            <div className="page__wrapper">
                {
                    pagesArray.map(p => (
                        <span
                            key={p}
                            className={page === p ? 'page page__current' : 'page'}
                            onClick={() => changePage(p)}
                        >
                            {p}</span>
                    ))
                }
            </div>
        </div>
    );
}

export default App;

// filter={searchQuery}

//end 1.12.05 - Поиск и фильтрация

//2.09 - pagination


