/**
 * Created by fwavresky on 6/18/2016.
 */
import { forum_actions } from '../actions/action-types';

const initialForumState = {
    'forumList': [], // the objects have to be defined
    'active_forum': [],
    'active_topic': [],
    'active_posts': []
};

const forumReducer = function (state = initialForumState, action = '') {
    switch (action.type) {
        case forum_actions.GET_FORUM_LIST_SUCCESS :
            var newState = Object.assign({}, state, {forumList: action.forumList});
            return newState;
        case forum_actions.GET_FORUM_SUCCESS :
            var newState = Object.assign({}, state, {active_forum: action.active_forum});
            return newState;
        case forum_actions.POST_FORUM_SUCCESS :
            var newState = Object.assign({}, state, {active_forum: action.forum});
            return newState;
        case forum_actions.GET_TOPIC_SUCCESS :
            var newState = Object.assign({}, state, {active_topic: action.active_topic});
            return newState;
        case forum_actions.POST_TOPIC_SUCCESS :
            var newState = Object.assign({}, state, {active_topics: action.topic});
            return newState;
        case forum_actions.GET_POST_SUCCESS :
            var newState = Object.assign({}, state, {active_posts: action.post});
            return newState;
        case forum_actions.POST_POST_SUCCESS :
            var newState = Object.assign({}, state, {active_posts: action.post});
            return newState;
        default:  return state;
    }
};

export default forumReducer;