/**
 * Created by fwavresky on 6/16/2016.
 */
import React from 'react'
import store from '../../store/Store'
import {connect} from 'react-redux'
import TopicView from './TopicView'

export default
class TopicContainer extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <TopicView/>
            </div>
        )
    }
}

const mapStateToStore = function (store) {
    return {
        //topic : store.topicState.topic
        }
};

export default connect(mapStateToStore)(TopicContainer);