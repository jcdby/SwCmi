/**
 * Created by fwavresky on 6/16/2016.
 */
import React from 'react'
import store from '../../store/Store'
import {connect} from 'react-redux'
import ForumView from './ForumView'


class ForumContainer extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <ForumView/>
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



