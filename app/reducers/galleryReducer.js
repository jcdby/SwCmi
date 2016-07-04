//@flow
import { gallery_actions } from '../components/actions/action-types'



const initialState: GalleryState = {
  gallery_list: [],
  isFetching: false,
  count: 0
}


export default function galleryListReducer (state: GalleryState = initialState , action: any) {
  switch (action.type) {
    case gallery_actions.REQUEST_GALLERY_LIST:
      return {...state, isFetching: true}
    case gallery_actions.RECEIVE_GALLERY_LIST:
      return {...state, gallery_list: action.gallery_list, isFetching: false, count: action.count}
    default:
      return state
  }
}
