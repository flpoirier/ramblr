import { connect } from 'react-redux';
import { editUser } from '../../actions/user_actions';
import EditUserForm from './edit_user_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  editUser: (user, success) => dispatch(editUser(user, success))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUserForm);
