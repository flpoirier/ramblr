import { RECEIVE_USERS } from '../actions/user_actions';
import merge from 'lodash/merge';

const UserReducer = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_USERS:
      return action.users;
    default:
      return state;
  }
};

export default UserReducer;
