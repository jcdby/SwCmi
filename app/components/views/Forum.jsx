import React from 'react'

import { Grid, Row, Col, DropdownButton, MenuItem, Image, Button, ListGroup, ListGroupItem} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'



export default
class Forum extends React.Component {
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

    createForum () {
        return (
            <Grid>
                <Row className="header">
                    <Col md={8} mdOffset={1}>
                        The
                        <strong> Missionary Work </strong>
                        Forum
                    </Col>
                    <Col md={2} mdOffset={1}>
                        <DropdownButton title="Missionary Work" id="forum-navigation"> {/*this menu item is repeated among many pages, it should be separated into one view + container*/}
                            <LinkContainer to="/forum/general_discussion">
                                <MenuItem eventKey="1">
                                    General Discussion
                                </MenuItem>
                            </LinkContainer>

                            <LinkContainer to="/forum/worship">
                                <MenuItem eventKey="2">
                                    Worship
                                </MenuItem>
                            </LinkContainer>

                            <LinkContainer to="/forum/vacation_and_family">
                                <MenuItem eventKey="3">
                                    Vacation &amp; Family
                                </MenuItem>
                            </LinkContainer>

                            <LinkContainer to="/forum">
                                <MenuItem eventKey="4">
                                    Go Back To Forums List
                                </MenuItem>
                            </LinkContainer>
                        </DropdownButton>
                    </Col>
                </Row>
                <Row className="content">
                    <Col className="forum-icon" md={3}>
                        <Image src="/assets/kittenjesus.jpg" thumbnail />
                    </Col>
                    <Col className="forum-description" md={9}>
                        <div>
                            A forum discussing missionary work in general.
                            <br/>
                            Find out about our work in Israel, in America and in Central Africa.
                            <br/>
                            We also give advices to would-be missionaries. We can tutor, provide financial support and share our international network to help in preparing your mission.
                        </div>
                        <div>
                            <Button bsStyle="primary" bsSize="large" block>Create new topic</Button>
                        </div>
                    </Col>
                </Row>
                <Row className="content">
                    <Col  md={12}>
                        <ListGroup id="topic-list-container">
                            {this.displayTopic()}
                            {this.displayTopic()}
                            {this.displayTopic()}
                            {this.displayTopic()}
                            {this.displayTopic()}
                        </ListGroup>
                    </Col>
                </Row>
            </Grid>
        )
    }

    displayTopic () {
        return (
            <ListGroupItem class="topic">
                <Grid>
                    <Row className="topic">
                        <Col md={4} className="topic-title">
                            <div>
                                <LinkContainer to="/forum/missionary_work/israel_and_missionary_work">
                                    <a>
                                        <h3> Israel and missionary work </h3>
                                    </a>
                                </LinkContainer>
                            </div>
                            <div>
                                <emp> Created by </emp>
                                <strong>Jincheng</strong>
                                .
                            </div>
                        </Col>
                        <Col md={8} className="topic-content">
                            <Row className="replies">
                                <Col md={2}>
                                    <strong> 2 </strong>
                                    replies</Col>
                                <Col md={7}>
                                    <emp>Last Post: June 9th, 2016 at 13:15 by</emp>
                                    <strong>Jincheng</strong>
                                    .
                                </Col>
                            </Row>
                            <Row className="pagination">
                                Page 1, Page 2, ..., Page 4, Page 5
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </ListGroupItem>
        )
    }

}

{/*

 <ListGroupItem class="topic">
 <Col md={3} className="topic-title">
 <div> <h2> Israel and missionary work </h2> </div>
 <div> <emp> Created by </emp> <strong>Jincheng</strong>. </div>
 </Col>
 <Col md={9} className="topic-content">
 <Row className="replies">
 <Col md={2}> <strong> 2 </strong> replies</Col>
 <Col md={7}> <emp>Last Post: June 9th, 2016 at 13:15 by</emp> <strong>Jincheng</strong>.</Col>
 </Row>
 <Row className="pagination">
 Page 1, Page 2, ..., Page 4, Page 5
 </Row>
 </Col>
 </ListGroupItem>
 */
}