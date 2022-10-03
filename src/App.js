import React from "react";
import './styles/App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Posts from "./Pages/Posts";
import About from "./Pages/About";

const logo = 'https://igorzuevich.com/wp-content/uploads/2015/03/Twitter.png'

function App() {
    return (
        <BrowserRouter>
                <div className="navbar">
                    <div className="navbar__links">
                        <Link to="/posts">Posts </Link>
                        <Link to="/about">About</Link>
                    </div>
                </div>
                <Routes>
                    <Route path="/posts" element={<Posts/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
        </BrowserRouter>
    )
}


export default App;



