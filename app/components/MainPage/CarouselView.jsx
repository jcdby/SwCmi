import React from 'react'
import Carousel from 'react-bootstrap/lib/Carousel'

export default class CarouselView extends React.Component {
  render() {
    return (<Carousel>
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
    </Carousel>)
  }
}