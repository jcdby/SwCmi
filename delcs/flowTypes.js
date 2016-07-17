declare type GalleryState = {
  gallery_list: Array<Object>;
  isFetching: boolean;
  count: nubmer
}

declare type UserState = {
  isLogined: boolean;
  userName: string;
  isSignUping: boolean;
  msg: string,
  token: any,
  isSignUpSuccess: boolean,
}

declare type StoreState = {
  forumState: forumReducer,
  galleryState: GalleryState,
  oldForumState: oldForumReducer,
  userState: UserState
}