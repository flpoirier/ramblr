import React from 'react';
import { Link } from 'react-router';

class Post extends React.Component {

  constructor(props) {
    super(props);
  }

  text() {
    return (
      <div className="post">
        <h1>{this.props.post.title}</h1>
        <p>{this.props.post.body}</p>
        <div className="post-notes">Posted by: {this.props.post.author}</div>
        <div className="post-notes">Posted at: {this.props.post.created_at}</div>
      </div>
    );
  }

  image() {
    return (
      <div className="post">
        <img src={this.props.post.image} />
        <p className="post-commentary">-- {this.props.post.commentary}</p>
        <div className="post-notes">Posted by: {this.props.post.author}</div>
        <div className="post-notes">Posted at: {this.props.post.created_at}</div>
      </div>
    );
  }

  quote() {
    return (
      <div className="post">
        <h1>'"'{this.props.post.quote}'"'</h1>
        <p className="post-commentary">-- {this.props.post.commentary}</p>
        <div className="post-notes">Posted by: {this.props.post.author}</div>
        <div className="post-notes">Posted at: {this.props.post.created_at}</div>
      </div>
    );
  }

  render() {
    debugger
    if (this.props.post.post_type === "text") {
      return this.text();
    } else if (this.props.post.post_type === "quote") {
      return this.quote();
    } else if (this.props.post.post_type === "image") {
      return this.image();
    }
  }

}
export default Post;
