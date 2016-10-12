import { connect } from 'react-redux';
import { deletePost, requestPosts } from '../../../actions/post_actions';
import Posts from './posts';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  posts: state.posts,
});

const success = () => { hashHistory.push("/"); };

const mapDispatchToProps = dispatch => ({
  requestPosts: () => dispatch(requestPosts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
