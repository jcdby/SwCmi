/**
 * Created by fwavresky on 6/16/2016.
 */

import React from 'react'
import {Grid, Row, Col, ListGroup, ListGroupItem, Image} from 'react-bootstrap'
import {Form,FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap'

export default
class TopicView extends React.Component {

    constructor(props) {
        super(props);
        this.createTopic = this.createTopic.bind(this);
        this.displayPost = this.displayPost.bind(this);
    }

    render() {
        return (
            <div>
            {this.createTopic()}
            </div>
        )
    }

    createTopic() {
        var topic = this.props.topicProp;
        return (
            <Grid>

                <Row className="header">
                    <h2> {topic.title}</h2>
                    by
                    <emp> {topic.author}</emp>
                    <br/>
                    <p> {topic.description}</p>
                    <br/>
                    Last post by {topic.last_post_author} {topic.last_post_date}
                </Row>
                <Row className="post-reply" mdOffset={2} md={10}>
                    <Form horizontal>
                        <FormGroup controlId="add-post-titler">
                            <Col md={2} mdOffset={1}>
                                <ControlLabel> Title </ControlLabel>
                            </Col>
                            <Col md={9}>
                                <FormControl
                                    type="text"
                                    placeholder="Enter the title"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="add-post-text">
                            <Col md={2} mdOffset={1}>
                                <ControlLabel>Your post</ControlLabel>
                            </Col>
                            <Col md={9}>
                                <FormControl
                                    componentClass="textarea"
                                    placeholder="Type your post"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="submit-post">
                            <Col md={9} mdOffset={3}>
                                <Button bsStyle="primary" bsSize="large" block> Post </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Row>
                <Row className="content">
                    <ListGroup>
                     {
                         (topic.posts_list !== undefined)
                             ? topic.posts_list.map((post, index) => {
                             this.displayPost(post, index);
                         })
                             : <div>No posts on this topic. Be the first !</div>
                         }
                    </ListGroup>
                </Row>

            </Grid>
        )
    }

    displayPost(post, index) {
        return (
            <ListGroupItem key={index}>
                <Grid>
                    <Col className="topic-original-user" md={2}>
                        <Row className="user-name">
                            <strong>{post.author}</strong>
                        </Row>
                        <Row className="user-thumb">
                            <Image src="/assets/kittenjesus.jpg" thumbnail />
                        </Row>
                        <Row className="user-posts">
                            <emp> 51 posts </emp>
                        </Row>
                    </Col>
                    <Col className="topic-description" md={10}>
                        <strong>
                            {post.title}
                        </strong>
                        <br/>
                            {post.content}
                        <br/>
                    </Col>
                </Grid>
            </ListGroupItem>
        )
    }

}