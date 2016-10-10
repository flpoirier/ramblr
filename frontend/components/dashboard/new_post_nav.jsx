import React from 'react';
import { Link } from 'react-router';

class NewPostNav extends React.Component {

  constructor(props) {
    super(props);
  }

  postTypes() {
    return ["text", "photo", "audio", "video", "link", "quote"];
  }

  // refactor render method later to iterate over the post types

  render() {
    return (
      <div className="post-form group">
        <Link to="/new/text" className="post-form-link"><p>text</p></Link>
        <Link to="/new/photo" className="post-form-link"><p>photo</p></Link>
        <Link to="/new/audio" className="post-form-link"><p>audio</p></Link>
        <Link to="/new/video" className="post-form-link"><p>video</p></Link>
        <Link to="/new/link" className="post-form-link"><p>link</p></Link>
        <Link to="/new/quote" className="post-form-link"><p>quote</p></Link>
      </div>
    );
  }

}
export default NewPostNav;
