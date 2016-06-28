import { gallery_actions } from './action-types'
import fetch from 'axios'

export function requestGalleryList () {
  return {
    type: gallery_actions.REQUEST_GALLERY_LIST
  }
}

export function receiveGalleryList (gallery_list) {
  return {
    type: gallery_actions.RECEIVE_GALLERY_LIST,
  gallery_list}
}

export function fetchGalleryList () {
  return function (dispatch) {
    dispatch(requestGalleryList());
    return fetch.get('http://localhost:10000/photos/')
      .then(res => dispatch(receiveGalleryList(res.data)))
  }
}
