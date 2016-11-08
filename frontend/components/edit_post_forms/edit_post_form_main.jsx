import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from '../dashboard/header/header_container';
import NewPostNav from '../dashboard/new_post_nav';
import EditPostFormContainer from './edit_post_form_container';
import SidebarContainer from '../dashboard/sidebar/sidebar_container';

class EditPostFormMain extends React.Component {

  constructor(props) {
    super(props);
    debugger
  }

  render() {
    return (
      <div className="post-form-main">
          <HeaderContainer />
          <NewPostNav />
          <EditPostFormContainer postid={this.props.params.post_id}/>
      </div>
    );
  }

}

export default EditPostFormMain;

// just put sidebar container back under post form container if you want to show it again
