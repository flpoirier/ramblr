import React from 'react';
import { Link } from 'react-router';
import UserContainer from './user_container';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getFollows();
    this.props.requestUsers();
  }

  following(user) {
    let usr_following = false;
    this.props.follows.forEach((follow) => {
      if (follow.followed_user_id === user.id) {
        usr_following = true;
      }
    });
    return usr_following;
  }

  users() {
    return (
      <div className="sidebar-all">
        <h1>Recommended Users</h1><br />
        <div className="sidebar">
          <div className="sidebar-all-users">
            {this.props.users.map((user) => <UserContainer key={user.id} user={user} following={this.following(user)}/>)}
          </div>
        </div>
      </div>
    );
  }

  filler() {
    return (
      <div></div>
    );
  }

  render() {
    if (typeof this.props.userid !== 'undefined') {
      return this.filler();
    }
    if (this.props.users[0]) {
      return this.users();
    } else {
      return this.filler();
    }
  }

}
export default Sidebar;
