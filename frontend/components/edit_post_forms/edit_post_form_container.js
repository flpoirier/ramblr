import { connect } from 'react-redux';
import { editPost } from '../../actions/post_actions';
import EditPostForm from './edit_post_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  editPost: (post, success) => dispatch(editPost(post, success))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPostForm);
