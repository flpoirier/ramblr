import { connect } from 'react-redux';
import { removePost, deletePost, receivePost } from '../../../actions/post_actions';
import { likePost, dislikePost } from '../../../actions/like_actions';
import Post from './post';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const deleteSuccess = (post) => { dispatch(removePost(post)); };

const mapDispatchToProps = dispatch => ({
  deletePost: (post) => dispatch(deletePost(post, deleteSuccess)),
  likePost: (like) => dispatch(likePost(like)),
  dislikePost: (like) => dispatch(dislikePost(like))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
