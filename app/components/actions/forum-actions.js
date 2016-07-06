import { forum_actions } from './action-types'

export function getForumListSuccess(forumList) {
    return {
        type: forum_actions.GET_FORUM_LIST_SUCCESS,
        forumList
    };
}

export function getForumSuccess(forum) {
    return {
        type: forum_actions.GET_FORUM_SUCCESS,
        forum
    };
}

export function setForumSuccess(forum) {
    return {
        type: forum_actions.POST_FORUM_SUCCESS,
        forum
    };
}

export function getTopicSuccess(topic) {
    return {
        type: forum_actions.GET_TOPIC_SUCCESS,
        topic
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