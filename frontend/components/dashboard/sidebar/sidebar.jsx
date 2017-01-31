import React from 'react';
import { Link } from 'react-router';
import UserContainer from './user_container';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.updateSidebar = this.updateSidebar.bind(this);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.props.getFollows();
    this.props.requestUsers();
  }

  componentWillReceiveProps() {
    if (this.props.users) {
      this.setState({users: this.props.users});
    }
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

  user_selection() {
    let users = [];
    this.state.users.forEach((user) => {
      if (!this.following(user)) {
        users.push(user);
      }
    });
    return users;
  }

  updateSidebar(user) {
    let usrs = this.state.users;
    let idx = usrs.indexOf(user);
    usrs.splice(idx, 1);
    this.setState({users: usrs});

  }

  users() {
    return (
      <div className="sidebar-all">
        <h1>Recommended Users</h1><br />
        <div className="sidebar">
          <div className="sidebar-all-users">
            {this.user_selection().slice(0,5).map((user) => <UserContainer key={user.id} user={user} following={this.following(user)} updateSidebar={this.updateSidebar}/>)}
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
