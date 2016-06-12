import React from 'react'
import Header from './../components//Header'
import {Link} from 'react-router'

export default class GalleryPage extends React.Component {
  render () {
    return (<h1>hello <Link to="/gallery" >gallery</Link> </h1>)
  }
}