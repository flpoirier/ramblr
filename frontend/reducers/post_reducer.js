import { RECEIVE_POSTS, REMOVE_POST, RECEIVE_POST } from '../actions/post_actions';
import merge from 'lodash/merge';

const PostReducer = (state = [], action) => {
  switch(action.type){
    case RECEIVE_POSTS:
      return action.posts;
    case REMOVE_POST:
      let rem_idx = state.findIndex((post) => {
        if (post.id === action.postId) { return true; }
      });
      let rem_newState = state.slice();
      rem_newState.splice(rem_idx, 1);
      return rem_newState;
    case RECEIVE_POST:
      const rec_idx = state.findIndex((post) => {
        if (post.id === action.post.id) { return true; }
      });
      const rec_newState = state.slice();
      rec_newState[rec_idx] = action.post;
      return rec_newState;
    default:
      return state;
  }
};

export default PostReducer;
