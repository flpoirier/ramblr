import { fetchPosts, createPost, deletePost } from '../util/post_api_util';
import { REQUEST_POSTS, CREATE_POST, DELETE_POST, REMOVE_POST, requestPosts, receivePosts, removePost } from '../actions/post_actions';

export default ({ getState, dispatch }) => next => action => {

  const postsSuccess = (data) => {
    dispatch(receivePosts(data));
    if (action.success) {
      action.success()
    }
  };

  const deleteSuccess = (data) => {
    dispatch(removePost(data.id));
  };

  const result = next(action);

  switch(action.type) {
    case REQUEST_POSTS:
      fetchPosts(postsSuccess);
      break;
    case CREATE_POST:
      createPost(action.post, postsSuccess)
      break;
    case DELETE_POST:
      deletePost(action.post, deleteSuccess)
      break;
    default:
      break;
  }
  return result;
};
