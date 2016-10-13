import { fetchUsers } from '../util/user_api_util';
import { REQUEST_USERS, requestUsers, receiveUsers } from '../actions/user_actions';

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
    default:
      break;
  }

  return result;

};
