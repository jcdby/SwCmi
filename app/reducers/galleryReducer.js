import { gallery_actions } from '../components/actions/action-types'

const initialState = {
  gallery_list: [],
  isFetching: false
}

export default function galleryListReducer (state = initialState , action) {
  switch (action.type) {
    case gallery_actions.REQUEST_GALLERY_LIST:
      console.log('requsted !')
      // var newState = Object.assign({}, state, {isFetching: true})
      var newState = {...state, isFetching: true}
      return newState

    case gallery_actions.RECEIVE_GALLERY_LIST:
      // var newState = Object.assign({}, state, { gallery_list: action.gallery_list, isFetching: false})
      var newState = {...state, gallery_list: action.gallery_list, isFetching: false}
      return newState

    default:
      return state
  }
}
