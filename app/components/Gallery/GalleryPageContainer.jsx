import React from 'react';
import {connect} from 'react-redux';
import GalleryView from './GalleryView';
import * as gallery_actions from './GalleryActions';
import store from '../../store/Store';
import ModalView from '../CommonViews/ModalView';
import AddPhotoView from './AddPhotoView'



export class GalleryPageContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }

    this.closeModal = this.closeModal.bind(this);
    this.addPhoto = this.addPhoto.bind(this);
  }

  componentDidMount() {
    store.dispatch(gallery_actions.fetchDataIfNeeded(1));
  }

  componentWillMount() {
  }

  closeModal() {
    this.setState({
      showModal: false
    })
  }

  addPhoto() {
    console.log("i am clicked!")
    this.setState({
      showModal: true
    });
    console.log(this.state.showModal)
  }




  handleSelect(activePage: number) {
    store.dispatch(gallery_actions.fetchDataIfNeeded(activePage));
  }


  render() {
    return (
      <div>
        <GalleryView handleSelect={this.handleSelect}  count={this.props.count} galleryList={this.props.galleryList} addPhoto={this.addPhoto}></GalleryView>
        <ModalView title='Upload Image' showModal={this.state.showModal} closeModal={this.closeModal}>
          <AddPhotoView></AddPhotoView>
        </ModalView>
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

