/**
 * Created by fwavresky on 6/16/2016.
 */
import React from 'react'
import store from '../../store/Store'
import {connect} from 'react-redux'
import ForumView from './ForumView'
import axios from 'axios';
import {getForumSuccess} from './ForumActions';
import {api_serv_base} from '../constants';

class ForumContainer extends React.Component {
    componentDidMount() {
        var forumID = this.props.params.forumID;
        console.log(forumID);
        axios.get(api_serv_base + '/forum/forumList/' + forumID)
            .then((res) => {
                console.log('api called front end getForumSuccess');
                store.dispatch(getForumSuccess(res.data));
                return res;
            })
            .catch(function (err) {
                console.error('API call error', api_serv_base + '/forum/' + {forumID}, err);
            });
    }

    render() {
        return (
            <div>
                <ForumView forumProps = {this.props.active_forum}/>
            </div>
        )
    }
}

const mapStateToStore = function (store) {
    return {
        active_forum : store.forumState.active_forum
    };
};

export default connect(mapStateToStore)(ForumContainer);



