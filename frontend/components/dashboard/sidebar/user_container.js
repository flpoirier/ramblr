import { connect } from 'react-redux';
import { followUser, unfollowUser } from '../../../actions/follow_actions';
import User from './user';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  followUser: (user) => dispatch(followUser(user)),
  unfollowUser: (user) => dispatch(unfollowUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
