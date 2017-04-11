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
      "url(https://upload.wikimedia.org/wikipedia/commons/2/2a/Mission_Mountains_National_Bison_Range_Montana.jpg)",
      "url(https://static.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg)",
      "url(https://static.pexels.com/photos/39811/pexels-photo-39811.jpeg)",
      "url(https://static.pexels.com/photos/128458/pexels-photo-128458.jpeg)",
      "url(https://static.pexels.com/photos/66874/landscape-meadow-field-mountains-66874.jpeg)",
      "url(https://static.pexels.com/photos/12567/photo-1444703686981-a3abbc4d4fe3.jpeg)",
      "url(https://static.pexels.com/photos/259474/pexels-photo-259474.jpeg)",
      "url(https://static.pexels.com/photos/207130/pexels-photo-207130.jpeg)",
      "url(https://static.pexels.com/photos/132983/pexels-photo-132983.jpeg)",
      "url(https://static.pexels.com/photos/29732/pexels-photo-29732.jpg)",
      "url(https://static.pexels.com/photos/30360/pexels-photo-30360.jpg)",
      "url(https://static.pexels.com/photos/1440/city-road-street-buildings.jpg)",
      "url(https://static.pexels.com/photos/6870/city-dark-new-york-bridge.jpg)"
      ]
    };
  }

  guestLogin() {
    this.props.login({user: {username: "guest", password: "password"}});
  }

  componentDidMount() {
    this.props.clearErrors();
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
