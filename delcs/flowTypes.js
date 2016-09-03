declare type GalleryState = {
  gallery_list: Array<Object>,
  isFetching: boolean,
  count: number,
  isUploading: boolean,
  uploadingStatusMsg: string,
  isUploadSuccess: boolean,
  status: Array,
  init: boolean
}

declare type UserState = {
  isLogined: boolean,
  userName: string,
  isSignIning: boolean,
  msg: string
}

declare type SignUpState = {
  isSignUping: boolean,
  isSignUpSuccess: boolean,
  errMsg: string
}

declare type StoreState = {
  forumState: forumReducer,
  galleryState: GalleryState,
  oldForumState: oldForumReducer,
  userState: UserState,
  signUpState: SignUpState
}



