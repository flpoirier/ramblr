import React from 'react';
import { Link } from 'react-router';
 //currentUser, logoout
class Header extends React.Component {

  constructor(props) {
    super(props);
    this.__handleClick = this.__handleClick.bind(this);
  }

  __handleClick() {
    this.props.logout();
    window.location = '/';
    // this is HACKY but it works, sigh
  }

  render() {
    return (
      <div className="header">
        <hgroup className="header-group">
          <h2 className="header-name">Hi, {this.props.currentUser.username}!</h2>
          <button className="header-button" onClick={this.__handleClick}>Log Out</button>
        </hgroup>
      </div>
    );
  }
}

export default Header;
