import React from 'react';
import axios from 'axios';
import {getForumCategoriesSuccess} from '../actions/forum-actions';
import {connect} from 'react-redux';
import store from '../../store/Store';
import OldForum_list from '../views/Old_Forum_list.jsx';

class OldForumContainer extends React.Component {
    componentDidMount() {
        axios.get('/api/old_Forum')
            .then(res => {
                console.log('api called front end');
                store.dispatch(getForumCategoriesSuccess(res.data));
                return res;
            })
            .catch(function (err) {
                console.error('API call error', '/api/oldForum', err);
            });
    }

    render() {
        return (
            <OldForum_list categoriesProp = {this.props.categories}/>
        )
    }
}

const mapStateToStore = function (store) {
    return {
        categories: store.forumState.categories
    };
};

export default connect(mapStateToStore)(OldForumContainer);