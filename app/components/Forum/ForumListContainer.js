/**
 * Created by fwavresky on 6/16/2016.
 */

import React from 'react'
import store from '../../store/Store'
import {connect} from 'react-redux'
import ForumListView from './ForumListView'

import axios from 'axios'
import {getForumListSuccess} from './ForumActions';

class ForumListContainer extends React.Component {
    componentDidMount() {
        axios.get('/api/forum/forumList')
            .then(res => {
                console.log('api called front end');
                store.dispatch(getForumListSuccess(res.data));
                return res;
            })
            .catch(function (err) {
                console.error('API call error', '/api/forum/forumList', err);
            });
    }

    render() {
        return (
            <div>
                <ForumListView forumListProps = {this.props.forumList}/>
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