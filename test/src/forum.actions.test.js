import {getForumListSuccess, getForumSuccess, setForumSuccess, getTopicSuccess} from '../../app/components/Forum/ForumActions';
import {forum_actions} from '../../app/components/actions/action-types';

describe('For the forum to be updated, there should be actions defined', () => {
    it('getForumListSuccess', () => {
        const forumList = '{forumList: []}'; // could give a better mockup but the point is that the text is forwarded to the action correctly
        const expectedAction = {
            type: forum_actions.GET_FORUM_LIST_SUCCESS,
            forumList
        };

        expect(getForumListSuccess(forumList)).toEqual(expectedAction);
    });

    it('getForumSuccess', () => {
        const active_forum = '{forum: []}'; // could give a better mockup but the point is that the text is forwarded to the action correctly
        const expectedAction = {
            type: forum_actions.GET_FORUM_SUCCESS,
            active_forum
        };

        expect(getForumSuccess(active_forum)).toEqual(expectedAction);
    });

    it('setForumSuccess', () => {
        const forum = '{forum: []}'; // could give a better mockup but the point is that the text is forwarded to the action correctly
        const expectedAction = {
            type: forum_actions.POST_FORUM_SUCCESS,
            forum
        };

        expect(setForumSuccess(forum)).toEqual(expectedAction);
    });

    it('getTopicSuccess', () => {
        const active_topic = '{topic: []}'; // could give a better mockup but the point is that the text is forwarded to the action correctly
        const expectedAction = {
            type: forum_actions.GET_TOPIC_SUCCESS,
            active_topic
        };

        expect(getTopicSuccess(active_topic)).toEqual(expectedAction);
    });
});