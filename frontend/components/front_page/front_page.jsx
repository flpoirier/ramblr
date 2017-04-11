import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';

class FrontPage extends React.Component {

  constructor(props) {
    super(props);
    this.guestLogin = this.guestLogin.bind(this);
    this.loadImage = this.loadImage.bind(this);
    this.setImage = this.setImage.bind(this);
    this.state = { images: [
      "https://static.pexels.com/photos/6778/landscape-mountains-skyline-metal.jpg",
      "https://static.pexels.com/photos/3853/sunny-sand-desert-hiking.jpeg",
      "https://static.pexels.com/photos/3247/nature-forest-industry-rails.jpg",
      "https://static.pexels.com/photos/5439/earth-space.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mission_Mountains_National_Bison_Range_Montana.jpg",
      "https://static.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg",
      "https://static.pexels.com/photos/39811/pexels-photo-39811.jpeg",
      "https://static.pexels.com/photos/66874/landscape-meadow-field-mountains-66874.jpeg",
      "https://static.pexels.com/photos/12567/photo-1444703686981-a3abbc4d4fe3.jpeg",
      "https://static.pexels.com/photos/259474/pexels-photo-259474.jpeg",
      "https://static.pexels.com/photos/207130/pexels-photo-207130.jpeg",
      "https://static.pexels.com/photos/1440/city-road-street-buildings.jpg"],
      imageIdx: 0,
      style: {
        background: "url(https://static.pexels.com/photos/6778/landscape-mountains-skyline-metal.jpg)"
      }
    };
  }

  guestLogin() {
    this.props.login({user: {username: "guest", password: "password"}});
  }

  loadImage() {
    let idx = this.state.imageIdx + 1;
    if (idx > this.state.images.length) {
      idx = 0;
    }
    let image = new Image();
    image.src = this.state.images[idx];
  }

  setImage() {
    let idx = this.state.imageIdx + 1;
    if (idx > this.state.images.length) {
      idx = 0;
    }
    this.setState({
      imageIdx: idx,
      style: {
        background: "url(" + this.state.images[idx] + ")"
      }
    });
    this.loadImage();
  }

  componentDidMount() {
    this.props.clearErrors();
    setInterval(this.setImage, 7500);
    this.loadImage();
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
      <div className="front-page" style={this.state.style}>
        <span className="splash-parent">
            <div className="header-link"><h1>ramblr.</h1></div>
            {this.sessionLinks()}
        </span>
      </div>

    );
  }

}

export default FrontPage;
