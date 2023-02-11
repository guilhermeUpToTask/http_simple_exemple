import React, { Component, Fragment } from "react";
import Post from "../../components/Post/Post";
import axios from '../../axios';
import "./Posts.css";
import FullPost from "../FullPost/FullPost";
import withRouter from "../../hoc/withRouter";
import { Route, Routes } from "react-router-dom";



class Posts extends Component {
    state = {
        posts: [],
        postSelectedId: null,
    }


    componentDidMount() {

        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const UpdatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                })
                this.setState({ posts: UpdatedPosts });
            })
            .catch(error => console.log(error));

    }

    postSelectedHandler(id) {
        this.props.router.navigate('/posts/' + id);
    }

    render() {
        const posts = this.state.posts.map(post =>
            <Post
                key={post.id}
                title={post.title}
                author={post.author}
                clicked={() => this.postSelectedHandler(post.id)} />
        )

        return (
            <Fragment>
                <section className="Posts">
                    {posts}
                </section>
                <Routes>
                    <Route path=':id' element={<FullPost />} />
                </Routes>

            </Fragment>
        )
    }
}

export default withRouter(Posts);