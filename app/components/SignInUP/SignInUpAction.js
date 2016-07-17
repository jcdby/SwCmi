import {sign_in_up_actions} from '../actions/action-types'
import fetch from 'axios';
import config from '../../configs/axios_config'


function pre_signUp() {
  return ({
    type: sign_in_up_actions.SIGN_UP,
  })
}

function signUPS(result: Objcet) {
  return ({
    type: sign_in_up_actions.SIGN_UP_SUCCESS,
    result
  })
}

function signUPF(result: Object) {
  return ({
    type: sign_in_up_actions.SIGN_UP_FAILE,
    result
  })
}

function signInS(result: any) {
  return ({
    type: sign_in_up_actions.SIGN_IN_SUCCESS,
    result
  })
}

function signInF(result: any) {
  return ({
    type: sign_in_up_actions.SIGN_IN_FAILE,
    result
  })
}

function pre_signIn() {
  return ({
    type: sign_in_up_actions.SIGN_IN
  })
}

export function signUP(userInfo: Object) {
  return (dispatch) => {
    dispatch(pre_signUp());
    let signUpURI: string = 'http://localhost:10000' + '/signup';
    return fetch.post(signUpURI, userInfo)
      .then(res => {
        if(res.data.isSignUpSuccess){
          dispatch(signUPS(res));
          dispatch(signInS(res));
        }else{
          dispatch(signUPF(res));
        }
      })
  }
}

export function signIn(userInfo: Object) {
  return (dispatch) => {
    dispatch(pre_signIn());
    let signInURI: string = 'http://localhost:10000' + '/signin';
    return fetch.post(signInURI, userInfo)
      .then(res => {
        if(res.data.isSuccess){
          dispatch(signInS(res));
        }else{
          dispatch(signInF(res))
        }
        
      })
  }
}

