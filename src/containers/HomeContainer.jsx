import React from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import Carousel from 'react-bootstrap/lib/Carousel'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Thumbnail from 'react-bootstrap/lib/Thumbnail'
import Button from 'react-bootstrap/lib/Button'
import Image from 'react-bootstrap/lib/Image'

const navbarInstance = (
  <Navbar inverse  fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">수원 선교 교회</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">교회 소개</NavItem>
      <NavItem eventKey={2} href="#">말씀</NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
);

const carouselInstance = (
  <Carousel>
    <Carousel.Item>
      <img style={{ height: 500 }} width={2200} src="/assets/childrenChrismas.jpg"/>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{ height: 500 }} width={2200} height={300} alt="900x500" src="/assets/Happyness.jpg"/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{ height: 500 }}  width={2200} height={300} alt="900x500" src="/assets/summer2.jpg"/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

const thumbnailInstance = (
  <Grid>
    <Row>
      <Col xs={6} md={4}>
        <Thumbnail>
          <div style={{ display: 'flex', justifyContent: 'center' }}><Image style={{ width: 150, height: 150 }} src="/assets/davidcell.jpg" circle></Image></div>
          <h3>Thumbnail label</h3>
          <p>Description</p>
          <p>
            <Button bsStyle="default">View Details</Button>
          </p>
        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail>
          <div style={{ display: 'flex', justifyContent: 'center' }}><Image style={{ width: 150, height: 150 }} src="/assets/marycell.png" circle></Image></div>
          <h3>Thumbnail label</h3>
          <p>Description</p>
          <p>
            <Button bsStyle="default">View Details</Button>
          </p>
        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail>
          <div style={{ display: 'flex', justifyContent: 'center' }}><Image style={{ width: 150, height: 150 }} src="/assets/로뎀.png" circle></Image></div>
          <h3>Thumbnail label</h3>
          <p>Description</p>
          <p>
            <Button bsStyle="default">View Details</Button>
          </p>
        </Thumbnail>
      </Col>
    </Row>
  </Grid>
);

export default class HomeContainer extends React.Component {
  render() {
    return (<div>
      <div style={{ marginBottom: 50 }}
        >{navbarInstance}</div>
      <div 
        >{carouselInstance}</div>
      <div className="page-header col-md-12">
        <h1>셀 소개</h1>
      </div>
      <div style={{ marginBottom: 50 }}
        >{thumbnailInstance}</div>
      <div className="page-header col-md-12">
        <h1>교회에 오신 것을 환영합니다</h1>
      </div>
      <iframe className={'col-md-10 col-md-offset-1'} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.7450488474647!2d127.04270351483804!3d37.27747237985306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5b540d39fa51%3A0xf5a3fd3554188018!2z7IiY7JuQ7ISg6rWQ6rWQ7ZqM!5e0!3m2!1sen!2skr!4v1462593952285" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen></iframe>
    </div>

    )
  }
}
