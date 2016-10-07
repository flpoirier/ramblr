
import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import PostMiddleware from './post_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  PostMiddleware
);

export default RootMiddleware;
