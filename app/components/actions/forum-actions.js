import * as types from './action-types';

export function getForumCategoriesSuccess(categories) {
    return {
        type: types.GET_FORUM_CATEGORIES_SUCCESS,
        categories
    };
}

export function getForumTopicSuccess(topic) {
    return {
        type: types.GET_FORUM_TOPIC_SUCCESS,
        topic
    };
}

export function setForumTopicSuccess(topic) {
    return {
        type: types.POST_FORUM_TOPIC_SUCCESS,
        topic
    };
}
