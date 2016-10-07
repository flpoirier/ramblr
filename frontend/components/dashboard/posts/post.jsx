import React from 'react';
import { Link } from 'react-router';

class Post extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="post">
        <h1>{this.props.post.title}</h1>
        <p>{this.props.post.body}</p>
        <div className="post-notes">Posted by: {this.props.post.author}</div>
        <div className="post-notes">Posted at: {this.props.post.created_at}</div>
      </div>
    );
  }

}
export default Post;
