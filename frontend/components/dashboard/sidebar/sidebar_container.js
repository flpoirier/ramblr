import { connect } from 'react-redux';
import { followUser, unfollowUser } from '../../../actions/follow_actions';
import Sidebar from './sidebar';

const mapStateToProps = state => ({
  users: state.session.users
});

const mapDispatchToProps = dispatch => ({
  followUser: (user) => dispatch(followUser(user)),
  unfollowUser: (user) => dispatch(unfollowUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
