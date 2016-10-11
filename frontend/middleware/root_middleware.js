import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import PostMiddleware from './post_middleware';
import LikeMiddleware from './like_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  PostMiddleware,
  LikeMiddleware
);

export default RootMiddleware;
