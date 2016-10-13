import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import PostReducer from './post_reducer';
import UserReducer from './user_reducer';

export default combineReducers({
  session: SessionReducer,
  posts: PostReducer,
  users: UserReducer
});
