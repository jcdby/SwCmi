import { combineReducers }  from 'redux'

// reducers
import forumReducer from '../components/Forum/ForumReducer'
import galleryListReducer from '../components/Gallery/GalleryReducer'
import oldForumReducer from '../components/Old_Forum/Old_ForumReducer'

// combine reducers
const reducers = combineReducers({
    forumState: forumReducer,
    galleryState: galleryListReducer,
    oldForumState: oldForumReducer
});

export default reducers;