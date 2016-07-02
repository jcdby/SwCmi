import React from 'react'
import {connect} from 'react-redux'
import Header from '../views/Header'
import {Link} from 'react-router'
import Gallery from './../views/Gallery'
import * as gallery_actions from '../actions/GalleryActions'
import store from '../../store/Store'


 export  class GalleryPageContainer extends React.Component {

   constructor(props){
     super(props)
     this.state ={
       skip: 0,
       limit: 20
     }
   }

  componentDidMount() {
    store.dispatch(gallery_actions.fetchGalleryList(this.state));
    window.addEventListener('scroll', () => {console.log('scrolling!! position is ' + window.pageYOffset + ' screenTop is ' + this.refs.mygallery.scrollHeight)} );
  }

  render() {
    return (
      <div ref='mygallery'>
        <Gallery  galleryList={this.props.galleryList}></Gallery>
      </div> 
    )
  }
}

const mapStateToProps = (state) => {
  return {
    galleryList : state.galleryState.gallery_list
  }
}

 const GalleryPage = connect(mapStateToProps)(GalleryPageContainer);
 export default GalleryPage;

