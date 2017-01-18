import { connect } from 'react-redux';
import { deletePost, requestPosts } from '../../../actions/post_actions';
import Posts from './posts';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  requestPosts: (user_id) => dispatch(requestPosts(user_id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
