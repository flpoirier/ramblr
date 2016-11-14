import React from 'react';
import { withRouter, Link } from 'react-router';
 //currentUser, logoout
class Header extends React.Component {

  constructor(props) {
    super(props);
    this.__handleClick = this.__handleClick.bind(this);
  }

  __handleClick() {
    this.props.logout();
    // this.props.router.push("/");
    // window.location = "/";
    // this is HACKY but it works, sigh
  }

  greeting() {
    if (this.props.currentUser) {
      return (<div className="header-greeting-group"><a href="settings/avatar"><img className="user-avatar" src={this.props.currentUser.avatar} /></a><p className="header-name">Hi, {this.props.currentUser.username}!</p></div>);
    } else {
      return (<div></div>);
    }
  }

  render() {
    return (
      <div className="header">
        <hgroup className="header-group">
          {this.greeting()}
          <button className="header-button" onClick={this.__handleClick} value="Log Out"><i className="fa fa-sign-out" aria-hidden="true" /></button>
        </hgroup>
      </div>
    );
  }
}

export default withRouter(Header);
