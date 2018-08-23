
import {
  SESSION_CHECK_ATTEMPT,
  SESSION_CHECK_FAILED,
  SESSION_CHECK_FULFILLED,
  SESSION_CREATE_ATTEMPT,
  SESSION_CREATE_FAILED,
  SESSION_CREATE_FULFILLED,
  SESSION_DESTROY_FULFILLED,
  SESSION_PASSWORD_CHAGE_FULFILLED,
  SESSION_PASSWORD_CHANGE_ATTEMPT,
  SESSION_PASSWORD_CHANGE_FAILED,
  SESSION_UPDATE_FAILED
} from '../actions/session.action';
import Immutable from 'immutable';

import { tassign } from 'tassign';

const SESSION_INITIAL_STATE = {
  user: null,
  token: null,
  error: ''
};

function sessionCreateFulfilled (state, action) {
  return tassign(state, {
    user: action.payload.user,
    token: action.payload.token,
    error: ''
  });
}

export function session(state = SESSION_INITIAL_STATE, action = null) {
  switch (action.type) {
    case SESSION_CREATE_FULFILLED: return sessionCreateFulfilled(state, action);
    default:
      return state;
  }
}
