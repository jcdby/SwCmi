/**
 * Created by fwavresky on 7/7/2016.
 */
import { old_forum_actions } from './action-types'

export function getForumCategoriesSuccess(categories) {
    return {
        type: old_forum_actions.GET_FORUM_CATEGORIES_SUCCESS,
        categories
    };
}

export function getForumTopicSuccess(topic) {
    return {
        type: old_forum_actions.GET_FORUM_TOPIC_SUCCESS,
        topic
    };
}

export function setForumTopicSuccess(topic) {
    return {
        type: old_forum_actions.POST_FORUM_TOPIC_SUCCESS,
        topic
    };
}



