import React from 'react';
import {connect} from 'react-redux';
import GalleryView from './GalleryView';
import * as gallery_actions from './GalleryActions';
import store from '../../store/Store';
import ModalView from '../CommonViews/ModalView';
import AddPhotoView from './AddPhotoView';
import {uploadImgs,cancleUpload, hasFormErrors} from './GalleryActions';
import * as validationService from './validationService';
import {validationCodeConst} from './validationCodeConst';



export class GalleryPageContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      closeModalWhenUploading: false
    }

    this.closeModal = this.closeModal.bind(this);
    this.addPhoto = this.addPhoto.bind(this);
    this.uploadPhotos = this.uploadPhotos.bind(this);
    this.closeModalWhenUploading = this.closeModalWhenUploading.bind(this);
  }

  componentDidMount() {
    store.dispatch(gallery_actions.fetchDataIfNeeded(1));
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      closeModalWhenUploading: nextProps.isUploading
    })
  }

  closeModal() {
    this.setState({
      showModal: false
    })
  }

  closeModalWhenUploading() {
    this.setState({
      closeModalWhenUploading: true
    })
  }

  addPhoto() {
    this.setState({
      showModal: true
    });
    console.log(this.state.showModal)
  }

  uploadPhotos(data: FormData) {
    data.append('username', this.props.username);
    console.log(data.get('file'));
    let valiStatus = [];
    let memoStatus = validationService.validateInput(data.get('memo'));
    let subjectStatus = validationService.validateInput(data.get('subject'));
    let imgStatus = validationService.validateInput(data.get('file'));
    valiStatus.push(memoStatus);
    valiStatus.push(subjectStatus);
    valiStatus.push(imgStatus)

    let isFormError: boolean;

    valiStatus.forEach(status => {
      if(status !== validationCodeConst.VAL_OK){
        isFormError = true;
      }
    });

    let statusData = {}
    statusData.memoStatus = memoStatus;
    statusData.subjectStatus = subjectStatus;
    statusData.imgStatus = imgStatus;

    if(isFormError){
      store.dispatch(hasFormErrors(statusData));
    }else {
      store.dispatch(uploadImgs(data,statusData));
    }




  }

  cancelUpload() {
    store.dispatch(cancleUpload());
  }

  handleSelect(activePage: number) {
    store.dispatch(gallery_actions.fetchDataIfNeeded(activePage));
  }


  render() {
    return (
      <div>
        <GalleryView username={this.props.username} handleSelect={this.handleSelect}  count={this.props.count} galleryList={this.props.galleryList} addPhoto={this.addPhoto}></GalleryView>
        <ModalView title='Upload Image' showModal={this.state.showModal} closeModal={this.props.isUploading ? this.closeModalWhenUploading : this.closeModal}>
          <AddPhotoView  isUploadSuccess={this.props.isUploadSuccess} status={this.props.status} cancelUpload={this.cancelUpload} uploadPhotos={this.uploadPhotos} isUploading={this.props.isUploading} ></AddPhotoView>
        </ModalView>
      </div>
    )
  }
}

const mapStateToProps = (state: StoreState) => {
  return {
    galleryList: state.galleryState.gallery_list,
    count: Math.floor(state.galleryState.count / 10),
    isUploading: state.galleryState.isUploading,
    username: state.userState.userName,
    status: state.galleryState.status,
    isUploadSuccess: state.galleryState.isUploadSuccess,
  }
};
export default connect(mapStateToProps)(GalleryPageContainer);

