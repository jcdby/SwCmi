/**
 * Created by fwavresky on 6/9/2016.
 */

import React from 'react';
import {ListGroupItem, Panel, Button, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap'
import {Link} from 'react-router';

class ForumTopic extends React.Component {

    render() {
        return (
            <ListGroupItem  key={this.props.topicProp.id}>
                <Link to={'/forum'}>
                    <em>Go back to the Forum list</em>
                </Link>
                {this.createTopic(this.props.topicProp)}
            </ListGroupItem>
        );
    }

    createTopic(topic) {
        console.log('topic : ' + JSON.stringify(topic));
        return (
            <span>
                <span className="topic-name" >
                    <h2>
                        <strong > {topic.name} </strong>
                    </h2>
                    <span className="topic-description">
                        <em>{topic.description} </em>
                    </span>
                </span>

                <span className="topic-posts" > {topic.posts} posts. </span>
                <span className="topic-active" >
                    <i>Last post: {topic.active}</i>
                </span>

                <div id="posts-list">
                    {(topic.posts_list !== undefined)
                        ? topic.posts_list.map((post) => {
                        return this.createPost(post);
                    })
                        : <div>No posts on this topic. Be the first !</div>  }
                </div>


                <form>
                    <FormGroup
                        controlId="add-post-author"
                        validationState={this.getValidationState_author_name()}>
                        <ControlLabel>Your name</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.props.author_name}
                            placeholder="Enter your name"
                            onChange={this.handleChangeName}/>
                        <FormControl.Feedback />
                        <HelpBlock>Name should be at least 2 characters</HelpBlock>
                    </FormGroup>
                    <FormGroup
                        controlId="add-post-title"
                        validationState={this.getValidationState_title()}>
                        <ControlLabel>Title</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.props.title}
                            placeholder="Enter the title"
                            onChange={this.handleChangeTitle}/>
                        <FormControl.Feedback />
                        <HelpBlock>Title should be between 5 and 20 characters</HelpBlock>
                    </FormGroup>
                    <FormGroup
                        controlId="add-post-text"
                        validationState={this.getValidationState_post_text()} >
                        <ControlLabel>Your post</ControlLabel>
                        <FormControl
                            componentClass="textarea"
                            value={this.props.post_text}
                            placeholder="Type your post"
                            onChange={this.handleChangePost}/>
                        <FormControl.Feedback />
                        <HelpBlock>The post should be more than 20 characters</HelpBlock>
                    </FormGroup>
                    <Button  onClick={this.props.addPostProp}>Add Post</Button>
                </form>
            </span>
        )
    }


    createPost(post) {
        console.log('post : ' + JSON.stringify(post));
        return (
            <Panel header={post.title} eventKey={post.post_id} key={post.post_id}>
                <div>
                    <em>Author:
                        <span className="post-authorName"> {post.author} </span>
                    </em>
                </div>
                <div>
                    <em>Title:
                        <span className="post-title"> {post.title} </span>
                    </em>
                </div>
                <div>
                    <strong>Content:</strong>
                    <div className="post-content"> {post.content} </div>
                </div>
            </Panel>
        )
    }

    getValidationState_author_name() {
        const length = this.props.author_nameProp.length;
        if (length > 1) return 'success';
        else return 'error';
    }

    getValidationState_title() {
        const length = this.props.post_titleProp.length;
        if (length >= 5 && length <= 20) return 'success';
        else return 'error';
    }

    getValidationState_post_text() {
        const length = this.props.post_textProp.length;
        if (length > 20) return 'success';
        else if (length > 10) return 'warning';
        else return 'error';
    }

    handleChangeName = (e) => {
        this.props.setStateAuthorHandlerProp(e.target.value);
    };

    handleChangeTitle = (e) => {
        this.props.setStatePostTitleHandlerProp(e.target.value);
    };

    handleChangePost = (e) => {
        this.props.setStatePostTextHandlerProp(e.target.value);
    };

}

export default ForumTopic;

