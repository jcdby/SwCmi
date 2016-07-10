import React from 'react';
import axios from 'axios';
import {getForumCategoriesSuccess} from './Old_Forum-actions';
import {connect} from 'react-redux';
import store from '../../store/Store';
import Old_ForumListView from './Old_ForumListView';

class OldForumContainer extends React.Component {
    componentDidMount() {
        axios.get('/api/old_Forum')
            .then(res => {
                console.log('api called front end');
                store.dispatch(getForumCategoriesSuccess(res.data));
                return res;
            });
            //.catch(function (err) {
            //    console.error('API call error', '/api/oldForum', err);
            //});
    }

    render() {
        return (
            <Old_ForumListView categoriesProp = {this.props.categories}/>
        )
    }
}

const mapStateToStore = function (store) {
    return {
        categories: store.oldForumState.categories
    };
};

export default connect(mapStateToStore)(OldForumContainer);