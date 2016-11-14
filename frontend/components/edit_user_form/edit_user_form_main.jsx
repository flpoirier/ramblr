import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from '../dashboard/header/header_container';
import NewPostNav from '../dashboard/new_post_nav';
import EditUserFormContainer from './edit_user_form_container';

class EditUserFormMain extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="post-form-main">
          <HeaderContainer />
          <NewPostNav />
          <EditUserFormContainer />
      </div>
    );
  }

}

export default EditUserFormMain;
