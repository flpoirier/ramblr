import React from 'react';
import { Link } from 'react-router';
import UserContainer from './user_container';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestUsers();
  }

  users() {
    return (
      <div className="sidebar-all">
        <h1>Recommended Users</h1><br />
        <div className="sidebar">
          <div className="sidebar-all-users">
            {this.props.users.map((user) => <UserContainer key={user.id} user={user} />)}
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
    if (this.props.users[0]) {
      return this.users();
    } else {
      return this.filler();
    }
  }

}
export default Sidebar;
