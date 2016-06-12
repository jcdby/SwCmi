import React from 'react';
import axios from 'axios';
import {getForumCategoriesSuccess} from '../actions/forum-actions.jsx';
import {connect} from 'react-redux';
import store from '../../store/Store.jsx';
import Forum_list from '../views/Forum_list.jsx';

class ForumContainer extends React.Component {
    componentDidMount() {
        axios.get('/api/forum')
            .then(res => {
                store.dispatch(getForumCategoriesSuccess(res.data));
                return res;
            })
            .catch(function (err) {
                console.error('API call error', '/api/forum', err);
            });
    }

    render() {
        return (
            <Forum_list categoriesProp = {this.props.categories}/>
        )
    }
}

const mapStateToStore = function (store) {
    return {
        categories: store.forumState.categories
    };
};

export default connect(mapStateToStore)(ForumContainer);