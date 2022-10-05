import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <Link to="/">
            <div style={{ display: 'block', textAlign: 'center', color: 'black'}}>
                <h1>404 ERROR</h1>
                <span>Page not found</span>
            </div>
        </Link>
    );
};

export default NotFoundPage;