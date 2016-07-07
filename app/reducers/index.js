import { combineReducers }  from 'redux'

// reducers
import forumReducer from './forumReducer'
import galleryReducer from './galleryReducer'
import oldForumReducer from './oldForumReducer'

// combine reducers
const reducers = combineReducers({
    forumState: forumReducer,
    galleryState: galleryReducer,
    oldForumState: oldForumReducer
});

export default reducers;