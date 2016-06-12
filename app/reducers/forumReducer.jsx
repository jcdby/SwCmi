import * as types from '../components/actions/action-types.jsx';

const initialForumState = {
    'categories': [],
    'topic': {}  //@TODO: might be a complex object => needs [] instead of {}
};

const forumReducer = function (state = initialForumState, action = '') {
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