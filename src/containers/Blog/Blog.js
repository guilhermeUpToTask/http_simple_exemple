import React, { Component } from 'react';
import { Route, RouterProvider } from 'react-router-dom';
import Posts from '../Posts/Posts';
import FullPost from '../FullPost/FullPost';
import NewPost from '../NewPost/NewPost';
import Navigation from '../../components/Navigation/Navigation';
import './Blog.css';
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const Blog = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<Navigation/>}>
            <Route index element={<Posts/>} />
            <Route path={'/new-post'} element={<NewPost/>} />
            <Route path='*' element={<h1>Not Found</h1>} />
        </Route>
    ));
    
    return (

        <div className="Blog">
            <RouterProvider router={router}/>
        </div>
    );
}

export default Blog;