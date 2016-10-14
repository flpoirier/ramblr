import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import FrontPage from './front_page';

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  null,
  mapDispatchToProps
)(FrontPage);
