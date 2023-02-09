import React, { Component } from "react";
import Post from "../../components/Post/Post";
import axios from '../../axios';
import "./Posts.css"


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
        this.setState({ postSelectedId: id })
    }

    render() {
        const posts = this.state.posts.map(post =>
            <Post key={post.id}
                title={post.title}
                author={post.author}
                clicked={() => this.postSelectedHandler(post.id)} />
        )

        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default Posts