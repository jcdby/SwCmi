import {sign_in_up_actions} from '../actions/action-types'

const initialState: SignUpState = {
  isSignUping: false,
  isSignUpSuccess: false,
  errMsg: ''
};

const initialUserState: UserState = {
  isLogined: false,
  isSignIning: false,
  userName: '',
  token: '',
  msg: ''
}

export function signUpReducer(state = initialState, action: any) {
  switch (action.type) {
    case sign_in_up_actions.SIGN_UP:
      return {...state, isSignUping: true }
      break;
    case sign_in_up_actions.SIGN_UP_SUCCESS:
      return {...state, isSignUping: false, isSignUpSuccess: true }
      break;
    case sign_in_up_actions.SIGN_UP_FAILE:
      return {...state, isSignUping: false, isSignUpSuccess: false, errMsg: action.result.data.msg }
      break;
    default:
      return state;
  }
}

export function signInReducer(state = initialUserState, action: any) {
  switch (action.type) {
    case sign_in_up_actions.SIGN_IN:
      return {...state, isSignIning: true }
      break;
    case sign_in_up_actions.SIGN_IN_SUCCESS:
      return {...state, isLogined: true, token: action.result.data.token, userName: action.result.data.userInfo.username, isSignIning: false, msg: action.result.data.msg }
      break;
    case sign_in_up_actions.SIGN_IN_FAILE:
      return {...state, isLogined: false }
      break;
    default:
      return state;
  }
}
