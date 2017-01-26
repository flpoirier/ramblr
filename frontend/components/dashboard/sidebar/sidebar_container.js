import { connect } from 'react-redux';
import { requestUsers } from '../../../actions/user_actions';
import { getFollows } from '../../../actions/follow_actions';
import Sidebar from './sidebar';

const mapStateToProps = state => ({
  users: state.users,
  follows: state.follows
});

const mapDispatchToProps = dispatch => ({
  requestUsers: () => dispatch(requestUsers()),
  getFollows: () => dispatch(getFollows())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
