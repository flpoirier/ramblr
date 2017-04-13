import React from 'react';
import { Link } from 'react-router';
import UserContainer from './user_container';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.updateSidebar = this.updateSidebar.bind(this);
    this.state = {
      undisplayedUsers: [],
      displayedUsers: []
    };
  }

  componentDidMount() {
    this.props.getFollows();
    this.props.requestUsers();
  }

  componentWillReceiveProps() {
    if (this.props.users) {
      let users = this.user_selection();
      this.setState({displayedUsers: users.slice(0,5)});
      this.setState({undisplayedUsers: users.slice(5)});
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
    this.props.users.forEach((user) => {
      if (!this.following(user)) {
        users.push(user);
      }
    });
    return users;
  }

  updateSidebar(user) {
    let undispUsers = this.state.undisplayedUsers;
    let dispUsers = this.state.displayedUsers;
    let idx = dispUsers.indexOf(user);
    if (undispUsers.length > 0) {
      dispUsers[idx] = undispUsers[0];
      this.setState({displayedUsers: dispUsers});
      this.setState({undisplayedUsers: undispUsers.slice(1)});
    } else {
      dispUsers.splice(idx, 1);
      this.setState({displayedUsers: dispUsers});
    }
  }

  users() {
    return (
      <div className="sidebar-all">
        <h1>Recommended Users</h1><br />
        <div className="sidebar">
          <div className="sidebar-all-users">
            {this.state.displayedUsers.map((user) => <UserContainer key={user.id} user={user} following={this.following(user)} updateSidebar={this.updateSidebar}/>)}
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
    if (this.props.users[0] !== 'undefined') {
      return this.users();
    } else {
      return this.filler();
    }
  }

}
export default Sidebar;
