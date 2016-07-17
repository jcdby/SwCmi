import { forum_actions } from '../actions/action-types.js';

export function getForumListSuccess(forumList) {
    return {
        type: forum_actions.GET_FORUM_LIST_SUCCESS,
        forumList
    };
}

export function getForumSuccess(active_forum) {
    return {
        type: forum_actions.GET_FORUM_SUCCESS,
        active_forum
    };
}

export function setForumSuccess(forum) {
    return {
        type: forum_actions.POST_FORUM_SUCCESS,
        forum
    };
}

export function getTopicSuccess(active_topic) {
    return {
        type: forum_actions.GET_TOPIC_SUCCESS,
        active_topic
    };
}

export function setTopicSuccess(topic) {
    return {
        type: forum_actions.POST_TOPIC_SUCCESS,
        topic
    };
}

export function getPostSuccess(post) {
    return {
        type:forum_actions.GET_POST_SUCCESS,
        post
    }
}

export function setPostSuccess(post) {
    return {
        type:forum_actions.POST_POST_SUCCESS,
        post
    }
}