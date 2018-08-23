import { dispatch } from 'redux';
import * as Api from '../../api';

import {
  SESSION_CHECK_ATTEMPT,
  SESSION_CHECK_FAILED,
  SESSION_CHECK_FULFILLED,
  SESSION_CREATE_FULFILLED
} from '../actions/session.action';

export function signIn (loginName, password) {
  return (dispatch) => {
    return Api.login(loginName, password)
      .then(response => {
        console.log(response);
        dispatch({
          type: SESSION_CREATE_FULFILLED,
          payload: response.data.payload
        });
      });
  }
}
