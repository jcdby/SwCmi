//@flow
import { gallery_actions } from '../actions/action-types'

const initialState: GalleryState = {
  gallery_list: [],
  isFetching: false,
  count: 0,
  isUploading: false,
  isUploadSuccess: undefined,
  status: [],
};

export default function galleryListReducer (state: GalleryState = initialState , action: any) {
  switch (action.type) {
    case gallery_actions.REQUEST_GALLERY_LIST:
      return {...state, isFetching: true}
    case gallery_actions.RECEIVE_GALLERY_LIST:
      return {...state, gallery_list: action.gallery_list, isFetching: false, count: action.count};
    case gallery_actions.UPLOADING_IMGS:
      return {...state, isUploading: true, status: action.status};
    case gallery_actions.UPLOAD_CANCLE:
      location.reload();
      return {...state, isUploading: false, status: action.status, isUploadSuccess: undefined};
    case gallery_actions.UPLOAD_SUCCESS:
      return {...state, isUploading: false, isUploadSuccess: true};
    case gallery_actions.UPLOAD_FAILE:
      return {...state, isUploading: false, isUploadSuccess: false };
    case gallery_actions.FORM_ERROR:
      return {...state, status: action.status};
    default:
      return state
  }
}


