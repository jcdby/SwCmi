import localStorage from 'localStorage';
import {Fetch} from '../../network/Fetch';
import {signInS} from '../SignInUP/SignInUpAction'


export function checkToken() {
  return (dispatch) => {
    let token = localStorage.getItem('userToken');
    console.log(token)
    if (token === 'undefined' || token === null) {
      console.log('there is no token!')
      
    } else {
      console.log('fetch data from server!')
      return Fetch.get('/signin/auth')
        .then(res => {
          dispatch(signInS(res));
          console.log(res)
        })
    }
  }


}