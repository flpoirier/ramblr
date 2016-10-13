import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Dashboard from './dashboard';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  users: state.session.users
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
