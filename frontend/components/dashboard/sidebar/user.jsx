import React from 'react';
import { Link } from 'react-router';

class User extends React.Component {

  constructor(props) {
    super(props);
    this.follow = this.follow.bind(this);
    this.unfollow = this.unfollow.bind(this);
  }

  follow() {
    this.props.followUser({user: this.props.user});
  }

  unfollow() {
    this.props.unfollowUser({user: this.props.user});
  }

  render() {
    return (
      <div className="sidebar-users">
        <img className="author-image" src={this.props.user.avatar} />
        {this.props.user.username}<br />
        <button className="follow-button" onClick={this.follow}>Follow</button>
        <button className="follow-button" onClick={this.unfollow}>Unfollow</button>
      </div>
    );
  }

}

export default User;
