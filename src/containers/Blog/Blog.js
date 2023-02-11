import React, { Suspense, useState } from 'react';
import { Navigate, Route,  RouterProvider } from 'react-router-dom';
import Posts from '../Posts/Posts';
import Navigation from '../../components/Navigation/Navigation';
import './Blog.css';
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

//import NewPost from '../NewPost/NewPost';
//import asyncComponent from '../../hoc/asyncComponent'; lazy loading with hoc
//const AsyncNewPost = asyncComponent(()=> import('../NewPost/NewPost'));

const NewPost= React.lazy(() => import('../NewPost/NewPost')); // lazy loading with react .lazy

const Blog = () => {
    const [auth, setAuth] = useState(true);


    const router = createBrowserRouter(createRoutesFromElements(
            <Route path='/' element={<Navigation />}>
                <Route index  element={<Navigate to="/posts" replace={true}/>}/>
                <Route path='posts/*' element={<Posts />}/>
                <Route path='new-post' element={
                    auth? <Suspense fallback={<h1>Loading..</h1>}><NewPost/></Suspense>
                    : <Navigate to='/posts' replace={true}/>} />
                <Route path='*' element={<h1>404 Not Found</h1>} />
            </Route>
    ));

    return (

        <div className="Blog">
            <RouterProvider router={router} />
        </div>
    );
}

export default Blog;