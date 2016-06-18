import { combineReducers }  from 'redux'

// reducers
import oldForumReducer from './oldForumReducer'
import forumReducer from './forumReducer'

// combine reducers
const reducers = combineReducers({
    oldForumState: oldForumReducer,
    forumState: forumReducer
});

export default reducers;