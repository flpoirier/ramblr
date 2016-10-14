import { RECEIVE_CURRENT_USER, LOGOUT, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, {
        currentUser
      });
    case LOGOUT:
      return merge({}, _nullUser);
    case RECEIVE_ERRORS:
      let errors = action.errors;
      return merge({}, _nullUser, {
        errors
      });
    case CLEAR_ERRORS:
      errors = [];
      return merge({}, _nullUser, {
        errors
      });
    default:
      return state;
  }
};



export default SessionReducer;
