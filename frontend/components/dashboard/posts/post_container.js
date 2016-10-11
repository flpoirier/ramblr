import { connect } from 'react-redux';
import { deletePost } from '../../../actions/post_actions';
import Post from './post';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  post: state.post,
});

const success = () => { hashHistory.push("/"); };

const mapDispatchToProps = dispatch => ({
  deletePost: (post) => dispatch(deletePost(post, success))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
