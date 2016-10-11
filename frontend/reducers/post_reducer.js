import { RECEIVE_POSTS, REMOVE_POST } from '../actions/post_actions';
import merge from 'lodash/merge';

const PostReducer = (state = [], action) => {
  switch(action.type){
    case RECEIVE_POSTS:
      return action.posts;
    case REMOVE_POST:
      const idx = state.findIndex((post) => {
        if (post.id === action.postId) { return true; }
      });
      const newState = state.slice();
      newState.splice(idx, 1);
      return newState;
    default:
      return state;
  }
};

export default PostReducer;
