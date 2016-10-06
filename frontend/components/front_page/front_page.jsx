import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import LoginForm from './login_form';
import SignupForm from './signup_form';
import FormStyle from './session_form_style';

class FrontPage extends React.Component {

  constructor(props) {
    super(props);

    this.openLogin = this.openLogin.bind(this);
    this.openSignup = this.openSignup.bind(this);
    this.closeLogin = this.closeLogin.bind(this);
    this.closeSignup = this.closeSignup.bind(this);

    this.state = {
      loginOpen: false,
      signupOpen: false,
    };

  }

  openLogin() {
    this.setState({loginOpen: true});
  }

  openSignup() {
    this.setState({signupOpen: true});
  }

  closeLogin() {
    this.setState({loginOpen: false});
  }

  closeSignup() {
    this.setState({signupOpen: false});
  }

  loginForm() {
    return (
      <Modal className="login-form" style={FormStyle} isOpen={this.state.loginOpen}>
        <button onClick={this.closeLogin}>close</button>
        <h1>LOGGING IN</h1>
      </Modal>
    );
  }

  signupForm() {
    return (
      <Modal className="signup-form" style={FormStyle} isOpen={this.state.signupOpen}>
        <button onClick={this.closeSignup}>close</button>
        <h1>SIGNING IN</h1>
      </Modal>
    );
  }

  sessionLinks() {
    return (
      <nav className="login-signup">
        <button onClick={this.openLogin}>login</button>
        &nbsp;or&nbsp;
        <button onClick={this.openSignup}>sign up</button>
      </nav>
    );
  }

  splashPane() {
    return (
      <span className="splash-parent">
        <div className="splash-pane">
          <Link to="/" className="header-link"><h1>ramblr.</h1></Link>
          {this.sessionLinks()}
        </div>
      </span>
    );
  }

  sessionForms() {
    return (
      <div className="session-form">
        {this.loginForm()}
        {this.signupForm()}
      </div>
    );
  }

  render() {
    if (this.state.loginOpen || this.state.signupOpen) {
      return this.sessionForms();
    } else {
      return this.splashPane();
    }
  }

}

export default FrontPage;
