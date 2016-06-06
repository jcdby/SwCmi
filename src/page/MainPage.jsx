import React from 'react'
import Header from './../components//Header'
import { Footer } from 'rebass'
import CellIntro from './../components//CellIntro'
import Carousel from '../components//Carousel'

export default class MainPage extends React.Component {
  render () {
    return (
    <div>
      <Header></Header>
      <div><Carousel/></div>
      <div style={{margin: 50}}><CellIntro/></div>
      <div>
        <div className="page-header col-md-12">
          <h1>교회에 오신 것을 환영합니다</h1>
        </div>
        <iframe
          className={'col-md-10 col-md-offset-1'}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.7450488474647!2d127.04270351483804!3d37.27747237985306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5b540d39fa51%3A0xf5a3fd3554188018!2z7IiY7JuQ7ISg6rWQ6rWQ7ZqM!5e0!3m2!1sen!2skr!4v1462593952285"
          width="600"
          height="450"
          frameborder="0"
          style={{border: 0}}
          allowfullscreen></iframe>
      </div>
      <div className={'col-md-12'}>
        <Footer>
          SuWon Missinory Church
        </Footer>
      </div>
    </div>
    )
  }
}
