//@flow
import { gallery_actions } from '../actions/action-types'
import {Fetch} from '../../network/Fetch';

function requestGalleryList () {
  return {
    type: gallery_actions.REQUEST_GALLERY_LIST
  }
}

function receiveGalleryList (gallery_list: Array<Object>, count: number) {
  return {
    type: gallery_actions.RECEIVE_GALLERY_LIST,
    gallery_list,
    count
  }
}

function fetchGalleryList (activePage: number) {
  let token = localStorage.getItem('userToken');
   return function (dispatch: Function, getState: Function) {
    let skip: number = (activePage - 1) * 10
    dispatch(requestGalleryList());
    return Fetch.get('/photos?skip=' + skip, {headers: {'Authorization': token}})
      .then(res => dispatch(receiveGalleryList(res.data.items, res.data.count)))
  }
}

function shouldFetchData(state: GalleryState) {
    return !state.isFetching;
}

export function fetchDataIfNeeded(activePage: number) {
  if(activePage === null || activePage === undefined) {
    activePage = 1
  }
    return (dispatch: Function, getState: Function) => {
      if(shouldFetchData(getState().galleryState)){
        return dispatch(fetchGalleryList(activePage))
      }else{
        return Promise.resolve()
      }
    }
}



function uploadingImgs(status) {
  return {
    type: gallery_actions.UPLOADING_IMGS,
    status
  }
}

function uploadSuccess() {
  return {
    type: gallery_actions.UPLOAD_SUCCESS
  }
}

function uploadFail() {
  return {
    type: gallery_actions.UPLOAD_FAILE
  }
}

export function hasFormErrors(status) {
  return {
    type: gallery_actions.FORM_ERROR,
    status
  }
}

export function uploadImgs(uploadData: FormData, status) {
  return (dispatch: Function) => {
      dispatch(uploadingImgs(status));
      return Fetch.post('/photos', uploadData)
        .then(res => {
          if(res.data.isSuccess){
            dispatch(uploadSuccess())
          }else {
            dispatch(uploadFail())
          }
        })
  }

}

export function cancleUpload() {
  return {
    type: gallery_actions.UPLOAD_CANCLE,
    status: {
      memoStatus: 0,
      subjectStatus: 0,
      imgStatus: 0
    }
  }
}

