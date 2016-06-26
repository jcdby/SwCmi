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
   }

  componentDidMount() {
    store.dispatch(gallery_actions.fetchGalleryList());
  }

  render() {
    return (
      <div>
        <Gallery galleryList={this.props.galleryList}></Gallery>
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

