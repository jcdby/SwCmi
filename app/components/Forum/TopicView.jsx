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
        this.displayTopic = this.displayTopic.bind(this);
    }

    render() {
        return (
            <div>
            {this.createTopic()}
            </div>
        )
    }

    createTopic () {
        return (
            <Grid>
                <Row className="header">
                    <strong>Missionary Work </strong>
                    >>
                    <strong> Israel and Missionary Work</strong>
                    >>
                    <strong> 6 replies </strong>
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
                        {this.displayTopic()}
                        {this.displayTopic()}
                        {this.displayTopic()}
                        {this.displayTopic()}
                        {this.displayTopic()}
                        {this.displayTopic()}
                    </ListGroup>
                </Row>

            </Grid>
        )
    };

    displayTopic () {
        return (
            <ListGroupItem>
                <Grid>
                    <Col className="topic-original-user" md={2}>
                        <Row className="user-name">
                            <strong>Jincheng</strong>
                        </Row>
                        <Row className="user-thumb">
                            <Image src="/assets/kittenjesus.jpg" thumbnail />
                        </Row>
                        <Row className="user-posts">
                            <emp> 51 posts </emp>
                        </Row>
                    </Col>
                    <Col className="topic-description" md={10}>
                        What are the specificities of Israel as a missonary land&#63;
                        <br/>
                        Since this is the only Jewish country in the world, with a large muslim minority, how would you approach the missionary work&#63;
                        <br/>
                        What is the percentage of Christians there&#63;
                    </Col>
                </Grid>
            </ListGroupItem>
        )
    };
}