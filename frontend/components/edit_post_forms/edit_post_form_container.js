import { connect } from 'react-redux';
import { getPost, editPost } from '../../actions/post_actions';
import EditPostForm from './edit_post_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  post: state.posts
});

const mapDispatchToProps = dispatch => ({
  getPost: (post, success) => dispatch(getPost(post, success)),
  editPost: (post, success) => dispatch(editPost(post, success))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPostForm);
