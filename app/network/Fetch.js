import localStorage from 'localStorage';
import axios from 'axios';


let config = {
  baseURL: 'http://localhost:10000',
  timeout: 2500,
  headers: {
    'Authorization': localStorage.getItem('userToken') || '',
    'Content-Type': 'application/x-www-form-urlencoded'
  }

}

export let Fetch = axios.create(config);


