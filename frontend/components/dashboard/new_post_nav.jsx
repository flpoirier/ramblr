import React from 'react';
import { Link } from 'react-router';

class NewPostNav extends React.Component {

  constructor(props) {
    super(props);
  }

  postTypes() {
    return ["text", "image", "audio", "video", "link", "quote"];
  }

  // refactor render method later to iterate over the post types

  render() {
    return (
      <div className="post-form group">
        <Link to="/new/text" className="post-form-link"><p><i className="fa fa-pencil" aria-hidden="true" /> text</p></Link>
        <Link to="/new/image" className="post-form-link"><p><i className="fa fa-camera" aria-hidden="true" /> image</p></Link>
        <Link to="/new/audio" className="post-form-link"><p><i className="fa fa-headphones" aria-hidden="true" /> audio</p></Link>
        <Link to="/new/video" className="post-form-link"><p><i className="fa fa-video-camera" aria-hidden="true" /> video</p></Link>
        <Link to="/new/link" className="post-form-link"><p><i className="fa fa-link" aria-hidden="true" /> link</p></Link>
        <Link to="/new/quote" className="post-form-link"><p><i className="fa fa-quote-left" aria-hidden="true" /> quote</p></Link>
      </div>
    );
  }

}
export default NewPostNav;
