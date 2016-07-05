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
                    <h2>Church Forum</h2>
                </Row>
                <Row className="content">
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
                    <Col  md={10}>
                        {this.props.children}
                    </Col >
                </Row>
            </Grid>
        )
    }
}