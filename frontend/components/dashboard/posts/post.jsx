import React from 'react';
import { Link } from 'react-router';

class Post extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.post.title}
        <br />
        {this.props.post.body}
        <hr />
      </div>
    );
  }

}
export default Post;
