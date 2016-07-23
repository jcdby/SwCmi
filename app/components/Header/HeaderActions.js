import localStorage from 'localStorage';
import {Fetch} from '../../network/Fetch';
import {signInS} from '../SignInUP/SignInUpAction';
import {sign_in_up_actions} from '../actions/action-types'


export function checkToken() {
  return (dispatch) => {
    let token = localStorage.getItem('userToken');
    if (token === 'undefined' || token === null) {
      console.log('there is no token!');      
    } else {
      return Fetch.get('/signin/auth', {headers: {'Authorization': token}})
        .then(res => {
          dispatch(signInS(res));
        })
    }
  }
}


export function logout() {
  return {
    type: sign_in_up_actions.LOGOUT
  }
}