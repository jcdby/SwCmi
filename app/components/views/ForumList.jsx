import React from 'react'
import {ListGroup, ListGroupItem, Grid, Row, Col, Image, DropdownButton, MenuItem, Button} from 'react-bootstrap'
import {Nav, NavItem} from 'react-bootstrap'
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

    createForumList() {
        return (
            <Grid id="forum-list-container">
                <Row className="header">
                    <h2>Church Forum</h2>
                </Row>
                <Row className="content">
                    <Col  md={10}>
                        <Grid>
                            <Row>
                                {this.displayForum('')}
                                {this.displayForum('')}
                                {this.displayForum('')}
                                {this.displayForum('')}
                                {this.displayForum('')}
                            </Row>
                        </Grid>
                    </Col >

                    <Col md={2}>

                        <Nav bsStyle="pills" stacked activeKey={1}>
                            <LinkContainer to="/forum/missionary_work">
                                <NavItem eventKey="1">
                                    Missionary Work
                                </NavItem>
                            </LinkContainer>

                            <LinkContainer to="/forum/general_discussion">
                                <NavItem eventKey="2">
                                    General Discussion
                                </NavItem>
                            </LinkContainer>

                            <LinkContainer to="/forum/worship">
                                <NavItem eventKey="3">
                                    Worship
                                </NavItem>
                            </LinkContainer>

                            <LinkContainer to="/forum/vacation_and_family">
                                <NavItem eventKey="4">
                                    Vacation &amp; Family
                                </NavItem>
                            </LinkContainer>
                        </Nav>

                    </Col>
                </Row>
            </Grid>
        )
    }


    displayForum(forumData) {
        return (
            <Col className="card-forum" md={4}>
                <Col>
                    <Image src="/assets/kittenjesus.jpg" thumbnail />
                    <h3> Missionary Work </h3>
                </Col>
            </Col>
        )
    }
}
