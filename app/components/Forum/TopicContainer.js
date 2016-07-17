/**
 * Created by fwavresky on 6/16/2016.
 */
import React from 'react'
import store from '../../store/Store'
import {connect} from 'react-redux'
import TopicView from './TopicView'
import axios from 'axios'
import {getTopicSuccess} from './ForumActions';
import {web_serv_base} from '../constants';


export default
class TopicContainer extends React.Component {
    componentDidMount() {
        var forumID = this.props.params.forumID;
        var topicID = this.props.params.topicID;
        console.log(forumID + '/' + topicID);

        axios.get(web_serv_base + '/forum/forumList/' + forumID + '/' + topicID)
            .then(function (res) {
                console.log('api called front end getTopicSuccess');
                store.dispatch(getTopicSuccess(res.data));
                return res;
            })
            .catch(function (err) {
                console.error('API call error', web_serv_base + '/forum/' + {forumID}, err);
            });
    }

    render() {
        return (
            <div>
                <TopicView topicProp = {this.props.active_topic}/>
            </div>
        )
    }
}

const mapStateToStore = function (store) {
    return {
        active_topic : store.forumState.active_topic
    }
};

export default connect(mapStateToStore)(TopicContainer);