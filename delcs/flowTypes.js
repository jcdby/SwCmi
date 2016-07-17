declare type GalleryState = {
  gallery_list: Array<Object>,
  isFetching: boolean,
  count: nubmer
}

declare type UserState = {
  isLogined: boolean,
  userName: string,
  token: any,
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

