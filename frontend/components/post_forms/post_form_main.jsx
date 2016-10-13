import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from '../dashboard/header/header_container';
import NewPostNav from '../dashboard/new_post_nav';
import PostFormContainer from './post_form_container';
import SidebarContainer from '../dashboard/sidebar/sidebar_container'

class PostFormMain extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="post-form-main">
          <HeaderContainer />
          <NewPostNav />
          <PostFormContainer posttype={this.props.params.post_type}/>
          <SidebarContainer />
      </div>
    );
  }

}

export default PostFormMain;
