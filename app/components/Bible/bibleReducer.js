//@flow
import { bible_actions } from '../actions/action-types'

const initialState: BibleState = {
  BiblePosts: []
};

export default function bibleReducer (state: BibleState = initialState , action: any) {
    switch (action.type) {
        case bible_actions.GET_BIBLE_LIST_SUCESS:
            var newState = Object.assign({}, state, {BiblePosts: action.BiblePosts});
            return newState;
        default:
           return state;
    }
}