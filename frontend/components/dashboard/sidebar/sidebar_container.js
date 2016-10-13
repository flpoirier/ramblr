import { connect } from 'react-redux';
import { requestUsers } from '../../../actions/user_actions';
import Sidebar from './sidebar';

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  requestUsers: () => dispatch(requestUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
