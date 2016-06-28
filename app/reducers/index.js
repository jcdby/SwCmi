import { combineReducers }  from 'redux'

// reducers
import oldForumReducer from './oldForumReducer'
import forumReducer from './forumReducer'
import galleryReducer from './galleryReducer'

// combine reducers
const reducers = combineReducers({
    oldForumState: oldForumReducer,
    forumState: forumReducer,
    galleryState: galleryReducer
});

export default reducers;