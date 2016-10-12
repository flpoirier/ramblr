import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import PostMiddleware from './post_middleware';
import LikeMiddleware from './like_middleware';
import FollowMiddleware from './follow_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  PostMiddleware,
  LikeMiddleware,
  FollowMiddleware
);

export default RootMiddleware;
