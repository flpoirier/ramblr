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
      return (<h2 className="header-name">Hi, {this.props.currentUser.username}!</h2>);
    } else {
      return (<div></div>);
    }
  }

  render() {
    return (
      <div className="header">
        <hgroup className="header-group">
          {this.greeting()}
          <button className="header-button" onClick={this.__handleClick}>Log Out</button>
        </hgroup>
      </div>
    );
  }
}

export default withRouter(Header);
