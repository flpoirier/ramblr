import { connect } from 'react-redux';
import { removePost, deletePost } from '../../../actions/post_actions';
import { likePost, dislikePost } from '../../../actions/like_actions';
import { hashHistory } from 'react-router';
import Post from './post';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const success = (post) => { dispatch(removePost(post)); };

const mapDispatchToProps = dispatch => ({
  deletePost: (post) => dispatch(deletePost(post, success)),
  likePost: (like) => dispatch(likePost(like, success)),
  dislikePost: (like) => dispatch(dislikePost(like, success))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
