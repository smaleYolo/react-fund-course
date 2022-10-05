import NotFoundPage from "../Pages/NotFoundPage";
import Posts from "../Pages/Posts";
import PostIdPage from "../Pages/PostIdPage";
import About from "../Pages/About";
import Login from "../Pages/Login";


export const privateRoutes = [
    {path: '/about', element: About, exact: true},
    {path: '/404', element: NotFoundPage, exact: true},
    {path: '/posts', element: Posts, exact: true},
    {path: '/posts/:id', element: PostIdPage, exact: true},
    {path: '/', element: Posts, exact: true},
]

export const publicRoutes = [
    {path: '/login', element: Login, exact: true},
    {path: '/about', element: About, exact: true},
    {path: '/404', element: NotFoundPage, exact: true},
    {path: '/', element: Login, exact: true},
]