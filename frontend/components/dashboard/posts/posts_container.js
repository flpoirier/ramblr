import { connect } from 'react-redux';
import { deletePost, requestPosts } from '../../../actions/post_actions';
import { getFollows } from '../../../actions/follow_actions';
import Posts from './posts';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  posts: state.posts,
  follows: state.follows
});

const mapDispatchToProps = dispatch => ({
  requestPosts: (user_id) => dispatch(requestPosts(user_id)),
  getFollows: () => dispatch(getFollows())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
