import axios from 'axios';
import config from '../config';

console.log(config);

const CONFIG = config[__DEV__ ? 'development' : 'production'];
const SIGN_IN = CONFIG.API_URL + '/api/auth/signin';
export function login (loginName, password) {
  return axios.post(SIGN_IN, {loginName, password})
    .then(result => {
      return result;
    });
}
