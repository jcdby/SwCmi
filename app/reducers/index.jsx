import { combineReducers }  from 'redux';

// reducers
import forumReducer from './forumReducer.jsx';

// combine reducers
const reducers = combineReducers({
    forumState: forumReducer
});

export default reducers;