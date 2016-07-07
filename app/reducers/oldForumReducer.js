import { old_forum_actions } from '../components/actions/action-types'

const initialForumState = {
    'categories': [],
    'topic': {}  //@TODO: might be a complex object => needs [] instead of {}
};

const oldForumReducer = function (state = initialForumState, action = '') {
    switch (action.type) {
        case old_forum_actions.GET_FORUM_CATEGORIES_SUCCESS :
            var newState = Object.assign({}, state, {categories: action.categories});
            return newState;
        case old_forum_actions.GET_FORUM_TOPIC_SUCCESS :
            var newState = Object.assign({}, state, {topic: action.topic});
            return newState;
        case old_forum_actions.POST_FORUM_TOPIC_SUCCESS :
            var newState = Object.assign({}, state, {topic: action.topic});
            return newState;
        default:
            return state;
    }
};

export default oldForumReducer;