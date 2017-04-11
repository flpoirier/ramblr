import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';

class FrontPage extends React.Component {

  constructor(props) {
    super(props);
    this.guestLogin = this.guestLogin.bind(this);
    this.state = { images: [
      "url(https://static.pexels.com/photos/5439/earth-space.jpg)",
      "url(https://static.pexels.com/photos/3853/sunny-sand-desert-hiking.jpeg)",
      "url(https://static.pexels.com/photos/3247/nature-forest-industry-rails.jpg)",
      "url(https://static.pexels.com/photos/6778/landscape-mountains-skyline-metal.jpg)",
      "url(https://upload.wikimedia.org/wikipedia/commons/2/2a/Mission_Mountains_National_Bison_Range_Montana.jpg)" ]
    };
  }

  guestLogin() {
    this.props.login({user: {username: "guest", password: "password"}});
  }

  componentDidMount() {
    this.props.clearErrors();
    this.getRandomBackground();
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

  getRandomBackground() {
    var random_img = this.state.images[Math.floor(Math.random() * this.state.images.length)];
    return {
      background: random_img,
      "background-size": "cover"
    };
  }

  render() {
    return (
      <div className="front-page" style={this.getRandomBackground()}>
        <span className="splash-parent">
            <div className="header-link"><h1>ramblr.</h1></div>
            {this.sessionLinks()}
        </span>
      </div>

    );
  }

}

export default FrontPage;
