import {sign_in_up_actions} from '../actions/action-types'

const initialState: UserState ={
  isLogined: false,
  userName: '',
  isSignUping: false,
  msg: '',
  token: null,
  isSignUpSuccess: false,
}

export function signUpReducer(state = initialState, action: any) {
  switch (action.type) {
    case sign_in_up_actions.SIGN_UP:
      return {...state, isSignUping: true}
      break;
    case sign_in_up_actions.SIGN_UP_SUCCESS:
      return {...state, isSignUping:false, isLogined: true, userName: action.result.data.userInfo.username, msg: action.result.data.msg, token: action.result.data.token, isSignUpSuccess: true}
      break;
    case sign_in_up_actions.SIGN_UP_FAILE:
      return {...state,  isSignUping: false, msg: action.result.data.msg, isSignUpSuccess: false}
      break;
    default:
      return state
  }
}
