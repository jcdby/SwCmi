/**
 * Created by fwavresky on 7/23/2016.
 */

import forumReducer from '../../app/components/Forum/ForumReducer';
import {forum_actions} from '../../app/components/actions/action-types';

describe('Forum reducers', function () {
    it('should return the initial state', () => {
        expect(
            forumReducer(undefined, {})
        ).toEqual(
            {
                'forumList': [],
                'active_forum': [],
                'active_topic': [],
                'active_posts': []
            }
        );
    });

    it('should handle GET_FORUM_LIST_SUCCESS', () => {
        expect(
            forumReducer(undefined, {
                type: forum_actions.GET_FORUM_LIST_SUCCESS,
                forumList: 'test mockup text for GET_FORUM_LIST_SUCCESS'
            })
        ).toEqual(
            {
                'forumList': 'test mockup text for GET_FORUM_LIST_SUCCESS',
                'active_forum': [],
                'active_topic': [],
                'active_posts': []
            }
        );

        expect(
            forumReducer(
                {
                    'forumList': 'test mockup text for GET_FORUM_LIST_SUCCESS',
                    'active_forum': [],
                    'active_topic': [],
                    'active_posts': []
                }
                , {
                type: forum_actions.GET_FORUM_LIST_SUCCESS,
                forumList: 'Only this text should be visible, the forum is updated and the previous state erased'
            })
        ).toEqual(
            {
                'forumList': 'Only this text should be visible, the forum is updated and the previous state erased',
                'active_forum': [],
                'active_topic': [],
                'active_posts': []
            }
        );
    });

    it('should handle GET_FORUM_SUCCESS', () => {
        expect(
            forumReducer(undefined, {
                type: forum_actions.GET_FORUM_SUCCESS,
                active_forum: 'test mockup text for GET_FORUM_SUCCESS'
            })
        ).toEqual(
            {
                'forumList': [], // the objects have to be defined
                'active_forum': 'test mockup text for GET_FORUM_SUCCESS',
                'active_topic': [],
                'active_posts': []
            }
        );

        expect(
            forumReducer(
                {
                    'forumList': [], // the objects have to be defined
                    'active_forum': 'test mockup text for GET_FORUM_SUCCESS',
                    'active_topic': [],
                    'active_posts': []
                }
                , {
                    type: forum_actions.GET_FORUM_SUCCESS,
                    active_forum: 'Only this text should be visible, the forum is updated and the previous state erased'
                })
        ).toEqual(
            {
                'forumList': [],
                'active_forum': 'Only this text should be visible, the forum is updated and the previous state erased',
                'active_topic': [],
                'active_posts': []
            }
        );
    });


});