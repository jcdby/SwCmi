/**
 * Created by fwavresky on 6/18/2016.
 */

import * as types from '../components/actions/action-types'

const initialForumState = {
    forumList: [], // the objects have to be defined
    forum: [],
    topic: []
};

const forumReducer = function(state = initialForumState, action = '') {
    switch (action.type) {
        case types.GET_FORUM_CATEGORIES_SUCCESS :
            var newState = Object.assign({}, state, {categories: action.categories});
            return newState;
        case types.GET_FORUM_TOPIC_SUCCESS :
            var newState = Object.assign({}, state, {topic: action.topic});
            return newState;
        case types.POST_FORUM_TOPIC_SUCCESS :
            var newState = Object.assign({}, state, {topic: action.topic});
            return newState;
    }

    return state;
};

export default forumReducer;