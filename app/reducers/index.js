import { combineReducers }  from 'redux'

// reducers
import forumReducer from './forumReducer'
import galleryReducer from './galleryReducer'

// combine reducers
const reducers = combineReducers({
    forumState: forumReducer,
    galleryState: galleryReducer
});

export default reducers;