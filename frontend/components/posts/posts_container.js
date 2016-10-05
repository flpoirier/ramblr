import { connect } from 'react-redux';
import Posts from './posts';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps
)(Posts);
