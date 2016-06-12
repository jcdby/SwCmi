import React from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import { Link } from 'react-router'

export default class Header extends React.Component {
  render () {
    return (
    <div style={{ marginBottom: 50 }}>
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">수원 선교 교회</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            교회 소개
          </NavItem>
          <NavItem eventKey={2} href="#">
            설교 동영상
          </NavItem>
          <NavItem eventKey={4} href="/gallery">    
            갤러리 
          </NavItem>
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
      </Navbar>
    </div>

    )
  }
}
