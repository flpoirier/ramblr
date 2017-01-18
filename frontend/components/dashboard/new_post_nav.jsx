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
      <div className="post-form-nav group">
        <span className="post-form-link"><a href="http://www.ramblr.cc/dashboard"><i className="fa fa-home" aria-hidden="true" /><div>Home</div></a></span>
        <Link to="/new/text" className="post-form-link"><i className="fa fa-pencil red" aria-hidden="true" /><div>Text</div></Link>
        <Link to="/new/image" className="post-form-link"><i className="fa fa-camera orange" aria-hidden="true" /><div>Image</div></Link>
        <Link to="/new/audio" className="post-form-link"><i className="fa fa-headphones yellow" aria-hidden="true" /><div>Audio</div></Link>
        <Link to="/new/video" className="post-form-link"><i className="fa fa-video-camera green" aria-hidden="true" /><div>Video</div></Link>
        <Link to="/new/link" className="post-form-link"><i className="fa fa-link blue" aria-hidden="true" /><div>Link</div></Link>
        <Link to="/new/quote" className="post-form-link"><i className="fa fa-quote-left purple" aria-hidden="true" /><div>Quote</div></Link>
      </div>
    );
  }

}
export default NewPostNav;
