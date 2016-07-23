import React from 'react'

import { Grid, Row, Col, DropdownButton, MenuItem, Image, Button, ListGroup, ListGroupItem} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default
class ForumView extends React.Component {
    constructor(props) {
        super(props);
        this.createForum = this.createForum.bind(this);
        this.displayTopic = this.displayTopic.bind(this);
    }

    render() {
        return (
            <div>
                {this.createForum()}
            </div>
        )
    }

    createForum() {
        var forum = this.props.forumProps;

        return (
            <Grid>
                <Row className="header">
                    <Col md={8} mdOffset={1}>
                        The
                        <strong> {forum.title} </strong>
                        Forum
                    </Col>
                </Row>
                <Row className="content">
                    <Col className="forum-icon" md={3}>
                        <Image src="/assets/kittenjesus.jpg" thumbnail />
                    </Col>
                    <Col className="forum-description" md={9}>
                        <div>
                            {forum.subtitle}
                            <br/>
                            {forum.description}
                        </div>
                        <div>
                            <Button bsStyle="primary" bsSize="large" block>Create new topic</Button>
                        </div>
                    </Col>
                </Row>
                <Row className="content">
                    <Col  md={12}>
                        <ListGroup id="topic-list-container">
                            {
                                (forum.topics_list !== undefined)
                                    ? forum.topics_list.map((topic, index) => {
                                    return (
                                        <ListGroupItem  key={index} class="topic">
                                            {this.displayTopic(topic)}
                                        </ListGroupItem>
                                    )
                                })
                                    : <div>No topics on this forum. Be the first !</div>
                                }
                        </ListGroup>
                    </Col>
                </Row>
            </Grid>
        )
    }

    displayTopic(topic) {
        var forum = this.props.forumProps;

        return (
            <Grid>
                <Row className="topic">
                    <Col md={4} className="topic-title">
                        <div>
                            <LinkContainer to={'/forum/' + forum.state + '/' + topic.state}>
                                <a>
                                    <h3> {topic.title} </h3>
                                </a>
                            </LinkContainer>
                        </div>
                        <div>
                            <emp> Created by </emp>
                            <strong>{topic.author}</strong>
                            .
                        </div>
                    </Col>
                    <Col md={8} className="topic-content">
                        <Row className="replies">
                            <Col md={2}>
                                <strong> {topic.posts_list.length} </strong>
                                replies</Col>
                            <Col md={7}>
                                <emp>Last Post: {topic.last_post_date} by</emp>
                                <strong>{topic.last_post_author}</strong>
                                .
                            </Col>
                        </Row>
                        <Row className="pagination">
                            Page 1, Page 2, ..., Page 4, Page 5
                        </Row>
                    </Col>
                </Row>
            </Grid>
        )
    }
}