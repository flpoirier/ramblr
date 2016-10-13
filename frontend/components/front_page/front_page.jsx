import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';

class FrontPage extends React.Component {

  constructor(props) {
    super(props);
    this.guestLogin = this.guestLogin.bind(this);
  }

  guestLogin() {
    this.props.login({user: {username: "guest", password: "password"}});
  }

  sessionLinks() {
    return (
      <nav className="login-signup">
        <Link className="front-page-link" to="/login">login</Link>,&nbsp;
        <Link className="front-page-link" to="/signup">sign up</Link>,
        or&nbsp;
        <button className="front-page-link" onClick={this.guestLogin}>sign in as guest</button>
      </nav>
    );
  }

  render() {
    return (
      <span className="splash-parent">
        <div className="splash-pane">
          <Link to="/" className="header-link"><h1>ramblr.</h1></Link>
          {this.sessionLinks()}
        </div>
      </span>
    );
  }

}

export default FrontPage;
