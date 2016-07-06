/**
 * Created by fwavresky on 6/16/2016.
 */

import React from 'react'
import store from '../../store/Store'
import {connect} from 'react-redux'
import ForumList from '../views/ForumList.jsx'

import axios from 'axios'
import {getForumListSuccess} from '../actions/forum-actions';

class ForumListContainer extends React.Component {
    componentDidMount() {
        axios.get('/api/forumList')
            .then(res => {
                console.log('api called front end');
                store.dispatch(getForumListSuccess(res.data));
                return res;
            })
            .catch(function (err) {
                console.error('API call error', '/api/forumList', err);
            });
    }

    render() {
        return (
            <div>
                <ForumList forumListProps = {this.props.forumList}/>
            </div>
        )
    }
}

const mapStateToStore = function (store) {
    return {
        forumList: store.forumState.forumList
    }
};

export default connect(mapStateToStore)(ForumListContainer);
