import { connect } from 'react-redux';
import { requestUsers } from '../../../actions/user_actions';
import { followUser, unfollowUser } from '../../../actions/follow_actions';
import Sidebar from './sidebar';

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  requestUsers: () => dispatch(requestUsers()),
  followUser: (user) => dispatch(followUser(user)),
  unfollowUser: (user) => dispatch(unfollowUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
