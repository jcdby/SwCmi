/**
 * Created by fwavresky on 7/25/2016.
 */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ForumListItemView from '../../app/components/Forum/ForumListItemView';

import { LinkContainer } from 'react-router-bootstrap';
import { CardMedia, CardText} from 'material-ui/Card';

let propsMock = {
    'forumProp': {
        'state': 'mock_data',
        'title': 'mock_data',
        'subtitle': 'mock_data',
        'description': 'mock_data',
        'active': 'mock_data',
        'author': 'mock_data',
        'topics_list': [
            {
                'topic': {
                    'title': 'mock_data',
                    'state': 'mock_data'
                }
            },
            {
                'topic': {
                    'title': 'mock_data',
                    'state': 'mock_data'
                }
            }
        ],
        'state': 'mock_data'
    }
};

function setup(propsMock) {
    let props = propsMock;
    let renderer = TestUtils.createRenderer();
    renderer.render(<ForumListItemView {...props} />);
    let output = renderer.getRenderOutput();

    return {
        props,
        output,
        renderer
    }
}

describe('Forum List view', () => {
    it('should render correctly', () => {
        const { output } = setup(propsMock);

        expect(output.type).toBe('span');
        expect(output.props.className).toBe('forum-list-item');

        let [ link, cardMedia, cardText  ] = output.props.children;
        expect(link.type).toBe(LinkContainer);//
        expect(cardMedia.type).toBe(CardMedia);
        expect(cardText.type).toBe(CardText);
    });

    describe('It should display the number of topics discussed in the forum', () => {

        var no_topic_message =' There are no topics discussed in this forum. Be the first to create one! ' ;

        it('if there are no topics, the message should be: '+no_topic_message, () => {
            propsMock.forumProp.topics_list = [];
            const { output, props } = setup(propsMock);
            expect(props.forumProp.topics_list.length).toBe(0);

            let [ link, cardMedia, cardText  ] = output.props.children;
            let [ span_description, br_1, emp_1, strong, br_2, br_3, span_unique_message, br_4, h3 , list ] = cardText.props.children;

            expect(span_description.type).toBe('span');
            expect(span_description.props.children).toEqual(propsMock.forumProp.description);

            let emp_message = span_unique_message.props.children;
            expect( emp_message.props.children).toBe(no_topic_message);
        });

        it('if there is only 1 topic', () => {
            propsMock.forumProp.topics_list = [
                {
                    'topic': {
                        'title': 'mock_data',
                        'state': 'mock_data'
                    }
                }
            ];
            const { output, props } = setup(propsMock);
            expect(props.forumProp.topics_list.length).toBe(1);
        });

        it('if there are several topics', () => {
            propsMock.forumProp.topics_list = [
                {
                    'topic': {
                        'title': 'mock_data',
                        'state': 'mock_data'
                    }
                },
                {
                    'topic': {
                        'title': 'mock_data',
                        'state': 'mock_data'
                    }
                }
            ];
            const { output, props } = setup(propsMock);
            expect(props.forumProp.topics_list.length).toBe(2);
        });
    });

});