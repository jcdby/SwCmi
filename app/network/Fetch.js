import localStorage from 'localStorage';
import axios from 'axios';



let token = localStorage.getItem('userToken');

let config = {
  baseURL: 'http://localhost:10000',
  timeout: 2500,
  
}



export let Fetch = axios.create(config);





