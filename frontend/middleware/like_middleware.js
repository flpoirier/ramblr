import { like, dislike } from '../util/like_api_util';
import { LIKE_POST, DISLIKE_POST, likePost, dislikePost } from '../actions/like_actions';

export default ({ getState, dispatch }) => next => action => {

  const likeSuccess = () => {
    console.log("I like this!");
  };

  const dislikeSuccess = () => {
    console.log("I don't like this anymore!");
  };

  const result = next(action);

  switch(action.type) {
    case LIKE_POST:
      likePost(action.like, likeSuccess);
      break;
    case DISLIKE_POST:
      dislikePost(action.like, dislikeSuccess);
      break;
    default:
      break;
  }

  return result;

};
