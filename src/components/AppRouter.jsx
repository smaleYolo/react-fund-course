import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import NotFoundPage from "../Pages/NotFoundPage";
import {publicRoutes, privateRoutes} from "../router/routes";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if(isLoading){
        return <Loader/>
    }

    return (
        <Routes>
            {
                isAuth ? (
                    privateRoutes.map((route) =>
                        <Route path={route.path} element={<route.element/>} key={route.path}/>
                    )
                ) : (
                    publicRoutes.map((route) =>
                        <Route path={route.path} element={<route.element/>} key={route.path}/>
                    )
                )
            }

            <Route path="*" element={<Navigate to="/404" replace={<NotFoundPage/>}/>}/>
        </Routes>
    );
};

export default AppRouter;