//@flow
import { gallery_actions } from '../actions/action-types'
import fetch from 'axios'

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
   return function (dispatch: Function, getState: Function) {
    let skip: number = (activePage - 1) * 10
    dispatch(requestGalleryList());
    return fetch.get('http://localhost:10000/photos?skip=' + skip)
      .then(res => dispatch(receiveGalleryList(res.data.items, res.data.count)))
  }
}

function shouldFetchData(state: GalleryState) {
    if(state.isFetching){
      return false;
    }else {
    return true;
    }
}

export function fetchDataIfNeeded(activePage: number) {
  if(activePage === null || activePage === undefined) {
    activePage = 1
  }
    return (dispatch: Function, getState: Function) => {
      console.log(getState().galleryState);
      if(shouldFetchData(getState().galleryState)){
        return dispatch(fetchGalleryList(activePage))
      }else{
        return Promise.resolve()
      }
    }
}

