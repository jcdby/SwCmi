import React from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import LoginComponent from './LoginComponent'


export default
    class HeaderView extends React.Component {
    render() {
        return (
            <div style={{ marginBottom: 50 }}>
                <Navbar inverse fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <LinkContainer to="/">
                                <NavItem eventKey={1}>
                                    수원 선교 교회
                                </NavItem>
                            </LinkContainer>

                        </Navbar.Brand>
                    </Navbar.Header>

                    <Nav>
                        <LinkContainer to="">
                            <NavItem eventKey={1}>
                                교회 소개
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="">
                            <NavItem eventKey={2}>
                                설교 동영상
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/gallery">
                            <NavItem eventKey={4}>
                                갤러리
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/old_forum">
                            <NavItem eventKey={5}>
                                계시판
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/forum">
                            <NavItem eventKey={6}>
                                New Forum
                            </NavItem>
                        </LinkContainer>
                        <NavDropdown eventKey={3} title="More" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}> Action
                            </MenuItem>
                            <MenuItem eventKey={3.2}> Another action
                            </MenuItem>
                            <MenuItem eventKey={3.3}> Something else here
                            </MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}> Separated link
                            </MenuItem>
                        </NavDropdown>
                    </Nav>
                    <LoginComponent clickLogin={this.props.clickLogin}></LoginComponent>                    
                </Navbar>
            </div>
        )
    }
}
