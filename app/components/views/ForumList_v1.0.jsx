import React from 'react'
import {ListGroup, ListGroupItem, Grid, Row, Col, Image, DropdownButton, MenuItem, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default
class ForumList extends React.Component {

    constructor(props) {
        super(props);
        this.createForumList = this.createForumList.bind(this);
        this.displayForum = this.displayForum.bind(this);
    }

    render() {
        return (
            <div>
            {   this.createForumList()   }
            </div>
        )
    }

    createForumList()  {

        return (
            <Grid id="forum-list-container">
                <Row className="header">
                    <Col  md={8} mdOffset={1}>



                        Welcome to the Forum page. You can select a Forum, see the associated Topics and react to them.
                    </Col >
                    <Col md={2} mdOffset={1}>
                        <DropdownButton title="Go To Forum" id="forum-navigation">
                            <LinkContainer to="/forum/missionary_work">
                                <MenuItem eventKey="1">
                                    Missionary Work
                                </MenuItem>
                            </LinkContainer>

                            <LinkContainer to="/forum/general_discussion">
                                <MenuItem eventKey="2">
                                    General Discussion
                                </MenuItem>
                            </LinkContainer>

                            <LinkContainer to="/forum/worship">
                                <MenuItem eventKey="3">
                                    Worship
                                </MenuItem>
                            </LinkContainer>

                            <LinkContainer to="/forum/vacation_and_family">
                                <MenuItem eventKey="4">
                                    Vacation &amp; Family
                                </MenuItem>
                            </LinkContainer>

                        </DropdownButton>
                    </Col>
                </Row>
                <Row className="content">
                    <Col  md={12}>
                        <ListGroup id="forum-list-container">
                            {this.displayForum('') /* normally a map function */}
                            {this.displayForum('') /* normally a map function */}
                            {this.displayForum('') /* normally a map function */}
                        </ListGroup>
                    </Col >
                </Row>
            </Grid>
        )
    };

    displayForum(forumData) {
        return (
            <ListGroupItem className="forumList-forum">

            {/* md total = 12 columns */}
                <Grid>
                    <Row className="header">
                        <Col  md={2}>
                            <Image src="/assets/kittenjesus.jpg" thumbnail />
                        </Col>
                        <Col md={5}>
                            <LinkContainer to="/forum/missionary_work">
                                <a>
                                    <h2>Missionary Work</h2>
                                </a>
                            </LinkContainer>
                            <span>
                                A forum discussing missionary work in general.
                                <br/>
                                You can also find more about the missions of our members oversea.
                            </span>
                        </Col>
                        <Col md={5}>
                            <emp> Last Post: June 9th, 2016 at 13:15 by</emp>
                            <strong> Jincheng</strong>
                            <br/>
                            3 Topics are discussed in Missionary Work.
                        </Col>
                    </Row>
                    <Row className="recent-topics">
                        <Col md={10} mdOffset={2} >
                            <h3>Recent topics:</h3>
                            <ListGroup>
                                <LinkContainer to="/forum/missionary_work/israel_and_missionary_work">
                                    <ListGroupItem className="topic">
                                        Israel and missionary work
                                    </ListGroupItem>
                                </LinkContainer>
                                <LinkContainer to="/forum/missionary_work/how_to_convert_people_the_book">
                                    <ListGroupItem className="topic">
                                        How to convert people, the book
                                    </ListGroupItem>
                                </LinkContainer>
                                <LinkContainer to="/forum/missionary_work/how_to_become_a_missionary">
                                    <ListGroupItem className="topic">
                                        How to become a missionary&#63; {/* the question mark */}
                                    </ListGroupItem>
                                </LinkContainer>
                            </ListGroup>
                        </Col>
                    </Row>
                </Grid>
            </ListGroupItem>
        )
    };
}