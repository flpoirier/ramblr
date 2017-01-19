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
    return (
      <div className="sidebar-users">
        <a href={`http://www.ramblr.cc/blog/${this.props.user.id}`}><img className="sidebar-pic" src={this.props.user.avatar} /></a>
        <div className="sidebar-username"><a href={`http://www.ramblr.cc/blog/${this.props.user.id}`}>{this.props.user.username}</a></div>
        <button className="follow-button" onClick={this.unfollow}><i className="fa fa-minus" aria-hidden="true" /></button>
        <button className="follow-button" onClick={this.follow}><i className="fa fa-plus" aria-hidden="true" /></button>
      </div>
    );
  }

}

export default User;
