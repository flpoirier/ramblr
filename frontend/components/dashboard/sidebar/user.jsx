import React from 'react';
import { Link } from 'react-router';

class User extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar-users">
        <img className="author-image" src={this.props.user.avatar} />
        {this.props.user.username}
      </div>
    );
  }

}

export default User;
