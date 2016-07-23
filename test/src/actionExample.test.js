import * as actions from '../../app/components/Forum/ForumActions';
import * as types from '../../app/components/actions/action-types';

describe('For the forum to be updated, there should be actions defined', () => {
    it('should create an action to get a forum list ', () => {
        const forumList = '{forumList: []}';
        const expectedAction = {
            type: actions.GET_FORUM_LIST_SUCCESS,
            forumList
        };

        expect(actions.getForumListSuccess(forumList)).toEqual(expectedAction);
    })
});