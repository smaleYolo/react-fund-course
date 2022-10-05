import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context";

const logo = 'https://igorzuevich.com/wp-content/uploads/2015/03/Twitter.png'

const Navbar = () => {
    const {setIsAuth, isAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <div>
                <Link to="/"><img src={logo} alt="logo" height={50} width={50}/></Link>
            </div>
            <div className="navbar__links">
                {isAuth && <Link to="/posts" style={{marginRight: 5}}>Posts</Link>}
                <Link to="/about" style={{ marginRight: 5}}>About</Link>
                {isAuth && <Link to="/" onClick={logout} style={{marginRight: 5}}>Exit</Link>}
            </div>
        </div>
    );
};

export default Navbar;