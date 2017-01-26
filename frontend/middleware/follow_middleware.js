import { follow, unfollow, fetchFollows } from '../util/follow_api_util';
import { FOLLOW_USER, UNFOLLOW_USER, GET_FOLLOWS, RECEIVE_FOLLOWS, followUser, unfollowUser, getFollows, receiveFollows } from '../actions/follow_actions';
import { receivePosts } from '../actions/post_actions';


export default ({ getState, dispatch }) => next => action => {

  const success = (posts) => { dispatch(receivePosts(posts)); };
  const followSuccess = (follows) => { dispatch(receiveFollows(follows)); };

  const result = next(action);

  switch(action.type) {
    case FOLLOW_USER:
      follow(action.user, success);
      break;
    case UNFOLLOW_USER:
      unfollow(action.user, success);
      break;
    case GET_FOLLOWS:
      fetchFollows(followSuccess);
      break;
    default:
      break;
  }

  return result;

};
