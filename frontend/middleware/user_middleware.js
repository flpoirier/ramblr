import { fetchUsers, updateUser } from '../util/user_api_util';
import { REQUEST_USERS, EDIT_USER, requestUsers, receiveUsers, editUser } from '../actions/user_actions';

export default ({ getState, dispatch }) => next => action => {

  const success = (data) => {
    dispatch(receiveUsers(data));
      if (action.success) {
        action.success()
      }
  };

  const result = next(action);

  switch(action.type) {
    case REQUEST_USERS:
      fetchUsers(success);
      break;
    case EDIT_USER:
      updateUser(action.user, action.success);
      break;
    default:
      break;
  }

  return result;

};
