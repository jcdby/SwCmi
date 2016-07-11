/**
 * Created by fwavresky on 6/16/2016.
 */
import React from 'react'
import store from '../../store/Store'
import {connect} from 'react-redux'
import Forum from '../views/Forum.jsx'


class ForumContainer extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Forum/>
            </div>
        )
    }

}

const mapStateToStore = function (store) {
    return {
        //forums : store.forumState.forums
    };
};

export default connect(mapStateToStore)(ForumContainer);



