import { combineReducers }  from 'redux';

// reducers
import oldForumReducer from './oldForumReducer.js';
import forumReducer from ''

// combine reducers
const reducers = combineReducers({
    oldForumState: oldForumReducer,
    forumState: forumStateReducer
});

export default reducers;