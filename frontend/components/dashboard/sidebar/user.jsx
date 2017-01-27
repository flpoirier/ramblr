import React from 'react';
import { Link } from 'react-router';

class User extends React.Component {

  constructor(props) {
    super(props);
    this.follow = this.follow.bind(this);
    this.unfollow = this.unfollow.bind(this);
  }

  follow() {
    this.props.followUser(this.props.user);
  }

  unfollow() {
    this.props.unfollowUser(this.props.user);
  }

  render() {
    if (this.props.following === false) {
      return (
        <div className="sidebar-users">
          <a href={`http://www.ramblr.cc/blog/${this.props.user.id}`}><img className="sidebar-pic" src={this.props.user.avatar} /></a>
          <div className="sidebar-users-2">
            <a className="sidebar-username" href={`http://www.ramblr.cc/blog/${this.props.user.id}`}>{this.props.user.username}</a>
            <br />
            <button className="follow-text" onClick={this.follow}>Follow</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="sidebar-users">
          <a href={`http://www.ramblr.cc/blog/${this.props.user.id}`}><img className="sidebar-pic" src={this.props.user.avatar} /></a>
          <div className="sidebar-users-2">
            <a className="sidebar-username" href={`http://www.ramblr.cc/blog/${this.props.user.id}`}>{this.props.user.username}</a>
            <br />
            <button className="follow-text" onClick={this.unfollow}>Unfollow</button>
          </div>
        </div>
      );
    }
  }

}

export default User;
