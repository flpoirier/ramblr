import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import FormStyle from './session_form_style';
import SessionFormContainer from './session_form/session_form_container';

class FrontPage extends React.Component {

  constructor(props) {
    super(props);
  }

  sessionLinks() {
    return (
      <nav className="login-signup">
        <Link to="/login">login</Link>
        &nbsp;or&nbsp;
        <Link to="/signup">sign up</Link>
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
