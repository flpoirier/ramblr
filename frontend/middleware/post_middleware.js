import { fetchPosts, createPost } from '../util/post_api_util';
import { REQUEST_POSTS, CREATE_POST, requestPosts, receivePosts } from '../actions/post_actions';

export default ({ getState, dispatch }) => next => action => {

  const postsSuccess = (data) => {
    dispatch(receivePosts(data));
    if (action.success) {
      action.success()
    }
  };

  const result = next(action);

  switch(action.type) {
    case REQUEST_POSTS:
      fetchPosts(postsSuccess);
      break;
    case CREATE_POST:
      createPost(action.post, postsSuccess)
      break;
    default:
      break;
  }
  return result;
};
