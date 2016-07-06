import React from 'react'

import {Grid, Row, Col} from 'react-bootstrap'
import {Nav, NavItem} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default
class ForumLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid id="forum-list-container">
                <Row className="header">
                    <h2>Welcome to the Church Forum</h2>
                </Row>
                <Row className="content">
                    <Col md={2}>
                        <Nav bsStyle="pills" stacked activeKey={1}>
                            <LinkContainer to="/forum">
                                <NavItem eventKey="1">
                                   Forum homepage
                                </NavItem>
                            </LinkContainer>
                            <LinkContainer to="/forum/missionary_work">
                                <NavItem eventKey="2">
                                    Missionary Work
                                </NavItem>
                            </LinkContainer>

                            <LinkContainer to="/forum/general_discussion">
                                <NavItem eventKey="3">
                                    General Discussion
                                </NavItem>
                            </LinkContainer>

                            <LinkContainer to="/forum/worship">
                                <NavItem eventKey="4">
                                    Worship
                                </NavItem>
                            </LinkContainer>

                            <LinkContainer to="/forum/vacation_and_family">
                                <NavItem eventKey="5">
                                    Vacation &amp; Family
                                </NavItem>
                            </LinkContainer>
                        </Nav>
                    </Col>
                    <Col  md={10}>
                        {this.props.children}
                    </Col >
                </Row>
            </Grid>
        )
    }
}