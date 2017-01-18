import { fetchPosts, createPost, deletePost, updatePost, getPost } from '../util/post_api_util';
import { REQUEST_POSTS, CREATE_POST, DELETE_POST, REMOVE_POST, EDIT_POST, GET_POST, requestPosts, receivePosts, removePost, showPost } from '../actions/post_actions';

export default ({ getState, dispatch }) => next => action => {

  const postsSuccess = (data) => {
    dispatch(receivePosts(data));
    if (action.success) {
      action.success()
    }
  };

  const editSuccess = data => {
    dispatch(showPost(data));
  };

  const deleteSuccess = (data) => {
    dispatch(removePost(data.id));
  };

  const result = next(action);

  switch(action.type) {
    case REQUEST_POSTS:
      fetchPosts(action.user_id, postsSuccess);
      break;
    case GET_POST:
      getPost(action.post.id, editSuccess);
      break;
    case CREATE_POST:
      createPost(action.post, postsSuccess)
      break;
    case EDIT_POST:
      updatePost(action.post, postsSuccess)
      break;
    case DELETE_POST:
      deletePost(action.post, deleteSuccess)
      break;
    default:
      break;
  }

  return result;
};
