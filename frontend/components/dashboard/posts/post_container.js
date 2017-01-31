import { connect } from 'react-redux';
import { removePost, deletePost, receivePost } from '../../../actions/post_actions';
import { likePost, dislikePost } from '../../../actions/like_actions';
import { followUser, unfollowUser } from '../../../actions/follow_actions';
import Post from './post';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const deleteSuccess = (post) => { dispatch(removePost(post)); };

const mapDispatchToProps = dispatch => ({
  deletePost: (post) => dispatch(deletePost(post, deleteSuccess)),
  likePost: (like) => dispatch(likePost(like)),
  dislikePost: (like) => dispatch(dislikePost(like)),
  followUser: (user) => dispatch(followUser(user)),
  unfollowUser: (user) => dispatch(unfollowUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
