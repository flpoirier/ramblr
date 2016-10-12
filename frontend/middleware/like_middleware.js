import { like, dislike } from '../util/like_api_util';
import { receivePost } from '../actions/post_actions';
import { LIKE_POST, DISLIKE_POST, likePost, dislikePost } from '../actions/like_actions';

export default ({ getState, dispatch }) => next => action => {

  const success = (post) => { dispatch(receivePost(post)); };

  const result = next(action);

  switch(action.type) {
    case LIKE_POST:
      like(action.like, success);
      break;
    case DISLIKE_POST:
      dislike(action.like, success);
      break;
    default:
      break;
  }

  return result;

};
