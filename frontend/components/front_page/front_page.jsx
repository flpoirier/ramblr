import React from 'react';
import { Link } from 'react-router';

class FrontPage extends React.Component {

  constructor(props) {
    super(props);
  }

  sessionLinks() {
    return (
      <nav className="login-signup">
        <Link to="/login" activeClassName="current">login</Link>
        &nbsp;or&nbsp;
        <Link to="/signup" activeClassName="current">sign up</Link>
      </nav>
    );
  }

  render() {
    return (
      <div>
        <header>
          <Link to="/" className="header-link"><h1>ramblr.</h1></Link>
          {this.sessionLinks()}
        </header>
      </div>
    );
  }

}

export default FrontPage;
