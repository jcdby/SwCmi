import React from 'react'
import {connect} from 'react-redux'
//import Header from '../views/Header'
//import {Link} from 'react-router'
import GalleryView from './GalleryView'
import * as gallery_actions from './GalleryActions'
import store from '../../store/Store'


export class GalleryPageContainer extends React.Component {

  constructor(props) {
    super(props)
    
  }

  componentDidMount() {
    store.dispatch(gallery_actions.fetchDataIfNeeded(1));
  }

  componentWillMount() {
  }




  handleSelect(activePage: number) {
    store.dispatch(gallery_actions.fetchDataIfNeeded(activePage));
  }


  render() {
    return (
      <div>
        <GalleryView handleSelect={this.handleSelect}  count={this.props.count} galleryList={this.props.galleryList}></GalleryView>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    galleryList: state.galleryState.gallery_list,
    count: Math.floor(state.galleryState.count / 10)
  }
};

const GalleryPage = connect(mapStateToProps)(GalleryPageContainer);
export default GalleryPage;

