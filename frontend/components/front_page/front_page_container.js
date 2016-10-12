import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import FrontPage from './front_page';

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user))
});

export default connect(
  null,
  mapDispatchToProps
)(FrontPage);
