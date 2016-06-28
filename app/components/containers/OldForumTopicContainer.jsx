import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

import store from '../../store/Store'
import {getForumTopicSuccess, setForumTopicSuccess} from '../actions/forum-actions'

import OldForumTopic from '../views/Old_ForumTopic.jsx'

class OldForumTopicContainer extends React.Component {


    constructor(props) {
        super(props);

        // these is temporary data while filling the form. It will be sent to the server. After the server creates a post, the response is sent to the reducer as the actual new post.
        this.state = {
            author_name: '',
            post_title: '',
            post_text: ''
        };

        this.addPost = this.addPost.bind(this);
        this.setStateAuthorHandler = this.setStateAuthorHandler.bind(this);
        this.setStatePostTextHandler = this.setStatePostTextHandler.bind(this);
        this.setStatePostTitleHandler = this.setStatePostTitleHandler.bind(this);
    }

    componentDidMount() {
        var forumID = this.props.params.forumID;
        console.log('ForumTopicContainer componentDidMount, calling API ' + '/api/old_forum/' + forumID);

        axios.get('/api/old_forum/' + forumID)
            .then((res) => {
                store.dispatch(getForumTopicSuccess(res.data));
                return res;
            })
            .catch((err) => {
                console.error('API call error', '/api/old_forum/' + forumID, err);
            })
    }

    render() {
        return (
            <OldForumTopic
                author_nameProp = {this.state.author_name}
                post_titleProp = {this.state.post_title}
                post_textProp = {this.state.post_text}
                topicProp={this.props.topic}
                addPostProp={this.addPost}
                setStateAuthorHandlerProp ={this.setStateAuthorHandler}
                setStatePostTitleHandlerProp ={this.setStatePostTitleHandler}
                setStatePostTextHandlerProp ={this.setStatePostTextHandler} />
        )
    }

    addPost() {
        var forumID = this.props.params.forumID;

        console.log('in addPost');

        var post =
        {
            author: this.state.author_name,
            title: this.state.post_title,
            content: this.state.post_text
        };

        console.log('in addPost, trying to send: ' + JSON.stringify(post));

        axios.post('/api/old_forum/' + forumID, post)
            .then((res) => {
                console.log('Ajax response: ' + JSON.stringify(res.data));
                //supposed to give back the whole updated topic
                store.dispatch(setForumTopicSuccess(res.data));
                this.setState({author_name: ''});
                this.setState({post_title: ''});
                this.setState({post_text: ''});
                return res;
            })
            .catch((err) => {
                console.error('API POST call error', '/api/old_forum/' + forumID, err);
            });
    };

    setStateAuthorHandler(author) {
        this.setState({author_name: author});
    };

    setStatePostTitleHandler(text) {
        this.setState({post_title: text});
    };

    setStatePostTextHandler(text) {
        this.setState({post_text: text});
    };


}

const mapStateToStore = function (store) {
    return {
        topic: store.oldForumState.topic
    }
};

export default connect(mapStateToStore)(OldForumTopicContainer);