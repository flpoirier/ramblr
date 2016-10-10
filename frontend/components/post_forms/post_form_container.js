import { connect } from 'react-redux';
import { requestPosts } from '../../actions/post_actions';
import PostForm from './post_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  requestPosts: () => dispatch(requestPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
