import React, { Component } from 'react';
import axios from 'axios';
import './NewPost.css';
import withRouter from '../../hoc/withRouter';
//import { Navigate } from 'react-router-dom';


class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false,
    }
    
    postDataHandler = () => {
        const post = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        }

        axios.post('/posts', post)
        .then(response => {
            //this.setState({submitted: true})
            this.props.router.navigate('/posts',{replace:true}); // other way to navigate using hooks
            console.log(response)})
    }


    render () {
        //const redirect = this.state.submitted ? <Navigate to="/posts" replace/> : null; render a navigate component

        return (
            <div className="NewPost">

                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default withRouter(NewPost);