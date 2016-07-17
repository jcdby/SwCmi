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

export function signUP(userInfo: Object) {
  return (dispatch) => {
    dispatch(pre_signUp());
    let signUpURI: string = 'http://localhost:10000' + '/signup'
    return fetch.post(signUpURI, userInfo)
      .then(res => {
        if(res.data.isSignUpSuccess){
          dispatch(signUPS(res));
        }else{
          dispatch(signUPF(res));
        }
      })
  }
}

