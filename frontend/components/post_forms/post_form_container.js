import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import PostForm from './post_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  createPost: (post) => dispatch(createPost(post))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
