import { forum_actions } from '../actions/action-types.js';

export function getForumListSuccess(bibleList) {
    return {
        type: forum_actions.GET_FORUM_LIST_SUCCESS,
        bibleList
    };
}