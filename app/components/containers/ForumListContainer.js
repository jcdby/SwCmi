/**
 * Created by fwavresky on 6/16/2016.
 */

import React from 'react'
import store from '../../store/Store'
import {connect} from 'react-redux'
import ForumList from '../views/ForumList.jsx'

export default
class ForumListContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <ForumList/>
            </div>
        )
    }
}

const mapStateToStore = function (store) {
    return {
        //forumList: store.forumListState.forumList
    }
};

export default connect(mapStateToStore)(ForumListContainer);
